# ELVORA — React + Vite migration

This project migrates the supplied ELVORA website markup into React JSX components while retaining the original stylesheet and demo simulator behavior.

## Included
- The full original landing page, authentication screen, workspace, simulator drawer, confirmation dialogs, toast and back-to-top control.
- Original CSS extracted to `src/styles.css`.
- Original demo interactions and financial simulation logic in `public/legacy-engine.js`, loaded after the React-rendered markup mounts. This avoids a brittle iframe and preserves the existing calculations, modals, budget settings, bills, income, savings, undo and demo flows.
- Vite build/development setup and Netlify configuration.

## Run (Windows PowerShell)
```powershell
npm.cmd install
npm.cmd run dev
```
Open the local URL printed by Vite. Build for production with:
```powershell
npm.cmd run build
```
Netlify settings: build command `npm run build`, publish directory `dist`.

## Important demo limitations
Authentication is frontend-only. No real account, bank connection or payment is made; only sample simulation data is handled in the browser.
