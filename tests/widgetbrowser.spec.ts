import { test, expect } from "@playwright/test";
import packageJson from "../package.json" with { type: "json" };

const version = process.env.WIDGET_VERSION || packageJson.version;
const widgetId = process.env.WIDGET_ID || packageJson.name;

test("should load the bathtub page successfully", async ({ page }) => {
  const url = `https://demo.1fe.com/bathtub?widgetUrl=https://1fe-a.akamaihd.net/integration/widgets/${widgetId}/${version}/js/1fe-bundle.js&fixPreview=true`;
  
  await page.goto(url);
  await page.waitForLoadState('networkidle');
  
  // Verify the page loaded with the correct title
  await expect(page).toHaveTitle(packageJson.name);
  
  // Verify we can find the widget switcher interface
  await expect(page.getByText("Widget switcher")).toBeVisible();
});
