import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../zhongkao-words.js", import.meta.url), "utf8");
const sandbox = {};
vm.runInNewContext(`${source}\nthis.ZHONGKAO_WORDS = ZHONGKAO_WORDS;`, sandbox);

test("Heilongjiang zhongkao base word bank is generated", () => {
  const words = sandbox.ZHONGKAO_WORDS;

  assert.equal(words.length, 1603);
  assert.equal(words.some(item => item.meaning === "待核对释义"), false);
  assert.ok(words.every(item => item.library === "zhongkao"));
  assert.ok(words.find(item => item.word === "ability"));
  assert.ok(words.find(item => item.word === "zoo"));
});
