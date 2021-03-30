import React from "react";
import $ from "jquery";

import { data } from "./assets/data";

import GarrisonList from "./components/garrison-list/garrison-list.component";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      garrisons: data,
      inputClicked: false,
      numberOfSieges: "",
      ourSiege: [],
      toggleChecked: false,
    };
  }

  randomNum = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  addGarrisons = () => {
    const { garrisons, numberOfSieges } = this.state;
    console.log(garrisons.length);
    const ourSiege = [];
    while (ourSiege.length < numberOfSieges) {
      const randomNum = Math.floor(Math.random() * 10);
      const newItem = ourSiege.includes(garrisons[randomNum]);
      if (!newItem) ourSiege.push(garrisons[randomNum]);
    }

    this.setState({ inputClicked: true, ourSiege }, () => {
      console.log(this.state.ourSiege);
    });
  };

  handleChange = (e) => {
    const { value } = e.target;
    const { garrisons } = this.state;
    this.setState({
      numberOfSieges:
        (isNaN(value) || value) > garrisons.length ? garrisons.length : value,
    });
  };

  handleClick = () => {
    $(".siege-data").toggleClass("transformed");
  };

  render() {
    const { inputClicked, ourSiege } = this.state;
    return (
      <div className="App">
        <h1>Heroes III: The Horn of Abyss</h1>

        <input
          onChange={this.handleChange}
          name="sieges"
          type="number"
          value={this.state.numberOfSieges}
        />
        <button onClick={this.addGarrisons}>Show Garrisons</button>

        <div className="mySiege">
          {inputClicked
            ? ourSiege.slice(0, 2).map((item) => {
                console.log(item);
                return (
                  <div className="siege-data" onClick={this.handleClick}>
                    <GarrisonList siege={item} />
                  </div>
                );
              })
            : ""}
        </div>
        <div>
          {inputClicked
            ? ourSiege.slice(2).map((item) => {
                return (
                  <div className="siege-data" onClick={this.handleClick}>
                    <GarrisonList siege={item} />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}

export default App;
