import React, { Component } from "react";
class A extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Functional Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default A;
