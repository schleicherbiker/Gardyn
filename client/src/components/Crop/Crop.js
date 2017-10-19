import React from "react";
import "./Crop.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

const Crop = (props) => (    
  <div className = "cropAlign">
    <h2 className = "cropName">{"{CropName}"}{/*props crop name*/}</h2>
    
    <hr/>
    <div className = "row">
      <div className="col-md-3">
        <img className = "cropImage" src = "https://placeholder.baker.com/200" alt="200x200"/>
      </div>
  	  <div className="col-md-9">
  	    <p className = "cropParagraph">
    		Climate: {"{props climage info}"}
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
);

export default Crop;
