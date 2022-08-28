import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(){
    return (
        <nav>
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
            
        </ul>
        </nav>
    )
}

export default Navbar