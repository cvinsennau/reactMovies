//ARCHIVO QUE TRAE LAS PELICULAS MAS POPULARES Y LANZZAMIENTOS

import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import SeriesCard from "../SeriesCard/SeriesCard";
import {Link} from 'react-router-dom'


let api_key = "721e0f004fb3c7ef9d923185f3cc41d6"

class Movies extends Component{
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            series: [],
        }
    }

    componentDidMount(){ 
        //Peliculas Populares
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => this.setState(
            {peliculas: data.results}
        ))
        .catch(e => console.log(e))

        //Series Populares
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => this.setState(
            {series: data.results}
        ))
        .catch(e => console.log(e))
    }

    render(){
        // console.log(this.state.peliculas);
        // console.log(this.state.series);

        return(
            <React.Fragment> 

            {/*<div>
                {this.state.datos === ""?
                <h3>Cargando...</h3> :
                <h3>{this.state.peliculas}</h3>}
                <p>Hola mundo</p>

        </div>*/}
            <div>
                <h2>Peliculas Populares</h2>
                <Link to='/peliculas'><h3>Ver todas las películas populares</h3></Link>
            </div>
            <section className='cardContainer'>
                {
                    this.state.peliculas.map((unaPelicula,idx) => <MovieCard key={unaPelicula.title+idx} datosPelicula = {unaPelicula}/>)
                }
                
            </section>

            <div>
                <h2>Series Populares</h2>
                <Link to='/series'><h3>Ver todas las series populares</h3></Link>
            </div>
            <section className='cardContainer'>
                {
                    this.state.series.map((unaSerie,idx) => <SeriesCard key={unaSerie.title+idx} datosSerie = {unaSerie}/>)
                }
                

            </section>

            </React.Fragment>
        )
    }
}

export default Movies