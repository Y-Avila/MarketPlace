import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../style/Sidebar.css";
import useAuth from "Hook/useAuth";

const Sidebar = () => {
  const auth = useAuth();
  return (
    <>
      <div className="sidenav">
        <div className="contenedor">
          <Link to="/admin">
            <Logo />
          </Link>
          
        </div>
        
        {auth.user && auth.user.rol === "Administrador" ? (
          <div>
            <span className="sesion">Sesion Activa</span>
          <span className="user-name">{auth.user.name}</span>
            <Link to="/admin/usuarios">Usuarios</Link>

            <Link to="/admin/ventas/facturar"> Facturación </Link>

            <Link to="/admin/ventas"> Ventas </Link>

            <Link to="/admin/productos"> Productos </Link>

            <Link to="/" onClick={auth.logout}>
              Cerrar Sesion
            </Link>
          </div>
        ) : (
          <div>
             
            <Link to="/admin/ventas/facturar"> Facturación </Link>

            <Link to="/admin/ventas"> Ventas </Link>

            <Link to="/" onClick={auth.logout}>
              Cerrar Sesion
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
