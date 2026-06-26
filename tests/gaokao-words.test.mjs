import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../gaokao-words.js", import.meta.url), "utf8");
const sandbox = {};
vm.runInNewContext(`${source}\nthis.GAOKAO_WORDS = GAOKAO_WORDS;`, sandbox);

test("Gaokao new standard word bank is generated", () => {
  const words = sandbox.GAOKAO_WORDS;

  assert.equal(words.length, 3677);
  assert.equal(words.some(item => item.meaning === "待核对释义"), false);
  assert.ok(words.every(item => item.library === "gaokao"));
  assert.ok(words.find(item => item.word === "abandon"));
  assert.ok(words.find(item => item.word === "zoom"));
});
