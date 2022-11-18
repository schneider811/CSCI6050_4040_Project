import React from "react";
import MoviePanel from "../../Components/MoviePanel";
import "./HomeStyle.css";


class Home extends React.Component {
    render() {
        return <div id="Home">


            <h2> Season's Pick</h2>
            <div class = "pick">
                <iframe class = "pick-trailer" width="650" height="350" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="9" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            </div>
           
            <h2>Now Playing</h2>
            <ul class="Carousel-NowPlaying" role="region">
                <li class="MoviePanel">
                    <MoviePanel image="jurassic.jpeg" name="Jurassic Park"/>
                </li>
                <li class="MoviePanel">
                    <MoviePanel name="Jurassic Park II" image="jurassicpark.png"/>
                </li>
                <li class="MoviePanel">
                    <MoviePanel name="Jurassic Park III" image="jurassicpark.png"/>
                </li>
                <li class="MoviePanel">
                    <MoviePanel name="Jurassic World" image="jurassicpark.png"/>
                </li>
            </ul>

            <h2>Coming Soon</h2>
            <ul class="Carousel-ComingSoon" role="region">
                <li class="MoviePanel">
                    <MoviePanel name="Jurassic World Fallen Kingdom" image="jurassicpark.png"/>
                </li>
                <li class="MoviePanel">
                    <MoviePanel name="Jurassic World Dominion" image="jurassicpark.png"/>
                </li>
            </ul>
        </div>
    }
}




export default Home