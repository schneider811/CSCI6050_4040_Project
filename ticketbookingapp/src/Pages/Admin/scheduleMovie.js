import React from "react";
import Axios from 'axios'
import "../../Components/Panel.css"
import "../../Components/AdminPanel.css"
import { type } from "jquery";


var movieDate;
var movieStartTime;
var movieSelected;
var roomSelected;

class ScheduleMovie extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {moviesAdded: [], theatresAvailable: []};

    }
    componentDidMount() {
        const movieList =  Axios.get("http://localhost:3001/movieList");
        movieList.then((response) => {
            this.setState({
                moviesAdded: response.data
            });
        })
        
    }

    render() {
        return (
            <div class = "bottom-middle">
                <form class = "schedule">
                    <label for="dateOfMovie"> Date of Movie: </label>
                    <input type="date" min="2022-12-09" 
                    onChange={(e) => {
                        movieDate = e.target.value;
                    }}></input><br></br>

                    <label for="viewTime"> Scheduled Timing: </label>
                    <input type="time" id="startTime" name="startTime"
                    onChange = {(e) => {
                        movieStartTime = e.target.value;
                    }}/>
                    <br></br>

                    <label for="movieScheduled"> Pick Movie to Schedule: </label>
                    <select name="moviesAvailable" id="moviesAvailable" 
                    onChange={(e) => {
                        movieSelected = e.target.value;
                    }}>
                    {
                        this.state.moviesAdded.map((movie) => <option value={movie.title}>{movie.title}</option>)
                    }
                    </select>
                    <br></br>

                    <label for="roomScheduled"> Pick Room to Schedule movie in: </label>
                    <select name="roomsAvailable" id="roomsAvailable"
                    onChange={(e) => {
                        roomSelected = e.target.value;
                    }}>
                        <option value="regular">Regular (30 seats)</option>
                    </select>
                    <br></br>

                    <button id = "movie-button">Schedule Movie</button>
                </form>
            </div>
        )
    }
}

async function scheduleMovie() {
    const newScheduleMovie = {
        date: movieDate,
        startTime: movieStartTime,
        movie: movieSelected,
        room: roomSelected,
    }
    
    const newMovieResponse = await Axios.post("http://localhost:3001/scheduleMovie", newScheduleMovie);
    
}


export default ScheduleMovie