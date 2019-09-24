import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
//only include these once they are built - previous practice exercise

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            console.log("this is props", props)
            return (
              <AnimalDetail {...props} animalId={parseInt(props.match.params.animalId)} />
            );
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
