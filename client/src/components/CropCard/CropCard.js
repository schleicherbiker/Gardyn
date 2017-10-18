import React from "react";
import "./CropCard.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

// Placeholder image: http://via.placeholder.com/148x148

const CropCard = (props) => (    
    <div className="crop">
        <img className="cropImage" alt="" src={props.imageURL}></img>
        <h2 className="cropName">{props.cropName}</h2>
    </div>
);

export default CropCard;
