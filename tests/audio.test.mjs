import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

function makeStorage(initial = {}) {
  const store = new Map(Object.entries(initial));
  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    }
  };
}

function loadAudioHarness({ cache = {}, fetchImpl = async () => ({ ok: false, json: async () => [] }) } = {}) {
  const played = [];
  const spoken = [];
  const storage = makeStorage({
    "word-buddy-word-audio-cache-v1": JSON.stringify(cache)
  });
  const sandbox = {
    console,
    structuredClone,
    setTimeout: () => 1,
    clearTimeout() {},
    localStorage: storage,
    window: {
      speechSynthesis: {
        getVoices: () => [],
        cancel() {},
        resume() {},
        speak(utterance) {
          spoken.push(utterance.text);
        },
        addEventListener() {}
      }
    },
    document: { querySelector: () => ({ innerHTML: "", value: "" }), addEventListener() {} },
    fetch: fetchImpl,
    Audio: function Audio(url) {
      this.url = url;
      this.setAttribute = () => {};
      this.play = () => {
        played.push(url);
        return Promise.resolve();
      };
    },
    SpeechSynthesisUtterance: function SpeechSynthesisUtterance(text) {
      this.text = text;
    },
    confirm: () => true
  };
  for (const file of ["unicorn-words.js", "exam-words.js", "zhongkao-words.js", "gaokao-words.js", "ket-words.js", "pet-words.js", "core2000-words.js", "eew4000-words.js"]) {
    vm.runInNewContext(fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8"), sandbox);
  }
  vm.runInNewContext(`${fs.readFileSync(new URL("../app.js", import.meta.url), "utf8")}\nthis.__speak = speak; this.__state = state;`, sandbox);
  return { sandbox, played, spoken };
}

test("single word audio prefers cached online pronunciation", async () => {
  const { sandbox, played, spoken } = loadAudioHarness({
    cache: { doctor: "https://example.com/doctor.mp3" }
  });
  await sandbox.__speak("doctor");
  assert.deepEqual(played, ["https://example.com/doctor.mp3"]);
  assert.deepEqual(spoken, []);
});

test("sentence audio still falls back to device speech", async () => {
  const { sandbox, played, spoken } = loadAudioHarness();
  await sandbox.__speak("A doctor helps sick people.");
  assert.deepEqual(played, []);
  assert.deepEqual(spoken, ["A doctor helps sick people."]);
});

test("first online lookup caches audio and asks for a second tap on mobile", async () => {
  const { sandbox, played } = loadAudioHarness({
    fetchImpl: async () => ({
      ok: true,
      json: async () => [{ phonetics: [{ audio: "https://example.com/body.mp3" }] }]
    })
  });
  await sandbox.__speak("body");
  assert.deepEqual(played, []);
  assert.match(sandbox.__state.message, /再点一次播放/);
});
