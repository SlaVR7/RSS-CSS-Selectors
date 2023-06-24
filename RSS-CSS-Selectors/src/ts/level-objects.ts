import {cubeGreen, cubeRed, Figures, pyramidBlack} from "./figures";

export interface Levels {
    title: string;
    table: [Figures, Figures, Figures, Figures?];
    animatedElements: [Figures, Figures?]
    description: string;
    html: string;
    target: string;
}

const level1 :Levels = {
    title: 'Level 1',
    table: [cubeRed, pyramidBlack, cubeRed],
    animatedElements: [pyramidBlack],
    description: 'Select  pyramid. Pyramid has class "pyramid"',
    html: `<div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="cube"></div>
  </div>
`,
    target: '.pyramid',
}

const level2 :Levels = {
    title: 'Level 2',
    table: [pyramidBlack, cubeGreen, cubeGreen, cubeGreen],
    animatedElements: [cubeGreen],
    description: 'Select  all green cubes. Cube has class "cube"',
    html: `<div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="cube"></div>
  </div>
`,
    target: '.cube',
}

const level3 :Levels = {
    title: 'Level 3',
    table: [pyramidBlack, pyramidBlack, pyramidBlack, pyramidBlack],
    animatedElements: [pyramidBlack],
    description: 'Select  all pyramids.',
    html: `<div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="pyramid"></div>
  </div>
`,
    target: '.pyramid',
}

export const levelsObjects: Levels[] = [level1, level2, level3];

