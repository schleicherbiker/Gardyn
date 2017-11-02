import React from "react";
import {Link} from "react-router-dom";
import "./PlantCard.css";

function sluggify(string){
    if (string) {
      return string.replace(" ", "_").toLowerCase();  
    } else {
        return null;
    }
}

const PlantCard = (props) => {

    var plantCardBackground = {
        backgroundImage: `url(${props.item.imageURL})`
    }

    if (props.item.difficulty === "beginner") { 
        var easyDif = "easyDifficulty";
        var medDif = "mediumDifficulty hidden";
        var hardDif = "hardDifficulty hidden";
    } else if (props.item.difficulty === "expert") { 
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
            pathname: `/plants/${ sluggify(props.item.title) }`,
            state: {props}
        }}>
            <div className="plantCard" style={plantCardBackground}>
                <div className={easyDif}></div>
                <div className={medDif}></div>
                <div className={hardDif}></div>
                <h2 className="plantCardName">{props.item.title}</h2>
            </div>
        </Link>
    );
}

export default PlantCard;
