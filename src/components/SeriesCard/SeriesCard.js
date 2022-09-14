import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SeriesCard extends Component{
    constructor(props){
        super(props)
        this.state={
            estadoDetalle: 'hide',
            textoDetalle: 'Ver más',
            favsMessage: "Fav"
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

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem("favoritos")

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }
        if(favoritos.includes(this.props.datosSerie.id)){
            this.setState({
                favsMessage: "Remove"
            })
        }

    }

    favoritosToggle(id){

        let favoritos = [];
        let recuperoStorage = localStorage.getItem("favoritos")

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage)
            favoritos = favoritosToArray
        }

        if(favoritos.includes(id)){ //metodo includes retorna booleano

            // quito el elemento favorito del array
            favoritos = favoritos.filter(unId => unId !== id)

            // seteo el favsMessage del elemento 
            this.setState({
                favsMessage: "Fav"
            })
        }else{
            favoritos.push(id);
            this.setState({
                favsMessage: "Remove"
            })
        }
        
       

        let favoritosToString = JSON.stringify(favoritos)
        localStorage.setItem("favoritos", favoritosToString)
        
    }


    render(){
        return(
            <section className='character-card'>
                <Link to={`/serie/id/${this.props.datosSerie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.datosSerie.poster_path}`} alt="" />
                </Link>

                <article>
                    <h2>{this.props.datosSerie.title}</h2> 


                    <button className='button-card'onClick={()=>this.verMas(this.state.estadoDetalle)}>{this.state.textoDetalle}</button>
                    <button className="button-card"onClick={()=>this.favoritosToggle(this.props.datosSerie.id)} >{/*<FontAwesomeIcon icon={faStar}/>*/}{this.state.favsMessage}</button>

                    <article className={this.state.verMas == true}>
                        <p className={this.state.estadoDetalle}> Sinopsis: {this.props.datosSerie.overview}</p>
                    </article>

                <Link to={`/serie/id/${this.props.datosSerie.id}`}>
                    <p>Ir a detalle</p>
                </Link>
                </article>


            </section>
        )
    }

}

export default SeriesCard