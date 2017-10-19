import React from "react";
import "./CropCard.css";

// Placeholder image: http://via.placeholder.com/148x148

const CropCard = (props) => (  
    <div className="crop">
        <div className="cropDifficulty" stype="background-color: green"></div>
        <img className="cropImage" alt="" src={props.imageURL}></img>
        <h2 className="cropName">{props.cropName}</h2>
    </div>
);

export default CropCard;
