const ProgressiveStore = require("./ProgressiveStore")

let nextTaskId = 1

class Task {
    constructor(id, title){
        this.id = id
        this.title = title
        this.checked = false
        this.date = new Date()
        this.categories = []

        if(typeof title == "object"){
            if(title.title)
                this.title = title.title
            if(title.checked)
                this.checked = title.checked
            if(title.date)
                this.date = new Date(title.date)
            if(title.categories)
                this.categories = title.categories
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
        if(this.state.tasks)
            this.state.tasks = this.state.tasks.map((task) => new Task(task.id,task))
    }

    createTaskAction({title,categories},payload){
        let task = new Task(this.state.nextTaskId,title)
        task.categories = categories

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

    removeTaskAction(options,payload){
        let task = this.getTask(options.id)
        if(!task) return;
        this.state.tasks.splice(this.state.tasks.indexOf(task),1)
        payload.task = task
    }

    // UTILS

    getTask(id){
        return this.state.tasks.find((task) => task.id == id)
    }

}

module.exports = new TodoStore()
module.exports.Task = Task