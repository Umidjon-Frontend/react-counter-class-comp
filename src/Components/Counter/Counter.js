import React, { Component } from "react";
import "./Counter.css";
class Counter extends Component {
  state = {
    counter: 0,
  };

  counterFunc = (count) => {
    if (count === 0) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + count });
    }
  };

  render() {
    const { counter } = this.state;
    return (
      <div className={"counter-container"}>
        <div className="counter-box">
          <h1
            style={
              counter > 0
                ? { color: "#00ff00" }
                : counter < 0
                ? { color: "#ff0000" }
                : { color: "#000" }
            }
            className="counter-header"
          >
            {this.state.counter}
          </h1>
          <button
            className={"btn btn-incr"}
            onClick={() => this.counterFunc(-1)}
          >
            Decrement
          </button>
          <button
            className={"btn btn-reset"}
            onClick={() => this.counterFunc(0)}
          >
            reset
          </button>
          <button
            className={"btn btn-decr"}
            onClick={() => this.counterFunc(1)}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
