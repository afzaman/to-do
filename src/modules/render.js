import { LOCAL_STORAGE_LIST_KEY, LOCAL_STORAGE_SELECTED_LIST_ID_KEY, lists, selectedListId } from "../index.js"

//HTML elements
const listsContainer = document.querySelector('[data-lists]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTempalte = document.getElementById('task-template')
const listDueDate = document.querySelector('[data-due-date]')

//Rendering Functions
export default function saveAndRender() {
    save()
    render()
}

export function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
}

export function render() {
    clearElement(listsContainer)
    renderLists()
    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId === null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        listDueDate.innerText = selectedList.dueDate
        renderTaskCount(selectedList)
        clearElement(tasksContainer)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTempalte.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('span')
        label.id = task.id
        label.append(task.name)
        if (task.complete === true){
           label.classList.add('strikethrough') 
        }
        const deleteButton = taskElement.querySelector('button')
        deleteButton.id = task.id
        const taskEdit = taskElement.querySelector('[data-task-edit]')
        taskEdit.id = "edit" + task.id
        taskEdit.value = task.name
        tasksContainer.appendChild(taskElement)
    })
}

export function renderTaskCount(selectedList) {
    const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks"
    listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`
}

function renderLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("list-name")
        listElement.innerText = list.name
        if (list.id === selectedListId) listElement.classList.add('active-list')
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}