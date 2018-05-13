const {execSync} = require('child_process');

const evar = (name, prefix = '') =>
    execSync(`${prefix ? prefix + ' ' : ''}node ./bin/cross-ci.js node lib/echo.js ${name}`).toString().trim();

describe('integration', () => {
    describe('YEAR', () => {
        test('equals to current year', () => {
            expect(evar('YEAR')).toBe((new Date()).toJSON().substr(0, 4));
        });
    });

    describe('MONTH', () => {
        test('equals to current month', () => {
            expect(evar('MONTH')).toBe((new Date()).toJSON().substr(5, 2));
        });
    });

    describe('BRANCH_PRODUCTION', () => {
        test('defaults to master', () => {
            expect(evar('BRANCH_PRODUCTION')).toBe('master');
        });

        test('can be overwritten', () => {
            expect(evar('BRANCH_PRODUCTION', 'BRANCH_PRODUCTION=foobar')).toBe('foobar');
        });
    });

    describe('BRANCH_STAGING', () => {
        test('defaults to next-release', () => {
            expect(evar('BRANCH_STAGING')).toBe('next-release');
        });

        test('can be overwritten', () => {
            expect(evar('BRANCH_STAGING', 'BRANCH_STAGING=foobar')).toBe('foobar');
        });
    });

    describe('BRANCH_URL', () => {
        test('returns URL', () => {
            expect(evar('BRANCH_URL').substr(0, 4)).toBe('http');
        });
    });

    describe('BUILD_BRANCH', () => {
        test('uses CIRCLE_BRANCH', () => {
            expect(evar('BUILD_BRANCH', 'CIRCLE_BRANCH=foobar')).toBe('foobar');
        });

        test('uses TRAVIS_PULL_REQUEST_BRANCH', () => {
            expect(evar('BUILD_BRANCH', 'TRAVIS=yes TRAVIS_PULL_REQUEST_BRANCH=foobar')).toBe('foobar');
        });

        test('uses TRAVIS_BRANCH', () => {
            expect(evar('BUILD_BRANCH', 'TRAVIS=yes TRAVIS_BRANCH=foobar')).toBe('foobar');
        });

        test('uses BUILD_BRANCH', () => {
            expect(evar('BUILD_BRANCH', 'BUILD_BRANCH=foobar')).toBe('foobar');
        });
    });

    describe('BUILD_COMMIT_PR_URL', () => {
        test('returns URL', () => {
            expect(evar('BUILD_COMMIT_PR_URL').substr(0, 4)).toBe('http');
        });
    });

    describe('BUILD_COMMIT_URL', () => {
        test('returns URL', () => {
            expect(evar('BUILD_COMMIT_URL').substr(0, 4)).toBe('http');
        });
    });

    describe('BUILD_COMMIT', () => {
        test('uses CIRCLE_SHA1', () => {
            expect(evar('BUILD_COMMIT', 'CIRCLE_SHA1=foobar')).toBe('foobar');
        });

        test('uses TRAVIS_PULL_REQUEST_SHA', () => {
            expect(evar('BUILD_COMMIT', 'TRAVIS=yes TRAVIS_PULL_REQUEST_SHA=foobar')).toBe('foobar');
        });

        test('uses TRAVIS_COMMIT', () => {
            expect(evar('BUILD_COMMIT', 'TRAVIS=yes TRAVIS_COMMIT=foobar')).toBe('foobar');
        });
    });

    describe('BUILD_NUM', () => {
        test('uses BUILD_NUM', () => {
            expect(evar('BUILD_NUM', 'BUILD_NUM=123')).toBe('123');
        });

        test('uses CIRCLE_BUILD_NUM', () => {
            expect(evar('BUILD_NUM', 'CIRCLE_BUILD_NUM=123')).toBe('123');
        });

        test('uses TRAVIS_BUILD_NUMBER', () => {
            expect(evar('BUILD_NUM', 'TRAVIS=yes TRAVIS_BUILD_NUMBER=123')).toBe('123');
        });

        test('uses BUILD_NUMBER', () => {
            expect(evar('BUILD_NUM', 'TRAVIS=yes BUILD_NUMBER=123')).toBe('123');
        });
    });

    describe('BUILD_PR_NUM', () => {
        test('uses CI_PULL_REQUEST', () => {
            expect(evar('BUILD_PR_NUM', 'CI_PULL_REQUEST="https://github.com/streamich/cross-ci/pull/3"')).toBe('3');
        });

        test('uses TRAVIS_PULL_REQUEST', () => {
            expect(evar('BUILD_PR_NUM', 'TRAVIS=yes TRAVIS_PULL_REQUEST=25')).toBe('25');
        });

        test('uses BUILD_PR_NUM', () => {
            expect(evar('BUILD_PR_NUM', 'BUILD_PR_NUM=25')).toBe('25');
        });
    });

    describe('BUILD_PR_URL', () => {
        test('returns URL', () => {
            expect(evar('BUILD_PR_URL').substr(0, 4)).toBe('http');
        });
    });

    describe('BUILD_URL', () => {
        test('defaults to empty string', () => {
            expect(evar('BUILD_URL')).toBe('');
        });

        test('uses CIRCLE_BUILD_URL', () => {
            expect(evar('BUILD_URL', 'CIRCLE_BUILD_URL=http://example.com')).toBe('http://example.com');
        });

        test('constructs URL for Travis', () => {
            expect(evar('BUILD_URL', 'CI_PLATFORM=YES TRAVIS=YES').substr(0, 4)).toBe('http');
        });
    });

    describe('CI_PLATFORM', () => {
        test('defaults to ___UNKNOWN_CI_PLATFORM___', () => {
            expect(evar('CI_PLATFORM')).toBe('___UNKNOWN_CI_PLATFORM___');
        });

        test('uses CIRCLECI', () => {
            expect(evar('CI_PLATFORM', 'CIRCLECI=yes')).toBe('circle');
        });

        test('uses TRAVIS', () => {
            expect(evar('CI_PLATFORM', 'TRAVIS=yes')).toBe('travis');
        });

        test('uses TRATEAMCITY_VERSIONVIS', () => {
            expect(evar('CI_PLATFORM', 'TEAMCITY_VERSION=1.2.3')).toBe('teamcity');
        });
    });

    describe('GIT_REMOTE', () => {
        test('defaults to origin', () => {
            expect(evar('GIT_REMOTE')).toBe('origin');
        });
    });

    describe('GITHUB_TOKEN', () => {
        test('defaults to empty string', () => {
            expect(evar('GITHUB_TOKEN')).toBe('');
        });

        test('uses GITHUB_TOKEN', () => {
            expect(evar('GITHUB_TOKEN', 'GITHUB_TOKEN=foobar')).toBe('foobar');
        });

        test('uses GITHUB_ACCESS_TOKEN', () => {
            expect(evar('GITHUB_TOKEN', 'GITHUB_ACCESS_TOKEN=foobar')).toBe('foobar');
        });
    });

    describe('PROJECT_NAME', () => {
        test('extracts from package.json', () => {
            expect(evar('PROJECT_NAME')).toBe('cross-ci');
        });

        test('uses CIRCLE_PROJECT_REPONAME', () => {
            expect(evar('PROJECT_NAME', 'CIRCLE_PROJECT_REPONAME=foobar')).toBe('foobar');
        });

        test('uses TRAVIS_REPO_SLUG', () => {
            expect(evar('PROJECT_NAME', 'TRAVIS_REPO_SLUG=owner/foobar')).toBe('foobar');
        });

        test('uses TEAMCITY_PROJECT_NAME', () => {
            expect(evar('PROJECT_NAME', 'TEAMCITY_PROJECT_NAME=foobar')).toBe('foobar');
        });
    });

    describe('PROJECT_OWNER', () => {
        test('extracts from package.json', () => {
            expect(evar('PROJECT_OWNER')).toBe('streamich');
        });

        test('uses CIRCLE_PROJECT_USERNAME', () => {
            expect(evar('PROJECT_OWNER', 'CIRCLE_PROJECT_USERNAME=owner')).toBe('owner');
        });

        test('uses TRAVIS_REPO_SLUG', () => {
            expect(evar('PROJECT_OWNER', 'TRAVIS_REPO_SLUG=owner/foobar')).toBe('owner');
        });
    });

    describe('PROJECT_URL', () => {
        test('returns URL', () => {
            expect(evar('PROJECT_URL').substr(0, 4)).toBe('http');
        });
    });
});
