import {createDescription} from "./createDescription";
import {createTitle} from "./createTitle";
import {createTags} from "./createTags";
import {createTable} from "./createTable";
import {levelsObjects} from "./level-objects";
import { movePopup } from './pop-up';


export const nextLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.right-arrow');
export const previousLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.left-arrow');
export const inputArea: HTMLInputElement | null = document.querySelector('#css-input');
const levelElementsAdaptive: NodeListOf<HTMLLIElement> = document.querySelectorAll('.level-item-adaptive');
const levelElements: NodeListOf<HTMLLIElement> = document.querySelectorAll('.level-item');


export function changeLevel(levelIndex: number, event?: Event, dontMovePopup?: boolean, closePopup?: boolean): void {
    if (localStorage.getItem('level') === '1' && (event?.target === previousLevel[0] || event?.target === previousLevel[1])) return;
    if (localStorage.getItem('level') === '10' && (event?.target === nextLevel[0] || event?.target === nextLevel[1])) return;
    console.log('change level c индексом ', levelIndex);
    createDescription(levelsObjects[levelIndex]);
    createTitle(levelsObjects[levelIndex]);
    createTags(levelsObjects[levelIndex]);
    createTable(levelsObjects[levelIndex]);
    if (!dontMovePopup) movePopup(window.innerWidth);
    if (closePopup) {
        movePopup(window.innerWidth, true)
    }
    localStorage.setItem('level', (levelIndex + 1).toString());
    console.log('после смены', localStorage.getItem('level'));
}

export function changeLevelByInput(event?: KeyboardEvent, type?: string): void {
    if (event?.key !== 'Enter' && type !== 'mouse') return;
    if (inputArea !== null) {
        const inputValue = inputArea.value;
        if (typeof +inputValue === "number" && +inputValue >= 1 && +inputValue <= 10) {
            changeLevel(+inputValue - 1, undefined, undefined, true);
        }
    }
}

levelElementsAdaptive.forEach((item, index) => {
    item.addEventListener('click', () => changeLevel(index));
})

levelElements.forEach((item, index) => {
    item.addEventListener('click', () => changeLevel(index));
})


