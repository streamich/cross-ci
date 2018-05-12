/// Equals to `GITHUB_TOKEN` or `GITHUB_ACCESS_TOKEN` environment variables, in that order.
const GITHUB_TOKEN =
    process.env.GITHUB_TOKEN
    || process.env.GITHUB_ACCESS_TOKEN

    // Falsy by default, because scripts should throw if GITHUB_TOKEN not provided.
    || '';

module.exports = GITHUB_TOKEN;
