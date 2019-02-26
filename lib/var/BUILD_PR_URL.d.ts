import { ICrossCIVars } from '../createVars';
declare const BUILD_PR_URL: ({ GIT_PLATFORM, BUILD_PR_NUM, PROJECT_OWNER, PROJECT_NAME }: ICrossCIVars) => string;
export = BUILD_PR_URL;
