/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
const homeworkContainer = document.querySelector('#homework-container');

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */
function createDiv() {
    let div = document.createElement('div');

    div.classList.add('draggable-div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.top = '100px';
    div.style.left = '100px';
    div.style.background = 'red';
    div.draggable = true;
    div.textContent = 'asdsadsadasd';
    div.id = `${Math.random()}`;

    return div;
}

function dragStart(ev) {
    debugger;
    ev.dataTransfer.effectAllowed = 'move';
    ev.dataTransfer.setData('Text', ev.target.getAttribute('id'));
    ev.dataTransfer.setDragImage(ev.target, 100, 100);

    return true;
}
function dragEnter(ev) {
    ev.preventDefault();

    return true;
}
function dragOver(ev) {
    ev.preventDefault();
}
function dragDrop(ev) {
    var data = ev.dataTransfer.getData('Text');

    ev.target.appendChild(document.getElementById(data));
    ev.stopPropagation();

    return false;
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
    homeworkContainer.addEventListener('dragenter', dragEnter);
    homeworkContainer.addEventListener('drop', dragDrop);
    homeworkContainer.addEventListener('dragover', dragOver);
    target.addEventListener('dragstart', dragStart);
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export { createDiv };
