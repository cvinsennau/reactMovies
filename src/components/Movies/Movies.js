//ARCHIVO QUE TRAE LAS PELICULAS MAS POPULARES Y LANZZAMIENTOS

import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import SeriesCard from "../SeriesCard/SeriesCard";

let api_key = "721e0f004fb3c7ef9d923185f3cc41d6"

class Movies extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            series: [],
            pageNumber: 1,
        }
    }

    componentDidMount(){
        //Peliculas Populares
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${this.state.pageNumber}`)
        .then(res => res.json())
        .then(data => this.setState(
            {peliculas: data.results,
            pageNumber: this.state.pageNumber + 1}
        ))
        .catch(e => console.log(e))

        //Series Populares
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key="${api_key}&page=${this.state.pageNumber}`)
        .then(res => res.json())
        .then(data => this.setState(
            {series: data.results,
            pageNumber: this.state.pageNumber + 1}
        ))
        .catch(e => console.log(e))
    }

    render(){
        return(
            <React.Fragment> 
            <div>
                <h2>Popular movies</h2>
            </div>
            <section>
                {
                    this.state.peliculas.map((unaPelicula,idx) => <MovieCard key={unaPelicula.title+idx} datosPelicula = {unaPelicula}/>)
                }
            </section>

            <div>
                <h2>Popular TV Shows</h2>
            </div>
            <section>
                {
                    this.state.series.map((unaSeries,idx) => <SeriesCard key={unaSeries.title+idx} datosSerie = {unaSeries}/>)
                }
            </section>

            </React.Fragment>
        )
    }
}

export default Movies