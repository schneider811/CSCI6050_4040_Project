import $ from 'jquery';
import React from "react";
import "./Checkout.css"
import navigateTo from "../../RenderElements/RenderPage";
import SelectSeat from "./SelectSeat";

class SelectShowtime extends React.Component {
    constructor( props ) {
        super(props);
    }
    render() {


        $(document).ready(function(){


            $(".timing").click(function() {

                if($(this).css("background-color")=="#e3dcc9") {
                    $(this).css("background-color", "black");
                }

            });
            






        });

        return  (

            <div class = "select-showtime">
                <h2> Pick a show time!</h2>

                <input type = "date" id = "show-date"></input>

                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}} >
                    <h3>10 00 AM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/50 </h3>
                </div>


                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}}>
                    <h3>1 30 PM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/50 </h3>
                </div>


                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}}>
                    <h3>4 00 PM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/50 </h3>
                </div>


                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}}>
                    <h3>7 00 PM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/50 </h3>
                </div>

                <div class = "timing" onClick={() => {navigateTo(SelectSeat)}}>
                    <h3>10 00 PM</h3>
                    <p> Movie Title</p>
                    <h3> Seats Taken: 0/50 </h3>
                </div>

            </div>


        ); 

    }
}

export default SelectShowtime
