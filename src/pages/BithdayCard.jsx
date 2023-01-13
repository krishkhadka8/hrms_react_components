import React, { Component } from "react";
import birthdates from "../Bithdate";
import DataTable from 'react-data-table-component';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const columns = [
    {
        selector: row => row.title,
    },
    {
        selector: row => row.icon,
    },
    {
        selector: row => row.date,
    },
];

const data = []
birthdates.map(date=>data.push({
    icon:<CalendarMonthIcon/>,
    title:date.name,
    date:date.date
}));

class EmployeeData extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>Upcoming Birthdays</h1>
                <DataTable
                columns={columns}
                data={data}
                />
            </div>
        );
    }
}
 
export default EmployeeData;