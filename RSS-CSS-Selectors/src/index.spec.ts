import { createFakeLayout } from './ts/fakeLayout';

describe('createFakeLayout', () => {
  it('should set fake layout from level object to container innerHTML', () => {

        // Подготовка

        const level1 = {
            fakeLayout: '<div class="cube"></div><div class="pyramid target"></div><div class="cube"></div>',
        }
        const level2 = {
            fakeLayout: `<div>
  <div class="pyramid"></div>
  <div class="cube target"></div>
  <div class="cube target"></div>
  <div class="cube target"></div>
  </div>
`,
        }
        const levelsObjects = [level1, level2];

        const levelIndex = '1';
        localStorage.setItem('level', levelIndex);

        // Мокаем методы и свойства, которые использует функция createFakeLayout
        const container = document.createElement('div');
        container.setAttribute('id', 'fakeLayout');

        // Выполнение
        createFakeLayout(container);

        // Проверка
        expect(container.innerHTML).toEqual(levelsObjects[+levelIndex - 1].fakeLayout);
    });

    it('should not set fake layout if level index is undefined', () => {
        // Подготовка
        localStorage.clear();
        const container = document.createElement('div');
        container.setAttribute('id', 'fakeLayout');

        // Выполнение
        createFakeLayout(container);

        // Проверка
        expect(container.innerHTML).toEqual('');
    });
});
