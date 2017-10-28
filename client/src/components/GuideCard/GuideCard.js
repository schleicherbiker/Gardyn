import React from "react";
import {Link} from "react-router-dom";
import "./GuideCard.css";

// What do you guys think about switching to a non-water marked soil image? 
// Or even a background that's customized to the given topic (IE-- passed in through props)?
// If not: 
// Original background image: https://thumbs.dreamstime.com/z/soil-background-38546985.jpg

const GuideCard = (props) => { 

	return (
		<Link className="guideCard" to={{
	        pathname: `/guide/${props.item.title}`,
	        state: {props}
	    }}>   
		    <div className="guideCardName">{props.item.title}</div>
		</Link> 
	);
}

export default GuideCard;
