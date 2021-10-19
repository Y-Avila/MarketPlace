import React, { useState } from "react";
import { Link } from "react-router-dom";
import "style/styleUsuarios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const base_url="https://prueba-3333333.herokuapp.com/";

const NuevoUsuarios = () => {
  const [nombre, setNombre] = useState();
  const [apellidos, setApellidos] = useState();
  const [email, setEmail] = useState();

  const enviarDatos = async () => {
    const options = {
      method: "POST",
      url: `${base_url}usuarios`,
      headers: { "Content-Type": "application/json" },
      data: {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        rol: "Selecione el Rol ",
        estado: "Selecione el estado",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    toast.success("Usuario Creado Con Exito...");
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
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                size="50"
                placeholder="Ingrese su nombre"
                minlength="3" 
                required
              />
              <input
                id="apellido"
                type="text"
                value={apellidos}
                onChange={(e) => {
                  setApellidos(e.target.value);
                }}
                size="50"
                placeholder="Ingrese su apellidos"
                required
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
                required
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
