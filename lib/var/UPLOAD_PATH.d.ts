import { ICrossCIVars } from '../createVars';
declare const UPLOAD_PATH: ({ PROJECT_NAME, BUILD_VERSION }: ICrossCIVars) => string;
export = UPLOAD_PATH;
