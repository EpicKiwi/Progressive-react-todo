const React = require("react")
const ReactDom = require("react-dom")

require("../css/style.css")

const App = require("./components/App")
const TodoStore = require("./stores/TodoStore")

ReactDom.render(
    <App/>,
    document.getElementById("root")
)
