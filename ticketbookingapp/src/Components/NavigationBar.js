import React from "react";
import "../style.css";

class NavigationBar extends React.Component {
    render(props) {
        return <div class="Header-NavBar">
            <header role="banner" class="Header-wrap">
                <ul class="NavBar" role="navigation">
                    <li class="NavBarButton">
                        <a class="NavBarItem-link" aria-label="Visit the Home Page" href="/movies">Home</a>
                    </li>
                    <li class="NavBarButton">
                    <a class="NavBarItem-link" aria-label="Visit the Search List of Movies page" href="/movies">Search</a>
                    </li>
                    <li class="NavBarButton">
                        <a class="NavBarItem-link" aria-label="Visit the Contact Us Page" href="/movies">Contact Us</a>
                    </li>
                    <li class="NavBarButton">
                        <a class="NavBarItem-link" aria-label="Visit the Sign-in/Sign-up page" href="/movies">Login/Register</a>
                    </li>
                </ul>
            </header>
        </div>
    }
}

export default NavigationBar