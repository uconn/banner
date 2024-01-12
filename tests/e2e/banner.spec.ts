import { test, expect } from '@playwright/test'


test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.waitForURL('/')
})

test.describe('Standard Banner', () => {
  test('should display the banner', async ({ page }) => {
    const banner = await page.locator('#uconn-banner')
    await expect(banner).toBeTruthy()
  })
  test('should display the wordmark and school name', async ({ page }) => {
    const wordmark = await page.locator('#wordmark')
    const schoolName = await page.locator('#university-of-connecticut')
    expect(wordmark).toBeTruthy()
    expect(wordmark).toHaveText('UConn')
    expect(schoolName).toBeTruthy()
    expect(schoolName).toHaveText('University Communications')
  })
  test('should have buttons for search, directory, and mobile menu', async ({ page }) => {
    const searchButton = await page.locator('#icon-container-search button')
    const directoryButton = await page.locator('#icon-container-az a.btn')
    const mobileMenuButton = await page.locator('#icon-container-mobile-menu button')
    expect(searchButton).toBeTruthy()
    expect(directoryButton).toBeTruthy()
    expect(mobileMenuButton).toBeTruthy()
  })
  test('should have site branding', async ({ page }) => {
    const siteHeader = await page.locator('#uc-site-header')
    const siteParent = await page.locator('#uc-site-parent')
    const siteTitle = await page.locator('#uc-site-title')
    expect(siteHeader).toBeTruthy()
    expect(siteParent).toBeTruthy()
    expect(siteTitle).toBeTruthy()
  })
})