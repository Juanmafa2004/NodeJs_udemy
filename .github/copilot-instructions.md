# Copilot instructions — Node.js course workspace

Purpose
- Help AI coding agents be immediately productive in this workspace (Node.js/Udemy course projects).

What to check first
- Confirm project root contains `package.json` and `README.md`.
- Look for source folders: `src/`, `lib/`, `server/`, or `app/`. Example files to inspect: `src/index.js`, `src/server.js`, `src/app.ts`.
- Detect TypeScript by presence of `tsconfig.json` or `.ts` files; detect Docker by `Dockerfile`/`docker-compose.yml`.

Build / Run / Test commands (discover from `package.json`)
- Typical commands to try: `npm ci` (or `npm install`), `npm test`, `npm run build`, `npm start`.
- If `tsconfig.json` present use `npm run build` -> `tsc` or `node -r ts-node/register src/index.ts` depending on scripts.
- If no scripts exist, run entry directly: `node src/index.js` or `node server.js`.

Architecture & patterns to expect
- Small educational Node.js app: common layers are `routes` -> `controllers` -> `services` -> `models`.
- Look for Express app bootstrap in `src/index.js` or `src/app.js` and middleware registration (bodyParser, cors, error handler).
- DB integrations: check `package.json` dependencies for `mongoose` (Mongo), `pg`/`knex`/`sequelize` (Postgres/SQL), or `prisma` and then inspect `src/models`, `prisma/`, or `db/`.
- Config via `.env` and `config/` or `src/config`. Use `process.env` keys found in code when proposing changes.

Project-specific conventions (what to follow)
- Prefer async/await in route handlers and services; wrap top-level async handlers with an error-catcher helper if present.
- Error handling: follow existing express error-middleware pattern (search for `app.use((err,`)).
- Tests: look under `test/`, `__tests__/`, or scripts named `test` in `package.json`. Run and update tests that match the repo's structure.
- Linting/format: honor repository `eslint`/`prettier` configs when present (`.eslintrc`, `.prettierrc`).

Integration points & external deps
- Inspect `package.json` dependencies to find external systems (DBs, message queues, auth libs). Example: if `jsonwebtoken` exists, inspect `src/auth` or `middleware/auth.js`.
- For DB migrations look for `prisma/`, `migrations/`, or `knexfile.js` and follow the repo's migration commands.

> Examples from this workspace (if present)
- `package.json` — source of truth for install/build/test scripts.
- `src/index.js` or `src/server.js` — entrypoint and express setup to modify for new routes.
- `src/controllers/*.js` — place to implement request handlers; follow existing handler signatures.

Change guidance (safe edits)
- When adding endpoints, update or add tests that exercise the endpoint. Match existing test style and file locations.
- When altering environment keys, add fallback defaults and document new keys in `README.md`.
- Avoid changing global coding style; run project's lint/format scripts before committing.

When uncertain, ask these clarifying questions
- Which `package.json` scripts should CI run (test, lint, build)?
- Is this repository TypeScript or JavaScript for new code? (look for `tsconfig.json`)
- Any external services (DB, Redis) that require local dev setup or test mocks?

If this file already existed, preserve its content and merge guidance above where applicable.

End of instructions — ask the repo owner for any missing run scripts or preferred workflows.
