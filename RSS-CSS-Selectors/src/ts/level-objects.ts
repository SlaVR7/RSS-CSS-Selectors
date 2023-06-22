import {cubeGreen, cubeRed, Figures, pyramidBlack} from "./figures";

export interface Levels {
    title: string;
    table: [Figures, Figures, Figures, Figures?];
    description: string;
    html: string;
}

const level1 :Levels = {
    title: 'Level 1',
    table: [cubeRed, pyramidBlack, cubeRed],
    description: 'Select  pyramid. Pyramid has class "pyramid"',
    html: `<div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="cube"></div>
  </div>
`
}

const level2 :Levels = {
    title: 'Level 2',
    table: [pyramidBlack, cubeGreen, cubeGreen, cubeGreen],
    description: 'Select  all green cubes. Cube has class "cube"',
    html: `<div>
  \u00A0\u00A0<div class="pyramid"></div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="cube"></div>
  \u00A0\u00A0<div class="cube"></div>
  </div>
`
}

export const levelsObjects: Levels[] = [level1, level2];

