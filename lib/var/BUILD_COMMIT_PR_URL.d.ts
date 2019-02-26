import { ICrossCIVars } from '../createVars';
declare const BUILD_COMMIT_PR_URL: ({ GIT_PLATFORM, PROJECT_OWNER, PROJECT_NAME, BUILD_PR_NUM, BUILD_COMMIT }: ICrossCIVars) => string;
export = BUILD_COMMIT_PR_URL;
