/**
 * Concatenates string[] of a shell command and its arguments
 * via ` `-chaining
 */
const cmd = (a) => {
  if (a instanceof Array && a.join) return a.join(" ");
  throw TypeError;
};

/**
 * Concatenates string[] of shell commands into one string via
 * `&&`-chaining
 */
const cmds = (a) => {
  if (a instanceof Array && a.join) return a.join(" && ");
  throw TypeError;
};

module.exports = {
  hooks: {
    "pre-commit": cmds([
      cmd(["pretty-quick", "--arrow-parens avoid", "--staged"]),
    ]),
    "pre-push": cmds([
      cmd(["pretty-quick", "--arrow-parens avoid", "--staged"]),
      cmd([
        "yarn jest",
        "--bail 1", // Exits on 1 failed test
        "--ci", // Enables mandatory `--updateSnapshot`
        "--updateSnapshot", // Re-initializes snapshots
        "--cache", // Enables caching
        "--passWithNoTests", // Passes, if there are no tests
        "--runInBand", // Tests are run sequentially
        "--verbose", // Verbose output
      ]),
    ]),
  },
};
