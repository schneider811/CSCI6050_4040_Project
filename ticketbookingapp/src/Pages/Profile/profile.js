import React from "react";
import "./profile.css"

class ProfileView extends React.Component {
    render() {
        return<div id = "control">
        <ul id = "header">
            <li> 
                <h2> My Profile</h2>
            </li>
            <li>Profile Info</li>
            <li>Payment</li>
            <li>Settings</li>
        </ul>
        
        <ul id = "info">
            <li>
                <p class = "personal"> Email: abcname@gmail.com</p>
            </li>
            <li>
                <a class = "edit"> Edit</a>
            </li>
            <li>
                <p class = "personal" > Password: ******* </p>
            </li>
            <li>
                <a class = "edit"> Edit</a>
            </li>


        </ul>
    </div>;
    }
}

export default ProfileView