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
      {"{Guide info goes here}"}
      <br/>
      <br/>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    </p>
    </Wrapper>
)};

export default Guide;