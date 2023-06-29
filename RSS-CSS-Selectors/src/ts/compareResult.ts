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
    const targetElement: HTMLElement | null = document.querySelector('.target');
            if (inputArea && targetElement?.matches(inputArea.value)) {
                win();
                return;
            } else {
                lose();
            }

}