# eslint-plugin-stylistic-compat

This is a fork of `@stylistic/eslint-plugin` based on v3.x version, supporting Node.js legacy versions (Node.js >= 12).
If you need the latest features of `@stylistic/eslint-plugin`, please use the latest version of `@stylistic/eslint-plugin`.

> Q: Why is this compatibility version based on v3.x?
> A: ESLint Stylistic since v4 only supports ESLint v9, and ESLint v9 requires Node.js >= 18. If you want to use the latest features, please use the latest version of `@stylistic/eslint-plugin` directly.

## Supported Versions

- **Node.js**: >= 12.0.0
- **ESLint**: >= 8 < 9

## Usage Differences from Original

The plugin name and rule prefixes change from `@stylistic` to `stylistic-compat`:

```js
// Original
module.exports = {
  plugins: ['@stylistic'],
  extends: ['plugin:@stylistic/disable-legacy'],
  rules: {
    '@stylistic/semi': 'error'
  },
}

// Compatibility version
module.exports = {
  plugins: ['stylistic-compat'],
  extends: ['plugin:stylistic-compat/disable-legacy'],
  rules: {
    'stylistic-compat/semi': 'error'
  },
}
```

> # @stylistic/eslint-plugin

> Stylistic rules for ESLint, works for both JavaScript and TypeScript.

> This plugin is a merge of `@stylistic/eslint-plugin-js` and `@stylistic/eslint-plugin-ts`.

> Check the [documentation](https://eslint.style/packages/default) for more details.
