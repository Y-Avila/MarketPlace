import React from 'react'
import { Link } from 'react-router-dom'

const ActualizarUsuarios = () => {
    return (
        <div>
            
            <div className="main">
    <div className="modulo">
      <h3>Actualizar Usuario</h3>
    </div>
    <div className="container-formulario">

            <form id="formulario" onclick="re">
                <div className="inputForm" id="inputForm">
                    <select id="tipoId">
                        <option>Cedula de Ciudadania</option>
                        <option>Cedula de Extranjeria</option>
                        <option>Pasaporte</option>
                    </select>
                    <input id="cedula" className="inputNumber" type="number" name="ID" size="50"
                        placeholder="Ingrese su identificacion" required/>
                    <input id="nombre" type="text" name="nombre" size="50"
                        placeholder="Ingrese su nombre" required/>
                    <input id="apellido" type="text" name="apellidos" size="50"
                        placeholder="Ingrese su apellidos" required/>
                    <input id="email" type="email" name="email" size="50"
                        placeholder="Ingrese su email" required/>
                    <input id="telefono" className="inputNumber" type="number" name="telefono" size="50"
                        placeholder="Ingrese su telefono" required/>
                    <input id="password" type="password" name="password" size="50"
                        placeholder="Ingrese su contraseña" required/>
                </div>
                <div className="botones2">
                    <Link className="botonGuardar" id="btnGuardarActualizacion" type="submit" to="/usuarios">Guardar
                        Cambios</Link>
                </div>
            </form>
                
        </div>
        
  </div>

        </div>
    )
}

export default ActualizarUsuarios
