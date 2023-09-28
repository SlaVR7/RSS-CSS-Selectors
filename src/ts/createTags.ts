import {Levels} from "./level-objects";
import { Figures } from './figures';

export function createTags(level:Levels<Figures>):void {
    const string1: HTMLDivElement | null = document.querySelector('#string1');
    const string2: HTMLDivElement | null = document.querySelector('#string2');
    const string3: HTMLDivElement | null = document.querySelector('#string3');
    const string4: HTMLDivElement | null = document.querySelector('#string4');
    const string5: HTMLDivElement | null = document.querySelector('#string5');
    const string6: HTMLDivElement | null = document.querySelector('#string6');
    if (string1) string1.innerText = level.html.string1;
    if (string2) string2.innerText = level.html.string2;
    if (string3) string3.innerText = level.html.string3;
    if (string4) string4.innerText = level.html.string4;
    if (string5) string5.innerText = level.html.string5;
    if (string6) string6.innerText = level.html.string6;
    if (level.title === 'Level 4') {
        string5?.classList.remove('html-strings');
    } else string5?.classList.add('html-strings');
}
