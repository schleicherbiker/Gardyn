import React from "react";
import CropCard from "../CropCard";
import "./AllCrops.css";

/*This is where we query the database (probably through a get request*/
/*then we'll loop through the result and make the Crop components*/

const AllCrops = () => (
    <div id="allCrops">
        <CropCard cropName="Crop1"/>
        <CropCard cropName="Crop2"/>
        <CropCard cropName="Crop3"/>
        <CropCard cropName="Crop4"/>
        <CropCard cropName="Crop5"/>
        <CropCard cropName="Crop6"/>
    </div>
);

export default AllCrops;
