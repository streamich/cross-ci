import { ICrossCIVars } from '../createVars';
declare const BRANCH_URL: ({ GIT_PLATFORM, PROJECT_OWNER, PROJECT_NAME, BUILD_BRANCH }: ICrossCIVars) => string;
export = BRANCH_URL;
