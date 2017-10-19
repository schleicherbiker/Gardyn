import React from "react";
import GuideCard from "../GuideCard";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./AllGuides.css";

const AllCrops = () => (
    <Wrapper>
        <Navbar/>
        <div id="allGuides">
            <GuideCard guideName="Soil 101"/>
            <GuideCard guideName="Watering"/>
            <GuideCard guideName="Pests and You"/>
        </div>
    </Wrapper>
);

export default AllCrops;
