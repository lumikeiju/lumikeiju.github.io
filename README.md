<!-- @format -->

# lumikeiju.dev

The apex Astro static site for **[lumikeiju.dev](https://lumikeiju.dev)**. It is both the project index and the host for the small mini-pages that don't need their own GitHub Pages deployment.

## Architecture

- One homepage at `/` lists every project from [`src/data/registry.ts`](src/data/registry.ts).
- Each `internal` registry entry gets a dedicated mini-page at `lumikeiju.dev/<slug>/`, generated from `src/data/projects/<slug>.ts` via [`src/pages/[slug]/index.astro`](src/pages/[slug]/index.astro).
- Each `external` entry just contributes a link card on the homepage; the actual page is served by another repository's GitHub Pages site (or any URL listed in the registry).
- Per-project LLM summaries are exposed at `lumikeiju.dev/<slug>/llms.txt`, plus a site-level `lumikeiju.dev/llms.txt` covering the project index.

### Slug-collision rule

GitHub Pages serves project-repo Pages **with precedence** over apex-repo paths. If a slug appears here as `kind: "internal"`, the matching project repository must **not** have GitHub Pages enabled — otherwise it would silently shadow the apex mini-page. The reverse also holds: project repos that host their own site are listed as `kind: "external"` so the apex never tries to claim the same path.

## Stack

- Astro static output
- TypeScript
- Bun for dependency management and scripts
- Prettier for formatting
- GitHub Pages for deployment

## Commands

Run from the repository root:

```powershell
bun install
bun run dev
bun run build
bun run preview
bun run format
```

`bun run build` runs `astro check` before generating the static site in `dist/`.

## Adding a project

1. Add an entry to `src/data/registry.ts` (set `kind` to `"internal"` or `"external"`).
2. For an internal project, add a profile at `src/data/projects/<slug>.ts` matching the `ProjectProfile` shape, and register it in `src/data/projects/index.ts`.
3. Drop preview images into `public/images/<slug>/` and reference them as `/images/<slug>/<file>` from the profile's `images` array. Set `width` and `height` to prevent layout shift.
4. Run `bun run build` and verify zero errors and zero warnings.
5. If the project repository previously hosted its own GitHub Pages site for the same slug, disable Pages on that repository **before** the apex deploy lands; otherwise the project repo will continue to shadow the apex mini-page.

## Deployment

`.github/workflows/build.yml` builds the static site and deploys `dist/` to GitHub Pages. The apex CNAME (`public/CNAME`) points the deployment at `lumikeiju.dev`.

## License

Released under the MIT License. See [LICENSE](LICENSE).
