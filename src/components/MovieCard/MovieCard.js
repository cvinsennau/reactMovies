import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends Component{
    constructor(props){
        super(props)
        this.state={
            estadoDetalle: 'hide',
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
            <section className='character-card'>
                <Link to={`/pelicula/id/${this.props.datosPelicula.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`} alt="" />
                </Link>

                <article>
                    <h2>{this.props.datosPelicula.title}</h2> 

                    {/* No anda el boton */}
                    <button onClick={()=>this.verMas(this.state.estadoDetalle)}>{this.state.textoDetalle}</button>
                    <article className={this.state.verMas == true}>
                        <p className={this.state.estadoDetalle}> Sinopsis: {this.props.datosPelicula.overview}</p>
                    </article>
                

                    {/* <p>{this.props.datosPelicula.vote_average}</p> */}
                    {/* <p>{this.props.datosPelicula.release_date}</p>  */}
                    {/* <p>{this.props.datosPelicula.genre_ids}</p> */}
                
                <Link to={`/pelicula/id/${this.props.datosPelicula.id}`}>
                    <p>Ir a detalle</p>
                </Link>

                </article>
                {/* <button onClick=()>Favoritos</button> */}
            </section>
        )
    }

}

export default MovieCard