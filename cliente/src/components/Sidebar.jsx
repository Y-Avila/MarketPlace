import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo'
import '../style/Sidebar.css';


const Sidebar = () => {

  return (
    <>
      <div className="sidenav">
          <div className="contenedor">
            <Link to="/admin"> <Logo/> </Link>
          </div>
          <Link to="/admin/usuarios">Usuarios</Link>

          <Link to="/admin/ventas"> Ventas </Link>

          <Link to="/admin/productos"> Productos </Link>

          <Link to="/admin/ventas/registrar"> Registrar Venta </Link>          

          <Link to="/admin/productos/registrar"> Registrar Producto </Link>

          <Link to="/login"> Cerrar Sesion </Link> 
      </div>
    </>
    
  );
};



export default Sidebar;
