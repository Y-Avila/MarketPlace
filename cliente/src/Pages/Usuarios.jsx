

import React from 'react';
import { Link } from 'react-router-dom';
import 'style/styleUsuarios.css';

const Usuarios = () => {
  return (
  
      <div>
      <div class="main">
        <div class="modulo">
          <h3>Gestión de Usuarios</h3>
        </div>
        <div id="controlTabla">
          <table class="tableUsuarios">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Editar</th>
              <th>Estado</th>
            </tr>
            <tr>
              <td id="txtID">1065000888</td>
              <td id="nombre">Pepito</td>
              <td id="apellido">Perez</td>
              <td id="telefono">3005002040</td>
              <td id="email">ejemplo@gmail.com</td>
              <td id="rol">
                <select id="rol">
                  <option value="0">Vendedor</option>
                  <option value="1">Administrador</option>
                </select>
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
              <td id="estado">
                <div id="swEstado" class="switch-container">
                  <input type="checkbox" id="switch" />
                  <label for="switch" class="lbl"></label>
                </div>
              </td>
            </tr>
          </table>
          <br />
          <br />
          <Link id="btnGuardar" class="botonGuardar" type="submit" to="/usuarios">
            guardar
          </Link>
        </div>
      </div>

      <br />
    </div>
  
  )
}

export default Usuarios

    


