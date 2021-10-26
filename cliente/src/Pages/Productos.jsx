import React from 'react'
import { Link } from 'react-router-dom';
import 'style/style_productos.css';

const Productos = () => {
    return (
        <div>
            <div className="modulo">
                <h3>Modulo de Administación</h3>
            </div>
            <br></br>

            <br></br>


            <center>    
                <table>
                    <tr>
                        <th >ID</th>
                        <th >GRUPO</th>
                        <th >NOMBRE PRODUCTO</th>
                        <th >PRESENTACIÓN</th>
                        <th >PRECIO</th>
                        <th >REFERENCIA</th>
                        <th >CÓDIGO DE BARRA</th>                        
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>BEBIDAS PACK</td>
                        <td>JUGO HIT VARIOS PACKX6</td>
                        <td>SIXPACK</td>
                        <td>8900</td>
                        <td>N-A</td>
                        <td>77905567224</td>
                    </tr>
                        <td>2</td>
                        <td>BEBIDAS PACK</td>
                        <td>ALPIN VARIOS PACKX6</td>
                        <td>SIXPACK</td>
                        <td>12900</td>
                        <td>N-A</td>
                        <td>77905576413</td>
                    <tr>
                        <td>3</td>
                        <td>BEBIDAS PACK</td>
                        <td>PONNY MALTA PACKX6</td>
                        <td>SIXPACK</td>
                        <td>5900</td>
                        <td>N-A</td>
                        <td>77905507537</td>
                    </tr>
                        <td>4</td>
                        <td>BEBIDAS PACK</td>
                        <td>DEL VALLE SURTIDOS PACKX6</td>
                        <td>SIXPACK</td>
                        <td>7900</td>
                        <td>N-A</td>
                        <td>77905567227</td>
                    <tr>
                        <td>5</td>
                        <td>BEBIDAS</td>
                        <td>JUGO HIT VARIOS PACKX6</td>
                        <td>SIXPACK</td>
                        <td>8900</td>
                        <td>N-A</td>
                        <td>77905567224</td>
                    </tr>

                </table>

            </center>

            <br></br>

            <div className="lp">

                <p>
                    No. Páginas 1 de 25 
                    <button> Anterior </button>
                    <button> Siguiente </button>
                    <input class="busqueda" type="text" placeholder="Buscar"></input>

                </p>

                <div>
                    <Link to="/admin/productos/editar">                     
                        <button>Editar producto</button>                    
                    </Link>
                    

                    <Link to="/admin/productos/registrar">  
                        <button>Registrar nuevo producto</button>
                    </Link>
                </div>
            </div>
        </div>
    
    )
}

export default Productos
