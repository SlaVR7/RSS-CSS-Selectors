import { levelsObjects } from './level-objects';
import { changeLevel } from './changeLevel';
import { taskDescription } from './createDescription';

function win():void {
    const animatedElements: NodeListOf<HTMLDivElement> = document.querySelectorAll('.animationSettings');
    animatedElements.forEach(item => {
        item.classList.add('winAnimation');
    })
    const level: string | null = localStorage.getItem('level');
    if (level && +level === 10) {
        taskDescription.forEach(item => {
            item.innerText = 'Congratulations! You win!';
            item.classList.add('winLastLevel');
        });
    }
    if (level && +level !== 10) localStorage.setItem('level', (+level + 1).toString())
    setTimeout(():void => {
        const level: string | null = localStorage.getItem('level');
        if (level && +level !== 10) changeLevel(+level - 1, undefined, undefined, true);
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
    const level: string | null = localStorage.getItem('level');
    if (level) {
        const targets:string[] = levelsObjects[+level - 1].target;
        targets.forEach((item:string):void => {
            if (inputArea?.value === item) {
                win();
                return;
            } else {
                lose();
            }
        })

    }
}