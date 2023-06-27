import { levelsObjects } from './level-objects';
import { inputArea } from './changeLevel';

function typeText(str:string) {
    let index = 0;
    if (inputArea) inputArea.value = '';
    const intervalId: NodeJS.Timer = setInterval(() => {
        if (index < str.length && inputArea) {
            inputArea.value += str[index];
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 100);
}

export function getHelp():void {
    const level: string | null= localStorage.getItem('level');
    if (level) {
        const target:string = levelsObjects[+level - 1].target[0];
        typeText(target);
        }
}