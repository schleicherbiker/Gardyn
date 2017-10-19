import React from "react";
import "./CropCard.css";

// Placeholder image: http://via.placeholder.com/148x148

const CropCard = (props) => (  
    <div className="cropCard">
        <div className="cropCardDifficulty"></div>
        <img className="cropCardImage" alt="" src={props.imageURL}></img>
        <h2 className="cropCardName">{props.cropName}</h2>
    </div>
);

export default CropCard;
