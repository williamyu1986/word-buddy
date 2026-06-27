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

function loadAudioHarness({
  cache = {},
  fetchImpl = async () => ({ ok: false, json: async () => [] }),
  rejectAudio = () => false
} = {}) {
  const played = [];
  const rates = [];
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
        rates.push(this.playbackRate);
        if (rejectAudio(url)) return Promise.reject(new Error("audio blocked"));
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
  vm.runInNewContext(`${fs.readFileSync(new URL("../app.js", import.meta.url), "utf8")}\nthis.__speak = speak; this.__renderSentenceAudio = renderSentenceAudio; this.__state = state;`, sandbox);
  return { sandbox, played, rates, spoken };
}

test("single word audio prefers mainland-friendly online pronunciation", async () => {
  const { sandbox, played, rates, spoken } = loadAudioHarness();
  await sandbox.__speak("doctor");
  assert.deepEqual(played, ["https://dict.youdao.com/dictvoice?audio=doctor&type=2"]);
  assert.deepEqual(rates, [1.12]);
  assert.deepEqual(spoken, []);
});

test("sentence hints do not render an audio button while sentence audio is paused", () => {
  const { sandbox } = loadAudioHarness();
  const html = sandbox.__renderSentenceAudio("A doctor helps sick people.");
  assert.match(html, /A doctor helps sick people\./);
  assert.doesNotMatch(html, /data-action="speak"/);
  assert.doesNotMatch(html, /tiny-sound-btn/);
});

test("dictionary lookup remains as fallback when direct online audio fails", async () => {
  const { sandbox, played } = loadAudioHarness({
    rejectAudio: url => url.includes("dict.youdao.com"),
    fetchImpl: async () => ({
      ok: true,
      json: async () => [{ phonetics: [{ audio: "https://example.com/body.mp3" }] }]
    })
  });
  await sandbox.__speak("body");
  assert.deepEqual(played, ["https://dict.youdao.com/dictvoice?audio=body&type=2"]);
  assert.match(sandbox.__state.message, /再点一次播放/);
});
