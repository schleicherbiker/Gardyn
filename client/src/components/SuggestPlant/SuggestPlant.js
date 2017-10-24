import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./SuggestPlant.css";
import axios from "axios";

// Component that handles the suggestion of new plant entries
// Validation should be added. 
// Skill level should be a drop down menu rather than a text entry, if time allows, as the database will reject entries that are not just so. 
class SuggestPlant extends Component {
	state = {
		parentLevel: true
	}

	// This function captures state data and sends it to the backend
	handleSubmit = () => {
		axios.post('/api/pos_plant', this.state)
		  .then(function (response) {
		    console.log(response);
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	render() {
	  return (
			<Wrapper>
				<Navbar />
				<div className="inputForm">
					<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
					<input type="text" name="Climate" placeholder="Climate" value={this.state.Climate} onChange={this.handleChange} />
					<input type="text" name="Sunlight" placeholder="Sunlight" value={this.state.Sunlight} onChange={this.handleChange} />
					<input type="text" name="Support" placeholder="Support" value={this.state.Support} onChange={this.handleChange} />
					<input type="text" name="Spacing" placeholder="Spacing" value={this.state.Spacing} onChange={this.handleChange} />
					<input type="text" name="Water" placeholder="Water" value={this.state.Water} onChange={this.handleChange} />
					<input type="text" name="Special" placeholder="Special" value={this.state.Special} onChange={this.handleChange} />
					<input type="text" name="skillLevel" placeholder="Skill level (Easy, Intermediate, Difficult)" value={this.state.skillLevel} onChange={this.handleChange} />
					<button type="button" onClick={this.handleSubmit}>Submit</button>
				</div>
			</Wrapper>
	  )
  }
}

export default SuggestPlant;