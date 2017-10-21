import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <div id="navbar">
        <Link className="link" to="/">
            <div className="flex">  
                <img id="icon" alt="" src="./assets/leaf.png"></img>
                <h1 id="navbarTitle">Gardyn</h1>
            </div>
        </Link>
        <div className="flex">
            <Link className="link" to="/plants">
                <h3 className="button"><h4>Plants</h4></h3>
            </Link>
            <Link className="link" to="/guides">
                <h3 className="button"><h4>Guides</h4></h3>
            </Link>
        </div>
    </div>
);

export default Navbar;
