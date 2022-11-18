import React from "react";
import "./Checkout.css"
import navigateTo from "../../RenderElements/RenderPage";
import SelectSeat from "./SelectSeat";

class SelectShowtime extends React.Component {
    render() {
        return  (
            <div class="SelectShowtime">
                <div class="option-box"/>  
                <h3>Show-Time :</h3> 
                <br></br>
                <select>
                    <option value="movie slot">Select a Showtime</option>
                    <option value="10am">10:00am</option>
                    <option value="1.30pm">1:30pm</option>
                    <option value="4pm">4:00pm</option>
                    <option value="7pm">7:00pm</option>
                    <option value="10pm">10:00pm</option>
                </select> <br/>
                <div/>
                <button onClick={() => {navigateTo(SelectSeat)}}>Submit</button>
            </div>
        );
    }
}

export default SelectShowtime
