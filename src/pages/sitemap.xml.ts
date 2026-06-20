import type { APIRoute } from "astro";
import { internalSlugs } from "../data/registry";

/**
 * Static sitemap for the apex Lumikeiju site. Covers the homepage plus every
 * internal project mini-page generated under `[slug]/index.astro`. External
 * project repos that are hosted separately maintain their own sitemaps.
 */
export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response("", { status: 204 });
  }

  const base = import.meta.env.BASE_URL;
  const home = new URL(base, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls: string[] = [
    `  <url>\n    <loc>${home}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>`
  ];

  for (const slug of internalSlugs) {
    const loc = new URL(`${base}${slug}/`, site).href;
    urls.push(
      `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.join("\n") +
    `\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
};
