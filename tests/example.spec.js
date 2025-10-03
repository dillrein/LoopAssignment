import { test, expect } from '@playwright/test';
import { urlOne} from './utils/constants/weblink';
import { user } from './utils/constants/accounts';
import { login } from './utils/functions/login';
const { ProjectsPage } =require('./utils/models/ProjectsPageModel');


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
  const projectsPage = new ProjectsPage(page);
  
  await projectsPage.goToWebApp();

  await expect(projectsPage.getWebAppHeader).toBeVisible();

  //await expect(projectsPage.getCard('To Do', 'Implement user authentication')).toBeVisible();



  
});

test('Test Case 2', async ({ page }) => {
  console.log('Test Case 2')
});
