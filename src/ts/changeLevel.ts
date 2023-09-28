import { createDescription, taskDescription } from './createDescription';
import {createTitle} from "./createTitle";
import {createTags} from "./createTags";
import {createTable} from "./createTable";
import {levelsObjects} from "./level-objects";
import { movePopup } from './pop-up';
import { showCheckmark } from './gameProgress';
import { checkForHelp } from './getHelp';
import { highlightCurrentLevel } from './highlightCurrentLevel';
import { createFakeLayout } from './fakeLayout';

export const nextLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.right-arrow');
export const previousLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.left-arrow');
export const inputArea: HTMLInputElement | null = document.querySelector('#css-input');
export const levelElementsAdaptive: NodeListOf<HTMLLIElement> = document.querySelectorAll('.level-item-adaptive');
export const levelElements: NodeListOf<HTMLLIElement> = document.querySelectorAll('.level-item');

export function changeLevel(levelIndex: number, event?: Event, dontMovePopup?: boolean, closePopup?: boolean): void {
    if (localStorage.getItem('level') === '1' && (event?.target === previousLevel[0] || event?.target === previousLevel[1])) return;
    if (localStorage.getItem('level') === '10' && (event?.target === nextLevel[0] || event?.target === nextLevel[1])) return;
    taskDescription.forEach(item => item.classList.remove('winLastLevel'));
    createDescription(levelsObjects[levelIndex]);
    createTitle(levelsObjects[levelIndex]);
    createTags(levelsObjects[levelIndex]);
    createTable(levelsObjects[levelIndex]);
    if (!dontMovePopup) movePopup(window.innerWidth);
    if (closePopup) {
        movePopup(window.innerWidth, true)
    }
    if (inputArea) inputArea.value = '';
    localStorage.setItem('level', (levelIndex + 1).toString());
    showCheckmark();
    checkForHelp();
    highlightCurrentLevel();
    const container: HTMLDivElement | null = document.querySelector('#fakeLayout');
    createFakeLayout(container);
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

levelElementsAdaptive.forEach((item: HTMLLIElement, index: number): void => {
    item.addEventListener('click', () => changeLevel(index));
})

levelElements.forEach((item: HTMLLIElement, index: number): void => {
    item.addEventListener('click', () => changeLevel(index));
})


