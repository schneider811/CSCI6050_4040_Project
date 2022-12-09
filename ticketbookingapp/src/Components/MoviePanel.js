import React from "react";
import navigateTo from "../RenderElements/RenderPage";
import Checkout from "../Pages/Checkout/Checkout"
import './MoviePanelStyle.css'


function MoviePanel(params) {
    return( <div className = "poster">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <div class = "image-card">
            <img src = {require("./jurassicpark.png")}></img> 
        </div>

        <p class = "title"> {params.name} </p>

        <div class = "ratings">
            <span class="heading">User Rating</span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
        </div>


    
        <button class = "book" onClick={() => {navigateTo(Checkout)}}> Book</button>
        <button class = "trailer" onClick={() => {window.open(params.url);}}> Trailer</button>
    </div>);
}



export default MoviePanel