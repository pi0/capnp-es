import unjs from "eslint-config-unjs";

export default unjs({
  ignores: ["test/fixtures/*.*"],
  rules: {
    "unicorn/prefer-code-point": 0,
    "unicorn/no-null": 0,
    "unicorn/prefer-spread": 0,
  },
});
