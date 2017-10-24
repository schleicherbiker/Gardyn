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
	        console.log(response.data);
	        parentObj.setState({
	          plantData: response.data
	        })
	      })
	      .catch(function (error) {
	        console.log(error);
	      });
	}

	// Before the component can load the retrieveCrops function is executed in order to retrieve data from the backend. 
	componentWillMount() {
		console.log(this.state)
	    this.retrievePlants();
	}

	// state.cropData stores an array of objects, each representing a crop to be displayed. 
	// This code then maps that data to CropCard elements. 
	render() {
	  return (
			<Wrapper>
				<Navbar/>
				<div id="allPlantsHeader">
					<h1 id="allPlantsHeaderTitle">All Plants</h1>
				</div>
				<div id="allPlants">
					{
						this.state.plantData.map(item => (
							<PlantCard
								item = {item}
							/>
						))
					}
					{
						this.state.plantData.map(item => (
							<PlantCard
								item = {item}
							/>
						))
					}
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
