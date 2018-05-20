const React = require("react")

module.exports = class Welcome extends React.Component {

    constructor(name){
        super()
    }

    render(){
        return <span>Welcome, {this.props.name} !</span>
    }

}