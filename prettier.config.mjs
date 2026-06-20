/** @type {import("prettier").Config} */
export default {
  endOfLine: "crlf",
  plugins: ["prettier-plugin-astro"],
  proseWrap: "never",
  trailingComma: "none",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro"
      }
    }
  ]
};
