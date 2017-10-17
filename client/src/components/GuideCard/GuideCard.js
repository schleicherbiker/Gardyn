import React from "react";
import "./GuideCard.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

const GuideCard = (props) => (    
    <div className="crop">
        <img className="cropImage" alt="" src="http://via.placeholder.com/148x148"></img>
        <h2 className="cropName">{props.cropName}</h2>
    </div>
);

export default GuideCard;
