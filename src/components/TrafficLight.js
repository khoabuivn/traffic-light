import React, { Component } from "react";
import './TrafficLight.css';

var classnames = require('classnames');

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
    render() {
        const { currentColor } = this.props;
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