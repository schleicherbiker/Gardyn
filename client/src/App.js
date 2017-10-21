import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

//Individual pages
import Home from "./components/Home";
import AllPlants from "./components/AllPlants";
import AllGuides from "./components/AllGuides";
import Plant from "./components/Plant";
import Guide from "./components/Guide";

import './App.css';

class App extends Component {
  render() {
    return (
	    <Switch>
	      <Route exact path='/' component={Home} />
	      <Route path='/plant/:name' component={Plant} />
	      <Route path='/plants' component={AllPlants}/>
			  <Route path='/guides' component={AllGuides}/>
	    </Switch>
    );
  }
}

export default App;
