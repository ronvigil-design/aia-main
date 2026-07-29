import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete AIA Main website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>AIA Main — The AI Agency for the Future of Talent<\/title>/i);
  assert.match(html, /The AI Agency for the Future of Talent/);
  assert.match(html, /AI Artists home/);
  assert.match(html, /<span>Ai<\/span><strong>Artists<\/strong>/);
  assert.match(html, /The AIA Platform/);
  assert.match(html, /Join AIA/);
  assert.match(html, /https:\/\/ronvigil-design\.github\.io\/aia-talent-twins\//);
  assert.match(html, /https:\/\/ronvigil-design\.github\.io\/aia-talent-vault\//);
  assert.match(html, /https:\/\/ronvigil-design\.github\.io\/aia-talent-exchange\//);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps GitHub Pages publishing configured as a static export", async () => {
  const [nextConfig, layout, workflow, packageJson] = await Promise.all([
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(
      new URL("../.github/workflows/deploy-pages.yml", import.meta.url),
      "utf8",
    ),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(nextConfig, /output:\s*"export"/);
  assert.match(nextConfig, /basePath/);
  assert.match(nextConfig, /assetPrefix/);
  assert.match(packageJson, /"build:pages":\s*"next build"/);
  assert.match(workflow, /NEXT_PUBLIC_BASE_PATH:\s*""/);
  assert.match(workflow, /NEXT_PUBLIC_SITE_URL:\s*https:\/\/www\.aiatalent\.com/);
  assert.match(workflow, /npm run build:pages/);
  assert.match(workflow, /actions\/upload-pages-artifact@v4/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
  assert.doesNotMatch(layout, /next\/headers|headers\(\)/);
});
