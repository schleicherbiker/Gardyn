import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Guide.css";

const Guide = (props) => {   
  
  props = props.location.state.props.item;

  return (
    <Wrapper>
      <Navbar/>
      <div id="individualGuideHeader">
        <h2 className = "Guide">{props.title}</h2>
      </div>
      <img alt="Guide thumbnail" src={props.photoLink} className="guideImage"/>
      <hr/>
      {
        props.body.map(item => (
          <p>{item}</p>
        ))
      }
    </Wrapper>
  )
};

export default Guide;