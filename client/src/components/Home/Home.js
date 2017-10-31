import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import LoginButton from "../LoginButton";
import "./Home.css";

class Home extends Component {

	render() {
		return (
		    <div id="titleCenterDiv">
				<div id="contentDiv">
					<h1 id="homeTitle">gardyn</h1>
					<a href="/plants" className="titleButton" id="allPlantsButton">plants</a>
					<a href="/guides" className="titleButton" id="allGuidesButton">guides</a>
					<LoginButton/>
				</div>
			</div>
		)
	}
}

export default Home;
