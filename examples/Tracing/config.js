// playwright.config.ts

import { defineConfig } from '@playwright/test';
export default defineConfig({
  retries: 1,
  use: {
    trace: 'on-first-retry',
  },
});

// Available options to record a trace:

// 'on-first-retry' - Record a trace only when retrying a test for the first time.
// 'on-all-retries' - Record traces for all test retries.
// 'off' - Do not record a trace.
// 'on' - Record a trace for each test. (not recommended as it's performance heavy)
// 'retain-on-failure' - Record a trace for each test, but remove it from successful test runs.


// npx playwright show-trace path/to/trace.zip

// also can run 
// npx playwright test --trace on

