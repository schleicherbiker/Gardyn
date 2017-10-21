import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Guide.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

const Guide = (props) => {   
  
  console.log("Nothing to link to yet.");

  return (
    <Wrapper>
  	<Navbar/>
  	<div id="individualGuideHeader">
  	  <h2 className = "Guide">{"{Guide name here}"}</h2>
  	</div>
    <hr/>
    <p>
      {"{Guide info goes here"}
    </p>
    </Wrapper>
)};

export default Guide;
