import Logo from 'components/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Estilo_Login.css';

const PagError = () => {
    return (
        <div className="login-container">
            <center>
                <span><Logo /></span>
               <h1>404-Esta página no está disponible....</h1> 
            </center>
            <Link to="/admin" className="link">Regresa a la pagina principal</Link>
        </div>
    )
}

export default PagError
