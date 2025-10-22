# Dropdown bug on Next.js 16 with cacheComponents enabled

This is a minimal reproducible example for a bug I found in Next.js 16 when using a dropdown component with the `cacheComponents` feature enabled.

## Steps to Reproduce

1. Clone this repository
2. Install dependencies using `pnpm install`
3. Run the development server with `pnpm dev`
4. Open the application in your browser
5. Click on the "Open Dropdown" button on the top right corner
6. Click on the "Settings" link in the dropdown menu

## Current behavior

It shows the dropdown menu on the "settings" page, even though it's not included there.

## Expected behavior

It shouldn't show the dropdown menu when navigating to a page that doesn't include it.

## Notes

- This bug was introduced in Next.js 16-canary.17 (it works fine on canary.16)
- The bug occurs only when `cacheComponents` is enabled in `next.config.ts`. If we disable it, the dropdown works as expected
