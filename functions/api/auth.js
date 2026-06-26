import { createToken, hashPassword, json, normalizeName, readJson, verifyPassword } from "../_shared/auth.mjs";

export async function onRequestPost({ request, env }) {
  const body = await readJson(request);
  const displayName = String(body.name || "").trim();
  const name = normalizeName(displayName);
  const password = String(body.password || "");

  if (name.length < 2 || password.length < 4) {
    return json({ error: "名字至少 2 个字符，密码至少 4 个字符。" }, { status: 400 });
  }

  let user = await env.DB.prepare("SELECT * FROM users WHERE name_norm = ?").bind(name).first();
  if (!user) {
    const record = await hashPassword(password);
    const id = crypto.randomUUID();
    await env.DB.prepare(
      `INSERT INTO users (id, name_norm, display_name, password_salt, password_hash, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, datetime('now'), datetime('now'))`
    ).bind(id, name, displayName, record.salt, record.hash).run();
    user = { id, display_name: displayName, password_salt: record.salt, password_hash: record.hash };
  } else {
    const ok = await verifyPassword(password, { salt: user.password_salt, hash: user.password_hash });
    if (!ok) return json({ error: "名字或密码不正确。" }, { status: 401 });
  }

  const token = createToken();
  await env.DB.prepare(
    "INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, datetime('now'), datetime('now', '+30 days'))"
  ).bind(token, user.id).run();

  return json({
    token,
    user: { id: user.id, name: user.display_name || displayName }
  });
}
