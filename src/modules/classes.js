export default class List {
    constructor(name, {dueDate = 'No Due Date', taskList} = {}) {
        this.id = Date.now().toString()
        this.name = name
        this.tasks = []
        this.dueDate = dueDate
    }
}
export class Task {
    constructor(name, {priority = 1} = {}) {
        this.id = Date.now().toString()
        this.name = name
        this.complete = false
        this.priority = priority
    }
}