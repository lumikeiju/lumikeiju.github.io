import type { ProjectProfile } from "../project";

export const openstreetmap = {
  name: "OpenStreetMap",
  slug: "openstreetmap",
  tagline:
    "Personal collection of OpenStreetMap resources including JOSM presets, validators, MapCSS styles, Overpass queries, and custom icons.",
  summary: [
    "A personal grab bag of OpenStreetMap tooling: JOSM presets, validators, MapCSS styles, Overpass queries, and other miscellaneous OSM-related things."
  ],
  stats: [
    { label: "Kind", value: "Toolkit" },
    { label: "Status", value: "Active" }
  ],
  links: [
    {
      label: "View Repository",
      href: "https://github.com/lumikeiju/openstreetmap",
      description: "Repository on GitHub.",
      kind: "repository",
      primary: true
    }
  ],
  images: [
    {
      src: "/images/openstreetmap/openstreetmap.png",
      alt: "Cartoon globe mascot holding a map pin, with binary digits overlaid on its surface.",
      width: 512,
      height: 512
    }
  ],
  template: "sidebar-rail"
} satisfies ProjectProfile;
