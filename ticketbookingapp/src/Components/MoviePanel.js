import React from "react";
import navigateTo from "../Pages/RenderPage";
import Checkout from "../Pages/Checkout/Checkout"
import './MoviePanelStyle.css'


function MoviePanel(params) {
    return( <div className = "poster">
        <img src = {params.image} alt="Movie Poster"></img> 
        <p class = "title"> {params.name} </p>
    
        <button class = "book" onClick={() => {navigateTo(Checkout)}}> Book</button>
        <button class = "trailer" onClick={() => {window.open("https://www.youtube.com/watch?v=fb5ELWi-ekk");}}> Trailer</button>
    </div>);
}



export default MoviePanel