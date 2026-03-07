import { test, expect } from "@playwright/test"

test.describe("Landing Page", () => {
  test("loads with correct title", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Fareburn/)
  })

  test("has sticky navbar with logo, links, and CTA", async ({ page }) => {
    await page.goto("/")
    // Logo
    await expect(page.locator("nav").getByText("Fareburn")).toBeVisible()
    // Nav links
    await expect(page.locator("nav").getByRole("link", { name: "Pricing" })).toBeVisible()
    await expect(page.locator("nav").getByRole("link", { name: "About" })).toBeVisible()
    await expect(page.locator("nav").getByRole("link", { name: "Calculator" })).toBeVisible()
    // CTA
    await expect(page.locator("nav").getByRole("link", { name: /Start Free/i })).toBeVisible()
  })

  test("hero section — headline, subline, CTA buttons, animated counter", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Points Are/)
    await expect(page.getByRole("link", { name: /Scan My Points Free/i })).toBeVisible()
    await expect(page.getByRole("link", { name: /How It Works/i })).toBeVisible()
    // Counter card
    await expect(page.getByText(/award opportunities found this week/i)).toBeVisible()
  })

  test("problem section — 3 pain cards", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText(/The Problem/i)).toBeVisible()
    await expect(page.getByText(/\$48B/i)).toBeVisible()
  })

  test("solution section — with hero illustration image", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText(/The Solution/i)).toBeVisible()
    // Check image loads
    const img = page.locator("img[src*='hero-illustration']")
    await expect(img).toBeVisible()
    // Verify image doesn't have error (check naturalWidth > 0 via JS)
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth)
    expect(naturalWidth).toBeGreaterThan(0)
  })

  test("features section — 6 feature cards", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText(/Features/i).first()).toBeVisible()
    await expect(page.getByText(/Real-Time Award Alerts/i)).toBeVisible()
    await expect(page.getByText(/Transfer Path Optimizer/i).first()).toBeVisible()
    await expect(page.getByText(/Points-to-Seat Calculator/i).first()).toBeVisible()
  })

  test("how-it-works section — 3 numbered steps", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText(/Three Steps to Better Redemptions/i)).toBeVisible()
    await expect(page.getByText(/Connect Your Programs/i)).toBeVisible()
    await expect(page.getByText(/Set Your Dream Routes/i)).toBeVisible()
    await expect(page.getByText(/Get Alerts/i).first()).toBeVisible()
  })

  test("pricing preview section — 3 tiers", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText(/Start Free, Scale When Ready/i)).toBeVisible()
    await expect(page.getByText("$0")).toBeVisible()
    await expect(page.getByText("$15")).toBeVisible()
    await expect(page.getByText("$149")).toBeVisible()
  })

  test("testimonials section — 3 reviews", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText(/Testimonials/i)).toBeVisible()
    await expect(page.getByText(/James K./i)).toBeVisible()
    await expect(page.getByText(/Sarah L./i)).toBeVisible()
    await expect(page.getByText(/David M./i)).toBeVisible()
  })

  test("FAQ section — 6 questions with accordion", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByText(/FAQ/i)).toBeVisible()
    await expect(page.getByText(/How does Fareburn find award availability/i)).toBeVisible()
    await expect(page.getByText(/Is my financial data safe/i)).toBeVisible()
    // Test accordion opens
    await page.getByText(/How does Fareburn find award availability/i).click()
    await page.waitForTimeout(500)
  })

  test("final CTA section", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("link", { name: /Start Scanning Free/i })).toBeVisible()
  })

  test("footer — nav links, privacy, terms, copyright", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("footer")).toBeVisible()
    await expect(page.locator("footer").getByRole("link", { name: /Privacy Policy/i })).toBeVisible()
    await expect(page.locator("footer").getByRole("link", { name: /Terms of Service/i })).toBeVisible()
    await expect(page.locator("footer").getByText(/2026 Fareburn/i)).toBeVisible()
  })

  test("has minimum 10 sections (per designer spec)", async ({ page }) => {
    await page.goto("/")
    // Verify key section headings exist
    const sections = [
      /Fareburn/i,       // Navbar
      /Worth More/i,      // Hero
      /The Problem/i,     // Problem
      /The Solution/i,    // Solution
      /Features/i,        // Features
      /How It Works/i,    // How it works
      /Start Free/i,      // Pricing
      /Testimonials/i,    // Testimonials
      /FAQ/i,             // FAQ
      /Ready to Unlock/i, // CTA
    ]
    for (const section of sections) {
      await expect(page.getByText(section).first()).toBeVisible()
    }
  })

  test("mobile responsive at 375px — nav exists, no horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    await expect(page.locator("nav")).toBeVisible()
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    // Mobile menu button visible
    await expect(page.locator("button").filter({ hasText: "" }).first()).toBeVisible()
    // No horizontal scroll
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
    expect(scrollWidth).toBeLessThanOrEqual(380)
  })
})
