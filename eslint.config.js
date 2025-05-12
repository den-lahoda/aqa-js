// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPlaywright from 'eslint-plugin-playwright';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      playwright: eslintPluginPlaywright,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': 'error',
      ...eslintPluginPlaywright.configs.recommended.rules,
    },
  },
];
