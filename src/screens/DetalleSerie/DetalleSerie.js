import React, { Component } from "react";
import "./DetalleSerie.css"
import FavoritosClass from "../../common/FavoritosClass";

let api_key = "7a176cc95147be6e695be2faf0e8ff9c"

class DetalleSerie extends Component{
    constructor(props){
        super(props);
        this.state ={
            detalleSerie: {},
            favsMessage: "Fav"
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id

        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=en-US`)
        .then(res => res.json())
        .then(data => this.setState(
            {detalleSerie: data}
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
        return(
            <React.Fragment>
                <section>
                <article className="movieImage">

                <img src={`https://image.tmdb.org/t/p/w500/${this.state.detalleSerie.poster_path}`} alt=""/>
                </article>

                <article className="movieDetail">
                    <h2>{this.state.detalleSerie.name}</h2>
                    <p >{this.state.detalleSerie.overview}</p>

                    <li>
                        <p >Rating: {this.state.detalleSerie.vote_average}</p>
                        <p >Lanzamiento: {this.state.detalleSerie.first_air_date}</p>
                        <p> Temporadas: {this.state.detalleSerie.number_of_seasons}</p>
                        <p> Episodios: {this.state.detalleSerie.number_of_episodes}</p>
                        <p>Género/s: {this.state.detalleSerie.genres && this.state.detalleSerie.genres.map((genres) => {
                            return <span> {genres.name} </span>;
                        })}</p>

                    </li>

                     <button className="button-card" onClick={()=>this.favoritosToggle(this.state.detalleSerie.id)}> {this.state.favsMessage}</button> 



                </article>

                </section>
            </React.Fragment>
        )
    }
} 


export default DetalleSerie;