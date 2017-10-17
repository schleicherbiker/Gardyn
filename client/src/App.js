import React, { Component } from 'react';
import AllCrops from "./components/AllCrops";
import AllGuides from "./components/AllGuides";
import Navbar from "./components/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar/>
        <AllGuides/>
      </div>
    );
  }
}

export default App;
