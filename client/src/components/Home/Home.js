import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Home.css";

class Home extends Component {

	render() {
		return (
		    <div id="titleCenterDiv">
				<div id="contentDiv">
					<h1 id="homeTitle">gardyn</h1>
					<div className="titleButton" id="allPlantsButton">Plants</div>
					<div className="titleButton" id="allGuidesButton">Guides</div>
					<div id="loginButton">Login</div>
				</div>
			</div>
		)
	}
}

export default Home;
