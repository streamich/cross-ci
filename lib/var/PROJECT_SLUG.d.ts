import { ICrossCIVars } from '../createVars';
declare const PROJECT_SLUG: ({ PROJECT_OWNER, PROJECT_NAME }: ICrossCIVars) => string;
export = PROJECT_SLUG;
