import React, { Component } from "react";

let api_key = "7a176cc95147be6e695be2faf0e8ff9c"

class DetallePelicula extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            detallePelicula: {},
            favsMessage: "Fav"
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
        console.log(this.state.detallePelicula.genres)

        return(
            
            <React.Fragment>
                <div className="loader">
                {this.state.datos === ""?
                    <h3>Cargando...</h3> :
                    <h3>{this.state.peliculas}</h3>}
                </div>

                <section>
                <article className="movieImage">
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.detallePelicula.poster_path}`} alt=""/>
                </article>

                <article className="movieDetail">
                    <h2>{this.state.detallePelicula.original_title}</h2>
                    <p >{this.state.detallePelicula.overview}</p>
                    <p >Rating: {this.state.detallePelicula.vote_average}</p>
                    <p >Lanzamiento: {this.state.detallePelicula.release_date}</p>

                    {/* <p> Géneros: {this.state.detallePelicula.genres.name}</p> */}

                   

                </article>
                </section>
            </React.Fragment>
        )
    }
} 


export default DetallePelicula;