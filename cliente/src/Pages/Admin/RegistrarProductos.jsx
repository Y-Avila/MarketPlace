import React, { useState } from "react";
import { Link } from "react-router-dom";
import "style/styleUsuarios.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import useAuth from "Hook/useAuth";

const base_url = process.env.REACT_APP_RUTA_SERVER;

const RegistrarProductos = () => {
  const auth = useAuth();
  const [grupo, setgrupo] = useState();
  const [name, setname] = useState();
  const [descripcion, setdescripcion] = useState();
  const [presentacion, setpresentacion] = useState();
  const [referencia, setreferencia] = useState();
  const [bar_code, setbar_code] = useState();

  const enviarDatos = async () => {
    const options = {
      method: "POST",
      url: `${base_url}productos/`,
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
      data: {
        
        grupo:grupo,
        descripcion:descripcion,
        name:name,
        presentacion:presentacion,
        referencia:referencia,
        bar_code:bar_code,
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
    toast.success("Producto Creado Con Exito...");
  };
  return (
    <div>
      <div className="main">
        <div className="modulo">
          <h3>Crear Producto nuevo</h3>
        </div>
        <div className="container-formulario">
          <form id="formulario">
            <div className="inputForm" id="inputForm">
            <input
                id="nombre"
                className="inputtext"
                type="text"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                size="50"
                placeholder="Ingrese el nombre"
                required
              />
              <input
                id="grupo"
                className="inputtext"
                type="text"
                value={grupo}
                onChange={(e) => {
                  setgrupo(e.target.value);
                }}
                size="50"
                placeholder="Ingrese el grupo"
                required
              />
              <input
                id="descripcion"
                type="text"
                value={descripcion}
                onChange={(e) => {
                  setdescripcion(e.target.value);
                }}
                size="50"
                placeholder="Ingrese la descripcion"
                required
              />
              <input
                id="presentacion"
                type="text"
                value={presentacion}
                onChange={(e) => {
                  setpresentacion(e.target.value);
                }}
                size="50"
                placeholder="Escriba la presentacion"
                required
              />
              <input
                id="cantidad"
                className="inputNumber"
                type="number"
                value={referencia}
                onChange={(e) => {
                  setreferencia(e.target.value);
                }}
                size="50"
                placeholder="Ingrese la cantidad"
                required
              />
              <input
                id="cod_barras"
                className="inputNumber"
                type="number"
                value={bar_code}
                onChange={(e) => {
                  setbar_code(e.target.value);
                }}
                size="50"
                placeholder="Escriba el código de barras"
                required
              />
            </div>
            <div className="botones2">
              <Link
                to="/admin/productos"
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


export default RegistrarProductos;

