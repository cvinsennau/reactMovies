import React, { Component } from "react";

let api_key = "7a176cc95147be6e695be2faf0e8ff9c"

class DetallePelicula extends Component{
    constructor(props){
        super(props);
        this.state ={
            detalleMovie: '',
            favsMessage: "Fav"
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

    // favoritosToggle(idFav){
    //     let favoritos = [];
    //     let recuperoStorage = localStorage.getItem("favoritos")

    //     if(recuperoStorage !== null){
    //         let favoritosToArray = JSON.parse(recuperoStorage)
    //         favoritos = favoritosToArray
    //     }

    //     if(favoritos.includes(id)){ //metodo includes retorna booleano

    //         // quito el elemento favorito del array
    //         favoritos = favoritos.filter(unId => unId !== id)

    //         // seteo el favsMessage del elemento 
    //         this.setState({
    //             favsMessage: "Fav"
    //         })
    //     }else{
    //         favoritos.push(id);
    //         this.setState({
    //             favsMessage: "Remove"
    //         })
    //     }
        
    //     favoritos.push(idFav)

    //     let favoritosToString = JSON.stringify(favoritos)
    //     localStorage.setItem("favoritos", favoritosToString)
    // }

    render(){
        console.log(this.state.detalleMovie)
        console.log(this.state.detalleMovie.genres)

        return(
            
            <React.Fragment>
                <div className="loader">
                {this.state.datos === ""?
                    <h3>Cargando...</h3> :
                    <h3>{this.state.peliculas}</h3>}
                </div>

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
                    </li>
                    
                    {/* Tira error no se porque */}
                    {/* <ul>
                        {this.state.detallePelicula.genres.map((genres) => <li> Géneros:{genres.name} </li>)}
                    </ul> */}
                   

                </article>
                </section>
            </React.Fragment>
        )
    }
} 


export default DetallePelicula;