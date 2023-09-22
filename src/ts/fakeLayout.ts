import { levelsObjects } from './level-objects';


export function createFakeLayout(container: HTMLDivElement | null) {
    const level: string | null = localStorage.getItem('level');
    if (container && level) container.innerHTML = levelsObjects[+level - 1].fakeLayout || '';
}