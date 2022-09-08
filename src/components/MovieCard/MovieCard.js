import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends Component{
    constructor(props){
        super(props)
        this.state={
            verMas: 'hide',
            textoDetalle: 'Ver más'
        }
    }

    verMas(){
        if(this.state.estadoDetalle === 'show'){
          this.setState({
            estadoDetalle:'hide', textoDetalle: 'Ver más'
          })
        } else {
          this.setState({
            estadoDetalle:'show', textoDetalle: 'Ver menos'
          })
        }
    }


    render(){
        return(
            <section className='cardContainer'>
                <Link to={`/detalle/id/${this.props.datosPelicula.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`} alt="" />
                </Link>

                <article>
                    <h2>{this.props.datosPelicula.title}</h2> 

                    {/* No anda el boton */}
                    <button onClick={() => this.verMas()} className='more'> {this.state.textoDetalle} </button>
                    <p className={this.state.estadoDetalle}> Sinopsis: {this.props.datosPelicula.overview}</p>


                    {/* <p>{this.props.datosPelicula.vote_average}</p> */}
                    {/* <p>{this.props.datosPelicula.release_date}</p>  */}
                    {/* <p>{this.props.datosPelicula.genre_ids}</p> */}

                </article>
                {/* <button onClick=()>Favoritos</button> */}
            </section>
        )
    }

}

export default MovieCard