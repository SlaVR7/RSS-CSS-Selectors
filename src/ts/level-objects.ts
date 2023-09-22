import { cubeGreen, cubeRed, Figures, pyramidBlack, pyramidBlue } from './figures';

class Class1 {
    array: Array<object>;
    constructor(size: number) {
        this.array = new Array(size).fill(0);
    }
}

interface LevelHtml {
    string1: string;
    string2: string;
    string3: string;
    string4: string;
    string5: string;
    string6: string;
}

export interface Levels<T extends Figures> {
    title: string;
    table: [T, T, T, T?];
    animatedElements: [T, T?, T?];
    description: string;
    html: LevelHtml;
    fakeLayout?: string;
    target: string[];
}

const level1: Levels<Figures> = {
    title: 'Level 1',
    table: [cubeRed, pyramidBlack, cubeRed],
    animatedElements: [pyramidBlack],
    description: 'Select  pyramid. Pyramid has class "pyramid".',
    html: {
        string1: '',
        string2: `<div class="cube"></div>`,
        string3: `<div class="pyramid"></div>`,
        string4: `<div class="cube"></div>`,
        string5: '',
        string6: '',
    },
    fakeLayout: '<div class="cube notTarget"></div><div class="pyramid target"></div><div class="cube notTarget"></div>',
    target: ['.pyramid'],
}

const level2: Levels<Figures> = {
    title: 'Level 2',
    table: [pyramidBlack, cubeGreen, cubeGreen, cubeGreen],
    animatedElements: [cubeGreen],
    description: 'Select  all green cubes. Cube has class "cube".',
    html: {
        string1: `<div>`,
        string2: `\u00A0\u00A0<div class='pyramid'></div>`,
        string3: `\u00A0\u00A0<div class='cube'></div>`,
        string4: `\u00A0\u00A0<div class='cube'></div>`,
        string5: `\u00A0\u00A0<div class='cube'></div>`,
        string6: `</div>`,
    },
   fakeLayout: `<div class='notTarget'>
  <div class="pyramid notTarget"></div>
  <div class="cube target"></div>
  <div class="cube target"></div>
  <div class="cube target"></div>
  </div>
`,
    target: ['.cube'],
}

const level3: Levels<Figures> = {
    title: 'Level 3',
    table: [pyramidBlack, pyramidBlack, pyramidBlue, pyramidBlack],
    animatedElements: [pyramidBlue],
    description: 'Select  third pyramid.',
    html: {
        string1: `<div>`,
        string2: `\u00A0\u00A0<div class="pyramid" id="first"></div>`,
        string3: `\u00A0\u00A0<div class="pyramid" id="second"></div>`,
        string4: `\u00A0\u00A0<div class="pyramid" id="third"></div>`,
        string5: `\u00A0\u00A0<div class="pyramid" id="four"></div>`,
        string6: `</div>`,
    },
    fakeLayout: `<div class="notTarget">
  <div class="pyramid notTarget" id="first"></div>
  <div class="pyramid notTarget" id="second"></div>
  <div class="pyramid target" id="third"></div>
  <div class="pyramid notTarget" id="four"></div>
  </div>
`,
    target: ['#third'],
}

const level4: Levels<Figures> = {
    title: 'Level 4',
    table: [cubeRed, cubeRed, cubeRed],
    animatedElements: [cubeRed],
    description: 'Select all red cubes.',
    html: {
        string1: `<ul>`,
        string2: `\u00A0\u00A0<li></li>`,
        string3: `\u00A0\u00A0<li></li>`,
        string4: `\u00A0\u00A0<li></li>`,
        string5: `</ul>`,
        string6: '',
    },
    fakeLayout: `<ul class="notTarget">
  <li class="target"></li>
  <li class="target"></li>
  <li class="target"></li>
  </ul>
`,
    target: ['li'],
}

const level5: Levels<Figures> = {
    title: 'Level 5',
    table: [pyramidBlue, pyramidBlue, pyramidBlue, cubeGreen],
    animatedElements: [cubeGreen],
    description: 'Select last figure.',
    html: {
        string1: `<ul>`,
        string2: `\u00A0\u00A0<li></li>`,
        string3: `\u00A0\u00A0<li></li>`,
        string4: `\u00A0\u00A0<li></li>`,
        string5: `\u00A0\u00A0<li></li>`,
        string6: `</ul>`,
    },
    fakeLayout: `<ul class="notTarget">
  <li class="notTarget"></li>
  <li class="notTarget"></li>
  <li class="target"></li>
  </ul>
`,
    target: ['ul li:last-of-type'],
}

