const React = require("react")

const CurrentTasksList = require("./CurrentTasksList")
const CheckedTasksList = require("./CheckedTasksList")
const AddTaskForm = require("./AddTaskForm")
const TodoStore = require("../stores/TodoStore")

module.exports = class App extends React.Component {

    constructor() {
        super()

        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return  <div className="app" >
                    <h1 className="app-title" >To-Do List</h1>
                    <AddTaskForm/>
                    <CurrentTasksList/>
                    <CheckedTasksList/>
                </div>
    }
}