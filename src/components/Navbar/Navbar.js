import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className='fill'>
            <Link to={'/'}>
                <img className="logo" src="./img/Kodak-Motion-Picture-Film-Logo.png" alt="" />
            </Link>

            <ul className="main-nav">
                <li>
                    <Link to='/' exact="true">Home</Link>
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



            </ul>
        </nav>
    )
}

export default Navbar