/**
 * Site-level constants and metadata for the lumikeiju.dev apex site.
 *
 * Project-specific facts live in `src/data/projects/<slug>.ts`. The site
 * homepage and the apex-level metadata pull from this file.
 */

export const siteName = "Lumikeiju.dev";

/**
 * Apex theme color used for the homepage and as the default for project
 * pages without one. Matches the CSS `--brand` token in `src/styles/theme.css`,
 * which is the lightest blue that still clears WCAG 2.2 AA 4.5:1 contrast
 * against white text for `.btn--primary`.
 */
export const siteThemeColor = "#0066cc";

/** localStorage key for the per-visitor theme override. Shared across all pages. */
export const themeStorageKey = "lumikeiju-theme";
