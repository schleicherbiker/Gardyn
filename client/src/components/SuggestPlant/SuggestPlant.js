import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./SuggestPlant.css";
import axios from "axios";

class SuggestPlant extends Component {
	state = {

	}

	// This function captures form data and sends it to the backend
	handleSubmit = () => {

	}

	handleTitleChange = (e) => {
		this.setState({title: e.target.value});
	}

	render() {
	  return (
			<Wrapper>
				<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
				<button type="button" onClick={this.handleSubmit}>Submit</button>
			</Wrapper>
	  )
  }
}

export default AllPlants;