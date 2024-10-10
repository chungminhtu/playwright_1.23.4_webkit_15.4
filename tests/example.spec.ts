const { test, expect } = require('@playwright/test');

test('Login Page Test', async ({ page }) => {
    await page.goto('https://tart-lge.com/login');
});
