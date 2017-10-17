import React from "react";
import "./Crop.css";

const Crop = (props) => (
    <div className="crop">
        <img className="cropImage" src="http://via.placeholder.com/148x148"></img>
        <h2 className="cropName">{props.cropName}</h2>
    </div>
);

export default Crop;
