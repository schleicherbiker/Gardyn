import React, { Component } from 'react';
import Crop from "./components/Crop"
import Navbar from "./components/Navbar"
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar/>
        <div id="crops">
          <Crop cropName="Apple"/>
        </div>
      </div>
    );
  }
}

export default App;
