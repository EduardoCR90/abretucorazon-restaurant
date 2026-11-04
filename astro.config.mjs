import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://eduardocr90.github.io/",
  base: "/abretucorazon-restaurant",
  output: "static",
  trailingSlash: "always",
  prefetch: { prefetchAll: false, defaultStrategy: "hover" },
});
