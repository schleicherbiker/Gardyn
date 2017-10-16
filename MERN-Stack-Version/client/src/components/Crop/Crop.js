import React from "react";

const Crop = (props) => (
    <div class="crop">
        <img class="crop-image" src="http://via.placeholder.com/148x148"></img>
        <h2 class="crop-name">{props.crop-name}</h2>
    </div>
);

export default Crop;
