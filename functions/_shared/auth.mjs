const ITERATIONS = 100000;
const KEY_LENGTH = 32;

export function normalizeName(name) {
  return String(name || "").trim().toLowerCase();
}

function toBase64(bytes) {
  return btoa(String.fromCharCode(...new Uint8Array(bytes)));
}

function fromBase64(value) {
  return Uint8Array.from(atob(value), char => char.charCodeAt(0));
}

async function derive(password, salt) {
  const encoded = new TextEncoder().encode(password);
  const key = await crypto.subtle.importKey("raw", encoded, "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations: ITERATIONS },
    key,
    KEY_LENGTH * 8
  );
  return new Uint8Array(bits);
}

export async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derive(password, salt);
  return {
    algorithm: "PBKDF2-SHA256",
    iterations: ITERATIONS,
    salt: toBase64(salt),
    hash: toBase64(hash)
  };
}

export async function verifyPassword(password, record) {
  if (!record?.salt || !record?.hash) return false;
  const salt = fromBase64(record.salt);
  const expected = fromBase64(record.hash);
  const actual = await derive(password, salt);
  if (actual.length !== expected.length) return false;
  let mismatch = 0;
  for (let index = 0; index < actual.length; index += 1) {
    mismatch |= actual[index] ^ expected[index];
  }
  return mismatch === 0;
}

export function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init.headers || {})
    }
  });
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

export function createToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return toBase64(bytes).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

export async function requireUser(request, env) {
  const auth = request.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (!token) return { error: json({ error: "请先登录。" }, { status: 401 }) };

  const session = await env.DB.prepare(
    "SELECT user_id FROM sessions WHERE token = ? AND expires_at > datetime('now')"
  ).bind(token).first();
  if (!session) return { error: json({ error: "登录已过期，请重新登录。" }, { status: 401 }) };
  return { userId: session.user_id };
}
