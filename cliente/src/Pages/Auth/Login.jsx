import React from "react";
import Logo from "components/Logo";
import google_logo from "../../Media/google_logo.png";
import "../../style/Estilo_Login.css";

const Login = () => {
  return (
    <>
      <>
        <center>
          <h3>Bienvenido a</h3>
          <h1>Market Place PPYLL</h1>
          <h2>¡Donde comprar es todo un placer!</h2>
          <>
            <Logo className="imglogin" />
          </>
          <a href="/admin">
            <button class="btnLogin">
              <img src={google_logo} height={10} width={10} alt="logoGoogle" />
              Ingresa con Google
            </button>
          </a>
          <br />
          <br />
          <div>Todos los derechos reservados</div>
          <br />
          <br />
        </center>
      </>
    </>
  );
};

export default Login;
