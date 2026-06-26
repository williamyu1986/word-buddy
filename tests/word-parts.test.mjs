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
