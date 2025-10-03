class ProjectsPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.getAppButton = page.getByRole('button', { name: title});
    this.gettingAppHeader = page.locator('h1', { hasText: title });
    this.getCardTags = page.locator('div > span').toContainText(column, tag)
    this.pomLink = page.locator('li', {
      hasText: 'Playwright Test',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }
  async getApp(title) {
    await this.getAppButton(title).first().click();
    await expect(this.gettingAppHeader(title)).toBeVisible();
  }

  async getTags(column, tag) {
    await expect(this.getCardTags(column, tag)).toBeVisible();
  }

  
}
module.exports = { ProjectsPage };