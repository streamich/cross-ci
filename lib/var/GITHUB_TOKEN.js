/// Equals to `GITHUB_TOKEN`, `GITHUB_ACCESS_TOKEN`, `GH_TOKEN`, or `GIT_CREDENTIALS` environment variables, in that order.
const GITHUB_TOKEN = () =>
    process.env.GITHUB_TOKEN
    || process.env.GITHUB_ACCESS_TOKEN
    || process.env.GH_TOKEN
    || process.env.GIT_CREDENTIALS

    // Falsy by default, because scripts should throw if GITHUB_TOKEN not provided.
    || '';

module.exports = GITHUB_TOKEN;
