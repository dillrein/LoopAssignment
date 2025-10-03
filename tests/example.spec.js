import { test, expect } from '@playwright/test';
import { urlOne} from './utils/constants/weblink';
import { user } from './utils/constants/accounts';
import { login } from './utils/functions/login';
import { locateUserStoryCard } from './utils/models/locators';
import { navigateTo } from './utils/models/navigate';

test.beforeEach(async ({ page }) => {
  console.log(`Starting ${test.info().title}`);
  await login(page, urlOne, user);

});

test.afterEach(async ({ page }) => {
  console.log(`Finished ${test.info().title} with status ${test.info().status}`);

  if (test.info().status !== test.info().expectedStatus)
    console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test('Test Case 1', async ({ page }) => {
  console.log('Running Test Case 1');
  await navigateTo(page, 'Web Application');

  await locateUserStoryCard(page, 'To Do', 'Implement user authentication');

  await expect()
  
});

test('Test Case 2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
