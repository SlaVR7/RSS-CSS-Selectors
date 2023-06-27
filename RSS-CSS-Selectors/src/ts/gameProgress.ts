import { completedLevels } from './compareResult';
import { level } from '../index';

const spans: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.level-item span');
const spansAdaptive: NodeListOf<HTMLSpanElement> = document.querySelectorAll('.level-item-adaptive span');
const levelCheckmark: HTMLSpanElement | null= document.querySelector('#levelCheckmark');
const levelCheckmarkAdaptive: HTMLSpanElement | null = document.querySelector('#levelCheckmarkAdaptive');

export function showCheckmark():void {
    const completedLevels: number[] = JSON.parse(localStorage.getItem('completedLevels') || '[]');
    completedLevels.forEach(item => {
        spans[item - 1].classList.add('checkmark');
        spansAdaptive[item - 1].classList.add('checkmark');
        const level = localStorage.getItem('level');
        if (level) console.log('+level', +level + '===' + 'item - 1', item);
        if (level && (item === +level)) {
            levelCheckmark?.classList.add('checkmark');
            levelCheckmarkAdaptive?.classList.add('checkmark');
        } else  {
            levelCheckmark?.classList.remove('checkmark');
            levelCheckmarkAdaptive?.classList.remove('checkmark');
        }
    })
}

export function resetProgress():void {
    spans.forEach(item => item.classList.remove('checkmark'));
    spansAdaptive.forEach(item => item.classList.remove('checkmark'));
    levelCheckmark?.classList.remove('checkmark');
    levelCheckmarkAdaptive?.classList.remove('checkmark');
    completedLevels.length = 0;
    localStorage.setItem('completedLevels', '');
}