import React, {Component} from "react";
import MovieCard from "../MovieCard/MovieCard";

let api_key = "721e0f004fb3c7ef9d923185f3cc41d6"

class TodasPeliculas extends Component {
    constructor(props){
        super(props);
        this.state ={
            peliculas:[],
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(res =>res.json())
        .then(data => this.setState(
            {peliculas: data.results}
        ))
        .catch(e => console.log(e))
    }

    render(){
        return(
            <React.Fragment> 
                <section className='cardContainer'>
                    {
                    this.state.peliculas.map((unaPelicula,idx) => <MovieCard key={unaPelicula+idx} datosPelicula={unaPelicula}  image={unaPelicula.poster_path} title={unaPelicula.original_title}/>)
                    }
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default TodasPeliculas;
