import { test, expect} from "@playwright/test";

test("Testing multiple tags", async({page}) => {
    await page.goto("https://computer-database.herokuapp.com/coumpters");
    const list = await page.locator(".computers tbody tr td a");
    console.log(list.count());

    await page.locator(".computers tbody tr td a").first().click();
    await page.locator(".computers tbody tr td a").last().click();
    await page.locator(".computers tbody tr td a").nth(2).click();

});