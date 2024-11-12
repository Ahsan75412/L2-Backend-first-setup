import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  module.exports = [
    // Any other config imports go at the top
    eslintPluginPrettierRecommended,
  ],
  {
 
    rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
//   {
//     ignores: [".node_modules/*"]
// },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];