import React from "react";
import "./Checkout.css"
import SelectShowtime from "./SelectShowtime";

class Checkout extends React.Component {
    constructor( props ) {
        super(props);
    }
    render() {
        return  (
            <SelectShowtime></SelectShowtime>
        );
    }
}

export default Checkout
