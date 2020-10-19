import React, {Component} from "react";

class Die extends Component{
    render() {
        return(
            <i id="icons" className={`${this.props.diceValue} ${this.props.shaking}`} />
        );
    }
}

export  default  Die;