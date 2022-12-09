import React from "react";
import MoviePanel from "../../Components/MoviePanel";
import "./search.css";


class Search extends React.Component {
    render() {
        return <div id="Search">
            <form>
                <input type="text" placeholder="Search" id = "search-bar"></input>
            </form>
       

                <MoviePanel name="Jurassic Park" image="jurassicpark.png"/>

                <MoviePanel name="Jurassic Park II" image="jurassicpark.png"/>

                <MoviePanel name="Jurassic Park III" image="jurassicpark.png"/>


                <MoviePanel name="Jurassic World" image="jurassicpark.png"/>
                <MoviePanel name="Jurassic World Fallen Kingdom" image="jurassicpark.png"/>

                <MoviePanel name="Jurassic World Dominion" image="jurassicpark.png"/>

        </div>
    }
}

export default Search