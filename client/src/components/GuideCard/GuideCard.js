import React from "react";
import {Link} from "react-router-dom";
import "./GuideCard.css";

/* TODO: We need to pass in a name, a picture, and optionally a difficulty */

const GuideCard = (props) => { 

	console.log("GuideCard loaded.")
	console.log(props);

	return (
		<Link to={{
	        pathname: `/guides/${props.item.title}`,
	        state: {props}
	    }}>   
		    <div className="guideCard">
		        <img className="guideCardImage" alt="" src="https://thumbs.dreamstime.com/z/soil-background-38546985.jpg"></img>
		        <h2 className="guideCardName">{props.guideName}</h2>
		    </div>
		</Link>
	);
}

export default GuideCard;
