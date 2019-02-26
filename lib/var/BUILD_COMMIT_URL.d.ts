import { ICrossCIVars } from '../createVars';
declare const BUILD_COMMIT_URL: ({ GIT_PLATFORM, PROJECT_OWNER, PROJECT_NAME, BUILD_COMMIT }: ICrossCIVars) => string;
export = BUILD_COMMIT_URL;
