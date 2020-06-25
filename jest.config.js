module.exports = {
  cacheDirectory: ".jest/cache",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "!./src/index.tsx",
    "!./src/util/serviceWorker.ts",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  coverageDirectory: ".jest/coverage/",
  coverageReporters: ["json", "lcov", "clover", "text", "text-summary"],
  displayName: {
    name: "DP",
    color: "blue",
  },
  globals: {
    __DEV__: true,
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  reporters: ["default"],
  setupFiles: ["raf/polyfill"],
  setupFilesAfterEnv: ["<rootDir>src/util/setupTests.ts"],
  testPathIgnorePatterns: ["\\.snap$", "/node_modules/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(j|t)sx?$",
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  verbose: true,
};
