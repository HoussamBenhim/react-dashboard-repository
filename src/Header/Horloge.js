import React, { Component } from 'react'
import HorlogeStyle from './Horloge.module.css'

export default class Horloge extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
      }
    
      componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
      }
      componentWillMount() {
        clearInterval(this.timerId);
      }
    
      tick() {
        this.setState({ date: new Date });
      }
      render() {
        return (
              <div className={HorlogeStyle.horloge} >
                <h3>{this.state.date.toLocaleTimeString()}</h3>
              </div>
        );
      }
    }
    
