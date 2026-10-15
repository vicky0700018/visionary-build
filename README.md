# INFRAVISION BUILDCON LLP

Continuation of https://github.com/vicky0700018/visionary-build-port. The original JavaScript public/admin components, mock data, and photography are retained; pages, styling, and verification complete the unfinished website.

## Run locally

Install Node.js and npm, then run:

```sh
npm install
npm run dev
```

## Demo management

Open `/admin/login`. Default demonstration credentials: `admin` / `Admin@123`.
Content and inquiry changes persist only in localStorage in the current browser. They are not transmitted to the company, shared between devices, or secure. Do not enter real customer data. Restore Demo Data requires confirmation and removes local edits, inquiries, and the demo session.

## Verify and publish

```sh
npm run test
npm run build
npm run preview
```

Publish through Lovable for the existing platform runtime and hosted photographs. This repository already uses TanStack Start's platform bootstrap; the site features are JavaScript React and Tailwind and do not call a backend, database, or authentication service. The platform route wrappers remain TypeScript. It is not an independent plain-Vite static SPA, so do not select `dist` blindly for external hosting: use a TanStack Start-compatible deployment adapter and its generated output. Hosted photo pointers rely on Lovable's asset serving; external hosting needs the photos transferred and their URLs updated.

Before publishing, verify public navigation/back and forward, mobile menus, portfolio search/filters/details, gallery enlargement/Escape, demo form validation, inquiry management, login/logout, all content editors, refresh persistence, and demo restoration. This demo admin is not suitable as a production CMS without secure authentication and persistent server-side storage.

Developer credit: Designed and development by SOSynch Ai Tech.
