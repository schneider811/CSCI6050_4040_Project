import React from "react";
import MoviePoster from "../../Components/Movieposter";


class Home extends React.Component {
    render() {
        return <div id="Home">
            <MoviePoster name="Jurassic Park" image="jurassicpark.png"/>
        </div>
    }
}

export default Home