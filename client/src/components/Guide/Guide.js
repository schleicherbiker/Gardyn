import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Guide.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

const Guide = (props) => (    
  <Wrapper>
	<Navbar/>
	<div id="individualGuideHeader">
	  <h2 className = "Guide">{"{props.guide or something}"}</h2>
	</div>
	<div className = "jumbotron">
      <h2>Guide</h2>
    </div>
    <p>
      {/*Guide info goes here*/}
    </p>
  </Wrapper>
);

export default Guide;
