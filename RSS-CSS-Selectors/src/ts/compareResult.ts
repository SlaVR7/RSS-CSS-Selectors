import { levelsObjects } from './level-objects';
import { changeLevel } from './changeLevel';

function win() {
    const animatedElements: NodeListOf<HTMLDivElement> = document.querySelectorAll('.animationSettings');
    animatedElements.forEach(item => {
        item.classList.add('winAnimation');
    })
    const level = localStorage.getItem('level');
    if (level) localStorage.setItem('level', (+level + 1).toString())
    setTimeout(() => {
        const level = localStorage.getItem('level');
        if (level) changeLevel(+level - 1, undefined, undefined, true);
    }, 1000);
}

function lose() {
    const table: HTMLDivElement | null = document.querySelector('.table');
    if (table) {

        table.classList.add('loseAnimation');
        setTimeout(() => table.classList.remove('loseAnimation'), 1000);
    }
}

export function compareResult(event?: KeyboardEvent, type?: string) {
    if (event?.key !== 'Enter' && type !== 'mouse') return;
    const inputArea: HTMLInputElement | null = document.querySelector('#css-input');
    const level = localStorage.getItem('level');
    if (level) {
        if (inputArea?.value === levelsObjects[+level - 1].target) {
            win();
        } else {
            lose();
        }
    }
}