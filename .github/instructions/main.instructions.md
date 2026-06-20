---
description: Project-wide conventions for the lumikeiju.dev apex site
applyTo: "**"
---

<!-- @format -->

# Project Conventions

Full conventions: [`AGENTS.md`](../../AGENTS.md). Read it first.

Quick reference:

- **Stack** — Astro static site. Bun for scripts and dependency updates.
- **Build gate** — `bun run build` (`astro check && astro build`) must report zero errors and zero warnings before any change ships.
- **Data first** — edit `src/data/registry.ts` and `src/data/projects/<slug>.ts` before touching components.
- **Public surface** — each project is exactly one of `internal` (apex mini-page) or `external` (standalone site). Slug shadowing by GitHub Pages on a project repo is silent — see [`AGENTS.md`](../../AGENTS.md#slug-collision-rule).
- **Commits** — [Conventional Commits](https://www.conventionalcommits.org/) `type(scope): description`; branches `type/scope/short-description`. Common scopes: `homepage`, `registry`, `layout`, `carousel`, `theme`, `a11y`, `seo`, `docs`, `ci`, plus project slug scopes (`arkki-snappi`, `improve-node`, …).
- **Versioning** — [SemVer](https://semver.org/); `CHANGELOG.md` and `package.json` `version` stay in sync.
- **Formatting** — Prettier (`bun run format`) + `.editorconfig`.
- **Accessibility** — [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/); see [`a11y.instructions.md`](a11y.instructions.md).
- **Aivo** — never surface the `aivo` project anywhere on this site (registry, projects, `llms.txt`, copy).

Keep customization files lean. One fact per file; others link.
