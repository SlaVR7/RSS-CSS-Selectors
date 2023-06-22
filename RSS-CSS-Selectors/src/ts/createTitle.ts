import {Levels} from "./level-objects";

const taskTitle: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('.level-num');

export function createTitle(level: Levels):void {
    taskTitle.forEach(item => {
        item.innerText = level.title;
    });
}