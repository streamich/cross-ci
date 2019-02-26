import { ICrossCIVars } from '../createVars';
declare const GIT_PLATFORM: ({ CI_PLATFORM }: ICrossCIVars) => string;
export = GIT_PLATFORM;
