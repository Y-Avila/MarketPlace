import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "style/styleUsuarios.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    
   
    const options = { method: "GET", url: "http://localhost:5000/usuarios" };

    axios
      .request(options)
      .then(function (response) {
        setUsuarios(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   console.log('consulta', ejecutarConsulta);
  //   if (ejecutarConsulta) {
  //     (setUsuarios, setEjecutarConsulta);
  //   }
  // }, [ejecutarConsulta]);

  return (
    <div>
      <TablaUsuarios
        listaUsuarios={usuarios}
        setEjecutarConsulta={setEjecutarConsulta}
      />
    </div>
  );
};

const TablaUsuarios = ({ listaUsuarios }) => {
  useEffect(() => {
    console.log("este el el estado", listaUsuarios);
  }, [listaUsuarios]);

  return (
    <div>
      <div class="main">
        <div class="modulo">
          <h3>Gestión de Usuarios</h3>
        </div>
        <Link class="botonCrear" type="submit" to="/usuarios/crear">
          Crear Nuevo Usuario
        </Link>
        <div id="controlTabla">
          <table class="tableUsuarios">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Modificaciones</th>
              

            </tr>
            {listaUsuarios.map((usuarios) => {
              return (
                <tr>
                  <td id="txtID">{usuarios.id}</td>
                  <td id="nombre">{usuarios.nombre}</td>
                  <td id="apellido">{usuarios.apellidos}</td>
                  <td id="telefono">{usuarios.telefono}</td>
                  <td id="email">{usuarios.email}</td>
                  <td id="rol">
                    <select id="rol">
                      <option value="0">{usuarios.rol}</option>
                      <option value="1">Administrador</option>
                    </select>
                  </td>
                  <td id="estado">
                    {/* <div id="swEstado" class="switch-container">
                  <input type="checkbox" id="switch" />
                  <label for="switch" class="lbl"></label>
                </div> */}
                    {usuarios.estado}
                  </td>
                  <td>
                    <Link
                      id="btnEditar"
                      class="botonEditar"
                      type="submit"
                      to="/usuarios/actualizar"
                    >
                      Editar
                    </Link>
                    <Link
                      id="btnEditar"
                      class="botonEditar"
                      type="submit"
                      to="/usuarios/actualizar"
                    >
                      Eliminar
                    </Link>
                  </td>
                  
                </tr>
              );
            })}
          </table>
          <br />
          <br />
          <Link
            id="btnGuardar"
            class="botonGuardar"
            type="submit"
            to="/usuarios"
          >
            guardar
          </Link>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={5000} />
      <br />
    </div>
  );
};

export default Usuarios;
