

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'style/styleUsuarios.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const usuariosBackend=[
    {
      id: 1065587424,
      nombre:"luis carlos",
      apellidos:"guerra gomez",
      telefono : 3116162088,
      email : "lcgg18@gmail.com",
      rol : "administador",
      estado : "activo"
    },
    {
      id:1065888777,
      nombre:"margareth elisa",
      apellidos:"herrera viloria",
      telefono : 3164440055,
      email : "mehv@gmail.com",
      rol : "vendedor",
      estado : "activo"
    },
    {
      id:1474787878,
      nombre:"liz marianne",
      apellidos:"guerra herrera",
      telefono : 3205544123,
      email : "lmgh@gmail.com",
      rol : "administador",
      estado : "inactivo"
    },
    {
      id:1474787878,
      nombre:"pablo",
      apellidos:"guerra herrera",
      telefono : 3205544123,
      email : "lmgh@gmail.com",
      rol : "administador",
      estado : "inactivo"
    },
  ]

const Usuarios = () => {
  
  const [usuarios, setUsuarios] = useState([])
  
  useEffect(() => {
    setUsuarios(usuariosBackend);
  }, [])
  


  return (
  
    <div>
      <TablaUsuarios listaUsuarios={usuarios}/>
    </div>
  
  )
}


const TablaUsuarios = ({listaUsuarios}) => {
  useEffect(() => {
    console.log("este el el estado", listaUsuarios)
  }, [listaUsuarios])
  
  
  return (
    <div>
      <div class="main">
        <div class="modulo">
          <h3>Gestión de Usuarios</h3>
        </div>
        <Link
          class="botonCrear"
          type="submit"
          to="/usuarios/crear"
        >
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
              <th>Editar</th>
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
      <ToastContainer position="bottom-center" autoClose={5000}/>     
      <br />
    </div>
  );
}

export default Usuarios

    


