import type { APIRoute } from "astro";
import { internalProjects, type InternalSlug } from "../../data/projects";
import type { ProjectProfile } from "../../data/project";

export const getStaticPaths = () =>
  (Object.keys(internalProjects) as InternalSlug[]).map((slug) => ({
    params: { slug },
    props: { project: internalProjects[slug] }
  }));

/**
 * Per-project `/llms.txt` endpoint. Generated from the same project profile
 * that drives the visible page so both representations stay in sync.
 */
export const GET: APIRoute<{ project: ProjectProfile }> = ({ site, props }) => {
  const { project } = props;
  const baseUrl = site
    ? new URL(`${import.meta.env.BASE_URL}${project.slug}/`, site).href.replace(
        /\/$/,
        ""
      )
    : "";
  const lines: string[] = [`# ${project.name}`, "", `> ${project.tagline}`, ""];

  for (const paragraph of project.summary) {
    lines.push(paragraph, "");
  }

  if (project.stats.length > 0) {
    lines.push("## Facts", "");
    for (const stat of project.stats) {
      lines.push(`- ${stat.label}: ${stat.value}`);
    }
    lines.push("");
  }

  if (project.links.length > 0) {
    lines.push("## Links", "");
    for (const link of project.links) {
      lines.push(`- [${link.label}](${link.href}): ${link.description}`);
    }
    lines.push("");
  }

  if (baseUrl) {
    lines.push("## Source", "", `- Project page: ${baseUrl}/`, "");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" }
  });
};
