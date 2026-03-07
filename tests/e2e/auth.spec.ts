import { test, expect } from "@playwright/test"

const TEMP_EMAIL = `qa_test_${Date.now()}@fareburn-test.local`
const PASSWORD = "TestPass123!"

test.describe("Auth Flow", () => {
  test("signup page loads with form", async ({ page }) => {
    await page.goto("/signup")
    await expect(page.getByRole("heading", { name: /Start Scanning Your Points/i })).toBeVisible()
    await expect(page.locator("input[type=email]")).toBeVisible()
    await expect(page.locator("input[type=password]")).toBeVisible()
    await expect(page.getByRole("button", { name: /Create Free Account/i })).toBeVisible()
  })

  test("signup page has Google OAuth button", async ({ page }) => {
    await page.goto("/signup")
    await expect(page.getByRole("button", { name: /Continue with Google/i })).toBeVisible()
  })

  test("signup page social proof panel", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto("/signup")
    await expect(page.getByText(/12,000\+ points optimizers/i)).toBeVisible()
    await expect(page.getByText(/247 award opportunities/i)).toBeVisible()
  })

  test("login page loads with form", async ({ page }) => {
    await page.goto("/login")
    await expect(page.getByRole("heading", { name: /Welcome Back/i })).toBeVisible()
    await expect(page.locator("input[type=email]")).toBeVisible()
    await expect(page.locator("input[type=password]")).toBeVisible()
  })

  test("dashboard redirects unauthenticated users to login", async ({ page }) => {
    await page.goto("/dashboard")
    // Either redirected to login or shows login UI
    await page.waitForTimeout(2000)
    const url = page.url()
    const hasLoginContent = await page.getByText(/Sign In|Log In|Welcome Back/i).isVisible().catch(() => false)
    expect(url.includes("/login") || hasLoginContent).toBeTruthy()
  })

  test("API: signup creates user (201)", async ({ request }) => {
    const res = await request.post("/api/signup", {
      data: {
        name: "QA Test User",
        email: `qa_api_${Date.now()}@fareburn-test.local`,
        password: "TestPass123!",
      },
    })
    expect(res.status()).toBe(201)
    const body = await res.json()
    expect(body).toHaveProperty("id")
    expect(body).toHaveProperty("email")
  })

  test("API: signup rejects duplicate email (409)", async ({ request }) => {
    const email = `qa_dup_${Date.now()}@fareburn-test.local`
    await request.post("/api/signup", { data: { email, password: "TestPass123!" } })
    const res2 = await request.post("/api/signup", { data: { email, password: "TestPass123!" } })
    expect(res2.status()).toBe(409)
  })

  test("API: signup rejects missing email (400)", async ({ request }) => {
    const res = await request.post("/api/signup", {
      data: { password: "TestPass123!" },
    })
    expect(res.status()).toBe(400)
  })

  test("password visibility toggle works", async ({ page }) => {
    await page.goto("/signup")
    const passInput = page.locator("input[type=password]")
    await expect(passInput).toBeVisible()
    // Click toggle
    const toggleBtn = page.locator("button[type=button]")
    await toggleBtn.click()
    // Password field should now be type=text
    await expect(page.locator("input[type=text]").last()).toBeVisible()
  })

  test("signup form shows error on short password", async ({ page }) => {
    await page.goto("/signup")
    await page.locator("input[type=email]").fill("test@example.com")
    await page.locator("input[type=password]").fill("short")
    // Submit - should fail validation (minLength=8)
    await page.getByRole("button", { name: /Create Free Account/i }).click()
    // Should stay on signup (not redirect)
    await expect(page).toHaveURL(/signup/)
  })
})
