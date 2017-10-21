import React from "react";
import "./Crop.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

const Crop = (props) => {
  
  props = props.location.state.props.item;

  return (    
  <div className = "cropAlign">
    <h2 className = "cropName">{props.title}</h2>
    
    <hr/>
    <div className = "row">
      <div className="col-md-3">
        <img className = "cropImage" src={props.imageURL} alt="200x200"/>
      </div>
  	  <div className="col-md-9">
  	    <p className = "cropParagraph">
    		Climate: {"{props climate info}"}
        </p>
        <p className = "cropParagraph">
    		Sunlight: {"{props sunlight info}"}
        </p>
        <p className = "cropParagraph">
    		Support: {"{props support info}"}
        </p>
        <p className = "cropParagraph">
    		Spacing: {"{props spacing info}"}
        </p>
        <p className = "cropParagraph">
    		Water: {"{props water info}"}
        </p>
  	  </div>
    </div>
  </div>
)};

export default Crop;
