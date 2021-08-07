import { inboxActive, todayActive, projectsActive, homeActive } from './active.js'
import { newTask  } from './newTask.js';

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


// Add Task button Event Listener
const addTask = document.querySelectorAll('.add-task');

addTask.forEach(task => {
    task.addEventListener('click', () => {
        newTask();
    })
})