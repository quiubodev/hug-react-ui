module.exports = {
  env: { browser: true, jest: true, node: true},
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    "eslint:recommended",                   // ESLint recommended rules
    "plugin:react/recommended",             // React recommended rules
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
    "plugin:@typescript-eslint/eslint-recommended", // ESLint overrides for TypeScript
    "prettier",                             // Prettier rules
    "plugin:prettier/recommended",          // Prettier plugin integration
    "plugin:react-hooks/recommended",       // Recommended rules for React hooks
    "plugin:storybook/recommended",          // Recommended rules for Storybook
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
    settings: {
        react: {
        version: 'detect',
        },
    },
}
