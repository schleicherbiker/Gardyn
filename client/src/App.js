import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllCrops from "./components/AllCrops";
import AllGuides from "./components/AllGuides";
import Navbar from "./components/Navbar";
import './App.css';

// <Route path='/results' component={Results}/>
// <Route path='/saved_articles' component={SavedArticles}/>

class App extends Component {
  render() {
    return (
	    <Switch>
	      <Route exact path='/' component={Navbar} />
	    </Switch>
    );
  }
}

export default App;
