import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name:<br />
            <span>{this.props.employee.name}</span>
          </h3>
          <Link to={`/employees/${this.props.employee.id}/details`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
