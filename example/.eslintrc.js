module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
    babelOptions: {
      presets: [
        '@babel/preset-react',
      ],
    },
    requireConfigFile: false,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'arrow-body-style': 'off',
    'no-console': 'off',
  },
};
