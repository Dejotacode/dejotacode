const site = process.env.SITE_URL ?? "https://dejotacode.com.br";
const api = process.env.API_URL ?? "https://api.dejotacode.com.br";

const checks = [
  ["site-home", `${site}/`, 200],
  ["site-blog", `${site}/blog/`, 200],
  ["site-trilhas", `${site}/trilhas/`, 200],
  ["site-newsletter", `${site}/newsletter/`, 200],
  ["site-guia", `${site}/guia/iniciante-em-tecnologia/`, 200],
  ["site-admin", `${site}/admin/`, 200],
  ["site-sitemap", `${site}/sitemap-index.xml`, 200],
  ["site-rss", `${site}/rss.xml`, 200],
  ["api-health", `${api}/api/health`, 200],
  ["api-session-anon", `${api}/api/auth/session`, 401],
];

const request = async (name, url, expectedStatus) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": "DejotaCode-Smoke/1.0" },
      signal: controller.signal,
    });
    const text = await response.text();
    if (response.status !== expectedStatus) {
      throw new Error(`${name}: esperado ${expectedStatus}, recebido ${response.status}`);
    }
    if (name === "api-health") {
      const payload = JSON.parse(text);
      if (!payload?.success || payload?.data?.status !== "healthy") {
        throw new Error(`${name}: payload de saúde inválido`);
      }
    }
    console.log(`PASS ${name} ${response.status}`);
  } finally {
    clearTimeout(timeout);
  }
};

let failed = 0;
for (const check of checks) {
  try {
    await request(...check);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failed) {
  console.error(`Smoke test falhou em ${failed} verificação(ões).`);
  process.exit(1);
}

console.log(`Smoke test aprovado: ${checks.length} verificações.`);
