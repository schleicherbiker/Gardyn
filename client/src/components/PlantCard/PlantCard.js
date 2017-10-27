import React from "react";
import {Link} from "react-router-dom";
import "./PlantCard.css";

const PlantCard = (props) => {

    const test = props.skillLevel;
    console.log(props.item.skillLevel);

    if (props.skillLevel === "Beginner") { //if (props.difficulty === "easy") {
        var easyDif = "easyDifficulty";
        var medDif = "mediumDifficulty hidden";
        var hardDif = "hardDifficulty hidden";
    } else if (props.skillLevel === "Expert") { //if (props.difficulty === "medium") {
        var easyDif = "easyDifficulty hidden";
        var medDif = "mediumDifficulty hidden";
        var hardDif = "hardDifficulty";
    } else {
        var easyDif = "easyDifficulty hidden";
        var medDif = "mediumDifficulty";
        var hardDif = "hardDifficulty hidden";
    }

    return (  
        <Link to={{
            pathname: `/plants/${props.item.title}`,
            state: {props}
        }}>
            <div className="plantCard">
                <div className={easyDif}></div>
                <div className={medDif}></div>
                <div className={hardDif}></div>
                <img className="plantCardImage" alt="" src={props.item.imageURL}></img>
                <h2 className="plantCardName">{props.item.title}</h2>
            </div>
        </Link>
    );
}

export default PlantCard;
