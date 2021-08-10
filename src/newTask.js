const inboxContainer = document.querySelector('.inbox-container')
const todayContainer = document.querySelector('.today-container')
const projectsContainer = document.querySelector('.projects-container')

const inboxTaskContainer = document.querySelector('.inbox-task-container');
const todayTaskContainer = document.querySelector('.today-task-container');
const projectsTaskContainer = document.querySelector('.projects-task-container');

let newValues;


let generateValues = (title, description, date, priority) => {
    return {
        title,
        description,
        date,
        priority,
    }
}

let createTaskObject = () => {

    // generate the task that is seen on default view
    let titleValue = document.querySelector('.title').value;
    let descriptionValue = document.querySelector('.description').value;
    let dateValue = document.querySelector('.date').value;
    let priorityValue = document.querySelector('#priority').value;

    newValues = generateValues(titleValue, descriptionValue, dateValue, priorityValue);

    let newTaskContainer = document.createElement('div');
    let firstContainer = document.createElement('div');
    let secondContainer = document.createElement('div');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    let title = document.createElement('p');
    let date = document.createElement('p');
    let priority = document.createElement('i');
    let trash = document.createElement('i');
    
    newTaskContainer.classList.add('newTaskContainer');
    firstContainer.classList.add('firstContainer');
    secondContainer.classList.add('secondContainer');
    trash.classList.add('far', 'fa-trash-alt');

    if (priorityValue === 'low') {
        priority.classList.add('fas', 'fa-flag', 'flag-low');
    } else if (priorityValue === 'medium') {
        priority.classList.add('fas', 'fa-flag', 'flag-medium');
    } else {
        priority.classList.add('fas', 'fa-flag', 'flag-high');
    }

    title.textContent = newValues.title;
    date.textContent = newValues.date;

    secondContainer.append(date, priority, trash);
    firstContainer.append(checkBox, title);

    // generate the in-depth view of task
    let innerContainer = document.createElement('div');
    let innerFirst = document.createElement('div');
    let innerSecond = document.createElement('div');
    let innerTitle = document.createElement('span');
    let innerDate = document.createElement('span');
    let innerDescription = document.createElement('span');
    let innerPriority = document.createElement('span');
    let innerTitleS = document.createElement('span');
    let innerDateS = document.createElement('span');
    let innerDescriptionS = document.createElement('span');
    let innerPriorityS = document.createElement('span');

    innerContainer.classList.add('innerContainer', 'inactive');
    innerFirst.classList.add('innerFirst');
    innerSecond.classList.add('innerSecond');

    innerTitleS.classList.add('strong');
    innerDateS.classList.add('strong');
    innerDescriptionS.classList.add('strong');
    innerPriorityS.classList.add('strong');
    innerTitle.classList.add('regular');
    innerDate.classList.add('regular');
    innerDescription.classList.add('regular');
    innerPriority.classList.add('regular');

    innerTitleS.textContent = 'Title:';
    innerDateS.textContent = 'Due Date:';
    innerDescriptionS.textContent = 'Description:';
    innerPriorityS.textContent = 'Priority:';
    innerTitle.textContent = newValues.title;
    innerDate.textContent = newValues.date;
    innerDescription.textContent = newValues.description;
    innerPriority.textContent = newValues.priority;


    innerTitleS.append(innerTitle)
    innerDateS.append(innerDate)
    innerDescriptionS.append(innerDescription)
    innerPriorityS.append(innerPriority)

    innerFirst.append(innerTitleS, innerDateS);
    innerSecond.append(innerDescriptionS, innerPriorityS);
    innerContainer.append(innerFirst, innerSecond);

    newTaskContainer.append(firstContainer, secondContainer, innerContainer);

    // checks to see which tab is active, and appends to it
    if (!inboxContainer.classList.contains('inactive')) {
        inboxTaskContainer.append(newTaskContainer);
    } else if (!todayContainer.classList.contains('inactive')) {
        todayTaskContainer.append(newTaskContainer);
        inboxTaskContainer.append(newTaskContainer.cloneNode(true));
    } else {
        projectsTaskContainer.append(newTaskContainer);
        inboxTaskContainer.append(newTaskContainer.cloneNode(true));
    }
}



export { createTaskObject, generateValues };