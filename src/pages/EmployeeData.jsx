import React, { Component } from "react";
import employees from "../Employee";
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Name',
        selector: row => row.title,
    },
    {
        name: 'Email Address',
        selector: row => row.email,
    },
    {
        name: 'Designation',
        selector: row => row.role,
    },
];

const data = []
employees.map(emp=>data.push({
    title:emp.name,
    email:emp.email,
    role:emp.designation
}));

class EmployeeData extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Employees</h1>
                <DataTable
                columns={columns}
                data={data}
                />
            </div>
        );
    }
}
 
export default EmployeeData;