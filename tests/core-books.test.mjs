import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

function loadConst(file, name) {
  const source = fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  const sandbox = {};
  vm.runInNewContext(`${source}\nthis.${name} = ${name};`, sandbox);
  return sandbox[name];
}

const core2000 = loadConst("core2000-words.js", "CORE2000_WORDS");
const eew4000 = loadConst("eew4000-words.js", "EEW4000_WORDS");

function countBy(items, field) {
  return items.reduce((counts, item) => {
    counts[item[field]] = (counts[item[field]] || 0) + 1;
    return counts;
  }, {});
}

test("2000 Core English Words keeps book and unit metadata", () => {
  assert.equal(core2000.length, 1600);
  assert.equal(core2000.some(item => item.meaning === "待核对释义"), false);
  assert.deepEqual(Object.keys(countBy(core2000, "book")).sort(), ["book1", "book2", "book3", "book4"]);

  const book1 = core2000.filter(item => item.book === "book1");
  assert.equal(book1.length, 400);
  assert.equal(book1.filter(item => item.unit === "unit7").length, 25);
  assert.equal(book1.filter(item => item.unit === "unit10").length, 25);
  assert.ok(book1.find(item => item.word === "cafe"));
  assert.ok(book1.find(item => item.word === "buyer"));

  const book2 = core2000.filter(item => item.book === "book2");
  assert.equal(new Set(book2.map(item => item.unit)).size, 16);
  assert.equal(book2.filter(item => item.unit === "unit1").length, 25);
});

test("4000 Essential English Words keeps all six books and thirty units", () => {
  assert.equal(eew4000.length, 3600);
  assert.equal(eew4000.some(item => item.meaning === "待核对释义"), false);
  assert.deepEqual(Object.keys(countBy(eew4000, "book")).sort(), ["book1", "book2", "book3", "book4", "book5", "book6"]);

  for (const book of ["book1", "book2", "book3", "book4", "book5", "book6"]) {
    const scoped = eew4000.filter(item => item.book === book);
    assert.equal(scoped.length, 600);
    assert.equal(new Set(scoped.map(item => item.unit)).size, 30);
    assert.equal(scoped.filter(item => item.unit === "unit1").length, 20);
  }
});
