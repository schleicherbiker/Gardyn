import React, { Component } from 'react';
import AllCrops from "./components/AllCrops";
import AllGuides from "./components/AllGuides";
import Navbar from "./components/Navbar";

//Testing individual pages
import Crop from "./components/Crop";
import Guide from "./components/Guide";

import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <AllCrops />
        <AllGuides />

        //Testing individual pages
        <Crop />
      </div>
    );
  }
}

export default App;
