import React, { Component } from 'react';
import Crop from "./components/Crop"
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="navbar">
              <img id="icon" src="./leaf.png"></img>
              <h1 id="navbar-title">Gardyn</h1>
        </div>

        <div id="crops">
          <Crop cropName="Apple"/>
        </div>
      </div>
    );
  }
}

export default App;
