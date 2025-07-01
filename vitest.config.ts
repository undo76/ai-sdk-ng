/// <reference types="vitest" />
import { defineConfig } from "vitest/config"; // ✅ right import
import angular from "@analogjs/vite-plugin-angular"; // Angular → Vite

export default defineConfig({
  // AnalogJS plugin must be first
  plugins: [angular()],

  /* ---------- Vitest options ---------- */
  test: {
    globals: true,
    environment: "jsdom", // DOM APIs for component tests
  },

  /* ---------- esbuild options ---------- */
  // Leave Node built-ins (async_hooks, fs, …) untouched so
  //  @ai-sdk/provider-utils/test → msw/node → AsyncLocalStorage works.
  esbuild: {
    platform: "node",
    target: "node20", // match your local / CI Node
  },
});
