import './scss/styles.scss';
import { buttonListener } from './ts/buttonListener';
import { compareResult } from './ts/compareResult';
import { changeLevel, changeLevelByInput, nextLevel, previousLevel, inputArea } from './ts/changeLevel';
import { movePopup } from './ts/pop-up';
import { getHelp } from './ts/getHelp';
import { resetProgress, showCheckmark } from './ts/gameProgress';

const inputBtn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.inputBtn');
const helpButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.help-btn');
const resetButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.reset-btn');

if (!localStorage.getItem('level')) localStorage.setItem('level', '1')

export const level = localStorage.getItem('level');
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

helpButtons.forEach(item => item.addEventListener('click', getHelp));
resetButtons.forEach(item => item.addEventListener('click', () => {
    changeLevel(0, undefined, undefined, true);
    resetProgress();
}))

showCheckmark()



