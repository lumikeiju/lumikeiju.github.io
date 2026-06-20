import type { ProjectProfile } from "../project";
import { arkkiSnappi } from "./arkki-snappi";
import { improveNode } from "./improve-node";
import { openstreetmap } from "./openstreetmap";
import { osmUsPwg } from "./osm-us-pwg";
import { shorelineBikeParking } from "./shoreline-bike-parking";

/**
 * Lookup table for every internal project page. Keys are the URL slugs used
 * by the dynamic `[slug]/index.astro` route and the registry.
 */
export const internalProjects = {
  "arkki-snappi": arkkiSnappi,
  "improve-node": improveNode,
  openstreetmap: openstreetmap,
  "osm-us-pwg": osmUsPwg,
  "shoreline-bike-parking": shorelineBikeParking
} satisfies Record<string, ProjectProfile>;

export type InternalSlug = keyof typeof internalProjects;
