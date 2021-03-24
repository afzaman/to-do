import List, { Task } from "/js/classes.js"
import saveAndRender, { renderTaskCount, render, save } from "/js/render.js"

//HTML elements
const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')
const tasksContainer = document.querySelector('[data-tasks]')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const clearCompleteTaskButton = document.querySelector('[data-clear-complete-button]')
const listDueDateInput = document.querySelector('[data-due-date-input]')
const listDueDate = document.querySelector('[data-due-date]')

//Local Storage
export const LOCAL_STORAGE_LIST_KEY = 'task.lists'
export const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'
export let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
export let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

//Event Listeners
listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        saveAndRender()
    }
})

tasksContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        const selectedList = lists.find(list => list.id === selectedListId)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        renderTaskCount(selectedList)
    }
})

clearCompleteTaskButton.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})

deleteListButton.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveAndRender()
})

newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.value
    if (listName == null || listName === '') return
    const list = new List(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

newTaskForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = newTaskInput.value
    if (taskName == null || taskName === '') return
    const task = new Task(taskName)
    newTaskInput.value = null
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.push(task)
    saveAndRender()
})

listDueDate.addEventListener('click', e => {
    listDueDate.classList.add('inactive')
    listDueDateInput.classList.remove('inactive')
})

listDueDateInput.addEventListener('change', e => {
    selectedListId.dueDate = listDueDateInput.value
    listDueDate.classList.remove('inactive')
    listDueDateInput.classList.add('inactive')
    saveAndRender()
})

render()