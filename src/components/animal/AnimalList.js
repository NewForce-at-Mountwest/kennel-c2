import React, { Component } from "react";
//import the components we will need
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animals: []
  };

  deleteAnimal = (id) => {
    AnimalManager.delete(id)
      .then(AnimalManager.getAll)
      .then(parsedAnimals => {
        this.setState({
          animals: parsedAnimals
        });
      });
  }

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
      <div className="container-cards">
        {this.state.animals.map(singleAnimal => (
          <AnimalCard
            deleteAnimalProp={this.deleteAnimal}
            key={singleAnimal.id}
            animalProp={singleAnimal}
          />
        ))}
      </div>
    );
  }
}

export default AnimalList;
