import type { ProjectProfile } from "../project";

export const shorelineBikeParking = {
  name: "Shoreline Bike Parking",
  slug: "shoreline-bike-parking",
  tagline:
    "Archive data repository holding the Shoreline, WA, US bike parking dataset provided by the City of Shoreline with explicit permission for OSM import.",
  summary: [
    "Archive repository for the Shoreline, Washington, US bike parking dataset, provided by the City of Shoreline with explicit permission for import into OpenStreetMap."
  ],
  stats: [
    { label: "Kind", value: "Data archive" },
    { label: "Status", value: "Archived" }
  ],
  links: [
    {
      label: "View Repository",
      href: "https://github.com/lumikeiju/shoreline-bike-parking",
      description: "Source data, license, and provenance on GitHub.",
      kind: "repository",
      primary: true
    }
  ],
  images: [
    {
      src: "/images/shoreline-bike-parking/shoreline-bike-parking.png",
      alt: "Dark aerial satellite map of Shoreline, Washington with red dots marking each surveyed bike parking location across the city.",
      width: 1440,
      height: 810
    }
  ],
  template: "cinematic-hero"
} satisfies ProjectProfile;
