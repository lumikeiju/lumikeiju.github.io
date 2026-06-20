/**
 * Shared link helpers used by the project page components.
 */

/** Allowed URL schemes for rendered anchor hrefs. Blocks javascript: and data: injection. */
const SAFE_SCHEMES = /^(https?|mailto):\/\//i;

/** Returns true for absolute HTTP(S) links that should leave the project page context. */
export const isExternal = (href: string): boolean => /^https?:\/\//i.test(href);

/**
 * Returns true if the href uses a known-safe URL scheme.
 * Prevents javascript: and data: URLs from being rendered as links.
 */
export const isSafeHref = (href: string): boolean =>
  SAFE_SCHEMES.test(href) || href.startsWith("/") || href.startsWith("#");

/** Attributes to apply to external anchors for safe `target="_blank"` usage. */
export const externalLinkAttrs = (href: string) =>
  isExternal(href)
    ? ({ rel: "noopener noreferrer", target: "_blank" } as const)
    : ({ rel: undefined, target: undefined } as const);
