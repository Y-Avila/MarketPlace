import React from 'react'
import { Link } from 'react-router-dom';
import 'style/style_productos.css';

const Registrar = () => {
    return (
        <div>
            <div className="main">
        <div className="modulo">
          <h3>Modulo de Administación</h3>
        </div>
        <input type="text" name="np" placeholder="GRUPO" required="required" />
        <input
          type="text"
          name="dp"
          placeholder="NOMBRE DEL PRODUCTO"
          required="required"
        />
        <input
          type="number"
          name="cp"
          placeholder="PRESENTACIÓN"
          required="required"
        />
        <input
          type="number"
          name="cp"
          placeholder="PRECIO"
          required="required"
        />
        <input
          type="number"
          name="cp"
          placeholder="REFERENCIA"
          required="required"
        />
        <input
          type="number"
          name="cp"
          placeholder="CODIGO DE BARRAS"
          required="required"
        />

        
          <button
            id="btnGuardar"
            className="botonGuardar"
            type="submit"
            to="#"
          >
            GUARDAR
          </button>
      

        <Link to="/admin/productos">
          <button>IR A PRODUCTOS</button>
        </Link>

        
      </div>
        </div>
    )
}

export default Registrar
