import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Guide.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

const Guide = (props) => {   
  
  props = props.location.state.props.item;
  console.log(props);

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