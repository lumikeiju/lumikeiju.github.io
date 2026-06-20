import type { ProjectProfile } from "../data/project";

/**
 * Sample project profile used by the temporary `/example1/`-`/example5/`
 * layout candidates. Not part of the registry. The leading underscore on the
 * filename keeps Astro from treating this as a route.
 */
export const sampleProject = {
  name: "Sample Project",
  slug: "example",
  tagline:
    "A representative Lumikeiju project profile used to evaluate page layouts: enough copy, enough metadata, and a small gallery of theme-aware screenshots.",
  summary: [
    "This is a stand-in project used only for evaluating alternative page layouts. The text length and image count roughly match a real project profile so visual decisions translate cleanly to production data.",
    "Each layout candidate consumes the same data so differences come purely from structure, hierarchy, and visual treatment — not from the underlying content.",
    "Repository links, documentation links, and demo links all behave like the real components: external targets open in a new tab, internal targets stay in-app, and the gallery supports both light and dark theme assets."
  ],
  stats: [
    { label: "Kind", value: "Web tool" },
    { label: "Status", value: "Active" },
    { label: "Stack", value: "Astro + TS" },
    { label: "Year", value: "2026" }
  ],
  links: [
    {
      label: "View Repository",
      href: "https://github.com/lumikeiju/example",
      description: "Source code, issues, and project history on GitHub.",
      kind: "repository",
      primary: true
    },
    {
      label: "Documentation",
      href: "https://lumikeiju.dev/silmarin/",
      description: "Long-form documentation and import notes in Silmärin.",
      kind: "docs"
    },
    {
      label: "Live Demo",
      href: "https://lumikeiju.dev/pride-map/",
      description: "Try the hosted version with sample data preloaded.",
      kind: "demo"
    }
  ],
  images: [
    {
      src: "/images/example1/example1-1.dark.png",
      srcLight: "/images/example1/example1-1.light.png",
      srcDark: "/images/example1/example1-1.dark.png",
      alt: "Worldwide map of LGBTQ+-friendly venues rendered as rainbow heart markers.",
      caption:
        "Pride Map — global view of OSM venues tagged as LGBTQ+ friendly.",
      width: 1440,
      height: 810
    },
    {
      src: "/images/example2/example2-1.dark.png",
      srcLight: "/images/example2/example2-1.light.png",
      srcDark: "/images/example2/example2-1.dark.png",
      alt: "Sidewalk Marker welcome dialog overlaying a street map.",
      caption: "Sidewalk Marker — onboarding tutorial dialog.",
      width: 1440,
      height: 810
    },
    {
      src: "/images/example2/example2-2.dark.png",
      srcLight: "/images/example2/example2-2.light.png",
      srcDark: "/images/example2/example2-2.dark.png",
      alt: "Sidewalk Marker map view with highlighted sidewalks and streets in Seattle.",
      caption: "Sidewalk Marker — editor view with pending associations.",
      width: 1440,
      height: 810
    }
  ]
} satisfies ProjectProfile;
