import { ICrossCIVars } from '../createVars';
declare const IS_RELEASE: ({ RELEASE_BRANCHES, BUILD_BRANCH }: ICrossCIVars) => boolean;
export = IS_RELEASE;
