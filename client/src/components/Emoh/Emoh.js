import React, { Component } from "react";
import LogoutButton from "../LogoutButton";
import "./Emoh.css";

class Emoh extends Component {

	componentWillMount() {
		document.title = "Home | Gardyn.org";
	}

	render() {
		return (
			<div>
				<LogoutButton/>
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

export default Emoh;
