import React from 'react';
import config from '../config';

const img = 'https://cdn3.iconfinder.com/data/icons/web-hosting-7/66/66-512.png';


const NotFoundPage = (props) => {
  return(
    <div style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }}>
        <img src={img} alt="notfoundtienda" width="200"/>
        <h2>NO SE ENCONTRO PAGINA SOLICITADA :(</h2>
        <button className="btn btn-primary" onClick={() => window.location.replace(config.URL)}>Volver Inicio</button>
    </div>
   )
}

export default NotFoundPage