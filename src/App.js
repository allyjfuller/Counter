import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Create Counter component with button that's set to 0
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    // Sets the intital state within Counter: {this.state.count}
    // Add event handler so that whenever the button is clicked the count increases by 1
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    // Update state whenever the button is clicked
    // handleClick only works when the button is clicked
    return <button onClick={this.handleClick} > {this.state.count}</button>;
  }
}

export default App;
