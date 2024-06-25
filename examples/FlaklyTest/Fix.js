const { test, expect } = require('@playwright/test');

test('"Load More" button loads new products', async ({ page }) => {
  // navigate to the page to test
  await page.goto('https://localhost:3000/products');

  // select the "Load More" button
  const loadMoreButton = await page.getByRole('button', { name: 'Load More' });

  // click the "Load More" button
  await loadMoreButton.click();

  // verify that there are 20 product elements on the page,
  // waiting up to 10 seconds for them to be loaded
  expect(await page.locator('.product')).toHaveCount(20, {
    timeout: 10000
  });
});