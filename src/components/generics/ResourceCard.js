import React, { Component } from "react";
import { Link } from "react-router-dom";

class ResourceCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require("./dog.svg")} alt="My Dog" />
          </picture>
          <h3>
            <span className="card-petname">{this.props.name}</span>
          </h3>
          <p>{this.props.details}</p>


          <Link to={`/${this.props.resource}/${this.props.id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/${this.props.resource}/${this.props.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ResourceCard;
