# ts-base

ph0ryn's typescript base project

## runtime

- Bun

## script

```json
{
    "lint": "bun x eslint .",
    "format": "bun x eslint --fix . && bun x oxfmt .",
    "check": "bun x tsc --noEmit"
}
```

## Linter

- [ESLint](./eslint.config.mjs)
  - typescript-eslint
  - eslint-plugin-import-x
  - @stylistic/eslint-plugin

## Formatter

- [oxfmt](./.oxfmtrc.jsonc)
