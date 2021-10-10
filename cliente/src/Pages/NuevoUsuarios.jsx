import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'style/styleUsuarios.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NuevoUsuarios = () => {
    const [tipoID,setTipoID]=useState()
    const [ID,setID]=useState()
    const [nombre,setNombre]=useState()
    const [apellidos,setApellidos]=useState()
    const [email,setEmail]=useState()
    const [telefono,setTelefono]=useState()
    
    
    const enviarDatos=()=>{
        console.log('tipoid',tipoID, 'cedula',ID, 'nombre',nombre, 'apellidos',apellidos, 'email',email, 'telefono',telefono)
        toast.success('Usuario Creado Con Exito...')
    };

    return (
        <div>

           <div className="main">
                <div className="modulo">
                <h3>Crear Usuario nuevo</h3>
                </div>
                <div className="container-formulario">
                    <form id="formulario" >
                            <div className="inputForm" id="inputForm">
                                <select id="tipoId" value={tipoID}
                                onChange={(e)=>{
                                    setTipoID(e.target.value);
                                }}>
                                    <option>Cedula de Ciudadania</option>
                                    <option>Cedula de Extranjeria</option>
                                    <option>Pasaporte </option>
                                </select>
                                <input id="cedula" className="inputNumber" type="number" value={ID} onChange={(e)=>{
                                    setID(e.target.value);
                                }} size="50"
                                    placeholder="Ingrese su identificacion" required/>
                                <input id="nombre" type="text" value={nombre} onChange={(e)=>{
                                    setNombre(e.target.value);
                                }} size="50"
                                    placeholder="Ingrese su nombre" required/>
                                <input id="apellido" type="text" value={apellidos} onChange={(e)=>{
                                    setApellidos(e.target.value);
                                }} size="50"
                                    placeholder="Ingrese su apellidos" required/>
                                <input id="email" type="email" value={email} onChange={(e)=>{
                                    setEmail(e.target.value);
                                }} size="50"
                                    placeholder="Ingrese su email" required/>
                                <input id="telefono" className="inputNumber" type="number" value={telefono} onChange={(e)=>{
                                    setTelefono(e.target.value);
                                }} size="50"
                                    placeholder="Ingrese su telefono" required/>
                                
                            </div>
                            <div className="botones2">
                                <Link to="/usuarios" className="botonGuardar" id="btnGuardarActualizacion" onClick={()=>{enviarDatos()}} type="submit" >Guardar
                                    Cambios</Link>
                            </div>
                    </form>
                    <ToastContainer position="bottom-center" autoClose={5000}/>       
                </div>
                    
            </div> 
        </div>
    )
}

export default NuevoUsuarios