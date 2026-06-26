import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../pet-words.js", import.meta.url), "utf8");
const sandbox = {};
vm.runInNewContext(`${source}\nthis.PET_WORDS = PET_WORDS;`, sandbox);

test("PET word bank is generated from the 2020 vocabulary list", () => {
  const words = sandbox.PET_WORDS;

  assert.ok(words.length > 2900);
  assert.equal(words.some(item => item.meaning === "待核对释义"), false);
  assert.equal(words.some(item => item.word.includes("computer. bye")), false);
  assert.equal(words.some(item => item.word === "O.K"), false);

  const ok = words.find(item => item.word === "OK");
  assert.ok(ok);
  assert.ok(ok.aliases.includes("okay"));
});
