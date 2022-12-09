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
                
            <div class = "timing" onClick={() => {navigateTo(SelectSeat)}} >
                <h3>10:20</h3>
                <p>Jurassic World</p>
                <h3> Seats Taken: 0/30 </h3>
            </div>

            </div>
        ); 

    }
}

export default SelectShowtime
