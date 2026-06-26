import { json, readJson, requireUser } from "../_shared/auth.mjs";

export async function onRequestGet({ request, env }) {
  const auth = await requireUser(request, env);
  if (auth.error) return auth.error;

  const row = await env.DB.prepare("SELECT payload, updated_at FROM states WHERE user_id = ?")
    .bind(auth.userId)
    .first();
  return json({
    state: row?.payload ? JSON.parse(row.payload) : null,
    updatedAt: row?.updated_at || ""
  });
}

export async function onRequestPost({ request, env }) {
  const auth = await requireUser(request, env);
  if (auth.error) return auth.error;

  const body = await readJson(request);
  const payload = JSON.stringify(body.state || {});
  if (payload.length > 900000) {
    return json({ error: "同步数据太大，请先精简自定义词库。" }, { status: 400 });
  }

  await env.DB.prepare(
    `INSERT INTO states (user_id, payload, updated_at)
     VALUES (?, ?, datetime('now'))
     ON CONFLICT(user_id) DO UPDATE SET payload = excluded.payload, updated_at = excluded.updated_at`
  ).bind(auth.userId, payload).run();

  return json({ ok: true });
}
