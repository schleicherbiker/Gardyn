import React from "react";
import GuideCard from "../GuideCard";
import "./AllGuides.css";

const AllCrops = () => (
    <div id="allGuides">
        <GuideCard guideName="Soil 101"/>
        <GuideCard guideName="Watering"/>
        <GuideCard guideName="Pests and You"/>
    </div>
);

export default AllCrops;
