module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true,
        allowDeclareFields: true,
      },
    ],
  ];

  const plugins = [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-typescript",
      {
        allowNamespaces: true,
      },
    ],
    "@babel/plugin-transform-react-jsx",
  ];

  return {
    presets,
    plugins,
  };
};
