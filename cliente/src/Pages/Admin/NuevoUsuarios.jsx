import React, { useState } from "react";
import { Link } from "react-router-dom";
import "style/styleUsuarios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const base_url=process.env.REACT_APP_RUTA_SERVER;


const NuevoUsuarios = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  

  const enviarDatos = async () => {
    const options = {
      method: "POST",
      url: `${base_url}auth/new`,
      headers: { "Content-Type": "application/json" },
      data: {
        name: name,
        email: email,
        password: "wm5%Q!G9&YLc3uz",
        estado: "Inactivo",
        rol: "indefinido"        
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      toast.success("Usuario Creado Con Exito...");  
      })
      .catch(function (error) {
        console.error(error);
      toast.error("Verifica la información")  
      });
    
  };
  return (
    <div>
      <div className="main">
        <div className="modulo">
          <h3>Crear Usuario nuevo</h3>
        </div>
        <div className="container-formulario">
          <form id="formulario">
            <div className="inputForm" id="inputForm">
              <input
                id="nombre"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }} 
                size="50"
                placeholder="Ingrese su nombre completo"
                required ="true" 
                minlength="8" 
                maxLength= "80"
              />
             
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                size="50"
                placeholder="Ingrese su email"
                required ="true" 
                pattern= "/^\S+@\S+$/i"
              />
            </div>
            <div className="botones2">
              <Link
                to="/admin/usuarios"
                className="botonGuardar"
                id="btnGuardarActualizacion"
                onClick={() => {
                  enviarDatos();
                }}
                type="submit"
              >
                Guardar Cambios
              </Link>
            </div>
          </form>
          <ToastContainer position="bottom-center" autoClose={5000} />
        </div>
      </div>
    </div>
  );
};

export default NuevoUsuarios;
