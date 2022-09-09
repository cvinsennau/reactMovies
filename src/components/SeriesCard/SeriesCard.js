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
            <section className='character-card'>
                <Link to={`/serie/id/${this.props.datosSerie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosSerie.poster_path}`} alt="" />
                </Link>

                <article>
                    <h2>{this.props.datosSerie.title}</h2> 

                    <p>{this.props.datosSerie.overview}</p> 

                <Link to={`/serie/id/${this.props.datosSerie.id}`}>
                    <p>Ir a detalle</p>
                </Link>
                </article>
                {/* <button onClick=''>Favoritos</button> */}
            </section>
        )
    }

}

export default SeriesCard