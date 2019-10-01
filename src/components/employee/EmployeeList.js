import React, { Component } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: []
  };

  componentDidMount() {
    //getAll from EmployeeManager and hang on to that data; put it in state
    EmployeeManager.getAll().then(employeesFromDatabase => {
      console.log(employeesFromDatabase);
      this.setState({
        employees: employeesFromDatabase
      });
    });
  }

  render() {


    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/employees/new");
            }}
          >
            Hire Employee
          </button>
        </section>
        <div className="container-cards">
          {this.state.employees.map(singleEmployee => (
            <EmployeeCard key={singleEmployee.id} employee={singleEmployee} />
          ))}
        </div>
      </>
    );
  }
}

export default EmployeeList;
