import './scss/styles.scss';
import { buttonListener } from './ts/buttonListener';
import { compareResult } from './ts/compareResult';
import { changeLevel, changeLevelByInput, nextLevel, previousLevel, inputArea } from './ts/changeLevel';
import { movePopup } from './ts/pop-up';

const inputBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.inputBtn');

if (!localStorage.getItem('level')) localStorage.setItem('level', '1')

const level = localStorage.getItem('level');
if (level) changeLevel(+level - 1, undefined, true, false);
movePopup(window.innerWidth, true);


nextLevel.forEach(item => {
    item.addEventListener('click', (event) => {
        const level = localStorage.getItem('level');
        if (event && level) changeLevel(+level, event, true, true)
    });
});

previousLevel.forEach(item => {
    item.addEventListener('click', (event) => {
        const level = localStorage.getItem('level');
        if (level) changeLevel(+level - 2, event, true);
    });
})

inputBtn.forEach(item => item.addEventListener('click', buttonListener));

inputArea?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        changeLevelByInput(event, undefined);
        compareResult(event);
    }
});


