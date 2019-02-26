import { ICrossCIVars } from '../createVars';
declare const IS_CI: ({ CI_PLATFORM }: ICrossCIVars) => boolean;
export = IS_CI;
