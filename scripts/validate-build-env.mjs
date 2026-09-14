import { loadEnv } from "vite";

const mode = process.argv[2];

const configs = {
  preview: {
    expectedApi:
      "https://dejotacode-api-preview.joceilton1989.workers.dev",
  },
  production: {
    expectedApi:
      "https://api.dejotacode.com.br",
  },
};

if (!mode || !configs[mode]) {
  console.error(
    `[env-check] Modo inválido: ${mode ?? "(não informado)"}.`
  );
  process.exit(1);
}

const env = loadEnv(mode, process.cwd(), "");
const apiUrl = env.PUBLIC_API_URL?.trim() ?? "";
const expectedApi = configs[mode].expectedApi;

if (!apiUrl) {
  console.error(
    `[env-check] PUBLIC_API_URL não está definida para o modo "${mode}".`
  );
  process.exit(1);
}

let parsedUrl;

try {
  parsedUrl = new URL(apiUrl);
} catch {
  console.error(
    `[env-check] PUBLIC_API_URL não é uma URL válida no modo "${mode}".`
  );
  process.exit(1);
}

if (parsedUrl.protocol !== "https:") {
  console.error(
    `[env-check] PUBLIC_API_URL precisa usar HTTPS no modo "${mode}".`
  );
  process.exit(1);
}

if (
  parsedUrl.hostname === "localhost" ||
  parsedUrl.hostname === "127.0.0.1"
) {
  console.error(
    `[env-check] Endpoint local proibido no build "${mode}".`
  );
  process.exit(1);
}

if (apiUrl !== expectedApi) {
  console.error(
    `[env-check] PUBLIC_API_URL inesperada para "${mode}".`
  );
  console.error(`[env-check] Esperado: ${expectedApi}`);
  console.error(`[env-check] Recebido: ${apiUrl}`);
  process.exit(1);
}

console.log(`[env-check] PASSOU: ambiente "${mode}" válido.`);
console.log(`[env-check] API: ${apiUrl}`);
