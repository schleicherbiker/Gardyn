import React from "react";
import {Link} from "react-router-dom";
import "./GuideCard.css";

const GuideCard = (props) => { 

	return (
		<Link to={{
	        pathname: `/guide/${props.item.title}`,
	        state: {props}
	    }}>   
		    <div className="guideCard">
		        <img className="guideCardImage" alt="" src="https://thumbs.dreamstime.com/z/soil-background-38546985.jpg"></img>
		        <h2 className="guideCardName">{props.item.title}</h2>
		    </div>
		</Link> 
	);
}

export default GuideCard;
