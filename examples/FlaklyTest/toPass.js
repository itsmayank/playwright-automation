import { test, expect} from "@playwright/test";

test ("Sign in", async({page}) =>{
    await page.goto("https://www.exaple.com");

    await expect(async () =>{
        await page.getByRole("button" , {name: "Sign In"}).click();
        await expect(page.getByAltText("A raccon")).toBeVisible({
            timeout: 500
        }) 
    }).toPass({
        intervals: [1_000, 2_000, 10_000],
        timeout: 60_000
    });
})

// Run it multiple times
// npx playwright test --repeat-each 5