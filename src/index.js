import { inboxActive, todayActive, projectsActive, homeActive } from './active.js'

const menuIcon = document.querySelector('.fa-bars');
const homeIcon = document.querySelector('.fa-home');
const sideBar = document.querySelector('.sidebar');
const mainContainer = document.querySelectorAll('.container')


menuIcon.addEventListener('click', () => {
    sideBar.classList.toggle('sidebar-active')    
    // classlist only works with single elements (queryselectorall is multiple elements)
    for (let i = 0; i < mainContainer.length; i++) {
        mainContainer[i].classList.toggle('container-active')
    }
})

homeIcon.addEventListener('click', () => {
    homeActive();
})


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
