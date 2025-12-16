# ts-base

ph0ryn's typescript base project

## runtime

- Bun

## script

```json
{
    "lint": "bunx oxlint --type-aware",
    "format": "bunx eslint --fix . && bunx oxfmt .",
    "check": "bunx tsc --noEmit"
}
```

## Linter

- [ESLint](./eslint.config.mjs)
  - typescript-eslint
  - eslint-plugin-import-x
  - @stylistic/eslint-plugin

## Formatter

- [oxfmt](./.oxfmtrc.jsonc)
