import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import axios from "axios";
import PlantCard from "../PlantCard";
import "./HandleSuggestions.css";

class HandleSuggestions extends Component {
	state = {
		plantData: [],
		guideData: []
	}

	retrieveSuggestions = () => {
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;

		// Database call to retrieve proposed plants.
		axios.get('/api/pos_plants')
	      .then(function (response) {
	        console.log(response.data);
	        parentObj.setState({
	          plantData: response.data
	        })
	      })
	      .catch(function (error) {
	        console.log(error);
	      });

	    // Database call to retrieve proposed guides. 
	    axios.get('/api/pos_guides')
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
	    this.retrieveSuggestions();
	}

	render() {
		return (
		    <Wrapper>
				<Navbar/>
				{
					this.state.plantData.map(item => (
						<PlantCard
							item = {item}
						/>
					))
				}	
			</Wrapper>
		)
	}
}

export default HandleSuggestions;