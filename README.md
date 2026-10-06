# Keisha Dumpit — Portfolio

A spacious, resume-inspired portfolio built with the existing React, TypeScript, Vite, and plain CSS stack. The frontend lives in `client/`; it does not need a backend.

## Run locally

```sh
cd client
npm install
npm run dev
```

Open the URL printed by Vite. On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`. Use a Node.js version supported by the installed Vite version (Node 20.19+, 22.12+, or newer supported releases).

## Checks and production preview

From `client/`:

```sh
npm run lint
npm run build
npm run preview
```

Use `npm ci` for repeatable CI installs. For static hosting, set the root directory to `client`, the build command to `npm run build`, and the output directory to `dist` (or `client/dist` if paths resolve from the repository root). No CI or deployment configuration was present to update. No deployment or merge was performed.

## Layout and content

The page follows Hero → Experience → Selected Projects → Education & Technical Skills → Contact. It defaults to dark plum with lavender accents and preserves the saved light/dark theme preference. Project screenshots alternate sides on desktop and appear above their descriptions on mobile. Body text uses readable 15?19px sizes; decorative elements are restrained.

- Header: `client/src/components/Header/Header.tsx`; no navigation menu or sidebar.
- Contact details and existing CV URL: `client/src/data/profile.ts`.
- Internship details: `client/src/components/Experience/Experience.tsx`.
- Project content, actual screenshots, and available links: `client/src/data/projects.ts`.
- Education and grouped skills: `client/src/components/About/About.tsx`.
- Styling and responsive rules: `client/src/styles/globals.css`.

The original portrait PNG remains in `client/src/assets/images/hero/portrait.png`. The page uses its optimized WebP derivative; no generative edits or changes to the face were made. Original screenshot PNGs are retained alongside optimized WebP assets. Below-the-hero screenshots use lazy loading and explicit dimensions.

Internship hours, WAHEMS contributions, React/Express/MySQL development, Constellate's purpose, and the Dean's Lister distinction come from the user's redesign brief. The education date range (2023–2026) was verified against the original About component in commit `74ea1ba`; it is displayed as an education range, without asserting a graduation year. The existing internship date (Summer 2026) is retained.

Constellate uses the verified demo URL supplied by the owner: https://constellate-pi.vercel.app/. Its actual entry-page screenshot was captured from that deployed application on 2026-10-06. The original capture is `client/src/assets/images/projects/constellate-preview.png`; the card uses an optimized WebP with the same 1440?900 proportions and descriptive alt text. Its stack is verified against the actual `keibored/constellate` client/server source: React, TypeScript, Node.js, Express, Socket.IO, Supabase Auth, PostgreSQL, and Redis. Redis and PostgreSQL have active runtime implementations. The owner confirmed building the application; the card describes the interface, backend, synchronized timer, live presence, and room persistence. See [the source audit](docs/constellate-audit.md) for pinned supporting paths. Existing card links are preserved. WAH Payroll uses the actual sign-in screenshot, not a conceptual dashboard. Pet Adoption preserves the existing FindYourFur screenshot and live destination.

The existing `client/public/Keisha_Dumpit_CV.pdf` is preserved. This is the repository-fact-based CV added during the preceding redesign; no older original CV was available then. Its printable HTML source remains alongside it. Certificate PDFs remain accessible from the education section.

The supplied scrollable mockup now guides the layout: a rounded rectangular portrait, lavender serif role text, star dividers, bordered experience/project cards, open resume rows for education, skills, and certifications, and two-column contact details and a minimal footer. Conceptual dashboard screenshots and unsupported project links from the reference are not used. Google Fonts have serif and sans-serif fallbacks.

## Verification

Verified locally on 2026-10-05:

- Installation and development startup from `client/`.
- Production build and ESLint.
- Desktop, tablet, and mobile review; no horizontal overflow at 320, 390, 768, and 1440 pixels.
- Real project destinations, contact link targets, certificate URLs, keyboard focus, and theme switching.
- The existing CV PDF remains preserved as an asset; the hero no longer contains download or project navigation buttons.
- Actual project screenshots loaded successfully and use lazy loading.
- Accessibility scans reported zero violations in both themes. Decorative star glyphs and subtle background gradients were reviewed visually because automated contrast checks mark them for manual review.
- Reduced motion disables smooth scrolling and transitions. No browser page errors were found.

Project screenshots also act as keyboard-accessible links to their existing demo destinations. Image captions and intrinsic dimensions are stored with each project, and skill lists have descriptive accessibility labels. Legacy sidebar styling has been removed.

The hero role is Computer Science Student & Aspiring Software Engineer. The name, original portrait, introduction, and location remain; project actions live in project cards and contact actions live in the contact section. Hero spacing has been tightened for desktop and mobile after removing its buttons.

Constellate preview verification: checked the real image load, intrinsic/display proportions, responsive placement, and visible View Live Demo link on desktop, mobile, and the production build.

Education section verification (2026-10-06): the three open resume rows use desktop label/content columns and stacked mobile labels. Reviewed at 1440, 768, 390, and 320 pixels, with no horizontal overflow. Existing skills and certificate titles/URLs are preserved; all three certificate PDFs return HTTP 200 in development and production. Keyboard focus is visible. Production build and ESLint pass.

Contact/footer verification (2026-10-06): clean desktop columns and stacked mobile content reviewed at 1440, 768, 390, and 320 pixels with no overflow. One prominent mailto link preserves the original email. GitHub and LinkedIn open their preserved URLs in new tabs (LinkedIn presents its normal sign-in wall). All contact/footer links have visible keyboard focus and at least 44px touch targets; footer navigation returns to the hero. Plum-theme text and link contrast exceeds 9:1. Production build and ESLint pass.

FindYourFur stack correction (2026-10-06): audited the actual application in `keibored/keistudies/CS - WebProg`, not the portfolio dependencies. The card now uses HTML, CSS, JavaScript, plain PHP, and MariaDB (identified by the supplied SQL export; access uses mysqli). Source-level features and contribution limits are documented with pinned file references in [the FindYourFur audit](docs/findyourfur-audit.md). The original screenshot and live URL are preserved. Desktop/mobile production preview, image loading, production build, and ESLint pass.
