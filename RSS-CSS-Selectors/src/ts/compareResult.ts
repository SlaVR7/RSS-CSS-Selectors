import { changeLevel } from './changeLevel';
import { taskDescription } from './createDescription';
import { showCheckmark } from './gameProgress';

function win():void {
    const completedLevels: number[] = JSON.parse(localStorage.getItem('completedLevels') || '[]');
    const animatedElements: NodeListOf<HTMLDivElement> = document.querySelectorAll('.animationSettings');
    animatedElements.forEach((item: HTMLDivElement): void => {
        item.classList.add('winAnimation');
    })
    const level: string | null = localStorage.getItem('level');
    if (level && +level === 10) {
        taskDescription.forEach((item: HTMLDivElement): void => {
            item.innerText = 'Congratulations! You win!';
            item.classList.add('winLastLevel');
        });
    }
    if (level) completedLevels.push(+level);
    localStorage.setItem('completedLevels', JSON.stringify(completedLevels));
    showCheckmark();
    if (level && level === '10') return;
    if (level && +level !== 10) localStorage.setItem('level', (+level + 1).toString())
    setTimeout(():void => {
        const level: string | null = localStorage.getItem('level');
        if (level) changeLevel(+level - 1, undefined, undefined, true);
    }, 1000);
}

function lose(): void {
    const table: HTMLDivElement | null = document.querySelector('.table');
    if (table) {

        table.classList.add('loseAnimation');
        setTimeout(() => table.classList.remove('loseAnimation'), 1000);
    }
}

export function compareResult(event?: KeyboardEvent, type?: string):void {
    if (event?.key !== 'Enter' && type !== 'mouse') return;
    const inputArea: HTMLInputElement | null = document.querySelector('#css-input');
    const targetElements: NodeListOf<HTMLElement> = document.querySelectorAll('.target');
    const notTargetElements: NodeListOf<HTMLElement> = document.querySelectorAll('.notTarget');
    if (inputArea?.value.includes('\'') || inputArea?.value === '') {
        lose();
        return;
    }

    let isTargetsElMatches;
    let isNotTargetsElMatches;
    targetElements.forEach(item => {
        if (inputArea && item.matches(inputArea.value)) {
            isTargetsElMatches = true;
        } else {
            isTargetsElMatches = false;
            return;
        }
    })
    notTargetElements.forEach(item => {
        if (inputArea && item.matches(inputArea.value)) {
            isNotTargetsElMatches = true;
        } else {
            isNotTargetsElMatches = false;
            return;
        }
    })
    if (inputArea && isTargetsElMatches && !isNotTargetsElMatches) {
        win();
    } else {
        lose();
    }

}
