export function movePopup():void {

    const cross: HTMLDivElement | null = document.querySelector('.closeBtn');
    const menu: HTMLDivElement | null= document.querySelector('.menu');
    const popup: HTMLDivElement | null = document.querySelector('.pop-up');

    function togglePopup(): void {
        if (popup !== null) popup.classList.toggle('hidden');
    }

    if (cross !== null && menu !== null) {
        cross.addEventListener('click', togglePopup);
        menu.addEventListener('click', togglePopup);
    }
}
