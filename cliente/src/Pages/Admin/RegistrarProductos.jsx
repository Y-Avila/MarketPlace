import React, { useState } from "react";
import { Link } from "react-router-dom";
import "style/style_productos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const RegistrarProductos = () => {
    const [id, setid] = useState();
    const [grupo, setgrupo] = useState();
    const [descripcion, setdescripcion] = useState();
    const [iva, setiva] = useState();
    const [presentacion, setpresentacion] = useState();
    const [cantidad, setcantidad] = useState();
    const [cod_barras, setcod_barras] = useState();

    const enviarDatos = async() => {
    const options = {
    method: "POST",
    url: "http://localhost:5000/producto",
    headers: { "Content-Type": "application/json" },
    data: {
        id: id,
        grupo: grupo,
        descripcion: descripcion,
        iva: iva,
        presentacion: presentacion,
        cantidad: cantidad,
        cod_barras:cod_barras ,
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
                <select
                id="id"
                value={id}
                onChange={(e) => {
                  setid(e.target.value);
                }}
                defaultValue={0} 
                required
              >   
              </select>
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
                id="iva"
                type="numb"
                value={iva}
                onChange={(e) => {
                  setiva(e.target.value);
                }}
                size="50"
                placeholder="Ingrese el IVA"
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
                value={cantidad}
                onChange={(e) => {
                  setcantidad(e.target.value);
                }}
                size="50"
                placeholder="Ingrese la cantidad"
                required
              />
              <input
                id="cod_barras"
                className="inputNumber"
                type="number"
                value={cod_barras}
                onChange={(e) => {
                  setcod_barras(e.target.value);
                }}
                size="50"
                placeholder="Escriba el código de barras"
                required
              /></div>
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

export default RegistrarProductos;
