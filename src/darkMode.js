const header = document.querySelector('.header');
const sideBar = document.querySelector('.sidebar');
const main = document.querySelector('main');
const modal = document.querySelector('.modal');
const modalHeader = document.querySelector('.modal-header');
const modalAdd = document.querySelector('.modal-add');
const container = document.querySelectorAll('.container');

let darkMode = () => {
    header.classList.toggle('dark-header')
    sideBar.classList.toggle('dark-sidebar')
    main.classList.toggle('dark-main')
    modal.classList.toggle('dark-modal')
    modalHeader.classList.toggle('dark-modal-header')
    modalAdd.classList.toggle('dark-modal-add')

    container.forEach(task => {
        task.classList.toggle('dark-container')
    })
}

export { darkMode };