import {Levels} from "./level-objects";

const tagsField: HTMLDivElement | null = document.querySelector('.tagsField');

export function createTags(level:Levels):void {
    if (tagsField !== null) {
        tagsField.innerText = level.html;
    }
}