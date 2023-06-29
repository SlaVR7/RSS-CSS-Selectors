import { cubeGreen, cubeRed, Figures, pyramidBlack, pyramidBlue } from './figures';

export interface Levels {
    title: string;
    table: [Figures, Figures, Figures, Figures?];
    animatedElements: [Figures, Figures?, Figures?]
    description: string;
    html: string;
    fakeLayout?: string;
    target: string[];
}

const level1 :Levels = {
    title: 'Level 1',
    table: [cubeRed, pyramidBlack, cubeRed],
    animatedElements: [pyramidBlack],
    description: 'Select  pyramid. Pyramid has class "pyramid".',
    html: `<div class="cube"></div>
  <div class="pyramid"></div>
  <div class="cube"></div>
`,
    fakeLayout: '<div class="cube"></div><div class="pyramid target"></div><div class="cube"></div>',
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
    fakeLayout: `<div>
  <div class="pyramid"></div>
  <div class="cube target"></div>
  <div class="cube target"></div>
  <div class="cube target"></div>
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
    fakeLayout: `<div>
  <div class="pyramid" id="first"></div>
  <div class="pyramid" id="second"></div>
  <div class="pyramid target" id="third"></div>
  <div class="pyramid" id="four"></div>
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
    fakeLayout: `<ul>
  <li class="target"></li>
  <li class="target"></li>
  <li class="target"></li>
  </ul>
`,
    target: ['ld'],
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
    fakeLayout: `<ul>
  <li></li>
  <li></li>
  <li class="target"></li>
  </ul>
`,
    target: ['ul li:last-of-type'],
}

const level6 :Levels = {
    title: 'Level 6',
    table: [cubeRed, cubeGreen, cubeRed, cubeGreen],
    animatedElements: [cubeGreen],
    description: 'Select only even figures.',
    html: `<ul>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li></li>
    </ul>
`,
    fakeLayout: `<ul>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li class="target"></li>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li class="target"></li>
    </ul>
`,
    target: ['li:nth-child(even)'],
}

const level7 :Levels = {
    title: 'Level 7',
    table: [cubeRed, cubeGreen, cubeRed, cubeGreen],
    animatedElements: [cubeRed],
    description: 'Select only odd figures.',
    html: `<ul>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li></li>
    </ul>
`,
    fakeLayout: `<ul>
    \u00A0\u00A0<li class="target"></li>
    \u00A0\u00A0<li></li>
    \u00A0\u00A0<li class="target"></li>
    \u00A0\u00A0<li></li>
    </ul>
`,
    target: ['li:nth-child(odd)'],
}

const level8 :Levels = {
    title: 'Level 8',
    table: [cubeRed, pyramidBlack, pyramidBlue, cubeGreen],
    animatedElements: [cubeRed, pyramidBlack, cubeGreen],
    description: 'Select everything except blue pyramid.',
    html: `<ol>
  \u00A0\u00A0<li class="red-cube"></li>
  \u00A0\u00A0<li class="black-pyramid"></li>
  \u00A0\u00A0<li class="blue-pyramid"></li>
  \u00A0\u00A0<li class="green-cube"></li>
  </ol>
`,
    fakeLayout: `<ol>
<li class="red-cube target"></li>
  <li class="black-pyramid target"></li>
  <li class="blue-pyramid"></li>
  <li class="green-cube target"></li>
  </ol>
`,
    target: ['li:not(.blue-pyramid)'],
}

const level9 :Levels = {
    title: 'Level 9',
    table: [pyramidBlue, cubeRed, cubeGreen, pyramidBlack],
    animatedElements: [pyramidBlue, pyramidBlack],
    description: 'Select only pyramids.',
    html: `<section>
  \u00A0\u00A0<div id="blue-pyramid"></div>
  \u00A0\u00A0<div id="red-cube"></div>
  \u00A0\u00A0<div id="green-cube"></div>
  \u00A0\u00A0<div id="black-pyramid"></div>
  </section>
`,
    fakeLayout: `<section>
  <div class="target" id="blue-pyramid"></div>
  <div id="red-cube"></div>
  <div id="green-cube"></div>
  <div class="target" id="black-pyramid target"></div>
  </section>
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
    fakeLayout: `<pyramid class="target"></pyramid>
  <pyramid class="target"></pyramid>
  <cube class="target"></cube>
  <cube class="target"></cube>
`,
    target: ['*'],
}

export const levelsObjects: Levels[] = [level1, level2, level3, level4, level5, level6, level7, level8, level9, level10];

