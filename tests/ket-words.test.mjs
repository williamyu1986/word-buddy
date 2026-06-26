import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../ket-words.js", import.meta.url), "utf8");
const sandbox = {};
vm.runInNewContext(`${source}\nthis.KET_WORDS = KET_WORDS;`, sandbox);

test("KET full word bank is generated and spell aliases are preserved", () => {
  const words = sandbox.KET_WORDS;

  assert.ok(words.length > 1700);
  assert.equal(words.some(item => item.meaning === "待核对释义"), false);
  assert.equal(words.some(item => item.meaning === "短语；常用表达"), false);

  const article = words.find(item => item.word === "a/an");
  assert.deepEqual([...article.aliases], ["a", "a/an", "an"]);

  const yogurt = words.find(item => item.word === "yogurt");
  assert.deepEqual([...yogurt.aliases], ["yoghurt", "yogurt"]);
});
