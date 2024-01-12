import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.waitForURL('/');
});

test.describe('Standard Banner', () => {
  test('banner background should be dark blue', async ({ page }) => {
    const banner = await page.locator('#uconn-header-container');
    await expect(banner).toHaveCSS('background-color', 'rgb(0, 14, 47)');
  })
  test('wordmark and school name should be styled', async ({ page }) => {
    const wordmark = await page.locator('#wordmark');
    const schoolName = await page.locator('#university-of-connecticut');
    const wordmarkStyles = {
      'color': 'rgb(255, 255, 255)',
      'font-family': 'UConn, Arial, Helvetica, sans-serif',
      'font-size': '32px',
      'letter-spacing': '3px',
      'overflow': 'hidden',
      'padding': '0px 5px 0px 0px',
      'text-transform': 'uppercase',
    }
    const schoolNameStyles = {
      'border-left': '2px solid rgb(63, 71, 96)',
      'color': 'rgb(159, 170, 178)',
      'font-family': "\"Proxima Nova\", Arial, Helvetica, sans-serif",
      'font-size': '18px',
      'font-style': 'normal',
      'font-weight': '700',
      'line-height': 'normal',
      'padding': '1px 0px 0px 10px',
      'text-transform': 'uppercase',
      'word-spacing': '0.36px',
    }
    for (const [key, value] of Object.entries(wordmarkStyles)) {
      expect(wordmark).toHaveCSS(key, value);
    }
    for (const [key, value] of Object.entries(schoolNameStyles)) {
      expect(schoolName).toHaveCSS(key, value);
    }
  })
})