const React = require("react")

const TodoStore = require("../stores/TodoStore")

module.exports = class AddTaskForm extends React.Component {

    constructor() {
        super()

        this.state = {
            title: ""
        }

        this.onSubmitForm = this.onSubmitForm.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
    }

    componentDidMount() {
        //When component was mounted
    }

    componentWillUnmount() {
        //When component is going to be unmounted
    }

    onSubmitForm(e){
        e.preventDefault()
        if(this.state.title){

            let categories = []
            let categoriesMatch = this.state.title.match(/#([^ ]+)/ig)
            if(categoriesMatch)
                categories = categoriesMatch.map((el) => el.replace(/^#/,""))
            let finalTitle = this.state.title.replace(/#[^ ]+/ig,"").replace(/  +/ig," ").trim()

            let result = TodoStore.commit("createTask",{title:finalTitle,categories})

            console.log(result)

            this.setState({title:""})
        }
    }

    onTitleChange(e){
        this.setState({title:e.target.value})
    }

    render() {
        return <form className="add-task-form" onSubmit={this.onSubmitForm} >
            <input type="text" name="title" className="add-task-title-input" value={this.state.title} onChange={this.onTitleChange} placeholder="Ajouter une tâche" />
            <button className="add-task-button" ><i className="material-icons">add</i></button>
        </form>
    }
}