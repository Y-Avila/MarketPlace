import React from 'react';
import Logo from '../Media/icono.png';
// import 'style/Estilo_Login.css';
import google_logo from '../Media/google_logo.png';

const Login= () => {
    return (
        <div>
            <h3>Bienvenido a</h3>
            <h1>Market Place PPYLL</h1>
            <h2>¡Donde comprar es todo un placer!</h2>
            <div class="imgcontainer">
              <img
                src={Logo}
                height="400"
                width="400"
                alt="Avatar"
                class="avatar"
              />
            </div>
            <a href="/index">
              <button class="btnLogin">
                <img src={google_logo} width="14" height="14" alt='logoGoogle' />
                Ingresa con Google
              </button>
            </a>
            <br /><br />
            <div>Todos los derechos reservados</div>
            <br /><br />
        </div>
    )
}

export default Login
