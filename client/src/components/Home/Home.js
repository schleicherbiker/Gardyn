import React, { Component } from "react";
import LoginButton from "../LoginButton";
import "./Home.css";

class Home extends Component {

	componentWillMount() {
		document.title = "Home | Gardyn.org";
	}

	render() {
		return (
			<div>
				<LoginButton/>
			    <div id="titleCenterDiv">
					<div id="contentDiv">
						<h1 id="homeTitle">
							<img id="logo" alt="" src="../assets/leaf.png"></img>
						Gardyn
						</h1>
						<a href="/plants" className="titleButton" id="allPlantsButton">Plants</a>
						<a href="/guides" className="titleButton" id="allGuidesButton">Guides</a>
						
					</div>
				</div>
			</div>
		)
	}
}

export default Home;
