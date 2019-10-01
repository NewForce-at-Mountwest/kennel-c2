import React, { Component } from "react";
import AnimalManager from "../../modules/AnimalManager";
import EmployeeManager from "../../modules/EmployeeManager"
// import './AnimalForm.css'

class AnimalForm extends Component {
  state = {
    animalName: "",
    breed: "",
    loadingStatus: false,
    employees: [],
    employeeId: ""
  };

  handleFieldChange = evt => {
    console.log("this is event.target.id", evt.target.id);
    console.log("this is event.target.value", evt.target.value);
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    console.log("this is state to change", stateToChange);
    this.setState(stateToChange);
  };

  componentDidMount(){
      // Get all employees from db
    EmployeeManager.getAll().then(parsedEmployees => {
        console.log("these should be all employees from db", parsedEmployees)
        // Take employees from db and set them to state
        this.setState({employees: parsedEmployees})
    })
  }

  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  constructNewAnimal = evt => {
    evt.preventDefault();
    if (this.state.animalName === "" || this.state.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      this.setState({ loadingStatus: true });
      const animal = {
        name: this.state.animalName,
        breed: this.state.breed,
        employeeId: +this.state.employeeId // convert to number
      };

      // Create the animal and redirect user to animal list
      AnimalManager.post(animal).then(() =>
        this.props.history.push("/animals")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="animalName">Name</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="animalName"
                placeholder="Animal name"
              />

              <label htmlFor="breed">Breed</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="breed"
                placeholder="Breed"
              />

              <select
                className="form-control"
                id="employeeId"
                value={this.state.employeeId}
                onChange={this.handleFieldChange}
              >
                {this.state.employees.map(employee => (
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewAnimal}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default AnimalForm;
