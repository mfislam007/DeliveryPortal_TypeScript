const cmd = (a) => {
  if (a.join) return a.join(" ");
  throw TypeError;
};

const cmds = (a) => {
  if (a.join) return a.join(" && ");
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
        "--bail 1",
        "--ci",
        "--updateSnapshot",
        "--cache",
        "--passWithNoTests",
        "--runInBand",
        "--updateSnapshot",
        "--verbose",
      ]),
      "q",
    ]),
  },
};
