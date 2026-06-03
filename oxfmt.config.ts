import { defineConfig } from "oxfmt";

export default defineConfig({
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  experimentalSortImports: {
    groups: [
      ["value-builtin"],
      ["value-external"],
      ["value-internal"],
      ["value-parent", "value-sibling", "value-index"],
      ["type-import"],
      ["unknown"],
    ],
    newlinesBetween: true,
    order: "asc",
  },
  experimentalSortPackageJson: false,
  ignorePatterns: ["package.json", "pnpm-*.yaml"],
  insertFinalNewline: true,
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
});
