import type { APIRoute } from "astro";
import { registry } from "../data/registry";
import { siteName } from "../data/site";

/**
 * Site-level `/llms.txt` for the apex page. Lists every project surfaced on
 * the homepage with a one-line summary and its canonical link, so external
 * AI agents can ingest the index without scraping the HTML.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.origin : "https://lumikeiju.dev";
  const lines: string[] = [
    `# ${siteName}`,
    "",
    "> Personal home page for Lumikeiju's projects.",
    "",
    "## Projects",
    ""
  ];

  for (const entry of registry) {
    const href =
      entry.kind === "internal"
        ? `${origin}/${entry.slug}/`
        : (entry.href ?? entry.repo ?? null);
    const status = entry.status === "coming-soon" ? " (coming soon)" : "";
    if (href) {
      lines.push(`- [${entry.name}](${href})${status}: ${entry.tagline}`);
    } else {
      lines.push(`- ${entry.name}${status}: ${entry.tagline}`);
    }
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" }
  });
};
