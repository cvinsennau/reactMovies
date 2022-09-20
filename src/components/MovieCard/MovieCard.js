import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'
import FavoritosClass from '../../common/FavoritosClass';

class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estadoDetalle: 'hide',
            textoDetalle: 'Ver más',
            favsMessage: "Agregar a Fav"
        }
    }

    verMas() {
        if (this.state.estadoDetalle === 'show') {
            this.setState({
                estadoDetalle: 'hide', textoDetalle: 'Ver más'
            })
        } else {
            this.setState({
                estadoDetalle: 'show', textoDetalle: 'Ver menos'
            })
        }
    }

    componentDidMount() {

        let _favoritosClass = new FavoritosClass("peliculasFavoritas");
        let favoritos = _favoritosClass.getFavoritosFromStorage();

        // Busco el id de la peli en favoritos, si está le cambio el boton de fav a remove
        if (favoritos.includes(this.props.datosPelicula.id)) { //
            this.setState({                                     //gracias a la propiedad setState cambio el estado y vuelvo a renderizar la moviecard
                favsMessage: "Quitar de Fav"
            })
        }

    }

    // Metodo que cambia la condicion de favorito, si esta en favorito lo quita, si no esta lo agrega
    // Usa clase FavoritosClass para implementar 
    favoritosToggle(id) {

        let _favoritosClass = new FavoritosClass("peliculasFavoritas");
        _favoritosClass.Toggle(id)

        this.setState({
            favsMessage: _favoritosClass.getMessage()
        })

        // Si la propiedad onToggleFav esta definida, la ejecutamos; depende de las props del padre. se usa solo en favoritos
        if (this.props.onToggleFav) this.props.onToggleFav();

    }



    render() {
        return (
            <section className='character-card'>
                <article className="poster-path">
                    <Link to={`/pelicula/id/${this.props.datosPelicula.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${this.props.datosPelicula.poster_path}`} alt="" />
                    </Link>
                </article>


                <article>
                    <h2>{this.props.datosPelicula.title}</h2>

                    <button className='button-card' onClick={() => this.verMas(this.state.estadoDetalle)}>{this.state.textoDetalle}</button>

                    <button className="button-card" onClick={() => this.favoritosToggle(this.props.datosPelicula.id)}> {this.state.favsMessage}</button>

                    <article className={this.state.verMas === true}>
                        <p className={this.state.estadoDetalle}> Sinopsis: {this.props.datosPelicula.overview}</p>
                    </article>


                    <Link to={`/pelicula/id/${this.props.datosPelicula.id}`}>
                        <p >Ver detalle</p>
                    </Link>

                </article>
            </section>
        )
    }

}

export default MovieCard


