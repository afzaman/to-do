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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCAL_STORAGE_LIST_KEY\": () => (/* binding */ LOCAL_STORAGE_LIST_KEY),\n/* harmony export */   \"LOCAL_STORAGE_SELECTED_LIST_ID_KEY\": () => (/* binding */ LOCAL_STORAGE_SELECTED_LIST_ID_KEY),\n/* harmony export */   \"lists\": () => (/* binding */ lists),\n/* harmony export */   \"selectedListId\": () => (/* binding */ selectedListId)\n/* harmony export */ });\n/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/classes.js */ \"./src/modules/classes.js\");\n/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render.js */ \"./src/modules/render.js\");\n\r\n\r\n\r\n//HTML elements\r\nconst listsContainer = document.querySelector('[data-lists]')\r\nconst newListForm = document.querySelector('[data-new-list-form]')\r\nconst newListInput = document.querySelector('[data-new-list-input]')\r\nconst deleteListButton = document.querySelector('[data-delete-list-button]')\r\nconst tasksContainer = document.querySelector('[data-tasks]')\r\nconst newTaskForm = document.querySelector('[data-new-task-form]')\r\nconst newTaskInput = document.querySelector('[data-new-task-input]')\r\nconst clearCompleteTaskButton = document.querySelector('[data-clear-complete-button]')\r\nconst listDueDateInput = document.querySelector('[data-due-date-input]')\r\nconst listDueDate = document.querySelector('[data-due-date]')\r\n\r\n\r\n//Local Storage\r\nconst LOCAL_STORAGE_LIST_KEY = 'task.lists'\r\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'\r\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []\r\nlet selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)\r\n\r\n//Event Listeners\r\nlistsContainer.addEventListener('click', e => {\r\n    if (e.target.tagName.toLowerCase() === 'li') {\r\n        selectedListId = e.target.dataset.listId\r\n        ;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n    }\r\n})\r\n\r\ntasksContainer.addEventListener('click', e => {\r\n    if (e.target.tagName.toLowerCase() === 'span') {\r\n        const selectedList = lists.find(list => list.id === selectedListId)\r\n        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)\r\n        e.target.classList.add('inactive')\r\n        const editId = \"edit\" + e.target.id\r\n        const taskEdit = document.getElementById(editId)\r\n        taskEdit.classList.remove('inactive')\r\n        taskEdit.addEventListener('change' || 0, e => {\r\n            selectedTask.name = taskEdit.value\r\n\r\n        })\r\n    }\r\n    if (e.target.tagName.toLowerCase() === 'input' && e.target.type.toLowerCase() === 'checkbox') {\r\n        const selectedList = lists.find(list => list.id === selectedListId)\r\n        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)\r\n        selectedTask.complete = e.target.checked\r\n        ;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n    }\r\n    if (e.target.tagName.toLowerCase() === 'button') {\r\n        const selectedList = lists.find(list => list.id === selectedListId)\r\n        selectedList.tasks = selectedList.tasks.filter(task => task.id !== e.target.id)\r\n        ;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n    }\r\n})\r\n\r\nclearCompleteTaskButton.addEventListener('click', e => {\r\n    const selectedList = lists.find(list => list.id === selectedListId)\r\n    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)\r\n    ;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n})\r\n\r\ndeleteListButton.addEventListener('click', e => {\r\n    lists = lists.filter(list => list.id !== selectedListId)\r\n    selectedListId = null\r\n    ;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n})\r\n\r\nnewListForm.addEventListener('submit', e => {\r\n    e.preventDefault()\r\n    const listName = newListInput.value\r\n    if (listName == null || listName === '') return\r\n    const list = new _modules_classes_js__WEBPACK_IMPORTED_MODULE_0__.default(listName)\r\n    newListInput.value = null\r\n    lists.push(list)\r\n    ;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n})\r\n\r\nnewTaskForm.addEventListener('submit', e => {\r\n    e.preventDefault()\r\n    const taskName = newTaskInput.value\r\n    if (taskName == null || taskName === '') return\r\n    const task = new _modules_classes_js__WEBPACK_IMPORTED_MODULE_0__.Task(taskName)\r\n    newTaskInput.value = null\r\n    const selectedList = lists.find(list => list.id === selectedListId)\r\n    selectedList.tasks.push(task)\r\n    ;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n})\r\n\r\nlistDueDate.addEventListener('click', e => {\r\n    listDueDate.classList.add('inactive')\r\n    listDueDateInput.classList.remove('inactive')\r\n})\r\n\r\nlistDueDateInput.addEventListener('change', e => {\r\n    const selectedList = lists.find(list => list.id === selectedListId)\r\n    selectedList.dueDate = listDueDateInput.value.toString()\r\n    listDueDate.classList.remove('inactive')\r\n    listDueDateInput.classList.add('inactive')\r\n    ;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n})\r\n\r\n;(0,_modules_render_js__WEBPACK_IMPORTED_MODULE_1__.render)()\n\n//# sourceURL=webpack://to-do/./src/index.js?");

