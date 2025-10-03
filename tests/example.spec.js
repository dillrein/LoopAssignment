import { test, expect } from '@playwright/test';
import { urlOne} from './utils/constants/weblink';
import { user } from './utils/constants/accounts';
import { login } from './utils/functions/login';



test('Test Case 1', async ({ page }) => {
  await login(page, urlOne, user);
});

test('Test Case 2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
