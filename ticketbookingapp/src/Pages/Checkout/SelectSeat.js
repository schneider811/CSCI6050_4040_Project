import React from "react";
import "./Seat.css"
import $ from 'jquery';
import navigateTo from "../RenderPage";
import PaymentProcess from "./PaymentProcess";

class SelectSeat extends React.Component {


    render() {



   
        return  (

            <div class = "theater">

                <div id = "screen"> Theater</div>

                <div class = "seatLayout-top">

                    <div class = "seatRow one">
                        <div class = "seat" id = "A1"><span class="tooltiptext">A1</span></div>
                        <div class = "seat" id = "A2"><span class="tooltiptext">A2</span></div>
                        <div class = "seat" id = "A3"><span class="tooltiptext">A3</span></div>
                        <div class = "seat" id = "A4"><span class="tooltiptext">A4</span></div>
                        <div class = "seat" id = "A5"><span class="tooltiptext">A5</span></div>
                        <div class = "seat" id = "A6"><span class="tooltiptext">A6</span></div>
                        <div class = "seat" id = "A7"><span class="tooltiptext">A7</span></div>
                        <div class = "seat" id = "A8"><span class="tooltiptext">A8</span></div>
                        <div class = "seat" id = "A9"><span class="tooltiptext">A9</span></div>
                        <div class = "seat" id = "A10"><span class="tooltiptext">A10</span></div>
                    </div>
                

                    <div class = "seatRow two">
                        <div class = "seat" id = "B1"><span class="tooltiptext">B1</span></div>
                        <div class = "seat" id = "B2"><span class="tooltiptext">B2</span></div>
                        <div class = "seat" id = "B3"><span class="tooltiptext">B3</span></div>
                        <div class = "seat" id = "B4"><span class="tooltiptext">B4</span></div>
                        <div class = "seat" id = "B5"><span class="tooltiptext">B5</span></div>
                        <div class = "seat" id = "B6"><span class="tooltiptext">B6</span></div>
                        <div class = "seat" id = "B7"><span class="tooltiptext">B7</span></div>
                        <div class = "seat" id = "B8"><span class="tooltiptext">B8</span></div>
                        <div class = "seat" id = "B9"><span class="tooltiptext">B9</span></div>
                        <div class = "seat" id = "B10"><span class="tooltiptext">B10</span></div>
                    </div>

                    <div class = "seatRow three">
                        <div class = "seat" id = "C1"><span class="tooltiptext">C1</span></div>
                        <div class = "seat" id = "C2"><span class="tooltiptext">C2</span></div>
                        <div class = "seat" id = "C3"><span class="tooltiptext">C3</span></div>
                        <div class = "seat" id = "C4"><span class="tooltiptext">C4</span></div>
                        <div class = "seat" id = "C5"><span class="tooltiptext">C5</span></div>
                        <div class = "seat" id = "C6"><span class="tooltiptext">C6</span></div>
                        <div class = "seat" id = "C7"><span class="tooltiptext">C7</span></div>
                        <div class = "seat" id = "C8"><span class="tooltiptext">C8</span></div>
                        <div class = "seat" id = "C9"><span class="tooltiptext">C9</span></div>
                        <div class = "seat" id = "C10"><span class="tooltiptext">C10</span></div>
                    </div>
                </div>


                <select id = "adults" name = "adults" class = "ticket-drop">
                    <option value = "adults">Adults</option>
                </select>
                <input type = "number" class = "ticket-num"></input><br></br>

                <select id = "kids" name = "kids" class = "ticket-drop">
                    <option value = "kids">Kids</option>
                </select>
                <input type = "number" class = "ticket-num"></input><br></br>

                <select id = "seniors" name = "seniors" class = "ticket-drop">
                    <option value = "seniors">Seniors</option>
                </select>
                <input type = "number" class = "ticket-num"></input> <br></br>

                
                <button id = "seat-btn" onClick={() => {navigateTo(PaymentProcess)}}> Submit</button>
            </div>



            
        );
    }
}

export default SelectSeat
