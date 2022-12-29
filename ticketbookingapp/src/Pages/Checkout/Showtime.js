import React from "react";
import "./Checkout.css"
import navigateTo from "../../RenderElements/RenderPage";
import SelectSeat from "./SelectSeat";



class ShowTime extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div class = "timing" onClick={() => {navigateTo(SelectSeat)}} >
                <h3>{this.props.time}</h3>
                <p>{this.props.title}</p>
                <h3> Seats Taken: 0/30 </h3>
            </div>
        );
    }
}

export default ShowTime