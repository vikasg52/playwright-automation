
const { test, expect } = require('@playwright/test');
const objects = require('../resources/objects/page-objects');
const data = require('../data/logindata');


test.beforeEach(async ({ page }) => {
  await page.goto(data.baseurl);
});

test.describe('Login & Logout the Site ', () => {
  test('@smoke, should allow me to login to swag site', async ({ page }) => {
    // enter login credentials
    await page.locator(objects['username_text-box']).type('standard_user');
    await page.locator(objects['password_text-box']).type('secret_sauce');
    // Click on login button
    await page.locator(objects.login_button).click();
    // Click on the menu button
    await page.locator(objects.lefmenu_button).click();
    // Make sure the logout link is visible in the menu
    await expect(page.locator(objects.logout_link)).toBeVisible();
    await page.locator(objects.logout_link).click();

  });

  test('@regression,should allow me to logout from the site', async ({ page }) => {
    // enter login credentials
    await page.locator(objects['username_text-box']).type('standard_user');
    await page.locator(objects['password_text-box']).type('secret_sauce');
    // Click on login button
    await page.locator(objects.login_button).click();
    // Click on the menu button
    await page.locator(objects.lefmenu_button).click();
    // Do logout by clicking on side menu and then logout link
    await page.locator(objects.logout_link).click();
    // Check login window has login button
    await expect(page.locator(objects.login_button)).toBeVisible();
    await expect(page.locator(objects['password_text-box'])).toBeVisible();
    page.pause(2000);
  });
});
