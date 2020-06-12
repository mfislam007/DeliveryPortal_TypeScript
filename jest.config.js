const { defaults } = require("jest-config");

module.exports = {
  name: "delivery-portal",
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  globals: {
    __DEV__: true,
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testPathIgnorePatterns: ["\\.snap$", "/node_modules/"],
  cacheDirectory: ".jest/cache",
};
