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
      cmd(["yarn t", "--watchAll", "--ci", "--updateSnapshot"]),
      "q",
    ]),
  },
};
