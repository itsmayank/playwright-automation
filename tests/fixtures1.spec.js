import { chromium, test} from "@playwright/test";

test("Without Fixtures", async ({}) => {
    // create a chrome browser
    const browser = await chromium.launch();

    //Create isolate context 
    const context = await browser.newContext();

    // Create a page
    const page = await context.newPage();

    await page.goto("https://www.amazon.com");

    // Use context to remove cookie
    console.log(await context.cookies());
    console.log("After clear")
    await context.clearCookies();
    console.log(await context.cookies());


});