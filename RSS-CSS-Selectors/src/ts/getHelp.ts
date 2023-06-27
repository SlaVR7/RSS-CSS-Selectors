import { levelsObjects } from './level-objects';
import { inputArea } from './changeLevel';

const helpLevels: number[] = [];
const completedWithHelp: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.completedWithHelp');

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
    if (level) helpLevels.push(+level);
    localStorage.setItem('helpLevels', JSON.stringify(helpLevels));
    completedWithHelp.forEach(item => {
        item.classList.add('displayBlock');
    })
}

export function checkForHelp() {
    const helpLevels: number[] | null = JSON.parse(localStorage.getItem('helpLevels') || '[]');
    const level = localStorage.getItem('level');
    helpLevels?.forEach(item => {
        if (level && item === +level) {
            completedWithHelp.forEach(item => {
                item.classList.add('displayBlock');
            });
        } else {
            completedWithHelp.forEach(item => {
                item.classList.remove('displayBlock');
            })
        }
    })
}