/**
 * Canonical registry of every Lumikeiju project surfaced on the apex site.
 *
 * - `internal` entries get a dedicated mini-page at `lumikeiju.dev/<slug>/`
 *   generated from `src/data/projects/<slug>.ts`.
 * - `external` entries have their own home (separate Pages site or any other
 *   URL); the apex homepage links out to them and never generates a route at
 *   the same slug.
 *
 * Slug-collision rule: do **not** enable GitHub Pages on a repo whose slug
 * appears here as `internal`. The apex site is the source of truth for that
 * slug, and a project-repo Pages site would silently shadow it.
 *
 * Entry order is the homepage display order.
 */

export type RegistryEntry = {
  /** Display name shown on the homepage card. */
  name: string;
  /** URL slug; for internal entries this is the route under `lumikeiju.dev/`. */
  slug: string;
  /** One-line description used on the homepage card. */
  tagline: string;
  /** GitHub source link, when public. */
  repo?: string;
  /** Lifecycle marker. `coming-soon` suppresses the primary link. */
  status: "live" | "coming-soon";
} & (
  | {
      kind: "internal";
      /** Internal entries are always rendered as `/<slug>/`. */
      href?: never;
    }
  | {
      kind: "external";
      /** Absolute or apex-relative URL the homepage links to. Omit when `coming-soon`. */
      href?: string;
    }
);

export const registry: RegistryEntry[] = [
  {
    kind: "external",
    name: "Silmärin",
    slug: "silmarin",
    tagline: "Library for documentation of Lumikeiju's projects.",
    repo: "https://github.com/lumikeiju/silmarin",
    href: "https://lumikeiju.dev/silmarin/",
    status: "live"
  },
  {
    kind: "internal",
    name: "ArkkiSnappi",
    slug: "arkki-snappi",
    tagline:
      "JOSM plugin for mapping in OpenStreetMap with a 2-axis snap grid and extrusion workflow.",
    repo: "https://github.com/lumikeiju/arkki-snappi",
    status: "live"
  },
  {
    kind: "external",
    name: "Pride Map",
    slug: "pride-map",
    tagline:
      "Ultra-powered visualization of LGBTQ+-friendliness data in OpenStreetMap.",
    repo: "https://github.com/lumikeiju/pride-map",
    href: "https://lumikeiju.dev/pride-map/",
    status: "live"
  },
  {
    kind: "internal",
    name: "OSM US PWG",
    slug: "osm-us-pwg",
    tagline:
      "Resources for the OpenStreetMap US Pedestrian Working Group, including JOSM presets, Ultra visualizations, and an archive of PWG documents.",
    repo: "https://github.com/lumikeiju/osm-us-pwg",
    status: "live"
  },
  {
    kind: "internal",
    name: "ImproveNode",
    slug: "improve-node",
    tagline:
      "JOSM plugin for efficiently improving the positional accuracy of standalone nodes.",
    repo: "https://github.com/lumikeiju/improve-node",
    status: "live"
  },
  {
    kind: "internal",
    name: "OpenStreetMap",
    slug: "openstreetmap",
    tagline:
      "Personal collection of OpenStreetMap resources including JOSM presets, validators, MapCSS styles, Overpass queries, and custom icons.",
    repo: "https://github.com/lumikeiju/openstreetmap",
    status: "live"
  },
  {
    kind: "internal",
    name: "Shoreline Bike Parking",
    slug: "shoreline-bike-parking",
    tagline:
      "Archive data repository holding the Shoreline, WA, US bike parking dataset provided by the City of Shoreline with explicit permission for OSM import.",
    repo: "https://github.com/lumikeiju/shoreline-bike-parking",
    status: "live"
  },
  {
    kind: "external",
    name: "Sidewalk Spider",
    slug: "sidewalk-spider",
    tagline:
      "Web-based editor for associating sidewalks and streets in OpenStreetMap.",
    status: "coming-soon"
  },
  {
    kind: "external",
    name: "Kielisilta",
    slug: "kielisilta",
    tagline:
      "Web utility for translating existing geospatial data into OSM-ready formats with custom field mapping and reprojection.",
    status: "coming-soon"
  }
];

export const internalSlugs = registry
  .filter(
    (entry): entry is RegistryEntry & { kind: "internal" } =>
      entry.kind === "internal"
  )
  .map((entry) => entry.slug);
