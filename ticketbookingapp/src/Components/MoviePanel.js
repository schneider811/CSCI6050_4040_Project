import React from "react";
import './MoviePanelStyle.css'


function MoviePanel(params) {
    return <div className = "poster">
        <img src = {params.img} alt="Movie Poster"></img> 
        <p class = "title"> {params.name} </p>
    
        <button class = "book"> Book</button>
        <button class = "trailer"> Trailer</button>
    </div>;
}



export default MoviePanel