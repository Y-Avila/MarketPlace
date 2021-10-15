import React from 'react'
import { Link } from 'react-router-dom';
import 'style/style_productos.css';


const EditarProducto = () => {
    return (
        <div>
          <div className="modulo">
            <h3>Modulo de Administación</h3>
          </div>

          <center>    

            <table>
                <tr>
                    <td>ID</td> 
                    <td>001</td>            
                </tr>
                <tr>
                    <td>GRUPO</td>
                    <td><input type="text" placeholder="BEBIDAS PACK"></input></td>
                </tr>
                <tr>
                    <td>NOMBRE ARTÍCULO</td>
                    <td><input type="text" placeholder="JUGO HIT VARIOS PACKX6"></input></td>
                </tr>
                <tr>
                    <td>PRESENTACIÓN</td>
                    <td><input type="text" placeholder="SIXPACK"></input></td>
                </tr>
                <tr>
                    <td>PRECIO</td>
                    <td><input type="text" placeholder="8.900"></input></td>
                </tr>
                <tr>
                    <td>REFERENCIA</td>
                    <td><input type="text" placeholder="N-A"></input></td>
                </tr>
                <tr>
                    <td>CÓDIGO DE BARRA</td>
                    <td><input type="text" placeholder="77905567224"></input></td>
                </tr>
            </table>

            <br></br>

            <Link to="/admin/productos">
                <button>REGRESAR</button>
            </Link>

            <button  id="Notificar">GUARDAR</button>                  
            
          </center>

        </div> 
        
    )
}

export default EditarProducto
