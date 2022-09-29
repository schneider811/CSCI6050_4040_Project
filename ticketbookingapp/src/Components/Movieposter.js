import React from "react";

function MoviePoster(params) {
    return <div className = "poster">
        <p class = "title"> {params.name} </p>
        <img src = {params.img}></img> 
    
        <button class = "book"> Book</button>
        <button class = "trailer"> Trailer</button>
    </div>;
}



export default MoviePoster