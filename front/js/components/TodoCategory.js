const React = require("react")

module.exports = class TodoCategory extends React.Component {

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
        return <span className="todo-category" >#{this.props.title}</span>
    }
}