module.exports = {
  extends: [
    'plugin:jest/recommended',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'jest',
    'react',
  ],
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true
  },
}
