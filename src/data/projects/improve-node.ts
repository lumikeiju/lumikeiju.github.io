import type { ProjectProfile } from "../project";

export const improveNode = {
  name: "ImproveNode",
  slug: "improve-node",
  tagline:
    "JOSM plugin for efficiently improving the positional accuracy of standalone nodes.",
  summary: [
    "ImproveNode is a JOSM plugin that streamlines the workflow for nudging standalone OpenStreetMap nodes into more accurate positions."
  ],
  stats: [
    { label: "Kind", value: "JOSM plugin" },
    { label: "Status", value: "In development" }
  ],
  links: [
    {
      label: "View Repository",
      href: "https://github.com/lumikeiju/improve-node",
      description: "Releases, source code, and project history on GitHub.",
      kind: "repository",
      primary: true
    }
  ],
  images: [
    {
      src: "/images/improve-node/improve-node.png",
      alt: "JOSM satellite view showing a standalone node being repositioned with the ImproveNode plugin; a red vector line indicates the displacement from original to corrected position.",
      width: 1440,
      height: 810
    }
  ],
  template: "cinematic-hero"
} satisfies ProjectProfile;
