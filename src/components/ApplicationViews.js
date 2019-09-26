import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import Login from "./auth/Login";
//only include these once they are built - previous practice exercise

class ApplicationViews extends Component {

 isAuthenticated = () => localStorage.getItem("credentials") !== null;

// isAuthenticated(){
//     if(localStorage.getItem("credentials") === null){
//         return false
//     } else {
//         return true
//     }
// }
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
            if(this.isAuthenticated()){
                return <AnimalList {...props} />;
            } else {
                return <Redirect to="/login" />
            }

          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return this.isAuthenticated() ? <AnimalForm {...props} /> : <Redirect to="/login" />
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            // Pass the animalId to the AnimalDetailComponent
            console.log("this is props", props);
            return (
              this.isAuthenticated() ?
              <AnimalDetail
                {...props}
                animalId={parseInt(props.match.params.animalId)}
              /> :
              <Redirect to="/login" />
            );
          }}
        />
        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
