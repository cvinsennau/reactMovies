import React, {Component} from "react";

let api_key = "7a176cc95147be6e695be2faf0e8ff9c"

class MoviesAll extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            MoviesAll: {}
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=${api_key}&language=en-US`)
        .then(res => res.json())
        .then(data => this.setState(
            {MoviesAll: data}
        ))
        .catch(e => console.log(e))
        }

    render(){
        return(
            <React.Fragment>
                <section>
                <article>
                <h2>{this.state.dataPelicula.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.datosPelicula.poster_path}`} alt=""/>
                </article>
                <article>
                    <p >{this.state.datosPelicula.overview}</p>
                    <p >{this.state.datosPelicula.vote_average}</p>
                    <p >{this.state.datosPelicula.release_date}</p>
                    <p >{this.state.datosPelicula.genre_ids}</p>
                </article>
                </section>
            </React.Fragment>
        )
    }
} 


export default MoviesAll;
