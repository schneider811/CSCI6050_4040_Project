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
                        <div class = "seat" id = "A1"></div>
                        <div class = "seat" id = "A2"></div>
                        <div class = "seat" id = "A3"></div>
                        <div class = "seat" id = "A4"></div>
                        <div class = "seat" id = "A5"></div>
                        <div class = "seat" id = "A6"></div>
                        <div class = "seat" id = "A7"></div>
                        <div class = "seat" id = "A8"></div>
                        <div class = "seat" id = "A9"></div>
                        <div class = "seat" id = "A10"></div>
                    </div>
                

                    <div class = "seatRow two">
                        <div class = "seat" id = "B1"></div>
                        <div class = "seat" id = "B2"></div>
                        <div class = "seat" id = "B3"></div>
                        <div class = "seat" id = "B4"></div>
                        <div class = "seat" id = "B5"></div>
                        <div class = "seat" id = "B6"></div>
                        <div class = "seat" id = "B7"></div>
                        <div class = "seat" id = "B8"></div>
                        <div class = "seat" id = "B9"></div>
                        <div class = "seat" id = "B10"></div>
                    </div>

                    <div class = "seatRow three">
                        <div class = "seat" id = "C1"></div>
                        <div class = "seat" id = "C2"></div>
                        <div class = "seat" id = "C3"></div>
                        <div class = "seat" id = "C4"></div>
                        <div class = "seat" id = "C5"></div>
                        <div class = "seat" id = "C6"></div>
                        <div class = "seat" id = "C7"></div>
                        <div class = "seat" id = "C8"></div>
                        <div class = "seat" id = "C9"></div>
                        <div class = "seat" id = "C10"></div>
                    </div>
                </div>

                <div class = "seatLayout-bottom">

                    <div class = "seatRow four">
                        <div class = "seat" id = "D1"></div>
                        <div class = "seat" id = "D2"></div>
                        <div class = "seat" id = "D3"></div>
                        <div class = "seat" id = "D4"></div>
                        <div class = "seat" id = "D5"></div>
                        <div class = "seat" id = "D6"></div>
                        <div class = "seat" id = "D7"></div>
                        <div class = "seat" id = "D8"></div>
                        <div class = "seat" id = "D9"></div>
                        <div class = "seat" id = "D10"></div>
                    </div>

                    <div class = "seatRow five">
                        <div class = "seat" id = "E1"></div>
                        <div class = "seat" id = "E2"></div>
                        <div class = "seat" id = "E3"></div>
                        <div class = "seat" id = "E4"></div>
                        <div class = "seat" id = "E5"></div>
                        <div class = "seat" id = "E6"></div>
                        <div class = "seat" id = "E7"></div>
                        <div class = "seat" id = "E8"></div>
                        <div class = "seat" id = "E9"></div>
                        <div class = "seat" id = "E10"></div>
                    </div>

                    <div class = "seatRow six">
                        <div class = "seat" id = "F1"></div>
                        <div class = "seat" id = "F2"></div>
                        <div class = "seat" id = "F3"></div>
                        <div class = "seat" id = "F4"></div>
                        <div class = "seat" id = "F5"></div>
                        <div class = "seat" id = "F6"></div>
                        <div class = "seat" id = "F7"></div>
                        <div class = "seat" id = "F8"></div>
                        <div class = "seat" id = "F9"></div>
                        <div class = "seat" id = "F10"></div>
                    </div>

                </div>
                
                <button onClick={() => {navigateTo(PaymentProcess)}}> Submit</button>
            </div>



            
        );
    }
}

export default SelectSeat
