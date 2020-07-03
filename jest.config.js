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
  moduleNameMapper: {
    "^.+\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less|sass|scss)$":
      "<rootDir>src/mocks/binaryFileMock.ts",
  },
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
