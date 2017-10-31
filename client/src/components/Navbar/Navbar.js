import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div id="navbar">
    	<a href="/" className="flat-link">
        <div className="flex">
            <img id="icon" alt="" src="../assets/leaf.png"></img>
            <h1 id="navbarTitle">gardyn</h1>
        </div>
      </a>
      <div className="flex">
          <h3 className="button"><a className="nav-element-link" href="/plants"><h4>plants</h4></a></h3>
          <h3 className="button"><a className="nav-element-link" href="/guides"><h4>guides</h4></a></h3>
      </div>
    </div>
);

export default Navbar;
