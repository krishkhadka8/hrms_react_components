import React, {Component} from "react";
import SearchPage from "../pages/SearchPage";
import Calendar from "./Calendar";
import EmployeeChart from "../pages/EmployeeChart";
import EmployeeCard from "./EmployeeCard";
import  BirthdayCard from "../pages/BithdayCard"

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className="grid-container">
                <SearchPage />
                <Calendar />
                <EmployeeChart />
                <EmployeeCard />
                <BirthdayCard />
            </div>
            //<h1>Hello</h1>
        );
    }
}
 
export default Navbar;