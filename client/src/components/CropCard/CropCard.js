import React from "react";
import {Link} from "react-router-dom";
import "./CropCard.css";

// Placeholder image: http://via.placeholder.com/148x148

const CropCard = (props) => {

    //const name = props.title;
    console.log(props.item.title);

    return (  
        <Link to={{
            pathname: `/crop/${props.item.title}`,
            state: {props}
        }}>
            <div className="cropCard">
                <div className="cropCardDifficulty"></div>
                <img className="cropCardImage" alt="" src={props.item.imageURL}></img>
                <h2 className="cropCardName">{props.item.title}</h2>
            </div>
        </Link>
    );
}

export default CropCard;
