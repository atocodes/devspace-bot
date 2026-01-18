
# Devspace Bot

Project scaffold for a Telegram bot platform that integrates multiple chat adapters and a small domain model backed by SQLite. This README gives a compact architecture overview and a quick-start guide so you can begin building features.

**Project Overview**
- **What it is:** A modular bot framework focused on Telegram with adapter-based chat providers, use-cases for domain logic, and a lightweight SQLite persistence layer.
- **Primary language:** TypeScript / Node.js
- **Runtime:** Local development and likely container-based deployment (small footprint).

**High-level Architecture**
- **Adapters:** Contains chat provider integrations (e.g., Gemini, Ollama) under `src/adapters/chat` and central adapter wiring in `src/adapters/index.ts`.
- **Bots:** Telegram-specific bot implementation lives in `src/bots/telegram` — handlers, commands, middlewares, scenes, tasks, and utilities are organized there.
- **Domain:** Core entities and repository interfaces are in `src/domain` (entities + repositories). Implementations for SQLite are in `src/database/sqlite/repositories`.
- **Infrastructure:** `src/infrastructure` contains DI/container wiring (`container.ts`) and config management under `src/config`.
- **Database:** SQLite connection/migrations/models are under `src/database/sqlite`.

**Key Folders (quick map)**
- `src/bots/telegram` — Telegram bot entry, handlers, conversations, middlewares, and bot-specific utilities.
- `src/adapters/chat` — Chat provider adapters (e.g., Gemini, Ollama) and prompts.
- `src/domain` — Entities (`topic.model.ts`) and repository interfaces.
- `src/infrastructure` — DI container and app configuration.
- `src/database/sqlite` — Connection, migrations, models, and repository implementations.
- `src/app.ts` / `src/index.ts` — App entry points and startup wiring.

**Quick Start (local dev)**
Prerequisites:
- Node.js (recommended 18+)
- pnpm (recommended) or npm/yarn

Install dependencies:

```
pnpm install
```

Environment:
- The project uses `src/config/*` for environment handling. Create a local `.env` or set required environment variables as appropriate for bot tokens and DB paths. Check `src/config/env.config.ts` for expected variables.

Run in development:

```
pnpm run dev
```

Notes:
- If `dev` script is not present, inspect `package.json` for available scripts (start, build, dev, migrate).
- `nodemon.json` is present — the project supports live-reload during development.

**Database**
- SQLite is configured under `src/database/sqlite`. Migrations and model definitions are included; run migrations or ensure the DB file exists before starting if required.

**Developing features**
- Add domain logic in `src/domain` and expose behavior via use-cases in `src/adapters/use-cases` so adapters/handlers remain thin.
- Place platform-specific glue in `src/bots/telegram` (handlers, middlewares, scenes). Reuse adapter interfaces for other chat providers.
- Use the DI container in `src/infrastructure/container.ts` to register and inject implementations for repositories, adapters, and services.

**Testing & linting**
- Add unit tests next to modules or under a `tests/` folder. Use your preferred test runner (e.g., Vitest, Jest).

**CONTRIBUTING**
- **Run locally:**

```bash
pnpm install
# create a .env from .env.example (if present) and set bot tokens / DB path
pnpm run dev
```

- **Tests:**
	- Add unit tests for new logic and run the test script (e.g., `pnpm test` or your chosen runner).
	- Ensure types compile: `pnpm build` or `tsc --noEmit`.

- **Database/migrations:**
	- If you change schema, add/adjust migrations under `src/database/sqlite/migrations` and ensure the local SQLite file is created.

- **How to add a feature:**
 1. Create a branch `feat/<short-desc>`.
 2. Implement domain changes in `src/domain` and use-cases in `src/adapters/use-cases`.
 3. Add platform glue in `src/bots/telegram` (handlers, scenes, middlewares) or a corresponding adapter.
 4. Register services/repositories in `src/infrastructure/container.ts`.
 5. Add unit tests and update `README.MD` or docs if public behavior changes.

- **Code style & reviews:**
	- Keep TypeScript typings strict and follow existing formatting (run your formatter/linter before PR).

- **Commit messages:**
	- Use concise, descriptive commits (e.g., `feat: add topic repository`, `fix: handle missing env var`).

Thanks for contributing — open an issue or PR if you're unsure about design choices.


