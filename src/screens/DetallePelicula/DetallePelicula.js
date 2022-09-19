import React, { Component } from "react";
import "./DetallePelicula.css"
import FavoritosClass from "../../common/FavoritosClass";


let api_key = "7a176cc95147be6e695be2faf0e8ff9c"

class DetallePelicula extends Component{
    constructor(props){
        super(props);
        this.state ={
            detalleMovie: '',
            favsMessage: 'Fav'
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;


            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)
            .then(res => res.json())
            .then(data => this.setState(
                {detalleMovie: data}
            ))
            .catch(e => console.log(e))
    
        
        
        
    }    


    favoritosToggle(id) {

        let _favoritosClass = new FavoritosClass("peliculasFavoritas");
        _favoritosClass.Toggle(id)

        this.setState( {
            favsMessage: _favoritosClass.getMessage()
        })
        
    }

    render(){
        console.log(this.state.detalleMovie)
        console.log(this.state.detalleMovie.genres)

        return(
            
            <React.Fragment>
                <div >
                    {this.state.detalleMovie === "" ?
                        <div className="loader"> <h3>Cargando...</h3></div> :
                        <section>                
                        <article className="movieImage">
                            <img src={`https://image.tmdb.org/t/p/w500/${this.state.detalleMovie.poster_path}`} alt=""/>
                        </article>
                        <article className="movieDetail">
                            <h2> {this.state.detalleMovie.original_title}</h2>
                            <p> {this.state.detalleMovie.overview}</p>
                            <li>
                                <p> Rating: {this.state.detalleMovie.vote_average}</p>
                                <p> Lanzamiento: {this.state.detalleMovie.release_date}</p>
                                <p> Duración: {this.state.detalleMovie.runtime} min</p>
                                <p>Género/s: {this.state.detalleMovie.genres && this.state.detalleMovie.genres.map((genres) => <span> {genres.name} </span>)}</p>
                            </li>
                            <button className="button-card" onClick={()=>this.favoritosToggle(this.state.detalleMovie.id)}> {this.state.favsMessage}</button>                   
                        </article>
                        </section>                                
                    }
                </div> 

            </React.Fragment>
        )
    }
} 


export default DetallePelicula;