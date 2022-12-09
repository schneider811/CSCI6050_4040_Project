import React from "react";
import Axios from 'axios'
import "../../Components/Panel.css"
import "../../Components/AdminPanel.css"

var movieTitle;
var movieDuration;
var movieCategory;
var movieDirector;
var movieProducer;
var movieSynopsis;
var movieTrailer;
var moviePosterName;
var movieCast;


class AddMovie extends React.Component {
    constructor( props ) {
        super(props);
    }
    render() {
        return (
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
                    <input type="time" id="add-duration" name="add-duration" min="13:00" max="17:00"
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
        )
    }
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

export default AddMovie