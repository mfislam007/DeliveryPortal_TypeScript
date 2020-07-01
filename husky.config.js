/**
 * Concatenates string[] of a shell command and its arguments
 * via ` `-chaining
 */
const cmd = a => {
  if (a instanceof Array && a.join) return a.join(" ");
  throw TypeError;
};

/**
 * Concatenates string[] of shell commands into one string via
 * `&&`-chaining
 */
const cmds = a => {
  if (a instanceof Array && a.join) return a.join(" && ");
  throw TypeError;
};

module.exports = {
  hooks: {
    "pre-commit": "pretty-quick --staged",
    "pre-push": cmds([
      "pretty-quick --staged",
      "yarn test --clearCache", // Clears cache and exits
      cmd([
        "yarn jest",
        "--passWithNoTests", // Passes, if there are no tests
        "--runInBand", // Tests are run sequentially
      ]),
    ]),
  },
};
