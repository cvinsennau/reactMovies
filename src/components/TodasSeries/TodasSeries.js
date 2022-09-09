import React, {Component} from "react";
import SeriesCard from "../SeriesCard/SeriesCard";

let api_key = "721e0f004fb3c7ef9d923185f3cc41d6"

class TodasPeliculas extends Component {
    constructor(props){
        super(props);
        this.state ={
            series:[],
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`)
        .then(res =>res.json())
        .then(data => this.setState(
            {series: data.results}
        ))
        .catch(e => console.log(e))
    }

    render(){
        return(
            <React.Fragment> 
                <section className='cardContainer'>
                    {
                    this.state.series.map((unaSerie,idx) => <SeriesCard key={unaSerie+idx} datosSerie={unaSerie}  image={unaSerie.poster_path} title={unaSerie.name}/>)
                    }
                </section>
            </React.Fragment>
        )
            
    }
    }

 export default TodasPeliculas;
