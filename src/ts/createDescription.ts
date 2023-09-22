import {Levels} from "./level-objects";
import { Figures } from './figures';

export const taskDescription: NodeListOf<HTMLDivElement> = document.querySelectorAll('.task-description');

export function createDescription(level: Levels<Figures>):void {
    taskDescription.forEach((item: HTMLDivElement) => item.innerText = level.description);
}
