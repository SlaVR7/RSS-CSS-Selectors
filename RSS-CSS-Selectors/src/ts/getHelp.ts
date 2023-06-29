import { levelsObjects } from './level-objects';
import { inputArea } from './changeLevel';
import { spans, spansAdaptive } from './gameProgress';

export const completedWithHelp: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.completedWithHelp');

function typeText(str:string): void {
    let index = 0;
    if (inputArea) inputArea.value = '';
    const intervalId: NodeJS.Timer = setInterval((): void => {
        if (index < str.length && inputArea) {
            inputArea.value += str[index];
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, 100);
}

export function getHelp():void {
    const helpLevels: number[] = JSON.parse(localStorage.getItem('helpLevels') || '[]');
    const level: string | null= localStorage.getItem('level');
    if (level) {
        const target:string = levelsObjects[+level - 1].target[0];
        typeText(target);
    }
    if (level) helpLevels.push(+level);
    localStorage.setItem('helpLevels', JSON.stringify(helpLevels));
    completedWithHelp.forEach((item: HTMLParagraphElement): void => {
        item.classList.add('displayBlock');
    })
}

export function checkForHelp(): void {
    const helpLevels: number[] | null = JSON.parse(localStorage.getItem('helpLevels') || '[]');
    const level: string | null = localStorage.getItem('level');
    helpLevels?.forEach((item: number): void => {
        if (level && item === +level) {
            completedWithHelp.forEach((item: HTMLParagraphElement): void => {
                item.classList.add('displayBlock');
            });
        } else {
            completedWithHelp.forEach((item: HTMLParagraphElement): void => {
                item.classList.remove('displayBlock');
            })
        }
    })
    helpLevels?.forEach((item: number): void => {
        spans[item - 1].classList.add('checkmarkHelp');
        spansAdaptive[item - 1].classList.add('checkmarkHelp');
    })

}