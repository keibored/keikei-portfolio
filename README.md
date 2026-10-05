# Keisha Dumpit — Portfolio

A responsive portfolio built with the existing React, TypeScript, Vite, and plain CSS stack. The frontend lives entirely in `client/`; no backend is required.

## Run locally

Use a Node.js version supported by Vite 8 (Node 20.19+ or 22.12+).

```sh
cd client
npm install
npm run dev
```

Open the local URL printed by Vite. On Windows PowerShell, if execution policy blocks `npm.ps1`, use `npm.cmd` for the same commands.

## Checks and production preview

```sh
cd client
npm run lint
npm run build
npm run preview
```

For repeatable installs in CI, use `npm ci` in `client/`. Configure static hosting with root directory `client`, build command `npm run build`, and output directory `dist` (or `client/dist` when the host resolves paths from the repository root). No deployment has been performed.

## Content and assets

- Contact details and CV URL: `client/src/data/profile.ts`.
- Project descriptions, contributions, technologies, links, and actual screenshots: `client/src/data/projects.ts` and `client/src/assets/images/projects/`.
- Education, experience, and skills: `client/src/components/About/About.tsx`.
- Existing certificate PDFs remain linked from the About section.
- No Constellate information or screenshot was present, so it is not listed.
- The original CV link referenced a missing PDF. `client/public/Keisha_Dumpit_CV.pdf` is a downloadable CV made from existing repository facts. Replace it with your preferred CV and update the URL in `profile.ts` when available. The printable HTML source is alongside the PDF.

The mockup attachment was unavailable during implementation; the visual direction follows the written brief. The page supports light/dark themes, keyboard navigation, reduced motion, and desktop/tablet/mobile layouts. Google Fonts have local serif and sans-serif fallbacks.
## Verification

Verified locally on 2026-10-05:

- `npm install` from `client/` completed; `npm run dev` started Vite successfully.
- `npm run build` and `npm run lint` passed.
- Reviewed the development and production pages in Chromium at desktop, tablet, and mobile sizes; checked widths of 320, 390, 768, and 1440 pixels with no horizontal overflow after fixes.
- Work and back-to-top buttons navigate to the correct sections.
- The CV PDF downloaded successfully and matched the source file; certificate assets returned HTTP 200 in development and production.
- Existing WAH Payroll and FindYourFur destinations opened successfully. Social links use the existing GitHub/LinkedIn URLs; email links use the existing contact address.
- Automated accessibility scans reported zero violations in light and dark themes. Decorative star glyphs were flagged for manual contrast review and were reviewed visually.
- No browser page errors or Vite error overlay were found.

No CI workflow or deployment configuration was present to update. Hosting path instructions above reflect the new directory structure. No deployment or merge was performed.
