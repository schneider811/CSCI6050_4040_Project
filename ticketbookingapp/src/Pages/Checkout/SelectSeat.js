import React from "react";
import "./Checkout.css"
import navigateTo from "../../RenderElements/RenderPage";
import PaymentProcess from "./PaymentProcess";

class SelectSeat extends React.Component {
    render() {
        return  (
            <div class="SelectSeat">
                <div class="option-box"/>  
                <h3>Seat-Options :</h3> 
                <br></br>
                <select>
                    <option value="Seat">Select a Seat</option>
                    <option value="A1">A1</option>
                    <option value="A1">A2</option>
                    <option value="A1">A3</option>
                    <option value="A1">A4</option>
                    <option value="A1">A5</option>
                    <option value="A1">A6</option>
                    <option value="A1">A7</option>
                    <option value="A1">A8</option>
                    <option value="A1">A9</option>
                </select> <br/>
                <div/>
                <button onClick={() => {navigateTo(PaymentProcess)}}>Submit</button>
            </div>
        );
    }
}

export default SelectSeat
