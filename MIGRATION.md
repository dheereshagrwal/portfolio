# Migrating from ESLint to Oxlint & Oxfmt

A simple guide for replacing ESLint with [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) for fast, Rust-powered linting and formatting in Next.js & TypeScript.

---

## 1. Install Oxlint & Oxfmt

```bash
pnpm add -D oxlint oxfmt
```

## 2. Remove ESLint Dependencies

```bash
pnpm remove eslint eslint-config-next @eslint/eslintrc
```

## 3. Remove Legacy Config Files

```bash
rm -f eslint.config.mjs .eslintrc*
```

## 4. Initialize Configuration

Initialize `.oxfmtrc.json` for formatter configuration:

```bash
pnpm exec oxfmt --init
```

_(Optional)_ Initialize `.oxlintrc.json` for custom linter rules:

```bash
pnpm exec oxlint --init
```

## 5. Add Scripts to `package.json`

```json
{
  "scripts": {
    "lint": "oxlint",
    "lint:fix": "oxlint --fix",
    "fmt": "oxfmt",
    "fmt:check": "oxfmt --check",
    "type-check": "tsc --noEmit"
  }
}
```

## 6. Verify

```bash
# Check formatting
pnpm run fmt:check

# Format files
pnpm run fmt

# Lint files
pnpm run lint

# Check types
pnpm run type-check
```
