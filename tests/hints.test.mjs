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

function appSandbox() {
  const sandbox = {
    console,
    structuredClone,
    setTimeout: () => 1,
    clearTimeout() {},
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    window: { speechSynthesis: { getVoices: () => [], cancel() {}, speak() {}, resume() {}, addEventListener() {} } },
    document: { querySelector: () => ({ innerHTML: "", value: "" }), addEventListener() {} },
    fetch: async () => ({ ok: false, json: async () => ({}) }),
    Audio: function Audio() {
      return { setAttribute() {}, play: () => Promise.resolve() };
    },
    SpeechSynthesisUtterance: function SpeechSynthesisUtterance(text) {
      this.text = text;
    },
    confirm: () => true
  };
  for (const file of ["unicorn-words.js", "exam-words.js", "zhongkao-words.js", "gaokao-words.js", "ket-words.js", "pet-words.js", "core2000-words.js", "eew4000-words.js"]) {
    vm.runInNewContext(fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8"), sandbox);
  }
  vm.runInNewContext(`${fs.readFileSync(new URL("../app.js", import.meta.url), "utf8")}\nthis.promptLine = promptLine;`, sandbox);
  return sandbox;
}

test("placeholder study hints are hidden from the learning prompt", () => {
  const sandbox = appSandbox();
  assert.equal(sandbox.promptLine({ example: 'I learned the word "doctor" today.' }), "");
  assert.equal(sandbox.promptLine({ example: 'I can use the word "bakery" in an English sentence.' }), "");
  assert.equal(sandbox.promptLine({ example: "Review the word: a customs officer." }), "");
});

test("common study examples now use meaningful English hints", () => {
  const gaokao = loadConst("gaokao-words.js", "GAOKAO_WORDS");
  const bakery = gaokao.find(word => word.word === "bakery");
  const zhongkao = loadConst("zhongkao-words.js", "ZHONGKAO_WORDS");
  const doctor = zhongkao.find(word => word.word === "doctor");
  const core2000 = loadConst("core2000-words.js", "CORE2000_WORDS");
  const body = core2000.find(word => word.word === "body");
  assert.match(bakery.definition || bakery.example, /baked goods|breads|cakes|pastries/i);
  assert.match(doctor.definition || doctor.example, /medical|practitioner|treatment/i);
  assert.match(body.definition || body.example, /structure|organism|animal|plant|human/i);
});
