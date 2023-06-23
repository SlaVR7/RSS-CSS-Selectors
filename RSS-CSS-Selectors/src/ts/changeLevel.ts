import {createDescription} from "./createDescription";
import {levelsObjects} from "./level-objects";
import {createTitle} from "./createTitle";
import {createTags} from "./createTags";
import {createTable} from "./createTable";
import {movePopup} from "./pop-up";

export function changeLevelWrapper():void {

    const levelElementsAdaptive: NodeListOf<HTMLLIElement> = document.querySelectorAll('.level-item-adaptive');
    const levelElements: NodeListOf<HTMLLIElement> = document.querySelectorAll('.level-item');
    const nextLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.right-arrow');
    const previousLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.left-arrow');
    const inputArea: HTMLInputElement | null = document.querySelector('#css-input');
    const inputBtn = document.querySelectorAll('.inputBtn');

    let currentLevel = 1;

    function changeLevel(levelNum: number, event?: Event, dontMovePopup?: boolean): void {
        if (currentLevel === 1 && (event?.target === previousLevel[0] || event?.target === previousLevel[1])) return;
        if (currentLevel === 10 && (event?.target === nextLevel[0] || event?.target === nextLevel[1])) return;
        createDescription(levelsObjects[levelNum]);
        createTitle(levelsObjects[levelNum]);
        createTags(levelsObjects[levelNum]);
        createTable(levelsObjects[levelNum]);
        if (!dontMovePopup) movePopup(window.innerWidth);
        currentLevel = levelNum + 1;
    }

    function changeLevelByInput(): void {
        if (inputArea !== null) {
            const inputValue = inputArea.value;
            if (typeof +inputValue === "number" && +inputValue >= 1 && +inputValue <= 10) {
                changeLevel(+inputValue - 1, undefined, true);
            }
        }
    }



    levelElementsAdaptive.forEach((item, index) => {
        item.addEventListener('click', () => changeLevel(index));
    })

    levelElements.forEach((item, index) => {
        item.addEventListener('click', () => changeLevel(index));
    })



    document.addEventListener('DOMContentLoaded', () => {

        nextLevel.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event) changeLevel(currentLevel, event, true)
            });
        });

        previousLevel.forEach(item => {
            item.addEventListener('click', (event) => {
                changeLevel(currentLevel - 2, event, true)
            });
        })

        inputBtn.forEach(item => item.addEventListener('click', changeLevelByInput));

        changeLevel(0)
    });
}

