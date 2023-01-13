import React, { Component } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calender extends Component {
    state = {
        value: new Date()
      } 
    render() { 
        return (
            <div>
                <Calendar
                onChange={this.setState.value}
                value={this.state.value}
                />
            </div>
        );
    }
}
 
export default Calender;