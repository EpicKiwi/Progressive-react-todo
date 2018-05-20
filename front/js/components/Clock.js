const React = require("react")

module.exports = class Clock extends React.Component {

    constructor() {
        super()

        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
        this.clockInterval = setInterval(() => this.update(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.clockInterval)
    }

    update(){
        this.setState({date: new Date()})
    }

    render() {
        return <span>{this.state.date.toLocaleTimeString()}</span>
    }
}