const URL_SCHEME_PATTERN = /^[a-z][a-z\d+.-]*:/i;

export const hasUrlScheme = (href: string): boolean =>
  URL_SCHEME_PATTERN.test(href);

export const withBasePath = (path: string): string => {
  if (hasUrlScheme(path) || path.startsWith("//") || !path.startsWith("/")) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
};

export const absoluteUrl = (path: string, site?: URL | string): string => {
  const resolvedPath = withBasePath(path);

  if (!site || hasUrlScheme(resolvedPath)) {
    return resolvedPath;
  }

  return new URL(resolvedPath, site).href;
};
