class ProjectsPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.getWebAppButton = page.getByRole('button', { name: 'Web Application'});
    this.getWebAppHeader = page.locator('h1', { hasText: 'Web Application' });

    this.getMobileAppButton = page.getByRole('button', { name: 'Mobile Application'});
    this.getMobileAppHeader = page.locator('h1', { hasText: 'Mobile Application' });

    /*
    //left out for future test development needs
    this.getMarketingCampaignButton = page.getByRole('button', { name: 'Marketing Campaign'});
    this.getMarketingCampaignHeader = page.locator('h1', { hasText: 'Marketing Campaign' });
    */

    //this.getCardHeader = page.locator('h3' )

    //this.getCardTags = page.locator('div > span').toContainText(column, tag);
    //this.getCardHeader = page.locator('h2 > h3').toContainText(column, card);
  }

  async goToWebApp() {
    await this.getWebAppButton.click();
  }

  

  
}
module.exports = { ProjectsPage };