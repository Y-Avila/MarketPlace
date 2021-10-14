import React from 'react';
import { Link } from 'react-router-dom';
import 'style/styleVenta.css';

const VentasEditar = () => {
    return (
        <div>
           <div className="main">
                <div className="modulo">
                    <h3>Actualizar Información de Ventas</h3>
                </div>

                <buscador>
                    <input className="BuscadorFactura" name="ID"  placeholder="Buscar "></input>
                    <select className="inputAct" id="tipoId">
                        <option>Factura</option>
                        <option>Id Cliente</option>
                        <option>Nombre del cliente</option>
                    </select>
                    <br></br>
                    <br></br>
                    <br></br>
                </buscador>

                <center>
                    <table>
                        <tr>
                            <th>Fecha</th>
                            <th >Factura</th>
                            <th >Valor Total</th>
                            <th >Metodo de Pago</th>
                            <th >Vendedor</th>
                            <th >ID_Vendedor</th>
                            <th >Cliente</th>
                            <th >ID_Cliente</th>
                            <th >MetodoEntrega</th>
                            <th >LugarEntrega</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><input placeholder=""></input></td>
                            <td><input placeholder=""></input></td>
                            <td><input placeholder=""></input></td>
                            <td><input placeholder=""></input></td>
                            <td><input placeholder=""></input></td>
                            <td><input placeholder=""></input></td>
                            <td><input placeholder=""></input></td>
                            <td><input placeholder=""></input></td>
                        </tr>
                    </table>
                </center>

                <br></br>
                <br></br>




                <button className='BotonGuardar' id="Notificar" >Guardar Cambios </button>

                <Link to="/admin/ventas">
                    <button className='BotonRegresar' >Regresar

                    </button>
                </Link>
                
            </div>
        </div>
    )
}

export default VentasEditar;