// import React from "react";
import React, { Component } from "react";
import "./Home.css";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";

// const Home = (props) => (
class Home extends Component {
	state: {

	}

	farmerImageLink = "https://1yd7z7koz052nb8r33cfxyw5-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/huge-old-farmer.png";

	render() {
		return (
		    <Wrapper>
				<Navbar/>
				<h3>This is the homepage.</h3>
				<img id="homeImage" src={this.farmerImageLink}/>		
			</Wrapper>
		)
	}
}

export default Home;
