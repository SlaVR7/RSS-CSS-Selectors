import {Levels} from "./level-objects";
import { Figures } from './figures';

export function createTags(level:Levels<Figures>):void {
    const str1: HTMLDivElement | null = document.querySelector('#str1');
    const str2: HTMLDivElement | null = document.querySelector('#str2');
    const str3: HTMLDivElement | null = document.querySelector('#str3');
    const str4: HTMLDivElement | null = document.querySelector('#str4');
    const str5: HTMLDivElement | null = document.querySelector('#str5');
    const str6: HTMLDivElement | null = document.querySelector('#str6');
    if (str1) str1.innerText = level.html.string1;
    if (str2) str2.innerText = level.html.string2;
    if (str3) str3.innerText = level.html.string3;
    if (str4) str4.innerText = level.html.string4;
    if (str5) str5.innerText = level.html.string5;
    if (str6) str6.innerText = level.html.string6;
    if (level.title === 'Level 4') {
        str5?.classList.remove('html-strings');
    } else str5?.classList.add('html-strings');
}
