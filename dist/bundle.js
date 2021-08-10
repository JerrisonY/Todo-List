/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/active.js":
/*!***********************!*\
  !*** ./src/active.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inboxActive\": () => (/* binding */ inboxActive),\n/* harmony export */   \"todayActive\": () => (/* binding */ todayActive),\n/* harmony export */   \"projectsActive\": () => (/* binding */ projectsActive),\n/* harmony export */   \"homeActive\": () => (/* binding */ homeActive)\n/* harmony export */ });\nconst inboxContainer = document.querySelector('.inbox-container')\nconst todayContainer = document.querySelector('.today-container')\nconst projectsContainer = document.querySelector('.projects-container')\n\nconst inbox = document.querySelector('#inbox');\nconst today = document.querySelector('#today');\nconst projects = document.querySelector('#projects');\n\n\nlet inboxActive = () => {\n    inboxContainer.classList.remove('inactive')\n\n    !todayContainer.classList.contains('inactive')\n        ? todayContainer.classList.add('inactive')\n        : projectsContainer.classList.add('inactive');\n\n    inbox.classList.remove('inactive-font')\n\n    !today.classList.contains('inactive-font')\n        ? today.classList.add('inactive-font')\n        : projects.classList.add('inactive-font')\n}\n\nlet todayActive = () => {\n    todayContainer.classList.remove('inactive')\n\n    !inboxContainer.classList.contains('inactive')\n        ? inboxContainer.classList.add('inactive')\n        : projectsContainer.classList.add('inactive')\n\n    today.classList.remove('inactive-font')\n\n    !inbox.classList.contains('inactive-font')\n        ? inbox.classList.add('inactive-font')\n        : projects.classList.add('inactive-font')\n}\n\nlet projectsActive = () => {\n    projectsContainer.classList.remove('inactive')\n\n    !inboxContainer.classList.contains('inactive')\n        ? inboxContainer.classList.add('inactive')\n        : todayContainer.classList.add('inactive');\n\n    projects.classList.remove('inactive-font')\n\n    !today.classList.contains('inactive-font')\n        ? today.classList.add('inactive-font')\n        : inbox.classList.add('inactive-font')\n\n    projects.innerHTML =  true\n        ? projects.innerHTML = '<i class=\"fas fa-tasks\"></i>Projects &#8681;'\n        : 0\n}\n\nlet homeActive = () => {\n    if (inboxContainer.classList.contains('inactive')) {\n        inboxContainer.classList.remove('inactive');\n        todayContainer.classList.add('inactive');\n        projectsContainer.classList.add('inactive');\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/active.js?");

/***/ }),

/***/ "./src/check.js":
/*!**********************!*\
  !*** ./src/check.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checked\": () => (/* binding */ checked)\n/* harmony export */ });\nconst inboxTaskContainer = document.querySelector('.inbox-task-container')\n\nlet checked = () => {\n    console.log(inboxTaskContainer.childElementCount)\n}\n\n\n\n//# sourceURL=webpack:///./src/check.js?");

/***/ }),

