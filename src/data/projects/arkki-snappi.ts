import type { ProjectProfile } from "../project";

export const arkkiSnappi = {
  name: "ArkkiSnappi",
  slug: "arkki-snappi",
  tagline:
    "JOSM plugin for mapping in OpenStreetMap with a 2-axis snap grid and extrusion workflow.",
  summary: [
    "ArkkiSnappi adds a 2-axis snap grid and extrusion workflow to JOSM, making it faster to map rectilinear features in OpenStreetMap."
  ],
  stats: [
    { label: "Kind", value: "JOSM plugin" },
    { label: "Status", value: "In development" }
  ],
  links: [
    {
      label: "View Repository",
      href: "https://github.com/lumikeiju/arkki-snappi",
      description: "Releases, source code, and project history on GitHub.",
      kind: "repository",
      primary: true
    }
  ],
  images: [
    {
      src: "/images/arkki-snappi/arkki-snappi.png",
      alt: "JOSM map view showing a building footprint being drawn with the ArkkiSnappi snap grid; red extrusion arrows and white measurement labels mark each edge.",
      width: 1208,
      height: 1173
    },
    {
      src: "/images/arkki-snappi/settings.png",
      alt: "ArkkiSnappi settings panel showing snap step, default tags, behaviour checkboxes, and colour theme options.",
      width: 760,
      height: 792
    }
  ],
  template: "bento-grid"
} satisfies ProjectProfile;
