const { test, expect } = require("@playwright/test");
const testData = require("./utils/testData/testData.json");
const { login } = require("./utils/functions/login");

// Iterate over each data set in the JSON file
for (const data of testData) {
  test.describe(`Scenario: ${data.name}`, () => {
    test(`should validate task in ${data.navigation}`, async ({ page }) => {
      // Step 1: Login
      await login(page, data.credentials.email, data.credentials.password);

      // Step 2: Navigate to section
      await page.getByRole("button", { name: data.navigation }).click();

      // Step 3: Verify task exists in correct column
      const taskLocator =
        page.locator(
          `h3:below(:text("${data.expectedTask.column}")):has-text("${data.expectedTask.title}")`
        );

      await expect(taskLocator).toBeVisible();

      // Step 4: Verify tags
      for (const tag of data.expectedTask.tags) {
        // Find the task card by its title, then look for the tag inside its parent container
        const taskCard = page
          .locator(`h3:has-text("${data.expectedTask.title}")`)
          .first();
        await expect(
          taskCard.locator(`xpath=..//*[normalize-space(text())="${tag}"]`)
        ).toBeVisible();
      }
    });
  });
}
