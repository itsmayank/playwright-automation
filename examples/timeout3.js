// Otherwise, you can mark a specific test as “slow” with test.slow():

import { test, expect } from '@playwright/test';

test('slow test', async ({ page }) => {
  // mark the test as "slow"
  test.slow();

  // ...
});