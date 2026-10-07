# Small Wins

A mobile household clubhouse with chores, shared responsibilities, goals, a 64-recipe meal book, a weekly menu, and grocery planning.

Published as a separate GitHub Pages project site. It does not change the account's portfolio or root Pages site.

## Shared saving

Both phones automatically use the same Google Sheets backend. No backend URL entry or Google sign-in is needed in the app. Device profiles remain independent. The sheet itself is private; the web endpoint runs under its deployer's Google account and is intentionally open, as requested. Anyone with the app URL can read and edit the household plan.

Shared writes check revision numbers and reject stale updates. The app caches the last plan for offline reading; shared editing requires a connection. Existing device-only plans are retained as backups and can be downloaded in Household settings.

The backend is deployed and verified with unauthenticated read/write, exact data readback, invalid-payload handling, and conflict detection. The app contains its public endpoint, with no Google OAuth token or account credentials.

## iPhone

Open the live app in Safari, choose your name, then Share → Add to Home Screen. Do this on each phone. The web app requires no App Store publication or Apple developer subscription.

## Deployment

Static files are published from the main branch root, using GitHub Pages. No build step is required. `.nojekyll` prevents Jekyll transformation. All asset paths are relative for the `/small-wins/` project path.

The public repository contains app code and example defaults, not household backups, local databases, API tokens, or personal activity logs.

Recipe quantities and steps are original rough cooking guides; exact nutrition macros have not been calculated. Allergens are labelled for basic ingredients; check actual product labels and child textures.
