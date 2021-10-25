import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../style/Sidebar.css";
import useAuth from "Hook/useAuth";

const Sidebar = () => {
  const auth = useAuth();

  console.log(auth.user.name);

  return (
    <>
      <div className="sidenav">
        <div className="contenedor">
          <Link to="/admin">
            <Logo />
          </Link>
          <span className="sesion">Sesion Activa</span>
          <span className="user-name">{auth.user.name}</span>
        </div>
        
        {auth.user && auth.user.rol === "Administrador" ? (
          <div>
            
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
