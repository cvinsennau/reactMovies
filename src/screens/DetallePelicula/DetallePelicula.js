import React, { Component } from "react";

let api_key = "7a176cc95147be6e695be2faf0e8ff9c"

class DetallePelicula extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            detallePelicula: {}
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${api_key}&language=en-US`)
        .then(res => res.json())
        .then(data => this.setState(
            {detallePelicula: data}
        ))
        .catch(e => console.log(e))
        }

    render(){
        return(
            <React.Fragment>
                <section>
                <article>
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.detallePelicula.poster_path}`} alt=""/>
                </article>

                <article>
                    <h2>{this.state.detallePelicula.original_title}</h2>
                    <p >{this.state.detallePelicula.overview}</p>
                    <p >Rating: {this.state.detallePelicula.vote_average}</p>
                    <p >Lanzamiento: {this.state.detallePelicula.release_date}</p>
                    <p >{this.state.detallePelicula.genre_ids}</p>
                </article>
                </section>
            </React.Fragment>
        )
    }
} 


export default DetallePelicula;