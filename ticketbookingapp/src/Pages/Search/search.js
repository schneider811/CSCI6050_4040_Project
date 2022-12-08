import React from "react";
import MoviePanel from "../../Components/MoviePanel";
import "./search.css";


class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div id="Search">
            <form onSubmit={(e) => {e.preventDefault()}}>
                <input type="search" placeholder="Search" id = "search-bar"></input>
            </form>
       
            <h2>Now Playing</h2>
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

export default Search