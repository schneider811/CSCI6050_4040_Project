import React from "react";
import Axios from "axios";
import MoviePanel from "../../Components/MoviePanel";
import "./HomeStyle.css";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listOfMovies: [], listOfScheduledMovies: []};
    }

    componentDidMount() {
        const movieList =  Axios.get("http://localhost:3001/movieList");
        const scheduledMovieList = Axios.get("http://localhost:3001/scheduledMovieList");
        movieList.then((response) => {
            // console.log("Potato");
            // console.log(response.data[0].posterName);
            this.setState({
                listOfMovies: response.data
            });
            // console.log(this.state.listOfMovies);
        });
        scheduledMovieList.then(
            (response) => {
                this.setState({
                    listOfScheduledMovies: response.data
                });
            }
        );
        
    }


    render() {
        return (
            <div id="Home">


                <h2> Season's Pick</h2>
                <div class = "pick">
                    <iframe class = "pick-trailer" width="650" height="350" src="https://www.youtube.com/embed/_Z3QKkl1WyM" title="YouTube video player" frameborder="9" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
                </div>
            
                <h2>Now Playing</h2>
                <ul class="Carousel-NowPlaying" role="region">
                    {
                        this.state.listOfScheduledMovies.map((movie) => <li class="MoviePanel"><MoviePanel title={movie.title} imageSrc={movie.trailerpic} trailer={movie.trailer_video} scheduled={1}/></li>)
                    }
                </ul>

                <h2>Coming Soon</h2>
                <ul class="Carousel-ComingSoon" role="region">
                    {
                        this.state.listOfMovies.map((movie) => <li class="MoviePanel"><MoviePanel title={movie.title} imageSrc={movie.trailerpic} trailer={movie.trailer_video} scheduled={0}/></li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Home