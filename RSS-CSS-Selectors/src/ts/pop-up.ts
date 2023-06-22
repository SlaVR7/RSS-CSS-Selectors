import * as events from "events";
let isListenerAdded = false;

export function movePopup(width?: number):void {

    const cross: HTMLDivElement | null = document.querySelector('#closeBtn');
    const menu: HTMLDivElement | null= document.querySelector('#rightMenu');
    const popup: HTMLDivElement | null = document.querySelector('.pop-up');

    const adaptivePopup: HTMLDivElement | null = document.querySelector('#adaptivePopup');
    const closeAdaptive: HTMLDivElement | null = document.querySelector('#closeAdaptive');
    const adaptiveMenu: HTMLDivElement | null = document.querySelector('#adaptiveMenu');


    function togglePopup(): void {
        if (popup !== null) popup.classList.toggle('hidden');

        if (cross !== null && menu !== null && !isListenerAdded) {
            cross.addEventListener('click', togglePopup);
            menu.addEventListener('click', togglePopup);
        }
        isListenerAdded = true;
    }
    function toggleAdaptivePopup(): void {
        if (adaptivePopup !== null) adaptivePopup.classList.toggle('hidden-adaptive');

        if (closeAdaptive !== null && adaptiveMenu !== null && !isListenerAdded) {
            closeAdaptive.addEventListener('click', toggleAdaptivePopup);
            adaptiveMenu.addEventListener('click', toggleAdaptivePopup);
        }
        isListenerAdded = true;
    }

    if (width) width < 1024 ? toggleAdaptivePopup() : togglePopup();
}
