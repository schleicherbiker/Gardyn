import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import axios from "axios";
import PlantCard from "../PlantCard";
import GuideCard from "../GuideCard";
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

	deletePlant = (e) => {
		// e.target.value represents the mongo ID of the submission to be deleted
		axios.get('/api/pos_guide/' + e.target.value)
		  .then(function (response) {
		    console.log(response);
			})
		  .catch(function (error) {
		    console.log(error);
			});
	};

	render() {
		return (
		    <Wrapper>
				<Navbar/>
				<h2>Open Plant Suggestions</h2>
				{
					this.state.plantData.map(item => (
						<div>
							<PlantCard
								item = {item}
							/>
							<button type="button" onClick={this.deletePlant} value={item._id}>Delete</button>
						</div>
					))
				}
				<h2>Open Guide Suggestions</h2>	
				{
					this.state.guideData.map(item => (
						<GuideCard
							item = {item}
						/>
					))
				}
			</Wrapper>
		)
	}
}

export default HandleSuggestions;