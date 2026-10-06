# FindYourFur source audit

Audited on 2026-10-06. Actual application source: [keibored/keistudies, CS - WebProg](https://github.com/keibored/keistudies/tree/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg), snapshot `ca1e495e511a81acee30b69ed9edeac89be27143`. The portfolio's dependencies were not used as evidence.

## Confirmed implementation

| Finding | Source evidence |
| --- | --- |
| HTML rendered by PHP pages | [index.php:22–28](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/index.php#L22): document markup, FindYourFur page title, stylesheet. |
| Plain CSS | [styles.css:1](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/styles.css#L1), loaded directly from index.php:28. |
| Vanilla JavaScript | [script.js:3](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/script.js#L3): DOM event listeners; lines 77, 106, 211, and 270 use fetch to PHP handlers. index.php:261 loads script.js directly. |
| Plain PHP | [actions/adopt.php:1](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/actions/adopt.php#L1): sessions, direct config include, POST inputs, mysqli prepared statements and JSON responses. Pages are directly addressed .php files; no Laravel bootstrap or routing layer. |
| MySQL-compatible database access through mysqli | [config.php:8](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/config.php#L8) creates a mysqli connection. No connection credentials are copied into this report. |
| Supplied database is MariaDB | [petshop_db.sql:7](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/petshop_db.sql#L7) records MariaDB 10.4.32; tables adoption, pets, users appear at lines 30, 47, and 85. This establishes the exported database engine, not the current live host's engine/version. |

All 27 PHP, JS, CSS, and SQL source files in this application directory were retrieved and reviewed. Its complete, non-truncated tree has no package.json, npm lockfile, composer.json, composer.lock, JSX/TSX/TypeScript source, tsconfig, node_modules/vendor tree, artisan, bootstrap/app.php, or routes/web.php. Source scans found no React imports/runtime, TypeScript use, Laravel, or Illuminate references. The direct page/script loading and PHP handlers support HTML/CSS/JavaScript/plain PHP, rather than React/TypeScript/Laravel. Feather icons loaded from a CDN and Google Fonts are present; they are not application frameworks.

## Features supported by code

- Pet browsing, type/age/size filters, sorting, and pagination: [pet-list.php:145–217](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/pet-list.php#L145) and script.js:405–453.
- Individual pet details: [pet-details.php:12](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/pet-details.php#L12).
- Login/registration: [actions/login.php](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/actions/login.php) and [actions/register.php](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/actions/register.php).
- Pet listing submissions and image uploads: [actions/save-pet.php](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/actions/save-pet.php).
- Adoption request submission and pet status updates: [actions/adopt.php:25–37](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/actions/adopt.php#L25).
- Administrative pet/adoption approval and rejection: [pending-pets.php](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/pending-pets.php), [actions/approve-pet.php](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/actions/approve-pet.php), and [actions/admin-update-adoption.php](https://github.com/keibored/keistudies/blob/ca1e495e511a81acee30b69ed9edeac89be27143/CS%20-%20WebProg/actions/admin-update-adoption.php).

These are source-level findings, not claims that every workflow was executed successfully. No account, adoption, or other live application data was modified.

## Personal contribution limits

The [initial case-study commit](https://github.com/keibored/keistudies/commit/bf115c689788f282eaeaf8acc76a21b87c9e65d9), titled “Create a repo for WebProg Case study,” records author name keibored and imports the application. A later commit reorganizes the files. The GitHub API does not associate these commits with a user login. This history and the owner's stated recollection support general participation in developing the case study; they do not establish sole authorship or feature-level ownership.

The portfolio contribution is therefore general (“Worked on this web programming case study using HTML, CSS, JavaScript, and plain PHP.”). It does not attribute every feature to the owner or invent a team role, metrics, or achievements.

## Portfolio correction

Updated client/src/data/projects.ts only for this project: case-study category, code-supported purpose, general contribution, and HTML/CSS/JavaScript/PHP/MariaDB tags. React, TypeScript, Laravel, and the unqualified MySQL tag are removed. Existing screenshot, dimensions, alt text, caption, live URL, and button label are unchanged. The legacy CV is not audit evidence and was not modified by this project-card correction.

