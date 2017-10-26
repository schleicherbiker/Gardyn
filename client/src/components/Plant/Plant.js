import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Plant.css";
import PlantCard from "../PlantCard";

// Uses a ternatry statement to either render a plant or category detail page.
const Plant = (props) => {
  
	props = props.location.state.props.item;
	var trueDivStyle, falseDivStyle;
	var needsSupport = true;
	if (needsSupport) {
		trueDivStyle = {
			backgroundColor: "rgba(126, 252, 147, 0.6)"
		}
		falseDivStyle = {
			backgroundColor: "rgba(255, 12, 0, 0)"
		}
	} else {
		trueDivStyle = {
			backgroundColor: "rgba(126, 252, 147, 0)"
		}
		falseDivStyle = {
			backgroundColor: "rgba(255, 12, 0, 0.6)"
		}
	}

	  return (
	  	<Wrapper>
	  	  <Navbar/>
		  <div id="individualPlantHeader">
		  	<h2 className = "plantName">{props.title}</h2>
		  </div>
		  <div className = "plantAlign">
		    <hr/>
		    <div className = "row">
		      <div className="col-md-6">
		        <img className = "plantImage" src={props.imageURL} alt="200x200"/>
		      </div>
		      {
		      	  (!props.isCat)
							?
							<div>
							<div className="col-md-6">

								<div className="infoDiv">
									<img src="http://www.iconarchive.com/download/i89293/icons8/ios7/Weather-Sun.ico" id="sunlightDivIcon"></img>
									<h4 className="textRight">6 - 8 hours</h4>
								</div>

								<div className="infoDiv">
									<h4 id="difficultyDivText">Intermediate</h4>
								</div>

								<div className="infoDiv">
									<img src="http://downloadicons.net/sites/default/files/left-right-double-arrow-symbols-icons-68674.png" id="sunlightDivIcon"></img>
									<h4 className="textRight">12 - 24 inches</h4>
								</div>

								<div className="infoDiv">
									<h4 className="textLeft">Support: </h4>
									<div className="infoDivOptions">
										<div className="infoDivOptionsDiv" style={trueDivStyle}>
											<img className="infoDivOptionsImage" src="http://icons.iconarchive.com/icons/icons8/android/512/Very-Basic-Checkmark-icon.png"></img>
										</div>
										<div id="divider"/>
										<div className="infoDivOptionsDiv" style={falseDivStyle}>
											<img className="infoDivOptionsImage" src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672366-x-128.png"></img>
										</div>
									</div>
									
								</div>
							</div>
							<p className = "plantParagraph">
							Climate: {props.Climate}
							</p>
							<p className = "plantParagraph">
							Sunlight: {props.Sunlight}
							</p>
							<p className = "plantParagraph">
							Support: {props.Support}
							</p>
							<p className = "plantParagraph">
							Spacing: {props.Spacing}
							</p>
							<p className = "plantParagraph">
							Water: {props.Water}
							</p>
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
		  </div>
		</Wrapper>
)};

export default Plant;
