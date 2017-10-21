import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Crop.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

const Crop = (props) => {
  
  props = props.location.state.props.item;
  console.log(props);

  return (
  	<Wrapper>
  	  <Navbar/>
	  <div id="individualCropHeader">
	  	<h2 className = "cropName">{props.title}</h2>
	  </div>
	  <div className = "cropAlign">
	    <hr/>
	    <div className = "row">
	      <div className="col-md-3">
	        <img className = "cropImage" src={props.imageURL} alt="200x200"/>
	      </div>
	  	  <div className="col-md-9">
	  	    <p className = "cropParagraph">
	    		Climate: {props.Climate}
	        </p>
	        <p className = "cropParagraph">
	    		Sunlight: {props.Sunlight}
	        </p>
	        <p className = "cropParagraph">
	    		Support: {props.Support}
	        </p>
	        <p className = "cropParagraph">
	    		Spacing: {props.Spacing}
	        </p>
	        <p className = "cropParagraph">
	    		Water: {props.Water}
	        </p>
	  	  </div>
	    </div>
	  </div>
	</Wrapper>
)};

export default Crop;
