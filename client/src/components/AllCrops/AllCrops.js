import React from "react";
import Crop from "../Crop";
import "./AllCrops.css";

/*This is where we query the database (probably through a get request*/
/*then we'll loop through the result and make the Crop components*/

const AllCrops = () => (
    <div id="allCrops">
        <Crop cropName="Crop1"/>
        <Crop cropName="Crop2"/>
        <Crop cropName="Crop3"/>
        <Crop cropName="Crop4"/>
        <Crop cropName="Crop5"/>
        <Crop cropName="Crop6"/>
    </div>
);

export default AllCrops;
