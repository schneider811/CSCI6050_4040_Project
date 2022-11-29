import React from "react";
import "./contact.css";


class Contact extends React.Component {
    render() {
        return <div id="Contact ">

        <h2>Have something to say? Contact us!</h2>

        <div class = "contact-div">
            <form class = "contact-form">
                <label for="email"> Email: *</label><br/>
                <input required type="text" id="email" name="email"></input>
            </form>
        </div>






        </div>
    }
}

export default Contact