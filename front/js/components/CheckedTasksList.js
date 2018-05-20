const React = require("react")

const TodoList = require("./TodoList")
const TodoStore = require("../stores/TodoStore")

module.exports = class CurrentTasksList extends React.Component {

    constructor() {
        super()

        this.state = {
            todos: []
        }
        this.observables = []
    }

    componentDidMount() {
        this.update()
        this.observables.push(TodoStore.getActionObservable("createTask").subscribe(() => this.update()))
        this.observables.push(TodoStore.getActionObservable("updateTask").subscribe(() => this.update()))
        this.observables.push(TodoStore.getActionObservable("removeTask").subscribe(() => this.update()))
    }

    componentWillUnmount() {
        this.observables.forEach((observable) => observable.dispose())
    }

    update(){

        let todoList = TodoStore.state.tasks.filter((el) => el.checked)
        todoList.sort((a,b) => b.date.getTime() - a.date.getTime())

        this.setState({
            todos: todoList
        })
    }

    render() {
        if(this.state.todos.length > 0){
            return <div className="checked-task-list" ><TodoList todos={this.state.todos}/></div>
        } else {
            return <div className="checked-task-list empty" ></div>
        }
    }
}