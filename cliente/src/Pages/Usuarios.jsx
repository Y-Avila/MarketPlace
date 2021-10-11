import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "style/styleUsuarios.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { nanoid } from "nanoid";



const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  

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

 
  return (
    <div>
      <TablaUsuarios
        listaUsuarios={usuarios}
       
      />
    </div>
  );
};

const EditarUsuarios =({usuarios})=>{
  const [edit, setEdit] = useState(false);
  return(
    <tr >className="inputTabla"
      {edit?(                   
      <>
      <td><input className="inputTabla"type="text" defaultValue={usuarios.id} /></td>
      <td><input className="inputTabla"type="text" defaultValue={usuarios.nombre} /></td>
      <td><input className="inputTabla"type="text" defaultValue={usuarios.apellidos} /></td>
      <td><input className="inputTabla"type="text" defaultValue={usuarios.telefono} /></td>
      <td><input className="inputTabla"type="text" defaultValue={usuarios.email} /></td>
      <td><input className="inputTabla"type="text" defaultValue={usuarios.rol} /></td>
      <td><input className="inputTabla"type="text" defaultValue={usuarios.estado} /></td>
      </>
  ):( 
    
   <>
    <td id="txtID">{usuarios.id}</td>
    <td id="nombre">{usuarios.nombre}</td>
    <td id="apellido">{usuarios.apellidos}</td>
    <td id="telefono">{usuarios.telefono}</td>
    <td id="email">{usuarios.email}</td>
    <td id="rol">
      <select id="rol" defaultValue={usuarios.rol}>
        <option >vendedor</option>
        <option >Administrador</option>
      </select>
    </td>
    <td id="estado">
      {/* <div id="swEstado" class="switch-container">
    <input type="checkbox" id="switch" />
    <label for="switch" class="lbl"></label>
  </div> */}
      {usuarios.estado}
    </td>
    </>
  )
  }  
  <>
    <td>
      <div className="modificaciones">
        {edit ? (
        <i onClick={()=>setEdit(!edit)} className="fas fa-check"/>
        ):(
        <i onClick={()=>setEdit(!edit)} className="far fa-edit"/>
        )}
      
      <i className="far fa-trash-alt"/>
      </div>
    </td>
    </>
  
  

  </tr>
  )
  }




const TablaUsuarios = ({ listaUsuarios }) => {
  useEffect(() => {
    
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
                <EditarUsuarios key={nanoid()} usuarios={usuarios}/>
               
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
