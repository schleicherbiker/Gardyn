import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Guide.css";

const Guide = (props) => {   
  
  props = props.location.state.props.item;

  document.title = props.title + " -- Gardyn.org";

  return (
    <Wrapper>
      <Navbar/>
      <img alt="Guide thumbnail" src={props.photoLink} className="guideImage"/>
      <div id="individualGuideHeader">
        <h2 className="guideTitle">{props.title}</h2>
      </div>
      <hr/>
      {
        props.body.map(item => (
          <p className="guideBody">{item}</p>
        ))
      }
    </Wrapper>
  )
};

export default Guide;