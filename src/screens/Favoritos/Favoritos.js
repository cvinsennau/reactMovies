import React, { Component } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import SeriesCard from "../../components/SeriesCard/SeriesCard";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            series: [],
        }
    }

    componentDidMount() {

        this.getFavoritosData();

    }

    getFavoritosData() {
        let favoritos = [];
        let recuperoStorage = localStorage.getItem("peliculasFavoritas") // obtengo los valores de la propiedad guardada en el localStorage 
        this.state.peliculas = [];                                          // recibe un parametro: el nombre de la propiedad de la que queremos obtener su valor
        this.state.series = [];

        if (recuperoStorage !== null) {

            favoritos = JSON.parse(recuperoStorage) // array de ids


            favoritos.forEach(unIdFavorito => {
                let api_key = "721e0f004fb3c7ef9d923185f3cc41d6";

                fetch(`https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=${api_key}&language=en-US&page=1`)
                    .then(res => res.json())
                    .then(data => this.addPeliculaAFavoritos(data))
                    .catch(e => console.log(e))

            })

        }
        let recuperoStorageSeries = localStorage.getItem("seriesFavoritas")

        if (recuperoStorageSeries !== null) {

            favoritos = JSON.parse(recuperoStorageSeries) // array de ids

            favoritos.forEach(unIdFavorito => {
                let api_key = "721e0f004fb3c7ef9d923185f3cc41d6";

                fetch(`https://api.themoviedb.org/3/tv/${unIdFavorito}?api_key=${api_key}&language=en-US&page=1`)
                    .then(res => res.json())
                    .then(data => this.addSeriesFavoritos(data))
                    .catch(e => console.log(e))

            })

        }

    }
    addSeriesFavoritos = (unaSerie) => {
        let _series = this.state.series;
        _series.push(unaSerie);
        this.setState({ series: _series })
    }

    addPeliculaAFavoritos = (unaPelicula) => {
        let _peliculas = this.state.peliculas;
        _peliculas.push(unaPelicula);
        this.setState({ peliculas: _peliculas })
    }

    // Metodo que ejecuta cuando se borra un favorito desde la card. Entonces recargo toda la lista nuevamente. en favoritos
    onToggle = () => {
        console.log("onToggle");
        this.getFavoritosData();
    }

    render() {
        return (
            <>

                <h2>My favorites Movies</h2>
                <section className='cardContainer'>
                    {
                        this.state.peliculas.map((unaPelicula, idx) =>
                            <MovieCard key={unaPelicula.title + idx} datosPelicula={unaPelicula} onToggleFav={this.onToggle} />) // pasamos las props al componente hijo 
                    }
                </section>

                <h2>My favorites Tvshows</h2>
                <section className='cardContainer'>
                    {
                        this.state.series.map((unaSerie, idx) =>
                            <SeriesCard key={unaSerie.title + idx} datosSerie={unaSerie} onToggleFav={this.onToggle} />)  //
                    }
                </section>

            </>
        )


    }
}

export default Favoritos;