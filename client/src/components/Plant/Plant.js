import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Plant.css";
import PlantCard from "../PlantCard";

const Plant = (props) => {
  
  props = props.location.state.props.item;
  console.log(props);

	  return (
	  	<Wrapper>
	  	  <Navbar/>
		  <div id="individualPlantHeader">
		  	<h2 className = "plantName">{props.title}</h2>
		  </div>
		  <div className = "plantAlign">
		    <hr/>
		    <div className = "row">
		      <div className="col-md-3">
		        <img className = "plantImage" src={props.imageURL} alt="200x200"/>
		      </div>
		      {
		      	  (!props.isCat)
		      	  ?
			  	  <div className="col-md-9">
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
