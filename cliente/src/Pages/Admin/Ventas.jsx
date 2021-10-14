import React from 'react'
import { Link } from 'react-router-dom';
import 'style/styleVenta.css';

const Ventas = () => {
    return (
        
     <div>
       <div className="main">
          <div className="modulo">
            <h3>Listado de Ventas</h3>
          </div>

          <br></br>
    
          <center>
            <div>

                <input className="BuscadorFactura"   placeholder="Buscar "></input>
                <select className="inputAct" id="tipoId">
                    <option>Factura</option>
                    <option>Id Cliente</option>
                    <option>Nombre del cliente</option>
                </select>
                
                <br></br>
                <br></br>
                <br></br>

            </div>   
          </center>

    

          <center>        

            <table>
              <tr >
                <th >Fecha</th>
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

          <center>
            <Link to="/admin/Ventas/Editar">
              <div className="Botones">
                  <br></br>
                  <button className='BotonModificar'>Editar Venta     </button>
              </div> 
            </Link>

             
          </center>

    
    
        </div>
      </div>   

    )
}

export default Ventas;

