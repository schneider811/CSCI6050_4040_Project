import React from "react";
import navigateTo from "../RenderElements/RenderPage";
import Checkout from "../Pages/Checkout/Checkout"
import './MoviePanelStyle.css'


class MoviePanel extends React.Component {
    constructor( props ) {
        super( props );
        
        this.state = {title: props.title, imagePath: props.imageSrc, trailerLink: props.trailer, isScheduled: props.scheduled};
    }



    render() {
        return( 
            <div className = "poster">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div class = "image-card">
                    <img src = {require("../MoviePosters/" + this.state.imagePath)}></img> 
                </div>

                <p class = "title"> {this.state.title} </p>

                <div class = "ratings">
                    <span class="heading">User Rating</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>


                { this.state.isScheduled ? <button class = "book" onClick={() => {navigateTo(Checkout)}}> Book</button> : ""}
               
                
                <button class = "trailer" onClick={() => {window.open(this.state.trailerLink)}}> Trailer</button>
            </div>
        );
    }
}



export default MoviePanel