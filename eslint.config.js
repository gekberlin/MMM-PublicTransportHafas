const globals = require("globals");
const eslintPluginNode = require("eslint-plugin-n");
const eslintPluginEslintPluginRecommended = require("eslint-plugin-eslint-plugin/configs/recommended");
const importPlugin = require("eslint-plugin-import");
const {configs: eslintConfigs} = require("@eslint/js");
const stylistic = require("@stylistic/eslint-plugin");

module.exports = [
  eslintConfigs.all,
  eslintPluginNode.configs["flat/recommended"],
  eslintPluginEslintPluginRecommended,
  stylistic.configs["all-flat"],
  {
    files: ["**/*.cjs", "**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      ...importPlugin.configs.recommended.rules,
      "consistent-this": "off",
      "capitalized-comments": "off",
      "default-case": "off",
      "func-style": "off",
      "init-declarations": "off",
      "line-comment-position": "off",
      "max-lines": "off",
      "max-lines-per-function": ["error", 100],
      "max-params": "off",
      "max-statements": ["error", 25],
      "multiline-comment-style": "off",
      "no-await-in-loop": "off",
      "n/no-missing-require": "off",
      "n/no-unpublished-require": "off",
      "no-inline-comments": "off",
      "no-magic-numbers": "off",
      "no-undef": "warn",
      "no-ternary": "off",
      "one-var": "off",
      "sort-keys": "off",
      "sort-vars": "off",
      strict: "off",
      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/lines-around-comment": "off",
      "@stylistic/object-property-newline": "off",
      "@stylistic/quote-props": ["error", "as-needed"],
      "@stylistic/padded-blocks": ["error", "never"]
    }
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.node
      },
      sourceType: "module"
    },
    rules: {
      "func-style": "off",
      "max-lines-per-function": ["error", 100],
      "no-magic-numbers": "off",
      "one-var": "off",
      "prefer-destructuring": "off"
    }
  }
];
