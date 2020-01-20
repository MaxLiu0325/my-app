const { override, addBabelPresets, addBabelPlugins, disableEsLint } = require('customize-cra');

module.exports = override(
  disableEsLint(),
  ...addBabelPresets('@emotion/babel-preset-css-prop'),
  ...addBabelPlugins(
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-optional-chaining',
    'import-graphql',
    'emotion'
  )
);
