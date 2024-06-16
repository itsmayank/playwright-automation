import {test, expect} from "@playwright/test";

test("Multi tabs", async({page, context}) => {
    await page.goto("https://www.amazon.in");

    // Create second tab
    const newTab = await context.newPage();

    await newTab.goto("https://www.google.com");

    await page.pause();
})