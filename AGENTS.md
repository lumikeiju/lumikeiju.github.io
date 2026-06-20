<!-- @format -->

# AGENTS.md

Repository guidance for AI coding agents working on the **lumikeiju.dev** apex Astro site.

## What this repo is

A multi-page Astro static site deployed to **[lumikeiju.dev](https://lumikeiju.dev)**. It hosts:

- The Lumikeiju project index at `/`.
- Internal project mini-pages at `/<slug>/` for projects without a standalone hosted site.
- Per-project and site-level `llms.txt` endpoints.

External projects (those with their own GitHub Pages deployment under `lumikeiju.dev/<repo>/`) are linked from the homepage but **not** routed inside this repo.

## Repo layout

- [`src/data/registry.ts`](src/data/registry.ts) — canonical project list driving the homepage and the sitemap. Marks each project `internal` or `external`.
- [`src/data/projects/`](src/data/projects/) — per-project `ProjectProfile` data files for the `internal` entries. Add new projects here and register them in `index.ts`.
- [`src/components/`](src/components/) — shared page sections (hero, project grid, project links, image carousel, theme toggle).
- [`src/layouts/SiteLayout.astro`](src/layouts/SiteLayout.astro) — common `<head>`, metadata, theme init, skip link. Accepts an optional `project` prop for per-project JSON-LD.
- [`src/pages/`](src/pages/) — routes. `index.astro` is the homepage; `[slug]/index.astro` generates the internal mini-pages; `[slug]/llms.txt.ts` generates per-project LLM summaries; `llms.txt.ts`, `sitemap.xml.ts`, `robots.txt.ts`, and `404.astro` round out the apex.
- [`public/`](public/) — static assets including the `CNAME` and `favicon.png`.

## Where the rules live

| Concern | File |
| --- | --- |
| Repo-wide rules | [`.github/instructions/main.instructions.md`](.github/instructions/main.instructions.md) |
| Accessibility rules | [`.github/instructions/a11y.instructions.md`](.github/instructions/a11y.instructions.md) |
| Accessibility audits | [`.github/agents/accessibility-ally.agent.md`](.github/agents/accessibility-ally.agent.md) |
| Release entries | [`.github/prompts/changelog.prompt.md`](.github/prompts/changelog.prompt.md) |
| Contributor flow | [`CONTRIBUTING.md`](CONTRIBUTING.md) |
| Deployment | [`.github/workflows/build.yml`](.github/workflows/build.yml) |

The Copilot-specific entry point [`.github/copilot-instructions.md`](.github/copilot-instructions.md) just points back here.

## Default working agreement

- Edit `src/data/registry.ts` and `src/data/projects/<slug>.ts` before touching components — the data files are the single source of truth for what appears on the site.
- Keep long-form documentation in **Silmärin**, not in any apex mini-page.
- Use Bun for scripts and dependency updates.
- Run `bun run build` (`astro check` + `astro build`) before finishing. Zero errors, zero warnings.
- Run `bun run format` before committing.
- Conform to [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/) on every change.
- Use [Conventional Commits](https://www.conventionalcommits.org/) and [Semantic Versioning](https://semver.org/). Keep `CHANGELOG.md` and `package.json` `version` in sync; generate entries via the [changelog prompt](.github/prompts/changelog.prompt.md).
- Branch names: `type/scope/short-description`. Common scopes: `homepage`, `registry`, `layout`, `carousel`, `theme`, `a11y`, `seo`, `docs`, `ci`, plus project slug scopes such as `arkki-snappi`, `improve-node`, etc. when editing a single project profile.

## Slug-collision rule

GitHub Pages serves project-repo Pages with precedence over apex-repo paths. Never enable GitHub Pages on a project repository whose slug is registered here as `kind: "internal"`. Mark self-hosted projects as `kind: "external"` and link out to them from the homepage instead.

## LLM-friendly endpoints

- `/llms.txt` — site-level index (every project from `registry.ts`).
- `/<slug>/llms.txt` — per-project summary for each internal project, generated from the same profile that renders the visible page.

External AI agents should fetch these endpoints instead of scraping the rendered HTML.

## Deployment

GitHub Pages deploys the `dist/` output. The site URL is fixed to `https://lumikeiju.dev` in [`.github/workflows/build.yml`](.github/workflows/build.yml) via `SITE_URL`. The CNAME ([`public/CNAME`](public/CNAME)) and favicon ship as static assets through `public/`.

## Aivo

The `aivo` project is intentionally not surfaced anywhere on this site. Do not add it to `src/data/registry.ts`, `src/data/projects/`, `llms.txt`, or any link or copy on the apex site.
