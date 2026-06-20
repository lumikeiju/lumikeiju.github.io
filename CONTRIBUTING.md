<!-- @format -->

# Contributing

This project does not accept external contributions.

Read [AGENTS.md](AGENTS.md) first — it covers architecture, commits, versioning, formatting, and accessibility expectations.

## Local setup

```powershell
bun install
bun run dev      # local preview
bun run build    # astro check && astro build — must pass with zero errors/warnings
bun run format   # Prettier
```

## Adding or modifying projects

1. Add or edit a `RegistryEntry` in [`src/data/registry.ts`](src/data/registry.ts).
2. If `kind: "internal"`, also add a `ProjectProfile` in [`src/data/projects/<slug>.ts`](src/data/projects/) and register it in [`src/data/projects/index.ts`](src/data/projects/index.ts).
3. If `kind: "external"`, confirm the project repo's GitHub Pages is enabled (otherwise the apex slug would shadow it the other way — see [AGENTS.md → Slug-collision rule](AGENTS.md#slug-collision-rule)).
4. Never duplicate a slug across kinds.

The dynamic route `src/pages/[slug]/index.astro` and `src/pages/[slug]/llms.txt.ts` pick up internal entries automatically.

## In scope

- Apex homepage and internal project mini-pages.
- Site-level and per-project `llms.txt` content.
- Shared layout, theme, and components in `src/components/` and `src/layouts/`.
- AI agent customization in `.github/`.

## Out of scope

- Long-form usage docs for any project — those live in [Silmärin](https://github.com/lumikeiju/silmarin).

## Common commit scopes

`homepage`, `registry`, `layout`, `carousel`, `theme`, `a11y`, `seo`, `docs`, `ci`, plus project slug scopes (`arkki-snappi`, `improve-node`, …) for single-project edits.

## Releases

When a release-worthy change lands on `main`, run the [changelog prompt](.github/prompts/changelog.prompt.md) to prepend an entry to [`CHANGELOG.md`](CHANGELOG.md) and bump the `version` in [`package.json`](package.json).

## Pull requests

1. Branch `type/scope/short-description`.
2. Focused Conventional Commits.
3. `bun run format` and `bun run build` clean.
4. Open the PR with a description of the change and any data / docs impact.
