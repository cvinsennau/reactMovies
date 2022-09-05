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
             <article className='character-card'>
                <Link to={`/movies/id/${this.props.datosPelicula.id}`}>
                    <img src={this.props.datosPelicula.image} alt="" />
                </Link>
                <h2>{this.props.datosPelicula.original_title}</h2> 
                <p>{this.props.datosPelicula.overview}</p> 
                <p>Ver más</p> 
            </article>

        )
    }

}

export default MovieCard