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
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`} alt="" />
                </Link>
                <h2>{this.props.datosPelicula.original_title}</h2> 
                <p>{this.props.datosPelicula.overview}</p> 
                <Switch>
                    <Route path="/detail" component={Detail}></Route>
                </Switch>
                <p>Ver más</p> 
            </article>

        )
    }

}

export default MovieCard