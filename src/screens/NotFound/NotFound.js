import React from 'react';

function NotFound() {

    return (
        <React.Fragment>
            <h2 className='error'>ERROR 404</h2>
            <img className="error" src="./img/error404.gif" alt="" />
            <p className='error'>Acá no está lo que buscás.</p>
        </React.Fragment>
    )
}

export default NotFound;