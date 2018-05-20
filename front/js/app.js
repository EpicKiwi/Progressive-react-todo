const React = require("react")
const ReactDom = require("react-dom")

const style = require("../css/style.css")

const Welcome = require("./components/Welcome")
const Clock = require("./components/Clock")

ReactDom.render(
    <div>
        <h1>To-Do List</h1>
        Il est <Clock/>
        <ul>
            <li><Welcome name="Baptiste"/></li>
            <li><Welcome name="Clément"/></li>
            <li><Welcome name="Marie"/></li>
            <li><Welcome name="Romain"/></li>
            <li><Welcome name="Tanguy"/></li>
        </ul>
    </div>,
    document.getElementById("root")
)