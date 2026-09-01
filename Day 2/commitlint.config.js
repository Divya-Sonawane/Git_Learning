module.exports = {
  extends: ["commitlint/config-conventional"],
  rules: {
    "header-match-pattern": [2, "always", /^TICKET-\d+: .+/],
  },
};
