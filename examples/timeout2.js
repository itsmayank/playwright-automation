// To change the test timeout on a single test, call the test.SetTimeout() function:

import { test, expect } from '@playwright/test';

test('very slow test', async ({ page }) => {
  // set the test timeout to 5 minutes
  test.setTimeout(5 * 60 * 1000);

  // ...
});