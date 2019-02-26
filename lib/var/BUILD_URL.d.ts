import { ICrossCIVars } from '../createVars';
declare const BUILD_URL: ({ CI_PLATFORM, PROJECT_OWNER, PROJECT_NAME }: ICrossCIVars) => string;
export = BUILD_URL;
