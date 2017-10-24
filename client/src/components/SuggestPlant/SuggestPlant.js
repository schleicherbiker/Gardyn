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
		console.log(this.state.title);
		console.log(this.state.climate);
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	render() {
	  return (
			<Wrapper>
				<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
				<input type="text" name="climate" placeholder="Climate" value={this.state.climate} onChange={this.handleChange} />
				<button type="button" onClick={this.handleSubmit}>Submit</button>
			</Wrapper>
	  )
  }
}

export default SuggestPlant;