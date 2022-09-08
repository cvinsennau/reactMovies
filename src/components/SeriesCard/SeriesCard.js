import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SeriesCard extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <section className='cardContainer'>
                <article>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosSerie.poster_path}`} alt="" />
                </article>
                <article>
                    <h2>{this.props.datosSerie.title}</h2> 
                    <p>{this.props.datosSerie.vote_average}</p>
                    <p>{this.props.datosSerie.release_date}</p> 

                    <p>{this.props.datosSerie.overview}</p> 
                    <p>{this.props.datosSerie.genre_ids}</p>

                </article>
                {/* <button onClick=''>Favoritos</button> */}
            </section>
        )
    }

}

export default SeriesCard