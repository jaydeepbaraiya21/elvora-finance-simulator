# ELVORA — Broke But Functional: Survive the Month

ELVORA is a React + Vite personal-finance survival simulator built for the **Broke But Functional — Survive the Month** challenge. The default scenario starts with **₹10,000 for 30 days** and is designed for Gen Z users balancing essentials, commitments, uncertain income, subscriptions, savings and unexpected expenses.

## Challenge-to-feature map

- **Limited ₹10,000 / 30-day budget:** budget and challenge-length settings, day-by-day progression, remaining funds and daily allowance.
- **Everyday spending:** apply purchases/expenses to a day and category; future planned costs are included in flexible-funds calculations.
- **Bills and commitments:** due dates, outstanding amounts, partial payments, overdue obligations and explicit “pay anyway” shortfall simulation.
- **Recurring subscriptions:** schedule one-time, weekly or monthly subscription charges across the 30-day horizon.
- **Income uncertainty:** expected income is excluded from available funds until receipt is explicitly confirmed; delayed income can be rescheduled.
- **Savings goals:** reserve allocations, track target progress and deadline, and see how saving changes flexible funds.
- **Unexpected expenses:** a dedicated shortcut pre-fills an unexpected-cost scenario; its amount and day feed into the spending plan and forecast.
- **Decision simulation:** preview the current plan versus the proposed decision; applying is explicit, and the last applied decision can be undone.
- **Connected outcomes:** remaining balance, daily allowance, unpaid commitments, savings allocation, forecast, financial risk and financial-health reasons update from the same plan state.
- **Financial health:** transparent educational indicator with reasons and warnings; it is not a credit score or personal financial advice.

## Judge walkthrough (60–90 seconds)

1. Open the site and choose **Try the simulator** / demo mode.
2. On Overview, review the **Broke But Functional — Survive the Month** challenge brief, starting funds, daily allowance, commitments, savings and 30-day forecast.
3. Open **Unexpected expense** and compare the live impact preview before applying it.
4. Open **Review a subscription** and try a recurring charge.
5. Visit **Commitments**, **Savings goals** and **Financial health** to see connected outcomes.
6. Use **Next day** to advance the scenario, or **Load judge demo** to restore the representative sample plan.

## Run locally (Windows PowerShell)

```powershell
npm.cmd install
npm.cmd run dev
```

Build and test the production output:

```powershell
npm.cmd run build
npm.cmd run preview
```

Vite's production output is `dist`. Netlify build settings: command `npm run build`, publish directory `dist`.

## Stack and structure

- React / React DOM with JSX components, bundled by Vite.
- `src/components/` contains the landing page, demo auth, dashboard/workspace, simulator drawer and utility UI.
- `src/styles.css` holds the responsive design system and page styles.
- `public/legacy-engine.js` contains the existing simulation calculations and DOM interaction bridge. The UI is React JSX, while some finance mechanics remain in a compatibility script rather than all being rewritten as React hooks/state.

## Demo and data limitations

- The application is an educational, client-side simulation. No real bank connection, account creation, payments or financial transactions take place.
- Demo state is session-scoped in the browser. Expected income does not count as available until the user confirms receipt.
- Values and sample events are illustrative and are not financial advice.
