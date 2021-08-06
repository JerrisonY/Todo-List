const inboxContainer = document.querySelector('.inbox-container')
const todayContainer = document.querySelector('.today-container')
const projectsContainer = document.querySelector('.projects-container')

const inbox = document.querySelector('#inbox');
const today = document.querySelector('#today');
const projects = document.querySelector('#projects');


let inboxActive = () => {
    inboxContainer.classList.remove('inactive')

    !todayContainer.classList.contains('inactive')
        ? todayContainer.classList.add('inactive')
        : projectsContainer.classList.add('inactive');

    inbox.classList.remove('inactive-font')

    !today.classList.contains('inactive-font')
        ? today.classList.add('inactive-font')
        : projects.classList.add('inactive-font')
}

let todayActive = () => {
    todayContainer.classList.remove('inactive')

    !inboxContainer.classList.contains('inactive')
        ? inboxContainer.classList.add('inactive')
        : projectsContainer.classList.add('inactive')

    today.classList.remove('inactive-font')

    !inbox.classList.contains('inactive-font')
        ? inbox.classList.add('inactive-font')
        : projects.classList.add('inactive-font')
}

let projectsActive = () => {
    projectsContainer.classList.remove('inactive')

    !inboxContainer.classList.contains('inactive')
        ? inboxContainer.classList.add('inactive')
        : todayContainer.classList.add('inactive');

    projects.classList.remove('inactive-font')

    !today.classList.contains('inactive-font')
        ? today.classList.add('inactive-font')
        : inbox.classList.add('inactive-font')

    projects.innerHTML = '<i class="fas fa-tasks"></i>Projects &#8679;'
        ? projects.innerHTML = '<i class="fas fa-tasks"></i>Projects &#8681;'
        : projects.innerHTML = '<i class="fas fa-tasks"></i>Projects &#8679;'
}

let homeActive = () => {
    if (inboxContainer.classList.contains('inactive')) {
        inboxContainer.classList.remove('inactive');
        todayContainer.classList.add('inactive');
        projectsContainer.classList.add('inactive');
    }
}

export { inboxActive, todayActive, projectsActive, homeActive };