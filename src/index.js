import { inboxActive, todayActive, projectsActive, homeActive } from './active.js'
import { createTaskObject, generateValues  } from './newTask.js';

const menuIcon = document.querySelector('.fa-bars');
const homeIcon = document.querySelector('.fa-home');
const sideBar = document.querySelector('.sidebar');
const mainContainer = document.querySelectorAll('.container')

// Runs through all container styles and toggle style for sidebar transform
menuIcon.addEventListener('click', () => {
    sideBar.classList.toggle('sidebar-active')    
    // classlist only works with single elements (queryselectorall is multiple elements)
    for (let i = 0; i < mainContainer.length; i++) {
        mainContainer[i].classList.toggle('container-active')
    }
})

// Reverts back to Inbox Page
homeIcon.addEventListener('click', () => {
    homeActive();
})


// Changes visible Tab and some styling 
const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const projects = document.querySelector('#projects');

inbox.addEventListener('click', () => {
    inboxActive();
})

today.addEventListener('click', () => {
    todayActive();
})

projects.addEventListener('click', () => {
    projectsActive();
})


// Add New Task button Event Listener
const addTask = document.querySelectorAll('.add-task');
const modal = document.querySelector('.modal-container');

addTask.forEach(task => {
    task.addEventListener('click', () => {
        modal.classList.remove('inactive')
        // newTask();
    })
})


// Generating values and printing new task ALSO deletes task
const addTaskButton = document.querySelector('.modal-add');
let deleteTask;
let newTaskContainer;

addTaskButton.addEventListener('click', () => {
    createTaskObject()
    // have to redefine trash everytime you create a new task to keep the array updated
    deleteTask = document.querySelectorAll('.fa-trash-alt');

    // event listener for each trash Icon, e.target targets only the one selected
    deleteTask.forEach(task => {
        task.addEventListener('click', (e) => {
           e.target.parentNode.parentNode.remove()
        })
    })

    // event listener to hide/show innerContainer (task details)
    newTaskContainer = document.querySelectorAll('.newTaskContainer');

    newTaskContainer.forEach(task => {
        task.addEventListener('click', (e) => {
            if (e.target.parentNode.parentNode.classList.contains('newTaskContainer') && e.target.firstChild !== null) {
                e.target.parentNode.parentNode.children[2].classList.toggle('inactive');
            }
        })
    })
}) 


// Add Task - Close event listeners
const modalX = document.querySelector('.fa-times');
const modalClose = document.querySelector('.modal-close');

[modalX, modalClose].forEach(task => {
    task.addEventListener('click', () => {
        modal.classList.add('inactive')
    })
})


// questions for Shiranka - How to append an element in Inbox and another location as well
// how to get innerDescription to toggleactive