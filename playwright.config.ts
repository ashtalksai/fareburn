import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  baseURL: "http://localhost:3001",
  use: {
    headless: true,
    screenshot: "only-on-failure",
    baseURL: "http://localhost:3001",
  },
  timeout: 30000,
})
