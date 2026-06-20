import type { ProjectProfile } from "../project";

export const osmUsPwg = {
  name: "OSM US PWG",
  slug: "osm-us-pwg",
  tagline:
    "Resources for the OpenStreetMap US Pedestrian Working Group, including JOSM presets, Ultra visualizations, and an archive of PWG documents.",
  summary: [
    "Shared resources for the OpenStreetMap US Pedestrian Working Group: JOSM presets, Ultra visualizations, and an archive of PWG documents."
  ],
  stats: [
    { label: "Kind", value: "Working group resources" },
    { label: "Status", value: "Active" }
  ],
  links: [
    {
      label: "View Repository",
      href: "https://github.com/lumikeiju/osm-us-pwg",
      description: "Repository on GitHub.",
      kind: "repository",
      primary: true
    }
  ],
  images: [
    {
      src: "/images/osm-us-pwg/osm-us-pwg.png",
      alt: "Pedestrian working group icon: a walking figure silhouette on a cyan circle with a black border.",
      width: 960,
      height: 960
    }
  ],
  template: "editorial-split"
} satisfies ProjectProfile;
