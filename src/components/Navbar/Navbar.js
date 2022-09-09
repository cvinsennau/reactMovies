import React from 'react';
import {Link} from 'react-router-dom';
import Formulario from "../Formulario/Formulario";

function Navbar(){
    return (
        <nav>
            <Link to={'/'}>
                <img className="logo" src="./img/logo.png" alt=""/>
            </Link>
            
            <ul className="main-nav">
            <li>
               <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/favoritos'>Favoritos</Link>
            </li>
            <li>
                <Link to='/peliculas'>Películas</Link>
            </li>
            <li>
                <Link to='/series'>Series</Link>
            </li>
            
            <Formulario/>

            </ul>
        </nav>
    )
}

export default Navbar