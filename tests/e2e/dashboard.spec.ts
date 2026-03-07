import { test, expect } from "@playwright/test"

test.describe("Dashboard (Core Product)", () => {
  test("unauthenticated: redirects to login", async ({ page }) => {
    await page.goto("/dashboard")
    await page.waitForTimeout(2000)
    const url = page.url()
    const hasLoginContent = await page.getByText(/Sign In|Log In|Welcome Back/i).isVisible().catch(() => false)
    expect(url.includes("/login") || hasLoginContent).toBeTruthy()
  })

  test("unauthenticated: /dashboard/alerts redirects to login", async ({ page }) => {
    await page.goto("/dashboard/alerts")
    await page.waitForTimeout(2000)
    const url = page.url()
    const hasLoginContent = await page.getByText(/Sign In|Log In|Welcome Back/i).isVisible().catch(() => false)
    expect(url.includes("/login") || hasLoginContent).toBeTruthy()
  })

  test("unauthenticated: /dashboard/calculator redirects to login", async ({ page }) => {
    await page.goto("/dashboard/calculator")
    await page.waitForTimeout(2000)
    const url = page.url()
    const hasLoginContent = await page.getByText(/Sign In|Log In|Welcome Back/i).isVisible().catch(() => false)
    expect(url.includes("/login") || hasLoginContent).toBeTruthy()
  })
})

test.describe("API Health", () => {
  test("GET /api/health returns 200 with status ok", async ({ request }) => {
    const res = await request.get("/api/health")
    expect(res.status()).toBe(200)
    const body = await res.json()
    expect(body.status).toBe("ok")
    expect(body.service).toBe("fareburn")
    expect(body.timestamp).toBeTruthy()
  })
})
