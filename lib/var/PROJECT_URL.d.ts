import { ICrossCIVars } from '../createVars';
declare const PROJECT_URL: ({ GIT_PLATFORM, PROJECT_OWNER, PROJECT_NAME }: ICrossCIVars) => string;
export = PROJECT_URL;
