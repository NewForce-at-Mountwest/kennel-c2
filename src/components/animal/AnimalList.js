import React, { Component } from "react";
//import the components we will need
import ResourceCard from "../generics/ResourceCard";
import AnimalManager from "../../modules/AnimalManager";

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: []
  };

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll().then(animalsFromDatabase => {
      console.log(animalsFromDatabase);
      this.setState({
        animals: animalsFromDatabase
      });
    });
  }

  render() {
    console.log("ANIMAL LIST: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/animals/new");
            }}
          >
            Admit Animal
          </button>
        </section>
        <div className="container-cards">
          {this.state.animals.map(singleAnimal => (
            <ResourceCard
              key={singleAnimal.id}
              name={singleAnimal.name}
              details={singleAnimal.breed}
              resource="animals"
              id={singleAnimal.id}
            />
          ))}
        </div>
      </>
    );
  }
}

export default AnimalList;
