import React from 'react';
import '../style/style_Ventas.css'
import LogoSideNav from '../Media/icono.png'

function Ventas() {
    return (
        <div>

            <div className="sidenav">
                <div className="contenedor">
                    <a href={LogoSideNav} alt="icono" ></a>
                </div>

                <a href="<Ventas>">Usuarios</a>

                <a href="/src/interfaz.html"> Facturación </a>

                <a href="/src/ListadoVentas.html"> Ventas </a>

                <a href="/src/Listadoproductos.html"> Productos </a>

                <a href="/src/venta.html"> Registrar Producto </a>

                <a href="/src/login.html"> Cerrar Sesion </a>
            </div>
        
            <div className="main">
                
                <div className="modulo">
                    <h3>Listado de Ventas</h3>
                </div>

                <br></br>

              
                
                <div>
                    <input className="BuscadorFactura"  name="ID" size="50" placeholder="Buscar ">                        
                    </input>

                    <br></br>
                    <br></br>
                    <br></br>
                </div>   
                
                
        

                <center>        
                 
                    <table>
                        <tr >
                        <th >Fecha</th>
                        <th >Factura</th>
                        <th>Valor Total</th>
                        <th >Metodo de Pago</th>
                        <th>Vendedor</th>
                        <th >ID_Vendedor</th>
                        <th >Cliente</th>
                        <th >ID_Cliente</th>
                        <th >MetodoEntrega</th>
                        <th >LugarEntrega</th>          
                        </tr>
                        <tr>
                            <td>23/07/2021</td>
                            <td>2131234</td>
                            <td>Germany</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23/07/2021</td>
                            <td>123456578</td>
                            <td>Mexico</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23/07/2021</td>
                            <td>234236665</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23/07/2021</td>
                            <td>645737683</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23/07/2021</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23/07/2021</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23/07/2021</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23/07/2021</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        
                    </table>

                </center> 
                {/* 
                <center>
                    <a href="/src/ActualizarInformacionVentas.html">

                        <div className="Botones">
                            <br></br>
                            <button className='BotonModificar' style='font-size:20px'>Actualizar     </button>
                        </div> 

                    </a>
                       
                </center>
                 */}
            </div>          
            
        </div>
    )
}  

export default Ventas;
