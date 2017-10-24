import React from "react";
import {Link} from "react-router-dom";
import "./PlantCard.css";

const PlantCard = (props) => {

    return (  
        <Link to={{
            pathname: `/plants/${props.item.title}`,
            state: {props}
        }}>
            <div className="plantCard">
                <div className="plantCardDifficulty"></div>
                <img className="plantCardImage" alt="" src={props.item.imageURL}></img>
                <h2 className="plantCardName">{props.item.title}</h2>
            </div>
        </Link>
    );
}

export default PlantCard;
