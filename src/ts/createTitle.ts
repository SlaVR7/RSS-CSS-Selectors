import {Levels} from "./level-objects";
import { Figures } from './figures';

const taskTitle: NodeListOf<HTMLHeadingElement> = document.querySelectorAll('.level-num');

export function createTitle(level: Levels<Figures>):void {
    taskTitle.forEach((item: HTMLHeadingElement): void => {
        item.innerText = level.title;
    });
}
