module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb',
  ],
  env: {
    node: true,
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
    'react/prop-types': 'off',
    'react/button-has-type': 'off',
  },
};
