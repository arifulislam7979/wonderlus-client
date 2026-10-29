<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wonderlus

Next.js 16.4 App Router app: React 19.3, Tailwind CSS v4, shadcn (base-nova style on @base-ui/react), TypeScript strict.

## Commands (run from this directory)

- Dev server: `npm run dev`
- Production build: `npm run build`
- Start built app: `npm run start`
- Lint: `npm run lint` (flat ESLint config via `eslint.config.mjs`)
- Typecheck: `npx tsc --noEmit` (no test runner is configured)

`npm run lint` currently reports 2 pre-existing errors in `components/ui/carousel.tsx` and `hooks/use-mobile.ts` (`react-hooks/set-state-in-effect`). These are stock shadcn code, not regressions from your change.

## Conventions that differ from defaults

- Path alias `@/*` maps to the repo root (`.`), not `src/`.
- `cn` is imported from the `cn` package (`import { cn } from "cn"`); `lib/utils.ts` only re-exports it. Do not assume `clsx`/`tailwind-merge` helpers exist.
- Tailwind v4 is configured in CSS only (`app/globals.css`); there is no `tailwind.config.*`. Theme tokens live in that file.
- shadcn components use `@base-ui/react` primitives (not Radix) and the `base-nova` style. Add components with `npx shadcn add ...` using `components.json`.
- `app/layout.tsx` applies `Josefin_Sans` via `className`; `globals.css` still references an undefined `--font-geist-mono`. Do not depend on the mono font variable unless you re-add it.

## Next.js 16 quirks (see `next.config.ts`)

- `cacheComponents: true` and `partialPrefetching: true` are enabled.
- `experimental.agentFeedback: true`.
- Turbopack CSS rule routes `*.css` through `@tailwindcss/turbopack`.
- Layout uses the Next 16 global `LayoutProps<"/">` type.

## Layout

- `app/` routes: `/` and `/add-destination`. `components/ui/` shadcn components, `components/Navbar.tsx`, `hooks/`, `lib/`, `public/`.
- `.env*` is gitignored; no environment variables are documented. `next-env.d.ts` is generated and gitignored.