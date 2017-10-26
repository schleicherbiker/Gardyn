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
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;

		// e.target.value represents the mongo ID of the submission to be deleted
		axios.delete('/api/pos_plant/' + e.target.value)
		  .then(function (response) {
		    console.log(response);
		    // Suggestions are re-retrieved to account for change
		    parentObj.retrieveSuggestions();
			})
		  .catch(function (error) {
		    console.log(error);
			});
	}

	acceptPlant = (e) => {
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;

		let objToSend;

		for (let i = 0; i < this.state.plantData.length; i++){
			if (this.state.plantData[i]._id === e.target.value){
				objToSend = this.state.plantData[i];
			}
		}
/*
		const allowed = ['title', 'imageURL', 'Climate', 'Sunlight', 'Support', 'Spacing', 'Water', 'Special', 'skillLevel', 'parentLevel'];

		// Filters out properties that are not handled by the new object
		const filteredPlantObj = Object.keys(objToSend)
		  .filter(key => allowed.includes(key))
		  .reduce((obj, key) => {
		    obj[key] = this.state[key];
		    return obj;
		  }, {});
*/
		console.log(this.state.plantData);
		console.log("Extracting: " + e.target.value);
		console.log(objToSend);

/*		axios.post('/api/plant/' + e.target.value, {})
		  .then(function (response) {
		    console.log(response);
//		    console.log(response.data[0]);

		    // Suggestions are re-retrieved to account for change
		    parentObj.retrieveSuggestions();
		  })
		  .catch(function (error) {
		    console.log(error);
		  });*/
	}

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
							<button type="button" onClick={this.acceptPlant} value={item._id}>Accept</button>
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