const level6: Levels<Figures> = {
    title: 'Level 6',
    table: [cubeRed, cubeGreen, cubeRed, cubeGreen],
    animatedElements: [cubeGreen],
    description: 'Select only even figures.',
    html: {
        string1: `<ul>`,
        string2: `\u00A0\u00A0<li></li>`,
        string3: `\u00A0\u00A0<li></li>`,
        string4: `\u00A0\u00A0<li></li>`,
        string5: `\u00A0\u00A0<li></li>`,
        string6: `</ul>`,
    },
    fakeLayout: `<ul class="notTarget">
    \u00A0\u00A0<li class="notTarget"></li>
    \u00A0\u00A0<li class="target"></li>
    \u00A0\u00A0<li class="notTarget"></li>
    \u00A0\u00A0<li class="target"></li>
    </ul>
`,
    target: ['li:nth-child(even)'],
}

const level7: Levels<Figures> = {
    title: 'Level 7',
    table: [cubeRed, cubeGreen, cubeRed, cubeGreen],
    animatedElements: [cubeRed],
    description: 'Select only odd figures.',
    html: {
        string1: `<ul>`,
        string2: `\u00A0\u00A0<li></li>`,
        string3: `\u00A0\u00A0<li></li>`,
        string4: `\u00A0\u00A0<li></li>`,
        string5: `\u00A0\u00A0<li></li>`,
        string6: `</ul>`,
    },
    fakeLayout: `<ul class="notTarget">
    \u00A0\u00A0<li class="target"></li>
    \u00A0\u00A0<li class="notTarget"></li>
    \u00A0\u00A0<li class="target"></li>
    \u00A0\u00A0<li class="notTarget"></li>
    </ul>
`,
    target: ['li:nth-child(odd)'],
}

const level8: Levels<Figures> = {
    title: 'Level 8',
    table: [cubeRed, pyramidBlack, pyramidBlue, cubeGreen],
    animatedElements: [cubeRed, pyramidBlack, cubeGreen],
    description: 'Select everything except blue pyramid.',
    html: {
        string1: `<ol>`,
        string2: `\u00A0\u00A0<li class="red-cube"></li>`,
        string3: `\u00A0\u00A0<li class="black-pyramid"></li>`,
        string4: `\u00A0\u00A0<li class="blue-pyramid"></li>`,
        string5: `\u00A0\u00A0<li class="green-cube"></li>`,
        string6: `</ol>`,
    },
    fakeLayout: `<ol class="notTarget">
  <li class="red-cube target"></li>
  <li class="black-pyramid target"></li>
  <li class="blue-pyramid notTarget"></li>
  <li class="green-cube target"></li>
  </ol>
`,
    target: ['li:not(.blue-pyramid)'],
}

const level9: Levels<Figures> = {
    title: 'Level 9',
    table: [pyramidBlue, cubeRed, cubeGreen, pyramidBlack],
    animatedElements: [pyramidBlue, pyramidBlack],
    description: 'Select only pyramids.',
    html: {
        string1: `<section>`,
        string2: `\u00A0\u00A0<div id="blue-pyramid"></div>`,
        string3: `\u00A0\u00A0<div id="red-cube"></div>`,
        string4: `\u00A0\u00A0<div id="green-cube"></div>`,
        string5: `\u00A0\u00A0<div id="black-pyramid"></div>`,
        string6: `</section>`,
    },
    fakeLayout: `<section class="notTarget">
  <div class="target" id="blue-pyramid"></div>
  <div class="notTarget" id="red-cube"></div>
  <div class="notTarget" id="green-cube"></div>
  <div class="target" id="black-pyramid"></div>
  </section>
`,
    target: ['#blue-pyramid, #black-pyramid'],
}

const level10: Levels<Figures> = {
    title: 'Level 10',
    table: [pyramidBlue, pyramidBlue, cubeRed, cubeRed],
    animatedElements: [pyramidBlue, cubeRed],
    description: 'Select all elements.',
    html: {
        string1: '',
        string2: `<pyramid></pyramid>`,
        string3: `<pyramid></pyramid>`,
        string4: `<cube></cube>`,
        string5: `<cube></cube>`,
        string6: '',
    },
    fakeLayout: `<pyramid class="target"></pyramid>
  <pyramid class="target"></pyramid>
  <cube class="target"></cube>
  <cube class="target"></cube>
`,
    target: ['*'],
}

let myObjects : Class1 | Levels<Figures>[] = new Class1(10);
const  arrayObj = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];
myObjects = arrayObj;
export const levelsObjects = myObjects;
