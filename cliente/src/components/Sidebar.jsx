import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'
import '../style/Sidebar.css';


const Sidebar = () => {
  return (
    <>
    <div className="sidenav">
    <div className="contenedor">
      <Link to="/index"> <Logo/> </Link>
    </div>


    <Link to="/usuarios">Usuarios</Link>

    <Link to="#"> Facturación </Link>

    <Link to="/ventas"> Ventas </Link>

    <Link to="/productos"> Productos </Link>

    <Link to="Productos/registro"> Registrar Producto </Link>

    <Link to="/login"> Cerrar Sesion </Link> 
  </div>
    </>
    
  );
};

export default Sidebar;
