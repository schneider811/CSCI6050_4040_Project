import $ from 'jquery';
import React from "react";
import Axios from 'axios'
import './Panel.css'
import './AdminPanel.css'

var movieTitle;
var movieDuration;
var movieCategory;
var movieDirector;
var movieProducer;
var movieSynopsis;
var movieTrailer;
var moviePosterName;
var movieCast;

var promoCode;
var promoStart;
var promoEnd;
var percentage;

function AdminPanel() {

    $(document).ready(function(){
        $(".promo").hide();
        $(".bottom-middle").hide();
        $(".middle").css("background", "#b1a37a");
        $(".right").css("background", "#b1a37a");
    
        $(".right").click(function(){
            $(".newMovie").hide();
            $(".bottom-middle").hide();
            $(".promo").show();
            $(".left").css("background", "#b1a37a");
            $(".middle").css("background", "#b1a37a");
            $(".right").css("background", "#ac944e");
        });
    
        $(".left").click(function(){
            $(".newMovie").show();
            $(".promo").hide();
            $(".bottom-middle").hide();
            $(".left").css("background", "#ac944e");
            $(".right").css("background", "#b1a37a");
            $(".middle").css("background", "#b1a37a");

        });

        $(".middle").click(function(){
            $(".bottom-middle").show();
            $(".newMovie").hide();
            $(".promo").hide();
            $(".middle").css("background", "#ac944e");
            $(".right").css("background", "#b1a37a");
            $(".left").css("background", "#b1a37a");
        });

        

        
        
    
    });

    return(
        
        <div class = "container">

            <div id = "error"> </div>

            <div class = "left" id = "left-admin"> Movie Controls</div>
            <div class = "middle" id = "middle-admin"> Schedule Movie</div>
            <div class = "right" id = "left-admin"> Promotion Controls</div>


            <div class = "newMovie">
                
                <label for="movie-actions"> Control Action:</label>
                <select>
                    <option value = "add">Add</option>
                </select>

                        
                <form class = "admin">

                    <label for="add">Movie Title:</label>
                    <input type="text" id="add-title" name="add-title"
                    onChange = {(e) => {
                        movieTitle = e.target.value;
                    }}/>
                    <br></br>
                    
                    <label for="add"> Movie Duration:</label>
                    <input type="time" id="add-duration" name="add-duration" step="2"
                    onChange = {(e) => {
                        movieDuration = e.target.value;
                    }}/>
                    <br></br>

                    <label for="add"> Movie Director:</label>
                    <input type="text" id="add-director" name="add-director"
                    onChange = {(e) => {
                        movieDirector = e.target.value;
                    }}/>
                    <br></br>

                    <label for="add"> Movie Producer:</label>
                    <input type="text" id="add-producer" name="add-producer"
                    onChange = {(e) => {
                        movieProducer = e.target.value;
                    }}/>
                    <br></br>

                    <label for="add"> Movie Cast:</label>
                    <input type="text" id="add-producer" name="add-producer"
                    onChange = {(e) => {
                        movieCast = e.target.value;
                    }}/>
                    <br></br>

                    <label for="add"> Movie Category:</label>
                    <input type="text" id="add-category" name="add-category"
                    onChange = {(e) => {
                        movieCategory = e.target.value;
                    }}/>
                    <br></br>

                    <label for="info"> Movie Info:</label>
                    <input type="text" id="add-info" name="add-info"
                    onChange = {(e) => {
                        movieSynopsis = e.target.value;
                    }}/>
                    <br></br>

                    <label for="link"> Movie Poster Name:</label>
                    <input type="text" id="add-url" name="add-url"
                    onChange = {(e) => {
                        moviePosterName = e.target.value;
                    }}/>
                    <br></br>

                    <label for="link"> Movie Trailer:</label>
                    <input type="url" id="add-url" name="add-url"
                    onChange = {(e) => {
                        movieTrailer = e.target.value;
                    }}/>
                    <button id = "movie-button" onClick={addMovie}> Add Movie</button>
                    <br></br>
                    
                    
                </form>
                
            </div>

            <div class = "bottom-middle">
                <form class = "schedule">

                    <button id = "movie-button"> Manage User</button>
                </form>
            </div>







            <div class = "promo">
                
                   
                <form class = "admin">
                    <label for="prom"> Promotion Code:</label><br/>
                    <input type="text" id="prom-name" name="prom-name"
                    onChange = {(e) => {
                        promoCode = e.target.value;
                    }}/><br/>

                    <label for="discount">Discount Rate:</label><br/>
                    <input type="number" id="discount" name="discount"
                    onChange = {(e) => {
                        percentage = e.target.value;
                    }}/><br/>

                    <label for="prom-start">Promotion Start Date:</label> <br/>
                    <input type="date" id="prom-start" name="prom-start"
                    onChange = {(e) => {
                        promoStart = e.target.value;
                    }}/><br/>

                    <label for="prom-end">Promotion End Date:</label> <br/>
                    <input type="date" id="prom-end" name="prom-end"
                    onChange = {(e) => {
                        promoEnd = e.target.value;
                    }}/><br/>

                    <button id = "prom-button" onClick={addPromo}> Execute</button>
                </form>

            
            </div>


            

        </div>

        
    );
}

async function addMovie() {
    const newMovie = {
        title: movieTitle,
        duration: movieDuration,
        category: movieCategory,
        director: movieDirector,
        producer: movieProducer,
        posterName: moviePosterName,
        synopsis: movieSynopsis,
        trailer: movieTrailer,
        cast: movieCast
    }
    
    const newMovieResponse = await Axios.post("http://localhost:3001/addMovie", newMovie);
    
}

async function addPromo() {
    const newPromo = {
        promoCode: promoCode,
        startDate: promoStart,
        endDate: promoEnd,
        percentageOff: percentage,
    }
    
    const newPromoResponse = await Axios.post("http://localhost:3001/addPromo", newPromo);
    
}


export default AdminPanel