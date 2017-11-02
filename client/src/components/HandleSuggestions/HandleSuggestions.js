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

		const clickedID = e.target.value;

		let objToSend;

		for (let i = 0; i < this.state.plantData.length; i++){
			if (this.state.plantData[i]._id === e.target.value){
				objToSend = this.state.plantData[i];
			}
		}

		const allowed = ['title', 'imageURL', 'climate', 'sunlight', 'support', 'spacing', 'special', 'difficulty', 'parentLevel'];

		// Filters out properties that are not handled by the new object
		const filteredPlantObj = Object.keys(objToSend)
		  .filter(key => allowed.includes(key))
		  .reduce((obj, key) => {
		    obj[key] = objToSend[key];
		    return obj;
		  }, {});
			console.log(filteredPlantObj);
		axios.post('/api/plant', filteredPlantObj)
		  .then(function (response) {
				console.log(response);
		    // Once the suggested plant is saved to the plants collection, it is removed from the queue for consideration
		    // This could be moved to seperate function to reduce duplicate code
		    axios.delete('/api/pos_plant/' + clickedID)
			  .then(function (response) {
			    // Suggestions are re-retrieved to account for change
			    parentObj.retrieveSuggestions();
				})
			  .catch(function (error) {
			    console.log(error);
				});

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	deleteGuide = (e) => {
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;

		// e.target.value represents the mongo ID of the submission to be deleted
		axios.delete('/api/pos_guide/' + e.target.value)
		  .then(function (response) {
		    // Suggestions are re-retrieved to account for change
		    parentObj.retrieveSuggestions();
			})
		  .catch(function (error) {
		    console.log(error);
			});
	}

	acceptGuide = (e) => {
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;

		const clickedID = e.target.value;

		let objToSend;

		for (let i = 0; i < this.state.guideData.length; i++){
			if (this.state.guideData[i]._id === e.target.value){
				objToSend = this.state.guideData[i];
			}
		}

		const guideAllowed = ['title', 'photoLink', 'body'];

		// Filters out properties that are not handled by the new object
		const filteredGuideObj = Object.keys(objToSend)
		  .filter(key => guideAllowed.includes(key))
		  .reduce((obj, key) => {
		    obj[key] = objToSend[key];
		    return obj;
		  }, {});

		axios.post('/api/guide', filteredGuideObj)
		  .then(function (response) {

		    // Once the suggested guide is saved to the guides collection, it is removed from the queue for consideration
		    // This could be moved to seperate function to reduce duplicate code
		    axios.delete('/api/pos_guide/' + clickedID)
			  .then(function (response) {
			    // Suggestions are re-retrieved to account for change
			    parentObj.retrieveSuggestions();
				})
			  .catch(function (error) {
			    console.log(error);
				});

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
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
						<div>
							<GuideCard
								item = {item}
							/>
							<button type="button" onClick={this.deleteGuide} value={item._id}>Delete</button>
							<button type="button" onClick={this.acceptGuide} value={item._id}>Accept</button>
						</div>
					))
				}
			</Wrapper>
		)
	}
}

export default HandleSuggestions;