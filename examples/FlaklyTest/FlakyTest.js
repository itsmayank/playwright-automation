const { test, expect } = require('@playwright/test');

test('"Load More" button loads new products', async ({ page }) => {
  // navigate to the page to test
  await page.goto('https://localhost:3000/products');

  // select the "Load More" button
  const loadMoreButton = await page.getByRole('button', { name: 'Load More' });

  // click the "Load More" button
  await loadMoreButton.click();

  // pause the test execution for 10 seconds waiting
  // for new products to be loaded on the page
  await page.waitForTimeout(10000);

  // count the number of product elements on the page
  const productNodes = await page.locator('.product').count();

  // verify that there are 20 product elements on the page
  expect(productNodes).toBe(20);
});