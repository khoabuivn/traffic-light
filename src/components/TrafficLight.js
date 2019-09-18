import React, { Component } from "react";
import './TrafficLight.css';

class TrafficLight extends Component {
    render() {
        return (
           <div className="TrafficLight">
            <div className="bulb red"></div>
            <div className="bulb yellow"></div>
            <div className="bulb green"></div>
          </div>
        )
    }
}

export default TrafficLight;