import React, {Component} from "react";
import  Die from "./Die"

class RollDice extends Component{

    //creating a default prop
    static defaultProps = {
        face: [
            "fas fa-dice-one",
            "fas fa-dice-two",
            "fas fa-dice-three",
            "fas fa-dice-four",
            "fas fa-dice-five",
            "fas fa-dice-six"
        ]
    }


    constructor(props) {
        super(props);

        this.state = {
            value1: "fas fa-dice-one",
            value2: "fas fa-dice-one",
            flag: false,
            disabled: false,
            wobble: ""
        }

        this.roll = this.roll.bind(this);
    }

    roll() {

        this.setState({
            value1: this.props.face[Math.floor(Math.random()*this.props.face.length)],
            value2: this.props.face[Math.floor(Math.random()*this.props.face.length)],
            flag: true,
            disabled: true,
            wobble: "animation-add"
        })

        setTimeout(() => {
            this.setState({
                flag: false,
                disabled: false,
                wobble: ""
            })
        },1000);

    }

    render() {
        return(
            <div className="diceContainer">
                <div>
                    <Die shaking={this.state.wobble} diceValue={this.state.value1}/>
                    <Die shaking={this.state.wobble} diceValue={this.state.value2}/>
                </div>
                <button disabled={this.state.disabled} className="action-button"  onClick={this.roll}>{!this.state.flag?"Dice" +
                    " Roll":"Dice" +
                    " Rolling..."}</button>
            </div>

        );
    }
}

export  default  RollDice;