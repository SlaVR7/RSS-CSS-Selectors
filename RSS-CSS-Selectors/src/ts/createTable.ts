    import {Levels} from "./level-objects";

    const tableFig1: HTMLDivElement | null = document.querySelector('.tableFig1');
    const tableFig2: HTMLDivElement | null = document.querySelector('.tableFig2');
    const tableFig3: HTMLDivElement | null = document.querySelector('.tableFig3');
    const tableFig4: HTMLDivElement | null = document.querySelector('.tableFig4');
    const figuresDivs: (HTMLDivElement | null)[] = [tableFig1, tableFig2, tableFig3, tableFig4];

    export function createTable(level: Levels): void {
        const table = level.table;
        for (let i = 0; i < 4; i++) {
            const figureDiv = figuresDivs[i];
            if (figureDiv instanceof HTMLDivElement) {
                figureDiv.style.backgroundImage = '';
            }
        }

        for (let i = 0; i < table.length; i++) {
            const figureDiv = figuresDivs[i];
            if (figureDiv instanceof HTMLDivElement) {
                figureDiv.style.backgroundImage = `url('${table[i]?.url}')`;
            }
        }
    }

