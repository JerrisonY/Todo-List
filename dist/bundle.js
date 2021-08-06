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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inboxActive\": () => (/* binding */ inboxActive),\n/* harmony export */   \"todayActive\": () => (/* binding */ todayActive),\n/* harmony export */   \"projectsActive\": () => (/* binding */ projectsActive),\n/* harmony export */   \"homeActive\": () => (/* binding */ homeActive)\n/* harmony export */ });\nconst inboxContainer = document.querySelector('.inbox-container')\nconst todayContainer = document.querySelector('.today-container')\nconst projectsContainer = document.querySelector('.projects-container')\n\nlet inboxActive = () => {\n    inboxContainer.classList.remove('inactive')\n\n    !todayContainer.classList.contains('inactive')\n        ? todayContainer.classList.add('inactive')\n        : projectsContainer.classList.add('inactive')\n}\n\nlet todayActive = () => {\n    todayContainer.classList.remove('inactive')\n\n    !inboxContainer.classList.contains('inactive')\n        ? inboxContainer.classList.add('inactive')\n        : projectsContainer.classList.add('inactive')\n}\n\nlet projectsActive = () => {\n    projectsContainer.classList.remove('inactive')\n\n    !inboxContainer.classList.contains('inactive')\n        ? inboxContainer.classList.add('inactive')\n        : todayContainer.classList.add('inactive')\n}\n\nlet homeActive = () => {\n    if (inboxContainer.classList.contains('inactive')) {\n        inboxContainer.classList.remove('inactive');\n        todayContainer.classList.add('inactive');\n        projectsContainer.classList.add('inactive');\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/active.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _active_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./active.js */ \"./src/active.js\");\n\n\nconst menuIcon = document.querySelector('.fa-bars');\nconst homeIcon = document.querySelector('.fa-home');\nconst sideBar = document.querySelector('.sidebar');\nconst mainContainer = document.querySelectorAll('.container')\n\n\nmenuIcon.addEventListener('click', () => {\n    sideBar.classList.toggle('sidebar-active')    \n    // classlist only works with single elements (queryselectorall is multiple elements)\n    for (let i = 0; i < mainContainer.length; i++) {\n        mainContainer[i].classList.toggle('container-active')\n    }\n})\n\nhomeIcon.addEventListener('click', () => {\n    ;(0,_active_js__WEBPACK_IMPORTED_MODULE_0__.homeActive)();\n})\n\nconst inbox = document.querySelector('#inbox');\nconst today = document.querySelector('#today');\nconst projects = document.querySelector('#projects');\n\ninbox.addEventListener('click', () => {\n    (0,_active_js__WEBPACK_IMPORTED_MODULE_0__.inboxActive)();\n})\n\ntoday.addEventListener('click', () => {\n    ;(0,_active_js__WEBPACK_IMPORTED_MODULE_0__.todayActive)();\n})\n\nprojects.addEventListener('click', () => {\n    ;(0,_active_js__WEBPACK_IMPORTED_MODULE_0__.projectsActive)();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

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