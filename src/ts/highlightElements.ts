export function highlightElements(): void {
    const figure1: HTMLDivElement | null = document.querySelector('.tableFig1');
    const figure2: HTMLDivElement | null = document.querySelector('.tableFig2');
    const figure3: HTMLDivElement | null = document.querySelector('.tableFig3');
    const figure4: HTMLDivElement | null = document.querySelector('.tableFig4');

    const string1: HTMLDivElement | null = document.querySelector('#string2');
    const string2: HTMLDivElement | null = document.querySelector('#string3');
    const string3: HTMLDivElement | null = document.querySelector('#string4');
    const string4: HTMLDivElement | null = document.querySelector('#string5');

    if (figure1 && figure2 && figure3 && figure4 && string1 && string2 && string3 && string4) {
        const elements: HTMLDivElement[] = [figure1, figure2, figure3, figure4];
        const tags: HTMLDivElement[] = [string1, string2, string3, string4];

        elements.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                elements[index].classList.add('scale');
                if (elements[index].classList.contains('animationSettings')) {
                    elements[index].classList.remove('animationSettings');
                    elements[index].classList.add('animation');
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
                if (elements[index].classList.contains('animation')) {
                    elements[index].classList.remove('animation');
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
                    elements[index].classList.add('animation');
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
                if (elements[index].classList.contains('animation')) {
                    elements[index].classList.remove('animation');
                    elements[index].classList.add('animationSettings');
                }
                const tooltip: HTMLElement | null = document.querySelector('.tooltip');
                if (tooltip) elements[index].removeChild(tooltip);
            })
        })
    }


}
