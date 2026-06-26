import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

function loadConst(file, name) {
  const source = fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const sandbox = {};
  vm.runInNewContext(`${source}\nthis.words = ${name};`, sandbox);
  return sandbox.words;
}

const banks = [
  ["独角兽", loadConst("unicorn-words.js", "UNICORN_WORDS")],
  ["KET", loadConst("ket-words.js", "KET_WORDS")],
  ["PET", loadConst("pet-words.js", "PET_WORDS")],
  ["2000词", loadConst("core2000-words.js", "CORE2000_WORDS")],
  ["4000词", loadConst("eew4000-words.js", "EEW4000_WORDS")],
  ["中考", loadConst("zhongkao-words.js", "ZHONGKAO_WORDS")],
  ["高考", loadConst("gaokao-words.js", "GAOKAO_WORDS")]
];

test("all built-in word banks expose part-of-speech labels for choices", () => {
  for (const [label, words] of banks) {
    const missing = words.filter(word => !(word.part || word.pos));
    assert.equal(missing.length, 0, `${label} has words without part labels: ${missing.map(item => item.word).slice(0, 8).join(", ")}`);
  }
});

test("multi-part labels are not shown as a stacked prefix", () => {
  const source = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
  const sandbox = {
    console,
    structuredClone,
    setTimeout: () => 1,
    clearTimeout() {},
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    window: { speechSynthesis: { getVoices: () => [], cancel() {}, speak() {} } },
    document: { querySelector: () => ({ innerHTML: "", value: "" }), addEventListener() {} },
    fetch: async () => ({ ok: false, json: async () => ({}) }),
    Audio: function Audio() {
      return { play: () => Promise.resolve() };
    },
    confirm: () => true
  };
  for (const file of ["unicorn-words.js", "exam-words.js", "zhongkao-words.js", "gaokao-words.js", "ket-words.js", "pet-words.js", "core2000-words.js", "eew4000-words.js"]) {
    vm.runInNewContext(fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8"), sandbox);
  }
  vm.runInNewContext(`${source}\nthis.formattedMeaning = formattedMeaning;`, sandbox);

  assert.equal(
    sandbox.formattedMeaning({ word: "help", meaning: "帮助；外援；助手；援助", pos: "n, v" }),
    "n. 帮助；外援；助手；援助"
  );
});
