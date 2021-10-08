

import React from 'react';

function Ventas() {
    return (
        <div>

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
                    <h3>Modulo de Administación</h3>
                </div>
                <input type="text" name="np" placeholder="GRUPO" required="required" />
                <input type="text" name="dp" placeholder="NOMBRE DEL PRODUCTO" required="required" />
                <input type="number" name="cp" placeholder="PRESENTACIÓN" required="required" />
                <input type="number" name="cp" placeholder="PRECIO" required="required" />
                <input type="number" name="cp" placeholder="REFERENCIA" required="required" />
                <input type="number" name="cp" placeholder="CODIGO DE BARRAS" required="required" />


                <a>
                  <button  id="btnGuardar" className="botonGuardar" type="submit" href="#">
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

export default Ventas;
