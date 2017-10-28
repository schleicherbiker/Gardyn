import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Plant.css";
import PlantCard from "../PlantCard";

// Uses a ternatry statement to either render a plant or category detail page.
const Plant = (props) => {
  
	props = props.location.state.props.item;

	// Styling for plant support
	var yesDivStyle, maybeDivStyle, noDivStyle;
	if (props.Support === "yes") {
		yesDivStyle = { backgroundColor: "rgba(126, 252, 147, 0.6)" }
		maybeDivStyle = {backgroundColor: "rgba(126, 252, 147, 0)" }
		noDivStyle = { backgroundColor: "rgba(126, 252, 147, 0)" }
	} else if (props.Support === "maybe") {
		yesDivStyle = { backgroundColor: "rgba(126, 252, 147, 0)" }
		maybeDivStyle = {backgroundColor: "rgba(126, 252, 147, 0.6)" }
		noDivStyle = { backgroundColor: "rgba(126, 252, 147, 0)" }
	} else {
		yesDivStyle = { backgroundColor: "rgba(126, 252, 147, 0)" }
		maybeDivStyle = {backgroundColor: "rgba(126, 252, 147, 0)" }
		noDivStyle = { backgroundColor: "rgba(126, 252, 147, 0.6)" }
	}

	// Styling for plant difficulty
	var difficultyDivStyle;
	if (props.skillLevel === "Beginner") { 
		difficultyDivStyle = { backgroundColor: "rgba(126, 252, 147, 1)" }
	} else if (props.skillLevel === "Intermediate") {
		difficultyDivStyle = { backgroundColor: "rgba(244, 223, 66, 1)" }
	} else {
		difficultyDivStyle = { backgroundColor: "rgba(255, 0, 0, 0.8)" }
	}

	  return (
	  	<Wrapper>
	  	  <Navbar/>
		  <div id="individualPlantHeader">
		  	<h2 className = "plantName">{props.title}</h2>
		  </div>
		  <div className = "plantAlign">
		    <hr/>
		      {
	      	  (!props.isCat)
				?
				<div>
					<div className = "row plantSectionSeparate">
				        <div className="col-md-6">
				        	<img className = "plantImage" src={props.imageURL} alt="200x200"/>
				        </div>
						<div className="col-md-6">

							<div className="infoDiv">
								<img src="http://www.iconarchive.com/download/i89293/icons8/ios7/Weather-Sun.ico" id="sunlightDivIcon"></img>
								<h4 className="textRight">{props.Sunlight} Hours</h4>
							</div>

							<div className="infoDiv" style={difficultyDivStyle}>
								<h4 id="difficultyDivText">{props.skillLevel}</h4>
							</div>

							<div className="infoDiv">
								<img src="http://downloadicons.net/sites/default/files/left-right-double-arrow-symbols-icons-68674.png" id="sunlightDivIcon"></img>
								<h4 className="textRight">{props.Spacing} Inches</h4>
							</div>

							<div className="infoDiv">
								<h4 className="textLeft">Support: </h4>
								<div className="infoDivOptions">
									<div className="infoDivOptionsDiv" style={yesDivStyle}>
										<img className="infoDivOptionsImage" src="http://icons.iconarchive.com/icons/icons8/android/512/Very-Basic-Checkmark-icon.png"></img>
									</div>
									<div id="divider"/>
									<div className="infoDivOptionsDiv" style={maybeDivStyle}>
										<img className="infoDivOptionsImage" src="http://icons.iconarchive.com/icons/icons8/ios7/512/Healthcare-Scales-Of-Balance-Filled-icon.png"></img>
									</div>
									<div id="divider"/>
									<div className="infoDivOptionsDiv" style={noDivStyle}>
										<img className="infoDivOptionsImage" src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png"></img>
									</div>
									
									
								</div>
								
							</div>
						</div>
					</div>
					<div className = "row plantSectionSeparate">
						<p className = "plantGuideTitle">Climate</p>
						<p className = "plantGuideDescription">{props.Climate}</p>
						<br />
						<p className = "plantGuideTitle">Special</p>
						<p className = "plantGuideDescription">{props.Special}</p>
					</div>
				</div>
				:
				<div id="catDetailsHolder">
				  <p>{props.description}</p>
				  <h3>Varieties:</h3>
				  <div id="childPlantHolder">
					{
						props.childPlants.map(item => (
							<PlantCard
								item = {item}
							/>
						))
					}
				  </div>
				</div>
		  	  }
		  </div>
		</Wrapper>
)};

export default Plant;
