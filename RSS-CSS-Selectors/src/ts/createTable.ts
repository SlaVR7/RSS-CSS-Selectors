    import {Levels} from "./level-objects";
    import { Figures } from './figures';

    const tableDiv: HTMLDivElement | null = document.querySelector('.table');
    const tableFig1: HTMLDivElement | null = document.querySelector('.tableFig1');
    const tableFig2: HTMLDivElement | null = document.querySelector('.tableFig2');
    const tableFig3: HTMLDivElement | null = document.querySelector('.tableFig3');
    const tableFig4: HTMLDivElement | null = document.querySelector('.tableFig4');
    export const figuresDivs: (HTMLDivElement | null)[] = [tableFig1, tableFig2, tableFig3, tableFig4];

    export function createTable(level: Levels<Figures>): void {

        if (tableDiv && tableFig4) {
            if (level.title === 'Level 4') {
                tableFig4.remove()
            } else {
                tableDiv?.appendChild(tableFig4);
            }
        }


        const table = level.table;
        for (let i = 0; i < 4; i++) {
            const figureDiv: HTMLDivElement | null = figuresDivs[i];
            if (figureDiv instanceof HTMLDivElement) {
                figureDiv.style.backgroundImage = '';
                figureDiv.classList.remove('animationSettings');
                figureDiv.classList.remove('winAnimation');
            }
        }

        for (let i = 0; i < table.length; i++) {
            const figureDiv: HTMLDivElement | null = figuresDivs[i];
            if (figureDiv instanceof HTMLDivElement) {
                figureDiv.style.backgroundImage = `url('${table[i]?.url}')`;
                for (let j = 0; j < level.animatedElements.length; j++) {
                    if (level.animatedElements[j] === level.table[i]) {
                        figureDiv.classList.add('animationSettings');
                    }
                }
            }
        }

    }

