import React, { Component } from 'react';
import './App.css';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED,
      type: 'bulb'
    }
    
    setInterval(() => {
      this.setState({
        currentColor: this.getNextLight(this.state.currentColor)
      })
    }, 1000)
  }
  getNextLight(color) {
    switch (color) {
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      case GREEN:
        return RED;
      default: 
        break;
    }
    
  }
  render() {
    const { currentColor } = this.state;
    console.log(currentColor);
    return <div className="App">
      <TrafficLight currentColor={currentColor} />
    </div>
  };
}

export default App;
