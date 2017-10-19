import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllCrops from "./components/AllCrops";
import AllGuides from "./components/AllGuides";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

//Testing individual pages
import Crop from "./components/Crop";
import Guide from "./components/Guide";

import './App.css';

// <Route path='/results' component={Results}/>
// <Route path='/saved_articles' component={SavedArticles}/>

class App extends Component {
  render() {
    return (
	    <Switch>
	      <Route exact path='/' component={Navbar} />
	      <Route exact path='/Crop' component={Crop} />
	    </Switch>
    );
  }
}

export default App;
