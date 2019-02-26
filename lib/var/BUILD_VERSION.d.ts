import { ICrossCIVars } from '../createVars';
declare const BUILD_VERSION: ({ IS_PR, PROJECT_VERSION, BUILD_BRANCH, BUILD_PR_NUM, BUILD_NUM }: ICrossCIVars) => string;
export = BUILD_VERSION;
