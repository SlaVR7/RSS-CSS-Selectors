import { level } from '../index';

export function highlightElements(): void {
    const elem1: HTMLDivElement | null = document.querySelector('.tableFig1');
    const elem2: HTMLDivElement | null = document.querySelector('.tableFig2');
    const elem3: HTMLDivElement | null = document.querySelector('.tableFig3');
    const elem4: HTMLDivElement | null = document.querySelector('.tableFig4');

    const str1: HTMLDivElement | null = document.querySelector('#str2');
    const str2: HTMLDivElement | null = document.querySelector('#str3');
    const str3: HTMLDivElement | null = document.querySelector('#str4');
    const str4: HTMLDivElement | null = document.querySelector('#str5');

    if (elem1 && elem2 && elem3 && elem4 && str1 && str2 && str3 && str4) {
        const elements: HTMLDivElement[] = [elem1, elem2, elem3, elem4];
        const tags: HTMLDivElement[] = [str1, str2, str3, str4];

        elements.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                elements[index].classList.add('scale');
                if (elements[index].classList.contains('animationSettings')) {
                    elements[index].classList.remove('animationSettings');
                    elements[index].classList.add('animat');
                }

                if (item.style.backgroundImage !== '') tags[index].classList.add('red');
                const tooltip = document.createElement('div');
                tooltip.textContent = tags[index].innerText;
                tooltip.classList.add('tooltip');
                elements[index].appendChild(tooltip);
            })
        })
        elements.forEach((item, index) => {
            item.addEventListener('mouseleave', () => {
                elements[index].classList.remove('scale');
                if (elements[index].classList.contains('animat')) {
                    elements[index].classList.remove('animat');
                    elements[index].classList.add('animationSettings');
                }

                tags[index].classList.remove('red');
                const tooltip: HTMLElement | null = document.querySelector('.tooltip');
                if (tooltip) elements[index].removeChild(tooltip);
            })
        })



        tags.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                elements[index].classList.add('scale');
                if (elements[index].classList.contains('animationSettings')) {
                    elements[index].classList.remove('animationSettings');
                    elements[index].classList.add('animat');
                }

                const tooltip = document.createElement('div');
                tooltip.textContent = tags[index].innerText;
                tooltip.classList.add('tooltip');
                elements[index].appendChild(tooltip);
            })
        })
        tags.forEach((item, index) => {
            item.addEventListener('mouseleave', () => {
                elements[index].classList.remove('scale');
                if (elements[index].classList.contains('animat')) {
                    elements[index].classList.remove('animat');
                    elements[index].classList.add('animationSettings');
                }
                const tooltip: HTMLElement | null = document.querySelector('.tooltip');
                if (tooltip) elements[index].removeChild(tooltip);
            })
        })
    }


}