/***/ "./src/darkMode.js":
/*!*************************!*\
  !*** ./src/darkMode.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"darkMode\": () => (/* binding */ darkMode)\n/* harmony export */ });\nconst header = document.querySelector('.header');\nconst sideBar = document.querySelector('.sidebar');\nconst main = document.querySelector('main');\nconst modal = document.querySelector('.modal');\nconst modalHeader = document.querySelector('.modal-header');\nconst modalAdd = document.querySelector('.modal-add');\nconst container = document.querySelectorAll('.container');\n\nlet darkMode = () => {\n    header.classList.toggle('dark-header')\n    sideBar.classList.toggle('dark-sidebar')\n    main.classList.toggle('dark-main')\n    modal.classList.toggle('dark-modal')\n    modalHeader.classList.toggle('dark-modal-header')\n    modalAdd.classList.toggle('dark-modal-add')\n\n    container.forEach(task => {\n        task.classList.toggle('dark-container')\n    })\n}\n\n\n\n//# sourceURL=webpack:///./src/darkMode.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active.js */ \"./src/active.js\");\n/* harmony import */ var _newTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newTask.js */ \"./src/newTask.js\");\n/* harmony import */ var _darkMode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./darkMode.js */ \"./src/darkMode.js\");\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check.js */ \"./src/check.js\");\n/* harmony import */ var _trackingProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trackingProject.js */ \"./src/trackingProject.js\");\n\n\n\n\n\n\n\n// run createNumberText right away to append the span, will run and update per action of user\n(0,_trackingProject_js__WEBPACK_IMPORTED_MODULE_4__.createNumberText)();\n(0,_trackingProject_js__WEBPACK_IMPORTED_MODULE_4__.updateNumber)()\n\n// Runs through all container styles and toggle style for sidebar transform\nconst menuIcon = document.querySelector('.fa-bars');\nconst homeIcon = document.querySelector('.fa-home');\nconst sideBar = document.querySelector('.sidebar');\nconst mainContainer = document.querySelectorAll('.container')\n\nmenuIcon.addEventListener('click', () => {\n    sideBar.classList.toggle('sidebar-active')    \n    // classlist only works with single elements (queryselectorall is multiple elements)\n    for (let i = 0; i < mainContainer.length; i++) {\n        mainContainer[i].classList.toggle('container-active')\n    }\n})\n\n// Reverts back to Inbox Page\nhomeIcon.addEventListener('click', () => {\n    ;(0,_active_js__WEBPACK_IMPORTED_MODULE_0__.homeActive)();\n})\n\n\n// Changes visible Tab and some styling \nconst inbox = document.querySelector('#inbox');\nconst today = document.querySelector('#today');\nconst projects = document.querySelector('#projects');\n\ninbox.addEventListener('click', () => {\n    (0,_active_js__WEBPACK_IMPORTED_MODULE_0__.inboxActive)();\n})\n\ntoday.addEventListener('click', () => {\n    ;(0,_active_js__WEBPACK_IMPORTED_MODULE_0__.todayActive)();\n})\n\nprojects.addEventListener('click', () => {\n    ;(0,_active_js__WEBPACK_IMPORTED_MODULE_0__.projectsActive)();\n})\n\n\n// Add New Task button Event Listener\nconst addTask = document.querySelectorAll('.add-task');\nconst modal = document.querySelector('.modal-container');\n\naddTask.forEach(task => {\n    task.addEventListener('click', () => {\n        modal.classList.remove('inactive')\n        // newTask();\n    })\n})\n\n\n// Generating values and printing new task ALSO deletes task\nconst addTaskButton = document.querySelector('.modal-add');\nlet deleteTask;\nlet newTaskContainer;\n\naddTaskButton.addEventListener('click', () => {\n    (0,_newTask_js__WEBPACK_IMPORTED_MODULE_1__.createTaskObject)()\n    ;(0,_trackingProject_js__WEBPACK_IMPORTED_MODULE_4__.updateNumber)()\n\n    // have to redefine trash everytime you create a new task to keep the array updated\n    deleteTask = document.querySelectorAll('.fa-trash-alt');\n\n    // event listener for each trash Icon, e.target targets only the one selected\n    deleteTask.forEach(task => {\n        task.addEventListener('click', (e) => {\n           e.target.parentNode.parentNode.remove()\n           ;(0,_trackingProject_js__WEBPACK_IMPORTED_MODULE_4__.updateNumber)()\n        })\n    })\n\n    // event listener to hide/show innerContainer (task details)\n    newTaskContainer = document.querySelectorAll('.newTaskContainer');\n\n    newTaskContainer.forEach(task => {\n        task.addEventListener('click', (e) => {\n            if (e.target.parentNode.parentNode.classList.contains('newTaskContainer') && e.target.firstChild !== null) {\n                e.target.parentNode.parentNode.children[2].classList.toggle('inactive');\n            }\n        })\n    })\n\n    // Checkbox event lisener\n    let checkbox = document.querySelectorAll('input[type=checkbox]')\n\n    checkbox.forEach(task => {\n        task.addEventListener('change', () => {\n            ;(0,_check_js__WEBPACK_IMPORTED_MODULE_3__.checked)()\n        })\n    });\n}) \n\n\n// Add Task - Close event listeners\nconst modalX = document.querySelector('.fa-times');\nconst modalClose = document.querySelector('.modal-close');\n\n[modalX, modalClose].forEach(task => {\n    task.addEventListener('click', () => {\n        modal.classList.add('inactive')\n    })\n})\n\n\n// dark mode\nconst darkModeBtn = document.querySelector('.fa-moon');\n\ndarkModeBtn.addEventListener('click', () => {\n    (0,_darkMode_js__WEBPACK_IMPORTED_MODULE_2__.darkMode)();\n})\n// questions for Shiranka - How to append an element in Inbox and another location as well\n// how to get innerDescription to toggleactive\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/newTask.js":
