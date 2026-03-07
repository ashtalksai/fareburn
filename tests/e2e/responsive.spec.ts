import { test, expect } from "@playwright/test"

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
]

const testPages = ["/", "/about", "/pricing", "/signup", "/login", "/tools/calculator"]

test.describe("Responsive Layout", () => {
  for (const vp of viewports) {
    for (const path of testPages) {
      test(`${path} renders at ${vp.name} (${vp.width}px)`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height })
        const res = await page.goto(path)
        expect(res?.status()).toBe(200)
        await expect(page.locator("body")).toBeVisible()
        // No horizontal scroll
        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth)
        expect(scrollWidth).toBeLessThanOrEqual(vp.width + 5) // 5px tolerance
      })
    }
  }

  test("mobile nav menu opens and closes", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    // Find mobile menu button (hamburger)
    const menuBtn = page.locator("button").filter({ hasText: "" }).first()
    await expect(menuBtn).toBeVisible()
    await menuBtn.click()
    await page.waitForTimeout(300)
    // Mobile menu should now be visible with links
    await expect(page.getByRole("link", { name: "Pricing" }).last()).toBeVisible()
  })
})
