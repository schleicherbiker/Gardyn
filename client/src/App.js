import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllCrops from "./components/AllCrops";
import AllGuides from "./components/AllGuides";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Wrapper from "./components/Wrapper";

//Testing individual pages
import Crop from "./components/Crop";
import Guide from "./components/Guide";

import './App.css';

class App extends Component {
  render() {
    return (
	    <Switch>
	      <Route exact path='/' component={Navbar} />
	      	<Route path='/crops' component={AllCrops}/>
			<Route path='/guides' component={AllGuides}/>
	    </Switch>
    );
  }
}

export default App;
