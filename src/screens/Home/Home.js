import React from 'react';
import MovieCard from "../components/MovieCard/MovieCard";

function Home(){

    return(
        <React.Fragment>
            <h2>Home</h2>

            <h2>Popular on iMovie</h2>
            <MovieCard/>

            <h2>Releases</h2>

        </React.Fragment>
    )
}

export default Home;