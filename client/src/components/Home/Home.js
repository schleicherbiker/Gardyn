import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";

// This component is not in it's final version. 
// Just a stand in for reference purposes.

class Home extends Component {
	state: {

	}

	// We can make this image whatever. I just figured I'd set it up to display some image so we could see what that looked like.
	farmerImageLink = "https://1yd7z7koz052nb8r33cfxyw5-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/huge-old-farmer.png";

	render() {
		return (
		    <Wrapper>
				<Navbar/>
				<h3 id="homeOverlay">From planting to harvest, Gardyn helps you get into gardening faster.</h3>
				<img id="homeImage" src={this.farmerImageLink} alt="A gardener smiles holding his freshly picked produce"/>		
			</Wrapper>
		)
	}
}

export default Home;
