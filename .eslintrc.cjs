module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // "eslint:recommended",
    "@hh.ru/eslint-config",
    // "prettier",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:react-hooks/recommended"
  ],

  "overrides": [
    {
      "files": "*.{ts,tsx}",
      "extends": "@hh.ru/eslint-config/typescript",
    },
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-empty': 'warn',
    'no-cond-assign': ['error', 'always'],

    'for-direction': 'off',
  },
};
