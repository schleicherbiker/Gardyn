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

		this.setState({ticket: "Hard coded"});
		console.log(this.state)
/*
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

		axios.post('/api/pos_plant', filteredState)
		  .then(function (response) {
		    console.log(response);
		    parentObj.setState({submitMessage: "Thanks for submitting a new plant! Your suggestion is being reviewed."});
		    setTimeout(function(){ window.location = "http://localhost:3000/plants"; }, 2500);
		  })
		  .catch(function (error) {
		    console.log(error);
		    parentObj.setState({submitErrorMessage: "Sorry, there your submission was not recieved. Please review your info and try again."});

		  });*/
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
					<div className="inputForm">
						<input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
						<input type="text" name="photoLink" placeholder="Photo URL" value={this.state.photoLink} onChange={this.handleChange} />
						<textarea rows="4" cols="50" placeholder="Write your guide here..." name="body" onChange={this.handleChange}></textarea>
						<p id="errorDisplay">{this.state.submitErrorMessage}</p>
						<button type="button" onClick={this.handleSubmit}>Submit</button>
					</div>
					:
					<h3 className="successMessage">{this.state.submitMessage}</h3>
				}
			</Wrapper>
	  )
  }
}

export default SuggestGuide;