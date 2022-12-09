import $ from 'jquery';
import React from "react";
import "./Checkout.css"
import Axios from 'axios';
import navigateTo from "../../RenderElements/RenderPage";
import SelectSeat from "./SelectSeat";
import ShowTime from './Showtime';

class SelectShowtime extends React.Component {
    constructor( props ) {
        super(props);
        this.state = {showtimesAvailable: [], movieShown: {}}
    }

    componentDidMount() {
        const specMovie =  Axios.post("http://localhost:3001/specificMovie", {movie_id: 5});
        const showtimesList =  Axios.post("http://localhost:3001/showtimes", {movie_id: 5});
        showtimesList.then((response) => {
            
            this.setState({
                showtimesAvailable: response.data
            });
        })
        specMovie.then((response) => {
            
            this.setState({
                movieShown: response.data
            });
        })
    }

    render() {


        

        return  (
            <div class = "select-showtime">
                <h2> Pick a show time!</h2>

                <input type = "date" id = "show-date"></input>

                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}} >
                    <h3>10 00 AM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/30 </h3>
                </div>


                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}}>
                    <h3>1 30 PM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/30 </h3>
                </div>


                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}}>
                    <h3>4 00 PM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/30 </h3>
                </div>


                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}}>
                    <h3>7 00 PM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/30 </h3>
                </div>

                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}}>
                    <h3>10 00 PM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/30 </h3>
                </div>

            </div>

   
        ); 

    }
}

export default SelectShowtime
