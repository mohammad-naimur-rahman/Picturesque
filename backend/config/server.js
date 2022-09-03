module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", [
      "dIgGwBcSHCH5zSf2uPy1hg==",
      "mkx1+rMeQzWoUawvY4z0kA==",
      "ZlfBm5jBLs0IXoVQP8mNOw==",
      "8CdiuSPS1qxG/fwHAp6jeA==",
    ]),
  },
});
