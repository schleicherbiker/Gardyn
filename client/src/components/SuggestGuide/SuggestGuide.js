import React, { Component } from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./SuggestGuide.css";
import axios from "axios";

// Component that handles the suggestion of new guide entries
// Validation should be added. 
class SuggestGuide extends Component {
	state = {
		submitMessage: "",
		submitErrorMessage: ""
	}

	// This function captures state data and sends it to the backend
	handleSubmit = () => {
		// Clears out errror/success messages 
		this.setState({submitMessage: ""});
		this.setState({submitErrorMessage: ""});

		// Stores the values that are allowed to be passed to the backend
		const allowed = ['title', 'photoLink', 'body'];

		// Filters out state properties that are not listed in 'allowed'
		const filteredState = Object.keys(this.state)
		  .filter(key => allowed.includes(key))
		  .reduce((obj, key) => {
		    obj[key] = this.state[key];
		    return obj;
		  }, {});

		  console.log("Filtered state:")
		  console.log(filteredState)

		// To preserve context of 'this' inside axios call
		const parentObj = this;

		axios.post('/api/pos_guides', filteredState)
		  .then(function (response) {
		    console.log(response);
		    parentObj.setState({submitMessage: "Thanks for submitting a new guide! Your suggestion is being reviewed."});
		    setTimeout(function(){ window.location = "/guides"; }, 2500);
		  })
		  .catch(function (error) {
		    console.log(error);
		    parentObj.setState({submitErrorMessage: "Sorry, your submission was not recieved. Please review your info and try again."});

		  });
	}

	handleChange = (e) => {
		// 'Body' in the database expects an array or strings. 
		// Typically each index/each string is a seperate paragraph. 
		// However, here, the whole guide body is lumped into one index. 
		// This may or may not cause problems.... 
		if (e.target.name !== "body") {
			this.setState({[e.target.name]: e.target.value});
		} else {
			this.setState({body: [e.target.value]});
		}
	}

	render() {
	  return (
			<Wrapper>
				<Navbar />
				{
					(!this.state.submitMessage)
					?
					<form className="form-horizontal inputForm">
						<fieldset>
							<legend className="entry-legend">New Guide Suggestion</legend>
							<div className="form-group">
						      <label className="col-lg-2 control-label" for="guideTitleInput">Title</label>
						      <div className="col-lg-10">
						        <input className="form-control" type="text" id="guideTitleInput" placeholder="Guide Title"
						        name="guideTitleInput" value={this.state.guideTitleInput} onChange={this.handleChange} />
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" for="photolinkInput">Photo URL</label>
						      <div className="col-lg-10">
						        <input className="form-control" type="text" id="photolinkInput" placeholder="E.g. http://via.placeholder.com/300" 
						        name="photolinkInput" value={this.state.photolinkInput} onChange={this.handleChange} />
						      </div>
						    </div>
						    <div className="form-group">
						      <label className="col-lg-2 control-label" for="guideInput">Guide</label>
						      <div className="col-lg-10">
						        <textarea className="form-control" type="text" rows="10" id="guideInput" placeholder="Write your guide here!"
						        name="guideInput" value={this.state.guideInput} onChange={this.handleChange} />
						      </div>
						    </div>
						    <div class="form-group">
						      <div class="col-lg-10 col-lg-offset-2">
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

export default SuggestGuide;

/*
					<div className="inputForm">
						<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
						<input type="text" name="photoLink" placeholder="Photo URL" value={this.state.photoLink} onChange={this.handleChange} />
						<textarea rows="4" cols="50" placeholder="Write your guide here..." name="body" onChange={this.handleChange}></textarea>
						<p id="errorDisplay">{this.state.submitErrorMessage}</p>
						<button type="button" onClick={this.handleSubmit}>Submit</button>
					</div>
*/
