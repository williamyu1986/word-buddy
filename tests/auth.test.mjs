import test from "node:test";
import assert from "node:assert/strict";

import { hashPassword, verifyPassword, normalizeName } from "../functions/_shared/auth.mjs";

test("normalizes user names for login lookup", () => {
  assert.equal(normalizeName("  YoYo  "), "yoyo");
});

test("hashes and verifies passwords with salt", async () => {
  const record = await hashPassword("secret123");

  assert.equal(record.algorithm, "PBKDF2-SHA256");
  assert.equal(await verifyPassword("secret123", record), true);
  assert.equal(await verifyPassword("wrong", record), false);
  assert.notEqual(record.hash, "secret123");
});
