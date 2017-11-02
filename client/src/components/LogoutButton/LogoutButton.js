import React, { Component } from "react";
import "./LogoutButton.css";

class LogoutButton extends Component {
    
    constructor(props){
    super(props); 
    }

    componentDidMount() {

      localStorage.clear();
      console.log("Cleared!");
    }

    render() {

    return (
        <div>
          <div>
            <a  id="loginButton" onClick={this.handleClick}>Login</a>
          </div>
        </div>);
    }
}

export default LogoutButton;
