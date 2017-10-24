import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPlants from "./components/AllPlants";
import AllGuides from "./components/AllGuides";
import Home from "./components/Home";
import Plant from "./components/Plant";
import Guide from "./components/Guide";
import './App.css';

class App extends Component {
  render() {
    return (
	    <Switch>
	      <Route exact path='/' component={Home} />
	        <Route path='/plants/:name' component={Plant} />
	      	<Route path='/plants' component={AllPlants}/>
			<Route path='/guides' component={AllGuides}/>
			<Route path='/guide/:name' component={Guide}/>
	    </Switch>
    );
  }
}

export default App;
