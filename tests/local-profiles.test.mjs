import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const scripts = [
  "unicorn-words.js",
  "exam-words.js",
  "zhongkao-words.js",
  "gaokao-words.js",
  "ket-words.js",
  "pet-words.js",
  "core2000-words.js",
  "eew4000-words.js",
  "app.js"
];

function makeLocalStorage() {
  const store = new Map();
  return {
    getItem(key) {
      return store.has(key) ? store.get(key) : null;
    },
    setItem(key, value) {
      store.set(key, String(value));
    },
    removeItem(key) {
      store.delete(key);
    },
    dump() {
      return Object.fromEntries(store.entries());
    }
  };
}

function loadApp() {
  const posts = [];
  const localStorage = makeLocalStorage();
  const sandbox = {
    console,
    structuredClone,
    setTimeout: () => 1,
    clearTimeout() {},
    localStorage,
    window: { speechSynthesis: { getVoices: () => [], cancel() {}, speak() {} } },
    document: {
      querySelector() {
        return { innerHTML: "", value: "" };
      },
      addEventListener() {}
    },
    Audio: function Audio() {
      return { play: () => Promise.resolve() };
    },
    confirm: () => true,
    fetch: async (path, options = {}) => {
      if (path === "/api/auth") {
        const body = JSON.parse(options.body);
        return {
          ok: true,
          json: async () => ({
            token: `token-${body.name}`,
            user: { id: `id-${body.name}`, name: body.name }
          })
        };
      }
      if (path === "/api/state" && options.method === "POST") {
        posts.push(JSON.parse(options.body));
        return { ok: true, json: async () => ({ ok: true }) };
      }
      if (path === "/api/state") {
        return { ok: true, json: async () => ({ state: null }) };
      }
      return { ok: false, json: async () => ({ error: "unexpected path" }) };
    }
  };

  for (const script of scripts) {
    vm.runInNewContext(fs.readFileSync(new URL(`../${script}`, import.meta.url), "utf8"), sandbox, { filename: script });
  }
  vm.runInNewContext(
    "this.__state = state; this.__saveState = saveState; this.__cloudLogin = cloudLogin; this.__profileStorageKey = profileStorageKey;",
    sandbox
  );
  return { sandbox, localStorage, posts };
}

test("logging in as a different child switches to that child's local profile", async () => {
  const { sandbox, localStorage, posts } = loadApp();

  sandbox.__state.auth = {
    token: "token-admin",
    user: { id: "admin-id", name: "管理员" },
    status: "已登录",
    lastSynced: "",
    error: ""
  };
  sandbox.__state.progress = { "zk-1": { seen: 43, correct: 40, wrong: 3, status: "wrong", lastSeen: "2026-06-26" } };
  sandbox.__state.daily = { "2026-06-26": { completed: 43, learnedIds: ["zk-1"], stars: 81 } };
  sandbox.__saveState();

  await sandbox.__cloudLogin("小明", "1234");

  assert.equal(sandbox.__state.auth.user.name, "小明");
  assert.deepEqual(sandbox.__state.progress, {});
  assert.equal(sandbox.__state.daily["2026-06-26"]?.completed || 0, 0);

  const adminProfile = JSON.parse(localStorage.getItem(sandbox.__profileStorageKey({ id: "admin-id", name: "管理员" })));
  assert.equal(adminProfile.progress["zk-1"].seen, 43);

  const xiaomingProfile = JSON.parse(localStorage.getItem(sandbox.__profileStorageKey({ id: "id-小明", name: "小明" })));
  assert.deepEqual(xiaomingProfile.progress, {});
  assert.equal(xiaomingProfile.daily["2026-06-26"]?.completed || 0, 0);
  assert.deepEqual(posts.at(-1).state.progress, {});
});
