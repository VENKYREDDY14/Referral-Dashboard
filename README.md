# Referral Dashboard (React + Tailwind)

A React application for managing referrals, built with Tailwind CSS.  
Includes a dashboard with metrics, service summary, referral details, and a referrals table.  
Implements loading states with `react-loader-spinner` (ThreeDots) and accessible error handling.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VENKYREDDY14/Referral-Dashboard.git
   cd my-app

   ```

2. Install dependencies:
   npm install

3. Dependencies used:

   React Router DOM → routing between Dashboard and Referral Details

   Tailwind CSS → styling

   js-cookie → JWT token handling

   react-loader-spinner → ThreeDots loading spinner

4. Initialize Tailwind:

   npx tailwindcss init

5. Configure tailwind.config.js and include Tailwind directives in index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

5. Features:

   Dashboard Page

   Header, Overview, Service Summary, Referral, Referrals Table, Footer

   Referral Details Page

   Fetch referral by id

   Handles multiple API response shapes (metrics, serviceSummary, referral, referrals)

   Displays referral details with definition list

   Back navigation link

6. API Integration

   Endpoints:

   Full list: GET /api/referrals

   Search: GET /api/referrals?search=term or GET /api/referrals?q=term

   Sort by date: GET /api/referrals?sort=asc (asc = oldest first, desc = newest first; default is desc)

   Single referral: GET /api/referrals?id=123

7. Fetch Logic

Uses fetch with JWT token from cookies

Handles success, error, and loading states

Parser supports multiple response shapes

8. Loading State

Implemented reusable loader with ThreeDots:

Accessible with role="alert" and hidden text for screen readers

Reused across Dashboard and Referral Details

9. Error Handling

If API rejects or returns non‑success status:

Display error message with status code + backend message

Marked with role="alert" for accessibility

10. Development Workflow

Scaffold components (Header, Overview, ServiceSummary, Referral, ReferralsTable, Footer)

Implement API fetch with JWT auth

Add loading state with ThreeDots spinner

Add error state with accessible alert

Handle multiple API response shapes

Wire up search + sort in referrals table

Build Referral Details page with back navigation

11. folder strucure

Referral-Dashboard/
├── .vscode/
├── node_modules/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── dashboardHeader.js
│ │ ├── footer.js
│ │ ├── loader.js
│ │ ├── navbar.js
│ │ ├── overview.js
│ │ ├── protectedRoute.js
│ │ ├── referrals.js
│ │ ├── referralsTable.js
│ │ ├── serviceSummary.js
│ │ └── referral.js (if separate from referralsTable)
│ │
│ ├── pages/
│ │ ├── dashboard.js
│ │ ├── home.js
│ │ ├── login.js
│ │ ├── notFound.js
│ │ └── referralDetails.js
│ │
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ ├── reportWebVitals.js
│ └── setupTests.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
