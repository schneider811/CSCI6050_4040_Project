import React from "react";
import MoviePanel from "../../Components/MoviePanel";
import "./search.css";
import Axios from "axios";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {listOfMovies: []};
    }

    componentDidMount() {
        const movieList =  Axios.get("http://localhost:3001/movieList");
        movieList.then((response) => {
            
            this.setState({
                listOfMovies: response.data
            });
            
        });
        
    }

    

    render() {
        return <div id="Search">
            <form onSubmit={(e) => {e.preventDefault()}}>
                <input type="search" placeholder="Search" id = "search-bar"></input>
            </form>
            
            <h2>All Movies on the Site</h2>
            <ul class="Carousel-ComingSoon" role="region">
                {
                    this.state.listOfMovies.map((movie) => <li class="MoviePanel"><MoviePanel title={movie.title} imageSrc={movie.trailerpic} trailer={movie.trailer_video} scheduled={0}/></li>)
                }
            </ul>
               

        </div>
    }
}

export default Search