import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./SuggestPlant.css";
import axios from "axios";

class SuggestPlant extends Component {
	state = {
		newPlantObj: {}
	}

	// This function captures form data and sends it to the backend
	handleSubmit = () => {
		console.log(this.state.newPlantObj.title);
		console.log(this.state.newPlantObj.climate);
	}

	handleTitleChange = (e) => {
		this.setState({newPlantObj.title: e.target.value});
	}

	handleClimateChange = (e) => {
		this.setState({newPlantObj.climate: e.target.value});
	}

	render() {
	  return (
			<Wrapper>
				<input type="text" name="title" placeholder="Title" value={this.state.newPlantObj.title} onChange={this.handleTitleChange} />
				<input type="text" name="climate" placeholder="Climate" value={this.state.newPlantObj.climate} onChange={this.handleClimateChange} />
				<button type="button" onClick={this.handleSubmit}>Submit</button>
			</Wrapper>
	  )
  }
}

export default SuggestPlant;