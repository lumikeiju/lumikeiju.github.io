export type ProjectLink = {
  label: string;
  href: string;
  description: string;
  kind: "docs" | "repository" | "project" | "demo" | "other";
  primary?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  /** Intrinsic width in pixels. Set to prevent layout shift. */
  width?: number;
  /** Intrinsic height in pixels. Set to prevent layout shift. */
  height?: number;
  /**
   * Optional theme-specific source overrides. When provided, the carousel
   * shows the matching variant for the active `[data-theme]`. The base
   * `src` is used as a fallback and as the eager-loaded initial image.
   */
  srcLight?: string;
  srcDark?: string;
};

export type ProjectStat = {
  label: string;
  value: string;
};

/**
 * Identifier of the layout template used to render this project's page.
 * Must match a key in `src/components/templates/index.ts`. Omit to use the
 * default template.
 */
export type ProjectTemplate =
  | "editorial-split"
  | "cinematic-hero"
  | "sidebar-rail"
  | "bento-grid";

export type ProjectProfile = {
  name: string;
  slug: string;
  tagline: string;
  summary: string[];
  stats: ProjectStat[];
  links: ProjectLink[];
  images: ProjectImage[];
  /** Layout template to render this project with. */
  template?: ProjectTemplate;
  /** Optional theme color used for browser UI chrome and accent metadata. */
  themeColor?: string;
  /** Optional path or absolute URL to a social/OG preview image. */
  ogImage?: string;
};
