import { levelsObjects } from './level-objects';

const container: HTMLDivElement | null = document.querySelector('#fakeLayout');

export function createFakeLayout(): void {
    const level: string = JSON.parse(localStorage.getItem('level') || '[]') || '';
    if (container) container.innerHTML = levelsObjects[+level - 1].fakeLayout || '';
}