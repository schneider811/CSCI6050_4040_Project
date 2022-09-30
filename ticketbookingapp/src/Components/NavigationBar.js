import React from "react";
import "../style.css";
import navigateTo from "../Pages/RenderPage";
import SignUp from "../Pages/Signup/signup";
import Home from "../Pages/Home/Home";
import Search from "../Pages/Search/search";


class NavigationBar extends React.Component {
    render() {
        return <div class="Header-NavBar">
            <header role="banner" class="Header-wrap">
                <ul class="NavBar" role="navigation">
                    <li class="NavBarButton">
                        <button type="button" onClick={() => {navigateTo(Home)}}>Home</button>
                    </li>
                    <li class="NavBarButton">
                        <button type="button" onClick={() => {navigateTo(Search)}}>Search</button>
                    </li>
                    <li class="NavBarButton">
                        <button type="button" >Contact Us</button>
                    </li>
                    <li class="NavBarButton">
                       <button type="button" onClick={() => {navigateTo(SignUp)}}>Login/Register</button>
                    </li>
                </ul>
            </header>
        </div>
    }
    
}

export default NavigationBar