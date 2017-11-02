import React, { Component } from "react";
import PlantCard from "../PlantCard";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./AllPlants.css";
import axios from "axios";


class AllPlants extends Component {
	// This stores what plant data should be displayed
	// Includes dummy data in case the component loads before the data is retrieved. 
	state = {
		plantData: [{plantName: "Loading...", _id: "000"}]
	}

	// Retrieves plant data from the backend and stores it in state. 
	retrievePlants = () => {
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;
		axios.get('/api/plants')
	      .then(function (response) {
	        parentObj.setState({
	          plantData: response.data
	        })
	      })
	      .catch(function (error) {
	        console.log(error);
	      });
	}

	sort = (e) => {
		console.log(e.target.value);
		if (e.target.value === "Alphabetically")
			this.sortAlphabetically(this.state.plantData);
		else if (e.target.value === "Beginner First")
			this.sortDifficultyAsc(this.state.plantData);
		else
			this.sortDifficultyDes(this.state.plantData);	
	}

	sortAlphabetically = (data) => {
		data.sort(function(a, b) {
			var textA = a.title.toUpperCase();
			var textB = b.title.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
		this.setState(
			{plantData: data}
		);
	}

	sortDifficultyAsc = (data) => {
		data.sort(function(a, b) {
			var textA = a.difficulty;
			var textB = b.difficulty;
			if (textA === "beginner") {
				return (textB === "beginner") ? 0 : -1;
			} else if (textA === "intermediate") {
				return (textB === "intermediate") ? 0 : (textB === "expert") ? -1 : 1;
			} else {
				return (textB === "expert") ? 0 : 1;
			}
		});
		this.setState(
			{plantData: data}
		);
	}

	sortDifficultyDes = (data) => {
		data.sort(function(a, b) {
			var textA = a.difficulty;
			var textB = b.difficulty;
			if (textA === "beginner") {
				return (textB === "beginner") ? 0 : 1;
			} else if (textA === "intermediate") {
				return (textB === "intermediate") ? 0 : (textB === "expert") ? 1 : -1;
			} else {
				return (textB === "expert") ? 0 : -1;
			}
		});
		this.setState(
			{plantData: data}
		);
	}

	// Before the component can load the retrieveCrops function is executed in order to retrieve data from the backend. 
	componentWillMount() {
		document.title = "Plants | Gardyn.org";
	    this.retrievePlants();
	}

	// state.cropData stores an array of objects, each representing a crop to be displayed. 
	// This code then maps that data to CropCard elements. 
	render() {
	  return (
			<Wrapper>
				<Navbar/>
				<div id="allPlants">
					<div id="allPlantsHeader">
						<h1 id="allPlantsHeaderTitle">All Plants
							<select class="form-control" id="sortList" onChange={this.sort}>
								<option>Alphabetically</option>
								<option>Beginner First</option>
								<option>Expert First</option>
							</select>
							<h2 id="sortBy">Sort:</h2>
						</h1>
					</div>
					{
						this.state.plantData.map(item => (
							<PlantCard
								item = {item}
							/>
						))
					}
					<a href="/suggest_plant">
						<img src="AddOne.jpg" alt="Suggest a new plant" className="plantCard"/>
					</a>
			  	</div>
			</Wrapper>
	  )
  }
}

export default AllPlants;
