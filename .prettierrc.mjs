/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-astro-organize-imports"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  singleQuote: false,
  useTabs: false,
  endOfLine: "lf",
};
