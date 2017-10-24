import React, { Component } from "react";
import GuideCard from "../GuideCard";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./AllGuides.css";
import axios from "axios";

class AllGuides extends Component {
	state: {
		guideData: [{guideName: "Loading...", _id: "000"}]
	}

	retrieveGuides = () => {
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;
		axios.get('/api/guides')
	      .then(function (response) {
	        console.log(response.data);
	        parentObj.setState({
	          guideData: response.data
	        })
	      })
	      .catch(function (error) {
	        console.log(error);
	      });
	}

	componentWillMount() {
	    this.retrieveGuides();
	}

	render() {
		return (
		    <Wrapper>
		        <Navbar/>
		        <div id="allGuides">
		            <GuideCard guideName="Soil 102"/>
		            <GuideCard guideName="Watering"/>
		            <GuideCard guideName="Pests and You"/>
		        </div>
		    </Wrapper>
		)
  	}
}

export default AllGuides;
