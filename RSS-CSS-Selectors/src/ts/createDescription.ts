import {Levels} from "./level-objects";

export const taskDescription: NodeListOf<HTMLDivElement> = document.querySelectorAll('.task-description');

export function createDescription(level: Levels):void {
    taskDescription.forEach((item: HTMLDivElement) => item.innerText = level.description);
}
