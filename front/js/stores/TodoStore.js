const ProgressiveStore = require("./ProgressiveStore")

let nextTaskId = 1

class Task {
    constructor(id, title){
        this.id = id
        if(title instanceof String){
            this.title = title
            this.checked = false
            this.date = new Date()
        } else {
            if(title.title)
                this.title = title.title
            if(title.checked)
                this.checked = title.checked
            if(title.date)
                this.date = new Date(title.date)
        }
    }
}

class TodoStore extends ProgressiveStore {

    constructor(){
        super()

        if(!this.state.tasks)
            this.state.tasks = []

        if(!this.state.nextTaskId)
            this.state.nextTaskId = 1;
    }

    // ACTIONS

    loadStorageAction(options,payload){
        super.loadStorageAction(options,payload)
        this.state.tasks = this.state.tasks.map((task) => new Task(task.id,task))
    }

    createTaskAction({title},payload){
        let task = new Task(this.state.nextTaskId,title)

        this.state.tasks.push(task)
        this.state.nextTaskId++

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