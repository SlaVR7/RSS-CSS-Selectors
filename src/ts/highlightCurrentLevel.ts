import { levelElements, levelElementsAdaptive } from './changeLevel';

export function highlightCurrentLevel(): void {
    const level: number[] | null = JSON.parse(localStorage.getItem('level') || '[]');
    levelElements.forEach((item: HTMLLIElement, index: number): void => {
        if (level && +level - 1 === index) {
            item.classList.add('currentLevel');
        } else item.classList.remove('currentLevel');
    });
    levelElementsAdaptive.forEach((item: HTMLLIElement, index: number): void => {
        if (level && +level - 1 === index) {
            item.classList.add('currentLevel');
        } else item.classList.remove('currentLevel');
    })
}