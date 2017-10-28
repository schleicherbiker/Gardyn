import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Home.css";

// This component is not in it's final version. 
// Just a stand in for reference purposes.

class Home extends Component {

	// We can make this image whatever. I just figured I'd set it up to display some image so we could see what that looked like.
	farmerImageLink = "https://1yd7z7koz052nb8r33cfxyw5-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/huge-old-farmer.png";

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
