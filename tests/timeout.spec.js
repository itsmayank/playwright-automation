import { test } from "@playwright/test";

// Changing default setting for entire test file

test.describe.configure({
    mode: "parallel",
    timeout: 3000
})

test("Test example", async({page}) => {
    await page.goto("https://playwright.dev/");
    await page.locator(".fake").waitFor();
})

test.describe("Example of grouped test", () => {
    // Changing default setting for this test only 
    test.describe.configure({
        retries: 1,
        timeout: 5000
    })
    test("Scoped test", async({page}) => {
        await page.goto("https://playwright.dev/");
        await page.locator(".fake").waitFor();
    })
})