/*!************************!*\
  !*** ./src/newTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskObject\": () => (/* binding */ createTaskObject),\n/* harmony export */   \"generateValues\": () => (/* binding */ generateValues)\n/* harmony export */ });\nconst inboxContainer = document.querySelector('.inbox-container')\nconst todayContainer = document.querySelector('.today-container')\nconst projectsContainer = document.querySelector('.projects-container')\n\nconst inboxTaskContainer = document.querySelector('.inbox-task-container');\nconst todayTaskContainer = document.querySelector('.today-task-container');\nconst projectsTaskContainer = document.querySelector('.projects-task-container');\n\nlet newValues;\n\n\nlet generateValues = (title, description, date, priority) => {\n    return {\n        title,\n        description,\n        date,\n        priority,\n    }\n}\n\nlet createTaskObject = () => {\n\n    // generate the task that is seen on default view\n    let titleValue = document.querySelector('.title').value;\n    let descriptionValue = document.querySelector('.description').value;\n    let dateValue = document.querySelector('.date').value;\n    let priorityValue = document.querySelector('#priority').value;\n\n    newValues = generateValues(titleValue, descriptionValue, dateValue, priorityValue);\n\n    let newTaskContainer = document.createElement('div');\n    let firstContainer = document.createElement('div');\n    let secondContainer = document.createElement('div');\n    let checkBox = document.createElement('input');\n    checkBox.setAttribute('type','checkbox');\n    let title = document.createElement('p');\n    let date = document.createElement('p');\n    let priority = document.createElement('i');\n    let trash = document.createElement('i');\n    \n    newTaskContainer.classList.add('newTaskContainer');\n    firstContainer.classList.add('firstContainer');\n    secondContainer.classList.add('secondContainer');\n    trash.classList.add('far', 'fa-trash-alt');\n\n    if (priorityValue === 'low') {\n        priority.classList.add('fas', 'fa-flag', 'flag-low');\n    } else if (priorityValue === 'medium') {\n        priority.classList.add('fas', 'fa-flag', 'flag-medium');\n    } else {\n        priority.classList.add('fas', 'fa-flag', 'flag-high');\n    }\n\n    title.textContent = newValues.title;\n    date.textContent = newValues.date;\n\n    secondContainer.append(date, priority, trash);\n    firstContainer.append(checkBox, title);\n\n    // generate the in-depth view of task\n    let innerContainer = document.createElement('div');\n    let innerFirst = document.createElement('div');\n    let innerSecond = document.createElement('div');\n    let innerTitle = document.createElement('span');\n    let innerDate = document.createElement('span');\n    let innerDescription = document.createElement('span');\n    let innerPriority = document.createElement('span');\n    let innerTitleS = document.createElement('span');\n    let innerDateS = document.createElement('span');\n    let innerDescriptionS = document.createElement('span');\n    let innerPriorityS = document.createElement('span');\n\n    innerContainer.classList.add('innerContainer', 'inactive');\n    innerFirst.classList.add('innerFirst');\n    innerSecond.classList.add('innerSecond');\n\n    innerTitleS.classList.add('strong');\n    innerDateS.classList.add('strong');\n    innerDescriptionS.classList.add('strong');\n    innerPriorityS.classList.add('strong');\n    innerTitle.classList.add('regular');\n    innerDate.classList.add('regular');\n    innerDescription.classList.add('regular');\n    innerPriority.classList.add('regular');\n\n    innerTitleS.textContent = 'Title:';\n    innerDateS.textContent = 'Due Date:';\n    innerDescriptionS.textContent = 'Description:';\n    innerPriorityS.textContent = 'Priority:';\n    innerTitle.textContent = newValues.title;\n    innerDate.textContent = newValues.date;\n    innerDescription.textContent = newValues.description;\n    innerPriority.textContent = newValues.priority;\n\n\n    innerTitleS.append(innerTitle)\n    innerDateS.append(innerDate)\n    innerDescriptionS.append(innerDescription)\n    innerPriorityS.append(innerPriority)\n\n    innerFirst.append(innerTitleS, innerDateS);\n    innerSecond.append(innerDescriptionS, innerPriorityS);\n    innerContainer.append(innerFirst, innerSecond);\n\n    newTaskContainer.append(firstContainer, secondContainer, innerContainer);\n\n    // checks to see which tab is active, and appends to it\n    if (!inboxContainer.classList.contains('inactive')) {\n        inboxTaskContainer.append(newTaskContainer);\n    } else if (!todayContainer.classList.contains('inactive')) {\n        todayTaskContainer.append(newTaskContainer);\n        inboxTaskContainer.append(newTaskContainer.cloneNode(true));\n    } else {\n        projectsTaskContainer.append(newTaskContainer);\n        inboxTaskContainer.append(newTaskContainer.cloneNode(true));\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/newTask.js?");

/***/ }),

/***/ "./src/trackingProject.js":
/*!********************************!*\
  !*** ./src/trackingProject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateNumber\": () => (/* binding */ updateNumber),\n/* harmony export */   \"createNumberText\": () => (/* binding */ createNumberText)\n/* harmony export */ });\nconst inboxSpan = document.querySelector('#inbox');\nconst todaySpan = document.querySelector('#today');\nconst inboxTaskContainer = document.querySelector('.inbox-task-container');\nconst todayTaskContainer = document.querySelector('.today-task-container');\n\nlet inboxNum;\nlet todayNum;\n\nlet createNumberText = () => {\n    inboxNum = document.createElement('span');\n    todayNum = document.createElement('span');\n\n    inboxNum.id = 'inboxNum';\n    todayNum.id = 'todayNum';\n\n    inboxSpan.append(inboxNum);\n    todaySpan.append(todayNum);\n}\n\n\nlet updateNumber = () => {\n    inboxNum.textContent = inboxTaskContainer.childElementCount\n    todayNum.textContent = todayTaskContainer.childElementCount\n}\n\n\n\n\n//# sourceURL=webpack:///./src/trackingProject.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;