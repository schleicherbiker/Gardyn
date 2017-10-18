import React, { Component } from "react";
import CropCard from "../CropCard";
import "./AllCrops.css";
import axios from "axios";


class AllCrops extends Component {
	// This stores what crop data should be displayed
	// Includes dummy data in case the component loads before the data is retrieved. 
	state = {
		cropData: [{cropName: "Loading...", _id: "000"}]
	}

	// Retrieves plant data from the backend and stores it in state. 
	retrieveCrops = () => {
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;
		axios.get('/api/plants')
	      .then(function (response) {
	        console.log(response.data);
	        parentObj.setState({
	          cropData: response.data
	        })
	      })
	      .catch(function (error) {
	        console.log(error);
	      });
	}

	// Before the component can load the retrieveCrops function is executed in order to retrieve data from the backend. 
	componentWillMount() {
	    this.retrieveCrops();
	  }

	// state.cropData stores an array of objects, each representing a crop to be displayed. 
	// This code then maps that data to CropCard elements. 
	render() {
	    return (
		    <div id="allCrops">
			    {
		            this.state.cropData.map(item => (
		              <CropCard
		                cropName={item.title}
		                key={item._id}
		                imageURL={item.imageURL}
		              />
		            ))
	          	}
		    </div>
	    )
  	}
}

export default AllCrops;
