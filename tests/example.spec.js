const { test, expect } = require('@playwright/test');
const testData = require('./utils/testData/testData.json');
const { login } = require('./utils/functions/login');



// Reusable login function
// async function login(page, email, password) {
//   await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
//   await page.fill('input[name="email"]', email);
//   await page.fill('input[name="password"]', password);
//   await page.click('button[type="submit"]');
//   // Adjust this check depending on redirect behavior
//   await expect(page).toHaveURL(/dashboard/i);
// }

// Data-driven tests
for (const data of testData) {
  test.describe(`Scenario: ${data.name}`, () => {
    test(`should validate task in ${data.navigation}`, async ({ page }) => {
      // Step 1: Login
      await login(page, data.credentials.email, data.credentials.password);

      // Step 2: Navigate to section
      await page.click(`text=${data.navigation}`);

      // Step 3: Verify task exists in correct column
      const taskLocator = page.locator(
        `.column:has-text("${data.expectedTask.column}") >> text=${data.expectedTask.title}`
      );
      await expect(taskLocator).toBeVisible();

      // Step 4: Verify tags
      for (const tag of data.expectedTask.tags) {
        await expect(page.locator(`.tag:has-text("${tag}")`)).toBeVisible();
      }
    });
  });
}