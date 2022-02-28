// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 2000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['allure-playwright'],['list']],
  
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    video: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     viewport: { width: 1680, height: 904 },
    //     ignoreHTTPSErrors: true,
    //     headless: false,
    //   },
    // },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     viewport: { width: 1680, height: 904 },
    //     headless: false
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     headless: false
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //     viewport: { width: 300, height: 904 },
    //     headless: false
    //   },
    // },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 400, height: 704 },
        headless: true
      },
    },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome',
        viewport: { width: 1680, height: 904 },
        headless: true
      },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

module.exports = config;
