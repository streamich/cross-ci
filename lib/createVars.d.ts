declare const createVars: (ci?: createVars.ICrossCIVars) => createVars.ICrossCIVars;
declare namespace createVars {
    interface ICrossCIVars {
        'MONTH': ReturnType<typeof import('./var/MONTH')>;
        'YEAR': ReturnType<typeof import('./var/YEAR')>;
        'TIME': ReturnType<typeof import('./var/TIME')>;
        'TIMESTAMP': ReturnType<typeof import('./var/TIMESTAMP')>;
        'CI_PLATFORM': ReturnType<typeof import('./var/CI_PLATFORM')>;
        'CI_NAME': ReturnType<typeof import('./var/CI_NAME')>;
        'GIT_REMOTE': ReturnType<typeof import('./var/GIT_REMOTE')>;
        'GIT_PLATFORM': ReturnType<typeof import('./var/GIT_PLATFORM')>;
        'RELEASE_BRANCHES': ReturnType<typeof import('./var/RELEASE_BRANCHES')>;
        'PROJECT_NAME': ReturnType<typeof import('./var/PROJECT_NAME')>;
        'PROJECT_VERSION': ReturnType<typeof import('./var/PROJECT_VERSION')>;
        'PROJECT_OWNER': ReturnType<typeof import('./var/PROJECT_OWNER')>;
        'PROJECT_SLUG': ReturnType<typeof import('./var/PROJECT_SLUG')>;
        'PROJECT_URL': ReturnType<typeof import('./var/PROJECT_URL')>;
        'JOB_NUM': ReturnType<typeof import('./var/JOB_NUM')>;
        'JOB_URL': ReturnType<typeof import('./var/JOB_URL')>;
        'BUILD_DIR': ReturnType<typeof import('./var/BUILD_DIR')>;
        'BUILD_BRANCH': ReturnType<typeof import('./var/BUILD_BRANCH')>;
        'BUILD_NUM': ReturnType<typeof import('./var/BUILD_NUM')>;
        'BUILD_PR_NUM': ReturnType<typeof import('./var/BUILD_PR_NUM')>;
        'BUILD_URL': ReturnType<typeof import('./var/BUILD_URL')>;
        'BUILD_COMMIT': ReturnType<typeof import('./var/BUILD_COMMIT')>;
        'BUILD_COMMIT_URL': ReturnType<typeof import('./var/BUILD_COMMIT_URL')>;
        'BUILD_COMMIT_PR_URL': ReturnType<typeof import('./var/BUILD_COMMIT_PR_URL')>;
        'BUILD_PR_URL': ReturnType<typeof import('./var/BUILD_PR_URL')>;
        'BRANCH_PRODUCTION': ReturnType<typeof import('./var/BRANCH_PRODUCTION')>;
        'BRANCH_STAGING': ReturnType<typeof import('./var/BRANCH_STAGING')>;
        'BRANCH_BUILD': ReturnType<typeof import('./var/BRANCH_BUILD')>;
        'BRANCH_URL': ReturnType<typeof import('./var/BRANCH_URL')>;
        'IS_CI': ReturnType<typeof import('./var/IS_CI')>;
        'IS_PR': ReturnType<typeof import('./var/IS_PR')>;
        'IS_RELEASE': ReturnType<typeof import('./var/IS_RELEASE')>;
        'BUILD_VERSION': ReturnType<typeof import('./var/BUILD_VERSION')>;
        'UPLOAD_PATH': ReturnType<typeof import('./var/UPLOAD_PATH')>;
        'GITHUB_TOKEN': ReturnType<typeof import('./var/GITHUB_TOKEN')>;
    }
}
export = createVars;
