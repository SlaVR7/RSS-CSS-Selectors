import {createDescription} from "./createDescription";
import {levelsObjects} from "./level-objects";
import {createTitle} from "./createTitle";
import {createTags} from "./createTags";
import {createTable} from "./createTable";
import {movePopup} from "./pop-up";
import { compareResult } from './compareResult';

export function changeLevelWrapper(runChangeLevel?: boolean, level?: number):void {

    const levelElementsAdaptive: NodeListOf<HTMLLIElement> = document.querySelectorAll('.level-item-adaptive');
    const levelElements: NodeListOf<HTMLLIElement> = document.querySelectorAll('.level-item');
    const nextLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.right-arrow');
    const previousLevel: NodeListOf<HTMLDivElement> = document.querySelectorAll('.left-arrow');
    const inputArea: HTMLInputElement | null = document.querySelector('#css-input');
    const inputBtn = document.querySelectorAll('.inputBtn');

    let currentLevel: number;
    level ? currentLevel = level : currentLevel = 1;

    function changeLevel(levelIndex: number, event?: Event, dontMovePopup?: boolean, closePopup?: boolean): void {
        if (currentLevel === 1 && (event?.target === previousLevel[0] || event?.target === previousLevel[1])) return;
        if (currentLevel === 10 && (event?.target === nextLevel[0] || event?.target === nextLevel[1])) return;
        createDescription(levelsObjects[levelIndex]);
        createTitle(levelsObjects[levelIndex]);
        createTags(levelsObjects[levelIndex]);
        createTable(levelsObjects[levelIndex]);
        if (!dontMovePopup) movePopup(window.innerWidth);
        if (closePopup) {
            movePopup(window.innerWidth, true)
        }
        currentLevel = levelIndex + 1;
    }

    function changeLevelByInput(event?: KeyboardEvent, type?: string): void {
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

    function addListeners() {
        nextLevel.forEach(item => {
            item.addEventListener('click', (event) => {
                if (event) changeLevel(currentLevel, event, true, true)
            });
        });

        previousLevel.forEach(item => {
            item.addEventListener('click', (event) => {
                changeLevel(currentLevel - 2, event, true);
            });
        })

        inputBtn.forEach(item => item.addEventListener('click', () => {
            changeLevelByInput(undefined, 'mouse');
            compareResult(currentLevel, undefined, 'mouse');
        }));

        inputArea?.addEventListener('keydown', (event) => {
            changeLevelByInput(event, undefined);
            compareResult(currentLevel, event);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        changeLevel(0);
        addListeners()
    });

    if (runChangeLevel && level) {
        changeLevel(level - 1, undefined, undefined, true);
    }
}

