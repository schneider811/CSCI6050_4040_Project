import React from "react";
import MoviePanel from "../../Components/MoviePanel";
import "./HomeStyle.css";


class Home extends React.Component {
    render() {
        return <div id="Home">
            <ul class="Carousel-NowPlaying" role="region">
                <li class="MoviePanel">
                    <MoviePanel name="Jurassic Park" image="jurassicpark.png"/>
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