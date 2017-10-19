import React, { Component } from 'react';
import AllCrops from "./components/AllCrops";
import AllGuides from "./components/AllGuides";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

//Testing individual pages
import Crop from "./components/Crop";
import Guide from "./components/Guide";

import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <AllCrops />
        <AllGuides />
      </Wrapper>
    );
  }
}

export default App;
