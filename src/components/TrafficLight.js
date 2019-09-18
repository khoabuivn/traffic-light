import React, { Component } from "react";
import './TrafficLight.css';

var classnames = require('classnames');

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
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
        const { currentColor } = this.state;
        return (
           <div className="TrafficLight">
            <div className={classnames("bulb", "red", {
              active: currentColor === RED
            })}></div>
            <div className={classnames("bulb", "yellow", {
              active: currentColor === YELLOW
            })}></div>
            <div className={classnames("bulb", "green", {
              active: currentColor === GREEN
            })}></div>
          </div>
        )
    }
}

export default TrafficLight;