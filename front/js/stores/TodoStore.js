const Store = require("./Store")

let nextTaskId = 1

class Task {
    constructor(title){
        this.id = nextTaskId
        this.title = title
        this.checked = false
        this.date = new Date()
        nextTaskId++
    }
}

class TodoStore extends Store {

    constructor(){
        super()
        this.state.tasks = []
    }

    // ACTIONS

    createTaskAction({title},payload){
        let task = new Task(title)
        this.state.tasks.push(task)

        payload.task = task
    }

    updateTaskAction(options,payload){
        let task = this.getTask(options.id)
        if(!task) return;

        Object.assign(task,options)
        payload.task = task
    }

    // UTILS

    getTask(id){
        return this.state.tasks.find((task) => task.id == id)
    }

}

module.exports = new TodoStore()
module.exports.Task = Task