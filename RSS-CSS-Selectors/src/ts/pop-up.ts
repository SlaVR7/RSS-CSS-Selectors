export function movePopup():void {

    const cross: HTMLDivElement | null = document.querySelector('#closeBtn');
    const menu: HTMLDivElement | null= document.querySelector('#rightMenu');
    const popup: HTMLDivElement | null = document.querySelector('.pop-up');

    const adaptivePopup: HTMLDivElement | null = document.querySelector('#adaptivePopup');
    const closeAdaptive: HTMLDivElement | null = document.querySelector('#closeAdaptive');
    const adaptiveMenu: HTMLDivElement | null = document.querySelector('#adaptiveMenu');


    function togglePopup(): void {
        if (popup !== null) popup.classList.toggle('hidden');
    }
    function toggleAdaptivePopup(): void {
        if (adaptivePopup !== null) adaptivePopup.classList.toggle('hidden-adaptive');
    }

    if (cross !== null && menu !== null) {
        cross.addEventListener('click', togglePopup);
        menu.addEventListener('click', togglePopup);
    }

    if (closeAdaptive !== null && adaptiveMenu !== null) {
        closeAdaptive.addEventListener('click', toggleAdaptivePopup);
        adaptiveMenu.addEventListener('click', toggleAdaptivePopup);
    }
}
