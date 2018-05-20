const React = require("react")

const TodoStore = require("../stores/TodoStore")

module.exports = class Todo extends React.Component {

    constructor() {
        super()
        this.toggleChecked = this.toggleChecked.bind(this)
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

    render() {
        return <div className="todo-item">
            <div className="todo-checkbox">
                <input type="checkbox" checked={this.props.todo.checked} onChange={this.toggleChecked}/>
            </div>
            <div className="todo-content">
                <h3 className="todo-title">{this.props.todo.title}</h3>
            </div>
        </div>
    }



}