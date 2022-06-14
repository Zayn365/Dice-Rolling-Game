import { Component } from "react";
import "./Die.css";
class Die extends Component{
    
    render() {
       let cls = `fas fa-dice-${this.props.face}`; 
        return (
            <i className={this.props.rolling ? `Die jiggle ${cls}` :`Die ${cls}`} />
        )
    }
}


export default Die;