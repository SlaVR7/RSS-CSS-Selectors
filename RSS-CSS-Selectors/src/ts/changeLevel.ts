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

    let currentLevel = 1;

    function changeLevel(levelNum: number, event?: Event, isArrowClick?: boolean): void {
        if (currentLevel === 1 && (event?.target === previousLevel[0] || event?.target === previousLevel[1])) return;
        if (currentLevel === 10 && (event?.target === nextLevel[0] || event?.target === nextLevel[1])) return;
        createDescription(levelsObjects[levelNum]);
        createTitle(levelsObjects[levelNum]);
        createTags(levelsObjects[levelNum]);
        createTable(levelsObjects[levelNum]);
        if (!isArrowClick) movePopup(window.innerWidth);
        currentLevel = levelNum + 1;
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

        changeLevel(0)
    });
}