/***/ }),

/***/ "./src/modules/classes.js":
/*!********************************!*\
  !*** ./src/modules/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass List {\r\n    constructor(name, {dueDate = 'No Due Date', taskList} = {}) {\r\n        this.id = Date.now().toString()\r\n        this.name = name\r\n        this.tasks = []\r\n        this.dueDate = dueDate\r\n    }\r\n}\r\nclass Task {\r\n    constructor(name, {priority = 1} = {}) {\r\n        this.id = Date.now().toString()\r\n        this.name = name\r\n        this.complete = false\r\n        this.priority = priority\r\n    }\r\n}\n\n//# sourceURL=webpack://to-do/./src/modules/classes.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveAndRender),\n/* harmony export */   \"save\": () => (/* binding */ save),\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"renderTaskCount\": () => (/* binding */ renderTaskCount)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\r\n\r\n//HTML elements\r\nconst listsContainer = document.querySelector('[data-lists]')\r\nconst listDisplayContainer = document.querySelector('[data-list-display-container]')\r\nconst listTitleElement = document.querySelector('[data-list-title]')\r\nconst listCountElement = document.querySelector('[data-list-count]')\r\nconst tasksContainer = document.querySelector('[data-tasks]')\r\nconst taskTempalte = document.getElementById('task-template')\r\nconst listDueDate = document.querySelector('[data-due-date]')\r\n\r\n//Rendering Functions\r\nfunction saveAndRender() {\r\n    save()\r\n    render()\r\n}\r\n\r\nfunction save() {\r\n    localStorage.setItem(_index_js__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_LIST_KEY, JSON.stringify(_index_js__WEBPACK_IMPORTED_MODULE_0__.lists))\r\n    localStorage.setItem(_index_js__WEBPACK_IMPORTED_MODULE_0__.LOCAL_STORAGE_SELECTED_LIST_ID_KEY, _index_js__WEBPACK_IMPORTED_MODULE_0__.selectedListId)\r\n}\r\n\r\nfunction render() {\r\n    clearElement(listsContainer)\r\n    renderLists()\r\n    const selectedList = _index_js__WEBPACK_IMPORTED_MODULE_0__.lists.find(list => list.id === _index_js__WEBPACK_IMPORTED_MODULE_0__.selectedListId)\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.selectedListId === null) {\r\n        listDisplayContainer.style.display = 'none'\r\n    } else {\r\n        listDisplayContainer.style.display = ''\r\n        listTitleElement.innerText = selectedList.name\r\n        listDueDate.innerText = selectedList.dueDate\r\n        renderTaskCount(selectedList)\r\n        clearElement(tasksContainer)\r\n        renderTasks(selectedList)\r\n    }\r\n}\r\n\r\nfunction renderTasks(selectedList) {\r\n    selectedList.tasks.forEach(task => {\r\n        const taskElement = document.importNode(taskTempalte.content, true)\r\n        const checkbox = taskElement.querySelector('input')\r\n        checkbox.id = task.id\r\n        checkbox.checked = task.complete\r\n        const label = taskElement.querySelector('span')\r\n        label.id = task.id\r\n        label.append(task.name)\r\n        if (task.complete === true){\r\n           label.classList.add('strikethrough') \r\n        }\r\n        const deleteButton = taskElement.querySelector('button')\r\n        deleteButton.id = task.id\r\n        const taskEdit = taskElement.querySelector('[data-task-edit]')\r\n        taskEdit.id = \"edit\" + task.id\r\n        taskEdit.value = task.name\r\n        tasksContainer.appendChild(taskElement)\r\n    })\r\n}\r\n\r\nfunction renderTaskCount(selectedList) {\r\n    const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length\r\n    const taskString = incompleteTaskCount === 1 ? \"task\" : \"tasks\"\r\n    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`\r\n}\r\n\r\nfunction renderLists() {\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__.lists.forEach(list => {\r\n        const listElement = document.createElement('li')\r\n        listElement.dataset.listId = list.id\r\n        listElement.classList.add(\"list-name\")\r\n        listElement.innerText = list.name\r\n        if (list.id === _index_js__WEBPACK_IMPORTED_MODULE_0__.selectedListId) listElement.classList.add('active-list')\r\n        listsContainer.appendChild(listElement)\r\n    })\r\n}\r\n\r\nfunction clearElement(element) {\r\n    while (element.firstChild) {\r\n        element.removeChild(element.firstChild)\r\n    }\r\n}\n\n//# sourceURL=webpack://to-do/./src/modules/render.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;