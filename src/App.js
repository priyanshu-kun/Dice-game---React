import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RollDice from "./RollDice";

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1 className="main-heading">Dice Game!</h1>
            <hr />
            <RollDice />
        </div>

    );
  }
}

export default App;
