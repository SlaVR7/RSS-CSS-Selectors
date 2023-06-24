import { levelsObjects } from './level-objects';
import { changeLevelWrapper } from './changeLevel';
import { figuresDivs } from './createTable';

function win(currentLevel: number) {
    console.log('winn');
    const animatedElements: NodeListOf<HTMLDivElement> = document.querySelectorAll('.animationSettings');
    animatedElements.forEach(item => {
        item.classList.add('winAnimation');
    })
    setTimeout(() => changeLevelWrapper(true, currentLevel + 1), 1000);
}

function lose() {
    const table: HTMLDivElement | null = document.querySelector('.table');
    if (table) {

        table.classList.add('loseAnimation');
        setTimeout(() => table.classList.remove('loseAnimation'), 1000);
    }
}

export function compareResult(currentLevel: number, event?: KeyboardEvent, type?: string) {
    console.log(`level im compare ${currentLevel}`);
    if (event?.key !== 'Enter' && type !== 'mouse') return;
    const inputArea: HTMLInputElement | null = document.querySelector('#css-input');
    if (inputArea?.value === levelsObjects[currentLevel - 1].target) {
        console.log('win');
        win(currentLevel);
    } else {
        console.log('lose');
        lose();
    }
}