import React, { Component } from "react";
import GuideCard from "../GuideCard";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./AllGuides.css";
import axios from "axios";


class AllGuides extends Component {
	state = {
		guideData: [{guideName: "Loading...", _id: "000"}]
	}

	retrieveGuides = () => {
		// To ensure context of 'this' isn't lost inside the axios function. 
		const parentObj = this;
		axios.get('/api/guides')
	      .then(function (response) {
	        parentObj.setState({
	          guideData: response.data
	        })
	      })
	      .catch(function (error) {
	        console.log(error);
	      });
	}

	componentWillMount() {
	    this.retrieveGuides();
	    document.title = "Guides | Gardyn.org";
	}

	render() {
		return (
		    <Wrapper>
		        <Navbar/>
		        <div id="allGuides">
							<div id="allGuidesHeader">
								<h1 id="allGuidesHeaderTitle">All Guides</h1>
							</div>
		        	{
						this.state.guideData.map(item => (
							<GuideCard item = {item}/>
						))
					}
					<a href="/suggest_guide" className="guideCard" id="addGuide">
						<img src="AddOneG.png" alt="Suggest a new guide" id="addGuideImage"/>
					</a>
		        </div>
		    </Wrapper>
		)
  	}
}

export default AllGuides;
