// To configure these timeouts globally, set the following options in playwright.config.ts:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  // test timeout set to 2 minutes
  timeout: 2 * 60 * 1000, 
  expect: { 
    // expect timeout set to 10 seconds
    timeout: 10 * 1000
  } 
});