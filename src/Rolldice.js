import { Component } from "react";
import Die from "./Die";
import "./Rolldice.css";
class Rolldice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  //   constructor(props){
  //    super(props);
  //    this.state = {
  //     die1: "two",
  //     die2: "one"
  //    };
  //    this.roll = this.roll.bind(this);
  //   }
  state = {
    die1: "one",
    die2: "one",
    rolling: false,
  };
  roll = (e) => {
    //Creating a function to change the dice's value
    const newDial1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const newDial2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    //Changing the states of the dices
    this.setState({ die1: newDial1, die2: newDial2, rolling: true });
    //Setting a timer for the button while changing of dice value
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button
          onClick={this.roll}
          disabled={this.state.rolling}
          style={this.state.rolling ? { opacity: "0.24" } : {}}
        >
          {this.state.rolling ? "Rolling!!!" : "Roll the Dice!"}
        </button>
      </div>
    );
  }
}

export default Rolldice;
