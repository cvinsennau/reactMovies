import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }


    render(){
        return(
            <section className='cardContainer'>
                <article>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`} alt="" />
                </article>
                <article>
                    <h2>{this.props.datosPelicula.title}</h2> 
                    <p>{this.props.datosPelicula.vote_average}</p>
                    <p>{this.props.datosPelicula.release_date}</p> 

                    <p>{this.props.datosPelicula.overview}</p> 
                    <p>{this.props.datosPelicula.genre_ids}</p>

                </article>
                {/* <button onClick=''>Favoritos</button> */}
            </section>
        )
    }

}

export default MovieCard