import { test, expect, chromium, firefox } from "@playwright/test";

test("Practice with tabs", async ({ page }) => {
  let pageContext = await page.context();
  await page.goto("https://playwright.dev");
  await page.locator("xpath = //a[contains(text(),'Docs')]").click();

  let tab2 = await pageContext.newPage();
  await tab2.goto("https://playwright.dev");
  await tab2.locator("xpath = //a[contains(text(),'Docs')]").click();

  let tab3 = await pageContext.newPage();
  await tab3.goto("https://playwright.dev");
  await tab3.locator("xpath = //a[contains(text(),'Docs')]").click();

  await page.locator("xpath = //a[contains(text(),'Writing tests')]").click();
  await tab2
    .locator("xpath = //a[contains(text(),'Generating tests')]")
    .click();
  await tab3
    .locator("xpath = //a[contains(text(),'Running and debugging tests')]")
    .click();
});

test("Practice with browsers", async () => {
  let myChromium = await chromium.launch();
  let myContext = await myChromium.newContext();
  let pageChromium = await myContext.newPage();
  await pageChromium.goto("https://playwright.dev");

  let myFirefox = await firefox.launch();
  let FirefoxContext = await myFirefox.newContext();
  let FirefoxPage1 = await FirefoxContext.newPage();
  await FirefoxPage1.goto("https://www.w3schools.com/");

  await pageChromium.locator("xpath = //a[contains(text(),'Docs')]").click();
  await FirefoxPage1.goto("https://wikipedia.org");
});
