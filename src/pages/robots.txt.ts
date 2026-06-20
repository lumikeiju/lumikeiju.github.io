import type { APIRoute } from "astro";

/**
 * Dynamic `/robots.txt` so the `Sitemap:` directive can reference the
 * deployed origin without hard-coding it.
 */
export const GET: APIRoute = ({ site }) => {
  const lines = ["User-agent: *", "Allow: /"];

  if (site) {
    const sitemap = new URL(`${import.meta.env.BASE_URL}sitemap.xml`, site)
      .href;
    lines.push("", `Sitemap: ${sitemap}`);
  }

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
};
