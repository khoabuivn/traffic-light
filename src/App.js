import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED
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
        break;
      case YELLOW:
        return GREEN;
        break;
      case GREEN:
        return RED;
        break;
      default:
        break;
    }
    
  }
  render() {
    const { currentColor } = this.state.currentColor;
    return <div className="App">
      <TrafficLight currentColor={currentColor} />
    </div>
  };
}

export default App;
