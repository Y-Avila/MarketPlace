import React from 'react'




const Ventas = () => {
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

        <a>
          <button
            id="btnGuardar"
            className="botonGuardar"
            type="submit"
            href="#"
          >
            GUARDAR
          </button>
        </a>
        <a href="/src/Listadoproductos.html">
          <button>IR A PRODUCTOS</button>
        </a>

        <script src="/javascript/actualizarventa.js"></script>
      </div>
    </div>   
    )
}

export default Ventas

