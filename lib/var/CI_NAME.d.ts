import { ICrossCIVars } from '../createVars';
/**
 * CI service Commercial name (e.g. `Travis`, `CircleCI`, `TeamCity`).
 */
declare const CI_NAME: ({ CI_PLATFORM }: ICrossCIVars) => string;
export = CI_NAME;
