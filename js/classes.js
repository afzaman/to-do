export default class List {
    constructor(name, {dueDate = 'No Due Date', taskList, description = 'Description goes here', priority = 1 } = {}) {
        this.id = Date.now().toString()
        this.name = name
        this.tasks = []
        this.dueDate = dueDate
        this.description = description
        this.priority = priority
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