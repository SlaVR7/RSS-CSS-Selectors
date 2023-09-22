import { completedWithHelp } from './getHelp';

export const spans: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.level-item span');
export const spansAdaptive: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.level-item-adaptive span');
const levelCheckmark: HTMLSpanElement | null= document.querySelector('#levelCheckmark');
const levelCheckmarkAdaptive: HTMLSpanElement | null = document.querySelector('#levelCheckmarkAdaptive');

export function showCheckmark():void {
    const completedLevels: number[] = JSON.parse(localStorage.getItem('completedLevels') || '[]');
    const helpLevels: number[] | null = JSON.parse(localStorage.getItem('helpLevels') || '[]');
    const level = localStorage.getItem('level');
    completedLevels.forEach(item => {
        spans[item - 1].classList.add('checkmark');
        spansAdaptive[item - 1].classList.add('checkmark');
        const level: string | null = localStorage.getItem('level');
        if (level && (item === +level)) {
            levelCheckmark?.classList.add('checkmark');
            levelCheckmarkAdaptive?.classList.add('checkmark');
        } else  {
            levelCheckmark?.classList.remove('checkmark');
            levelCheckmarkAdaptive?.classList.remove('checkmark');
        }
    })
    helpLevels?.forEach((item: number): void => {
        if (level && item === +level) {
            levelCheckmark?.classList.add('checkmarkHelp');
            levelCheckmarkAdaptive?.classList.add('checkmarkHelp');
        } else {
            levelCheckmark?.classList.remove('checkmarkHelp');
            levelCheckmarkAdaptive?.classList.remove('checkmarkHelp');
        }
    })
}

export function resetProgress():void {
    spans.forEach((item: HTMLSpanElement): void => {
        item.classList.remove('checkmark');
        item.classList.remove('checkmarkHelp');
    });
    spansAdaptive.forEach((item: HTMLSpanElement): void => {
        item.classList.remove('checkmark');
        item.classList.remove('checkmarkHelp');
    });
    levelCheckmark?.classList.remove('checkmark');
    levelCheckmarkAdaptive?.classList.remove('checkmark');
    levelCheckmark?.classList.remove('checkmarkHelp');
    levelCheckmarkAdaptive?.classList.remove('checkmarkHelp');
    completedWithHelp.forEach((item: HTMLParagraphElement): void => {
        item.classList.remove('displayBlock');
    })
    localStorage.setItem('completedLevels', '');
    localStorage.setItem('helpLevels', '');
}