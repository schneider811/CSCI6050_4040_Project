import React from "react";
import './MoviePosterStyling.css'

function MoviePoster(params) {
    return <div className = "poster">
        <img src = {params.img}></img> 
        <p class = "title"> {params.name} </p>
    
        <button class = "book"> Book</button>
        <button class = "trailer"> Trailer</button>
    </div>;
}



export default MoviePoster