module.exports = {
  //extends: ["@commitlint/config-conventional"],
  plugins: [
    {
        rules: {
            "header-match-pattern": ({ header }) => {
                const pattern = /^TICKET-\d+: .+/;
                const valid = pattern.test(header);

                return[
                    valid, "commit message must match: TICKET-<number>: message",
                ];
            },
        },
    },
 ],
  rules: {
    "header-match-pattern": [2, "always"],
  },
};
