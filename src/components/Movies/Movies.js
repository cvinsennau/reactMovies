//Componente con estado porque le pedimos datos a la API
import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";

class Movies extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=721e0f004fb3c7ef9d923185f3cc41d6")
        .then(response => response.json())
        .then(data => this.setState(
            {peliculas: data.results}
        ))
        .catch(error => console.log(error))
    }
    
    traerMas(){
        fetch(this.state.nextUrl)
        .then(response => response.json())
        .then(data => this.setState(
            {peliculas: data.results.concat(this.state.peliculas),
            nextUrl: data.info.id+1}
        ))
        .catch(error => console.log(error))
    }


    //FALTA FILTRAR CONTENIDO


    render(){
        return(
            
            <React.Fragment>
            <section className='cardContainer'>

                {
                   this.state.peliculas.map((unaPelicula,idx) => <MovieCard key={unaPelicula.original_title+idx} datosPelicula = {unaPelicula}/>)
                }

            
            <button onClick={()=> this.traerMas()}>Traer Mas</button>
            </section>
            </React.Fragment>
        )
    }
}

export default Movies