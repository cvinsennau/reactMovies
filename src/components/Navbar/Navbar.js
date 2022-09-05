import React from 'react';
import {Link} from 'react-router-dom';
import Formulario from "../Formulario/Formulario";

function Navbar(){
    return (
        <nav>
            <img className="logo" src="./img/logo.png" alt=""/>

            <ul className="main-nav">
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/myMovies'>My Movies</Link>
            </li>
            <li>
                <Link to='/topRated'>Top Rated</Link>
            </li>
            <li>
                <Link to='/latest'>Releases</Link>
            </li>
            
            <Formulario/>

        </ul>
        </nav>
    )
}

export default Navbar