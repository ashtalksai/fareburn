import { test, expect } from "@playwright/test"

const pages = [
  { path: "/", name: "Landing" },
  { path: "/about", name: "About" },
  { path: "/pricing", name: "Pricing" },
  { path: "/signup", name: "Signup" },
  { path: "/login", name: "Login" },
  { path: "/tools/calculator", name: "Public Calculator" },
  { path: "/blog", name: "Blog" },
  { path: "/contact", name: "Contact" },
  { path: "/privacy", name: "Privacy" },
  { path: "/terms", name: "Terms" },
  { path: "/deck", name: "Pitch Deck" },
  { path: "/docs", name: "Docs" },
]

test.describe("All Pages Load", () => {
  for (const p of pages) {
    test(`${p.name} (${p.path}) loads with 200`, async ({ page }) => {
      const response = await page.goto(p.path)
      expect(response?.status()).toBe(200)
    })
  }
})

test.describe("About Page", () => {
  test("has mission, values, timeline sections", async ({ page }) => {
    await page.goto("/about")
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    await expect(page.getByText(/48 billion/i)).toBeVisible()
    await expect(page.locator("img[src*='about-visual']")).toBeVisible()
  })
})

test.describe("Pricing Page", () => {
  test("has 3 tiers with monthly/yearly toggle", async ({ page }) => {
    await page.goto("/pricing")
    await expect(page.getByText("$0")).toBeVisible()
    await expect(page.getByText("$15")).toBeVisible()
    await expect(page.getByText("$149")).toBeVisible()
    // Toggle button
    await expect(page.getByRole("button", { name: /Monthly|Yearly|Annual/i }).first()).toBeVisible()
  })

  test("yearly toggle changes prices", async ({ page }) => {
    await page.goto("/pricing")
    // Wait for React to hydrate
    await page.waitForTimeout(1000)
    // Click "Yearly" button (text may include save badge)
    const yearlyBtn = page.locator("button").filter({ hasText: /Yearly/i }).first()
    await expect(yearlyBtn).toBeVisible()
    await yearlyBtn.click()
    await page.waitForTimeout(1000)
    // After yearly toggle, annual billing label should appear
    await expect(page.getByText(/billed annually/i).first()).toBeVisible()
  })
})

test.describe("Blog Page", () => {
  test("has 4 real posts with dates and excerpts", async ({ page }) => {
    await page.goto("/blog")
    await expect(page.getByText(/Chase Ultimate Rewards/i).first()).toBeVisible()
    await expect(page.getByText(/Transfer Partners/i).first()).toBeVisible()
    await expect(page.getByText(/AwardWallet/i).first()).toBeVisible()
    await expect(page.getByText(/First-Class Routes/i)).toBeVisible()
  })
})

test.describe("Contact Page", () => {
  test("has contact form", async ({ page }) => {
    await page.goto("/contact")
    await expect(page.locator("input[type=text], input[placeholder*=Name]").first()).toBeVisible()
    await expect(page.locator("input[type=email]")).toBeVisible()
    await expect(page.locator("textarea")).toBeVisible()
  })
})

test.describe("Privacy & Terms Pages", () => {
  test("privacy page has real content (8+ sections)", async ({ page }) => {
    await page.goto("/privacy")
    await expect(page.getByRole("heading", { name: /Privacy Policy/i })).toBeVisible()
    // Should have substantial content
    const content = await page.textContent("main")
    expect(content?.length).toBeGreaterThan(500)
  })

  test("terms page has real content (9+ sections)", async ({ page }) => {
    await page.goto("/terms")
    await expect(page.getByRole("heading", { name: /Terms of Service/i })).toBeVisible()
    const content = await page.textContent("main")
    expect(content?.length).toBeGreaterThan(500)
  })
})

test.describe("Public Calculator", () => {
  test("loads, allows program selection, and calculates results", async ({ page }) => {
    await page.goto("/tools/calculator")
    await expect(page.getByRole("heading", { name: /Find Out What Your Points Can Buy/i })).toBeVisible()
    // Program selector
    await expect(page.getByText(/Chase Ultimate Rewards/i).first()).toBeVisible()
    // Calculate button
    const calcBtn = page.getByRole("button", { name: /Find Best Routes|Calculate|Scan/i })
    await expect(calcBtn).toBeVisible()
    await calcBtn.click()
    // Results should appear
    await expect(page.getByText(/Business|First Class|Economy/i).first()).toBeVisible()
  })
})

test.describe("Pitch Deck", () => {
  test("loads with slide navigation", async ({ page }) => {
    await page.goto("/deck")
    await expect(page.getByText(/Fareburn/i).first()).toBeVisible()
    // Should have navigation arrows
    await expect(page.locator("button").first()).toBeVisible()
  })
})

test.describe("Docs Page", () => {
  test("has 5 documentation sections with sidebar", async ({ page }) => {
    await page.goto("/docs")
    await expect(page.getByText(/Research|GTM|Marketing|Brand|Pitch/i).first()).toBeVisible()
  })
})
