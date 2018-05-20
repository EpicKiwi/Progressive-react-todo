const React = require("react")

const Todo = require("./Todo")

module.exports = class TodoList extends React.Component {

    constructor() {
        super()

        this.state = {}
    }

    componentDidMount() {
        //When component was mounted
    }

    componentWillUnmount() {
        //When component is going to be unmounted
    }

    render() {
        if(this.props.todos && this.props.todos.length > 0){
            let todos = this.props.todos.map((todo) => <Todo key={todo.id} todo={todo}/>)
            return <div className="todo-list">{todos}</div>
        } else {
            return <div className="todo-list"></div>
        }
    }
}