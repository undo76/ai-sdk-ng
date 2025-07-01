/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["./projects/ai-sdk-ng/src/lib/**/*.spec.ts"],
  },
});
