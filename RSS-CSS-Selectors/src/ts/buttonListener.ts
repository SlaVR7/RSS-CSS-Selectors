import { compareResult } from './compareResult';
import { changeLevelByInput } from './changeLevel';
export function buttonListener() {
    changeLevelByInput(undefined, 'mouse');
    compareResult(undefined, 'mouse');
}