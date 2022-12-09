import React from "react";
import "./contact.css";


class Contact extends React.Component {
    constructor( props ) {
        super(props);
    }
    render() {
        return <div id="Contact ">

        <h2>Have something to say? Contact us!</h2>

        <div action = "contact-div">
            <form action="https://formsubmit.co/CSCI6050_4050@cinema.com" method="POST"/>
                <input type="hidden" name="_subject" value="New Email from website"/>
                <input type="email" name="email" placeholder="Email Address" required/>
                <input type="hidden" name="_next" value=".\ticketbookingapp\src\Pages\Email\thankyou.html"/>
                <input type="text" name="message" placeholder="Write your message here" required/>
                <button type="submit">Send</button>
            <form/>

            {/* <form class = "contact-form">
                <label for="email"> Email: *</label><br/>
                <input required type="text" id="email" name="email"></input>
            </form> */}
        </div>






        </div>
    }
}

export default Contact