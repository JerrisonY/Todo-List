const inboxSpan = document.querySelector('#inbox');
const todaySpan = document.querySelector('#today');
const inboxTaskContainer = document.querySelector('.inbox-task-container');
const todayTaskContainer = document.querySelector('.today-task-container');

let inboxNum;
let todayNum;

let createNumberText = () => {
    inboxNum = document.createElement('span');
    todayNum = document.createElement('span');

    inboxNum.id = 'inboxNum';
    todayNum.id = 'todayNum';

    inboxSpan.append(inboxNum);
    todaySpan.append(todayNum);
}


let updateNumber = () => {
    inboxNum.textContent = inboxTaskContainer.childElementCount
    todayNum.textContent = todayTaskContainer.childElementCount
}


export { updateNumber, createNumberText }