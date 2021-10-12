import React from 'react'

function Usuarios() {

    return (
        <>
            <div className="sidenav">
    <div className="contenedor">
      <a href="/index.html"><img src="/src/Media/icono.png" alt="icono" /></a>
    </div>

    <a href="/src/usuarios.html">Usuarios</a>

    <a href="/src/interfaz.html"> Facturación </a>

    <a href="/src/ListadoVentas.html"> Ventas </a>

    <a href="/src/Listadoproductos.html"> Productos </a>

    <a href="/src/venta.html"> Registrar Producto </a>

    <a href="/src/login.html"> Cerrar Sesion </a>
  </div>

  
  <div className="main">
    <div className="modulo">
      <h3>Gestión de Usuarios</h3>

    </div>
    <div id="controlTabla">
      <table className="tableUsuarios">
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
          <td><a id="btnEditar" className="botonEditar" type="submit" href="/src/actualizar.html" target="_black">Editar</a></td>
          <td id="estado">
            <div id="swEstado" className="switch-container">
              <input type="checkbox" id="switch" />
              <label for="switch" className="lbl"></label>
            </div>
          </td>
        </tr>
      </table>
      <br /><br />
      <a id="btnGuardar" className="botonGuardar" type="submit" href="#">guardar</a>
    </div>

  </div>

    

    <br />
  </>
 
        
    )
}

export default Usuarios
