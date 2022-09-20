import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SerieCard.css'


class SeriesCard extends Component{
    constructor(props){
        super(props)
        this.state={
        
            estadoDetalle: 'hide',
            textoDetalle: 'Ver más',
            favsMessage: "Agregar a Fav"
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

    componentDidMount() {

        let _favoritosClass = new FavoritosClass("seriesFavoritas");
        let favoritos = _favoritosClass.getFavoritosFromStorage();

        if (favoritos.includes(this.props.datosSerie.id)) {
            this.setState({
                favsMessage: "Quitar de Fav"
            })
        }

    }

    favoritosToggle(id) {   

        let _favoritosClass = new FavoritosClass("seriesFavoritas");
        _favoritosClass.Toggle(id)

        this.setState( {
            favsMessage: _favoritosClass.getMessage()
        })
        
        if (this.props.onToggleFav) this.props.onToggleFav();
    }


    render(){
        return(
            <section className='character-card'>
                <Link to={`/serie/id/${this.props.datosSerie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosSerie.poster_path}`} alt="" />
                </Link>

                <article>
                    <h2>{this.props.datosSerie.name}</h2> 

                     

                <Link to={`/serie/id/${this.props.datosSerie.id}`}>
                    <p>Ir a detalle</p>
                </Link>
                </article>
                <button className='button-card'onClick={()=>this.verMas(this.state.estadoDetalle)}>{this.state.textoDetalle}</button> {/*boton que ejecuta la funcion */}
                    <button className="button-card"onClick={()=>this.favoritosToggle(this.props.datosPelicula.id)} >{this.state.favsMessage}</button>

                    <article className={this.state.verMas === true}>
                        <p className={this.state.estadoDetalle}> Sinopsis: {this.props.datosSerie.overview}</p>
                    </article>                
                
            </section>
        )
    }

}

export default SeriesCard