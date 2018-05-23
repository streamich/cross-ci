const url = require('url');
const pkg = require('../pkg');

// Git version control system used
const GIT_PLATFORM = ({CI_PLATFORM}) => {
    if (process.env.GIT_PLATFORM) {
        return process.env.GIT_PLATFORM;
    }

    if (CI_PLATFORM === 'gitlab') {
        return 'gitlab';
    }

    try {
        const hostname = new url.URL(pkg.repository.url).hostname;

        switch (hostname) {
        case 'github.com':
            return 'github';
        case 'bitbucket.org':
            return 'bitbucket';
        case 'gitlab.com':
            return 'gitlab';
        }
    // eslint-disable-next-line no-empty
    } catch (error) {}

    return 'github';
};

module.exports = GIT_PLATFORM;
