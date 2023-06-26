import { cubeGreen, cubeRed, Figures, pyramidBlack, pyramidBlue } from './figures';

export interface Levels {
    title: string;
    table: [Figures, Figures, Figures, Figures?];
    animatedElements: [Figures, Figures?, Figures?]
    description: string;
    html: string;
    target: string[];
}

const level1 :Levels = {
    title: 'Level 1',
    table: [cubeRed, pyramidBlack, cubeRed],
    animatedElements: [pyramidBlack],
    description: 'Select  pyramid. Pyramid has class "pyramid".',
    html: `<div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="cube"></div>
  </div>
`,
    target: ['.pyramid'],
}

const level2 :Levels = {
    title: 'Level 2',
    table: [pyramidBlack, cubeGreen, cubeGreen, cubeGreen],
    animatedElements: [cubeGreen],
    description: 'Select  all green cubes. Cube has class "cube".',
    html: `<div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="cube"></div>
  </div>
`,
    target: ['.cube'],
}

const level3 :Levels = {
    title: 'Level 3',
    table: [pyramidBlack, pyramidBlack, pyramidBlue, pyramidBlack],
    animatedElements: [pyramidBlue],
    description: 'Select  third pyramid.',
    html: `<div>
  \u00A0\u00A0<div class="pyramid" id="first"></div>
  \u00A0\u00A0<div class="pyramid" id="second"></div>
  \u00A0\u00A0<div class="pyramid" id="third"></div>
  \u00A0\u00A0<div class="pyramid" id="four"></div>
  </div>
`,
    target: ['#third'],
}

const level4 :Levels = {
    title: 'Level 4',
    table: [cubeRed, cubeRed, cubeRed],
    animatedElements: [cubeRed],
    description: 'Select all red cubes.',
    html: `<ul>
  \u00A0\u00A0<li></li>
  \u00A0\u00A0<li></li>
  \u00A0\u00A0<li></li>
  </ul>
`,
    target: ['li', 'ul li'],
}

const level5 :Levels = {
    title: 'Level 5',
    table: [pyramidBlue, pyramidBlue, pyramidBlue, cubeGreen],
    animatedElements: [cubeGreen],
    description: 'Select last figure.',
    html: `<ul>
  \u00A0\u00A0<li></li>
  \u00A0\u00A0<li></li>
  \u00A0\u00A0<li></li>
  \u00A0\u00A0<li></li>
  </ul>
`,
    target: ['ul li:last-of-type', 'ul li:last-child', 'ul li:nth-child(4)', 'ul li:nth-child(n+4)',
        'li:last-of-type', 'li:last-child', 'li:nth-child(4)', 'li:nth-child(n+4)'],
}

const level6 :Levels = {
    title: 'Level 6',
    table: [cubeRed, cubeGreen, cubeRed, cubeGreen],
    animatedElements: [cubeGreen],
    description: 'Select only even figures.',
    html: `<li></li>
  <li></li>
  <li></li>
  <li></li>
`,
    target: ['li:nth-child(2n)', 'li:nth-child(even)'],
}

const level7 :Levels = {
    title: 'Level 7',
    table: [cubeRed, cubeGreen, cubeRed, cubeGreen],
    animatedElements: [cubeRed],
    description: 'Select only odd figures.',
    html: `<li></li>
  <li></li>
  <li></li>
  <li></li>
`,
    target: ['li:nth-child(n)', 'li:nth-child(odd)'],
}

const level8 :Levels = {
    title: 'Level 8',
    table: [cubeRed, pyramidBlack, pyramidBlue, cubeGreen],
    animatedElements: [cubeRed, pyramidBlack, cubeGreen],
    description: 'Select everything except blue pyramid.',
    html: `<li class="red-cube"></li>
  <li class="black-pyramid"></li>
  <li class="blue-pyramid"></li>
  <li class="green-cube"></li>
`,
    target: ['li:not(.blue-pyramid)'],
}

const level9 :Levels = {
    title: 'Level 9',
    table: [pyramidBlue, cubeRed, cubeGreen, pyramidBlack],
    animatedElements: [pyramidBlue, pyramidBlack],
    description: 'Select only pyramids.',
    html: `<li id="blue-pyramid"></li>
  <li id="red-cube"></li>
  <li id="green-cube"></li>
  <li id="black-pyramid"></li>
`,
    target: ['#blue-pyramid, #black-pyramid'],
}

const level10 :Levels = {
    title: 'Level 10',
    table: [pyramidBlue, pyramidBlue, cubeRed, cubeRed],
    animatedElements: [pyramidBlue, cubeRed],
    description: 'Select all elements.',
    html: `<pyramid></pyramid>
  <pyramid></pyramid>
  <cube></cube>
  <cube></cube>
`,
    target: ['*', 'pyramid, cube'],
}

export const levelsObjects: Levels[] = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

