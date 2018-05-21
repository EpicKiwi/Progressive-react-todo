const React = require("react")

const TodoStore = require("../stores/TodoStore")
const TodoCategory = require("./TodoCategory")

module.exports = class Todo extends React.Component {

    constructor() {
        super()
        this.toggleChecked = this.toggleChecked.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    toggleChecked(){
        if(this.props.todo.id){
            TodoStore.commit("updateTask",{id:this.props.todo.id,checked:!this.props.todo.checked})
        }
    }

    removeTask(){
        if(this.props.todo.id){
            TodoStore.commit("removeTask",{id:this.props.todo.id})
        }
    }

    render() {
        let categories = this.props.todo.categories.map((el) => <TodoCategory key={el} title={el}/>)

        return <div className="todo-item">
            <div className="todo-checkbox">
                <input type="checkbox" checked={this.props.todo.checked} onChange={this.toggleChecked}/>
            </div>
            <div className="todo-content">
                <h3 className="todo-title">{this.props.todo.title}</h3>
                <div className="todo-categories">{categories}</div>
            </div>
            <nav className="todo-toolbar" >
                <div className="todo-toolbar-button" onClick={this.removeTask} ><i className="material-icons">close</i></div>
            </nav>
        </div>
    }



}