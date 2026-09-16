import { mkdirSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4321";
const outputDir = "qa-artifacts/v1.4.0";

mkdirSync(outputDir, { recursive: true });

const routes = [
  { name: "home", path: "/" },
  { name: "busca", path: "/busca/?q=seguranca" },
  { name: "artigo", path: "/blog/como-a-web-funciona/" },
  { name: "trilhas", path: "/trilhas/" },
  { name: "trilha-seguranca", path: "/trilhas/seguranca-digital-essencial/" },
  { name: "portfolio", path: "/portfolio/" },
  { name: "newsletter", path: "/newsletter/" },
  { name: "contato", path: "/contato/" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "tablet", width: 820, height: 1100 },
  { name: "mobile", width: 390, height: 844 },
];

const themes = ["dark", "light"];
const failures = [];
const results = [];
const browser = await chromium.launch({ headless: true });

for (const viewport of viewports) {
  for (const theme of themes) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      colorScheme: theme,
    });

    await context.addInitScript((selectedTheme) => {
      localStorage.setItem("dejotacode-theme", selectedTheme);
    }, theme);

    await context.route("https://api.dejotacode.com.br/**", async (route) => {
      await route.fulfill({ status: 204, contentType: "application/json", body: "" });
    });

    for (const routeInfo of routes) {
      const page = await context.newPage();
      const runtimeErrors = [];

      page.on("pageerror", (error) => runtimeErrors.push(`pageerror: ${error.message}`));
      page.on("console", (message) => {
        if (message.type() === "error") runtimeErrors.push(`console: ${message.text()}`);
      });

      const url = new URL(routeInfo.path, baseUrl).href;
      const response = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
      await page.waitForTimeout(250);

      const status = response?.status() ?? 0;
      const metrics = await page.evaluate(() => {
        const root = document.documentElement;
        const body = document.body;
        const width = root.clientWidth;
        const overflowing = [...body.querySelectorAll("*")]
          .filter((element) => !element.closest('[aria-hidden="true"], .form-trap'))
          .map((element) => {
            const rect = element.getBoundingClientRect();
            return {
              tag: element.tagName.toLowerCase(),
              id: element.id,
              className: typeof element.className === "string" ? element.className : "",
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
            };
          })
          .filter((item) => item.width > 0 && (item.left < -1 || item.right > width + 1))
          .slice(0, 8);

        const bodyStyle = getComputedStyle(body);
        const menuButton = document.querySelector("[data-menu-toggle]");
        const desktopNav = document.querySelector(".desktop-nav");
        const visible = (element) => {
          if (!(element instanceof HTMLElement)) return false;
          const style = getComputedStyle(element);
          const rect = element.getBoundingClientRect();
          return style.display !== "none" && style.visibility !== "hidden" && rect.width > 0 && rect.height > 0;
        };

        return {
          mainCount: document.querySelectorAll("main").length,
          h1Count: document.querySelectorAll("h1").length,
          theme: root.dataset.theme ?? "",
          scrollWidth: root.scrollWidth,
          clientWidth: width,
          bodyBackground: bodyStyle.backgroundColor,
          bodyColor: bodyStyle.color,
          menuVisible: visible(menuButton),
          desktopNavVisible: visible(desktopNav),
          overflowing,
        };
      });

      const label = `${routeInfo.name}-${viewport.name}-${theme}`;
      const screenshot = `${outputDir}/${label}.png`;
      await page.screenshot({ path: screenshot, fullPage: true });

      const errors = [];
      if (status !== 200) errors.push(`HTTP ${status}`);
      if (metrics.mainCount !== 1) errors.push(`main=${metrics.mainCount}`);
      if (metrics.h1Count !== 1) errors.push(`h1=${metrics.h1Count}`);
      if (metrics.theme !== theme) errors.push(`tema=${metrics.theme}, esperado=${theme}`);
      if (metrics.scrollWidth > metrics.clientWidth + 1) {
        errors.push(`overflow horizontal ${metrics.scrollWidth}px > ${metrics.clientWidth}px`);
      }
      if (metrics.overflowing.length > 0) {
        errors.push(`elementos fora do viewport: ${JSON.stringify(metrics.overflowing)}`);
      }
      if (runtimeErrors.length > 0) errors.push(...runtimeErrors);

      if (viewport.name === "desktop") {
        if (metrics.menuVisible) errors.push("botão de menu mobile visível no desktop");
        if (!metrics.desktopNavVisible) errors.push("navegação desktop oculta no desktop");
      }

      if (viewport.name === "mobile") {
        if (!metrics.menuVisible) errors.push("botão de menu mobile não visível no mobile");
        if (metrics.desktopNavVisible) errors.push("navegação desktop visível no mobile");
      }

      const result = {
        label,
        url,
        status,
        viewport,
        theme,
        metrics,
        runtimeErrors,
        screenshot,
        passed: errors.length === 0,
        errors,
      };

      results.push(result);
      if (errors.length > 0) failures.push(result);

      console.log(`[visual-qa] ${result.passed ? "PASSOU" : "FALHOU"}: ${label}`);
      for (const error of errors) console.log(`  - ${error}`);

      await page.close();
    }

    await context.close();
  }
}

await browser.close();

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  total: results.length,
  passed: results.length - failures.length,
  failed: failures.length,
  results,
};

writeFileSync(`${outputDir}/report.json`, `${JSON.stringify(report, null, 2)}\n`);

console.log(`\n[visual-qa] Cenários: ${report.total}`);
console.log(`[visual-qa] Passaram: ${report.passed}`);
console.log(`[visual-qa] Falharam: ${report.failed}`);
console.log(`[visual-qa] Relatório: ${outputDir}/report.json`);

if (failures.length > 0) process.exit(1);
