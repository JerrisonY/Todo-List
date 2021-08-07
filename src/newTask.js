const inboxContainer = document.querySelector('.inbox-container')
const todayContainer = document.querySelector('.today-container')
const projectsContainer = document.querySelector('.projects-container')

const inboxTaskContainer = document.querySelector('.inbox-task-container');
const todayTaskContainer = document.querySelector('.today-task-container');
const projectsTaskContainer = document.querySelector('.projects-task-container');


let newTask = () => {
    if (!inboxContainer.classList.contains('inactive')) {
        let newTask = document.createElement('span');
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox')
        
        newTask.append(checkBox);
        inboxTaskContainer.append(newTask);

    }
}

export { newTask };