/**
 * Project page template registry.
 *
 * Each key matches a `ProjectProfile.template` value. The slug route uses
 * this to choose which template renders a given project. New templates can
 * be added by creating a new component and registering it here.
 */
import EditorialSplit from "./EditorialSplit.astro";
import CinematicHero from "./CinematicHero.astro";
import SidebarRail from "./SidebarRail.astro";
import BentoGrid from "./BentoGrid.astro";

export type TemplateKey =
  | "editorial-split"
  | "cinematic-hero"
  | "sidebar-rail"
  | "bento-grid";

export const templates = {
  "editorial-split": EditorialSplit,
  "cinematic-hero": CinematicHero,
  "sidebar-rail": SidebarRail,
  "bento-grid": BentoGrid
} as const;

export const defaultTemplate: TemplateKey = "editorial-split";
