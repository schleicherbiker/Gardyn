import React from "react";
import {Link} from "react-router-dom";
import "./PlantCard.css";

function sluggify(string){
    if (string) {
      return string.replace(/ /g, "_").toLowerCase();  
    } else {
        return null;
    }
}

    let easyDif = "easyDifficulty";
    let medDif = "mediumDifficulty hidden";
    let hardDif = "hardDifficulty hidden";

const PlantCard = (props) => {  

    const plantCardBackground = {
        backgroundImage: `url(${props.item.imageURL})`
    }

    if (props.item.difficulty === "beginner") { 
        easyDif = "easyDifficulty";
        medDif = "mediumDifficulty hidden";
        hardDif = "hardDifficulty hidden";
    } else if (props.item.difficulty === "expert") { 
        easyDif = "easyDifficulty hidden";
        medDif = "mediumDifficulty hidden";
        hardDif = "hardDifficulty";
    } else {
        easyDif = "easyDifficulty hidden";
        medDif = "mediumDifficulty";
        hardDif = "hardDifficulty hidden";
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
