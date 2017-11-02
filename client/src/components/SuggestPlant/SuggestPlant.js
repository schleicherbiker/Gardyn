import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./SuggestPlant.css";
import axios from "axios";

// Component that handles the suggestion of new plant entries
// Validation should be added. 
class SuggestPlant extends Component {
	state = {
		parentLevel: true,
		submitMessage: "",
		submitErrorMessage: ""
	}

	// This function captures state data and sends it to the backend
	handleSubmit = (e) => {
		e.preventDefault();

		// Clears out errror/success messages 
		this.setState({submitMessage: ""});
		this.setState({submitErrorMessage: ""});

		// Stores the values that are allowed to be passed to the backend
		const allowed = ['title', 'imageURL', 'climate', 'sunlight', 'support', 'spacing', 'water', 'special', 'skillLevel', 'parentLevel'];

		// Filters out state properties that are not listed in 'allowed'
		const filteredState = Object.keys(this.state)
		  .filter(key => allowed.includes(key))
		  .reduce((obj, key) => {
		    obj[key] = this.state[key];
		    return obj;
		  }, {});

		// To preserve context of 'this' inside axios call
		const parentObj = this;

		axios.post('/api/pos_plant', filteredState)
		  .then(function (response) {
		    parentObj.setState({submitMessage: "Thanks for submitting a new plant! Your suggestion is being reviewed."});
		    setTimeout(function(){ window.location = "/plants"; }, 2500);
		  })
		  .catch(function (error) {
		    console.log(error);
		    parentObj.setState({submitErrorMessage: "Sorry, your submission was not recieved. Please review your info and try again."});

		  });
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	// ATTN: Input names need to match values in database!
	// Dropdowns cannot have an opening value because state only updates when the value changes. 
	// IE-- If it starts as "maybe" and the user leaves it as "maybe", the value won't show up in the database.
	render() {
	  return (
			<Wrapper>
				<Navbar />
				{
					(!this.state.submitMessage)
					?
					<form className="form-horizontal inputForm">
						<fieldset>
							<legend className="entry-legend">New Plant Entry</legend>
							<div className="form-group">
						      <label className="col-lg-2 control-label" htmlFor="titleInput">Title</label>
						      <div className="col-lg-10">
						        <input className="form-control" type="text" id="titleInput" placeholder="Plant name"
						        name="title" value={this.state.title} onChange={this.handleChange} />
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" htmlFor="imageURLInput">Image URL</label>
						      <div className="col-lg-10">
						        <input className="form-control" type="text" id="imageURLInput" placeholder="Image URL"
						        name="imageURL" value={this.state.imageURL} onChange={this.handleChange} />
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" htmlFor="climateInput">Climate</label>
						      <div className="col-lg-10">
						        <input className="form-control" type="text" id="climateInput" placeholder="Recommended climate" 
						        name="climate" value={this.state.climate} onChange={this.handleChange} />
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" htmlFor="sunlightInput">Sunlight</label>
						      <div className="col-lg-9">
						        <input className="form-control" type="number" step="1" max="24" min="0" id="sunlightInput" placeholder="0"
						        name="sunlight" value={this.state.sunlight} onChange={this.handleChange} />
						      </div>
						      <div className="col-lg-1">Hours</div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" htmlFor="supportInput">Support</label>
						      <div className="col-lg-10">
						        <select className="form-control" id="supportInput" name="support" onChange={this.handleChange}>
						          <option value="">------</option>
						          <option value="maybe">Maybe</option>
						          <option value="yes">Yes (Cages, Stakes, Trellis)</option>
						          <option value="no">No</option>
						        </select>
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" htmlFor="spacingInput">Spacing</label>
						      <div className="col-lg-9">
						        <input className="form-control" type="number" step="1" max="36" min="0" id="spacingInput" placeholder="0"
						        name="spacing" value={this.state.spacing} onChange={this.handleChange} />
						      </div>
						      <div className="col-lg-1">Inches</div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" htmlFor="specialInput">Special</label>
						      <div className="col-lg-10">
						        <textarea className="form-control" type="text" rows="3" id="specialInput" placeholder="Special needs"
						        name="special" value={this.state.special} onChange={this.handleChange} />
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" htmlFor="skillInput">Skill Level</label>
						      <div className="col-lg-10">
						        <select className="form-control" id="skillInput" name="skillLevel" onChange={this.handleChange}>
						          <option value="">------</option>
						          <option value="Beginner">Beginner</option>
						          <option value="Intermediate">Intermediate</option>
						          <option value="Expert">Expert</option>
						        </select>
						      </div>
						    </div>
						    <div className="form-group">
						      <div className="col-lg-10 col-lg-offset-2">
						        <button type="submit" className="btn btn-success btn-gardyn" onClick={this.handleSubmit}>Submit</button>
						      </div>
						    </div>
						</fieldset>
					</form>
					:
					<h3 className="successMessage">{this.state.submitMessage}</h3>
				}
			</Wrapper>
	  )
  }
}

export default SuggestPlant;