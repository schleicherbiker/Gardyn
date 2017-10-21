import React from "react";
import "./Navbar.css";

const Navbar = () => (
    <div id="navbar">
        <div className="flex">
            <img id="icon" alt="" src="./assets/leaf.png"></img>
            <h1 id="navbarTitle">Gardyn</h1>
        </div>
        <div className="flex">
            <h3 className="button"><h4>Crops</h4></h3>
            <h3 className="button"><h4>Guides</h4></h3>
        </div>
    </div>
);

export default Navbar;
