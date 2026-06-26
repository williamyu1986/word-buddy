import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../exam-words.js", import.meta.url), "utf8");
const sandbox = {};
vm.runInNewContext(`${source}\nthis.EXAM_WORD_BANKS = EXAM_WORD_BANKS;`, sandbox);

test("exam word banks are available for high school, KET and PET", () => {
  const banks = sandbox.EXAM_WORD_BANKS;

  for (const library of ["gaokao", "ket", "pet"]) {
    assert.ok(Array.isArray(banks[library]), `${library} bank should exist`);
    assert.ok(banks[library].length >= 50, `${library} should have at least 50 words`);

    const words = banks[library].map(item => item[0]);
    assert.equal(new Set(words).size, words.length, `${library} should not contain duplicate headwords`);

    for (const item of banks[library]) {
      assert.equal(item.length, 3);
      assert.ok(item.every(value => typeof value === "string" && value.trim()));
    }
  }
});
