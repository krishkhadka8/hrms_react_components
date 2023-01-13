import React, { Component } from "react";
import { PieChart } from 'react-minimal-pie-chart';



class EmployeeChart extends Component {
    state = {  } 
    render() { 
        return (
            <PieChart className="chartResize"
                data={[
                    { title: 'Male', value: 10, color: '#E38627'},
                    { title: 'Female', value: 15, color: '#C13C37' },
                ]}
            />
        );
    }
}
 
export default EmployeeChart;