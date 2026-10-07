# Small Wins

A mobile household clubhouse with chores, shared responsibilities, goals, a 64-recipe meal book, a weekly menu, and grocery planning.

Published as a separate GitHub Pages project site. It does not change the account's portfolio or root Pages site.

## Saving

By default, household data saves on the current device in browser storage. The interface labels this clearly. Clearing website data can erase the local plan; download backups in Household settings.

To share one plan across two phones, deploy the included Google Apps Script bound to a private Google Sheet and enter the same Web App URL on each phone. See [setup instructions](backend/SETUP.html). This integration is prepared but has not been deployed or verified against a live Google account. No GitHub token or Google credential is shipped to visitors.

The first device seeds an empty backend; the second loads its plan. Existing independent plans are not merged. Shared writes check revision numbers and reject stale updates. Profile choice stays per device.

## iPhone

Open the live app in Safari, choose your name, then Share → Add to Home Screen. Do this on each phone. The web app requires no App Store publication or Apple developer subscription.

## Deployment

Static files are published from the main branch root, using GitHub Pages. No build step is required. `.nojekyll` prevents Jekyll transformation. All asset paths are relative for the `/small-wins/` project path.

The public repository contains app code and example defaults, not household backups, local databases, API tokens, or personal activity logs.

Recipe quantities and steps are original rough cooking guides; exact nutrition macros have not been calculated. Allergens are labelled for basic ingredients; check actual product labels and child textures.
