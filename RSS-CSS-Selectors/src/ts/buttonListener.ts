import { compareResult } from './compareResult';
import { changeLevelByInput } from './changeLevel';
export function buttonListener():void {
    changeLevelByInput(undefined, 'mouse');
    compareResult(undefined, 'mouse');
}