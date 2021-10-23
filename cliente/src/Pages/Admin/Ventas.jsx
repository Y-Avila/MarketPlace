import React from 'react'
import { Link } from 'react-router-dom';
import 'style/styleVenta.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Dialog, Tooltip } from "@material-ui/core";
import VentasEditar from './VentasEditar';

const Ventas = () => {

  const [ventas, setVentas] = useState([]);

  const getVentas = async () => {

      const options = {
          method: 'GET',
          url: 'http://localhost:5000/ventas'
      };

      await axios
          .request(options)
          .then(function (response) {
              setVentas(response.data);
          }).catch(function (error) {
              console.error(error);
          });
  }


  const eliminarVenta = async () => {

    const options = {
      method: "DELETE",
      url: `http://localhost:5000/ventas/${ventas._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        id: ventas._id,
      },
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  };

  useEffect(() => {
      getVentas();
  }, []);

    return (
    <body>
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
                <th >Codigo</th>
                <th >Vendedor</th>
                <th >Producto</th>
                <th >Cantidad</th>
                <th >Precio</th>
                <th >Total</th>
                <th >Modificaciones</th>                          
              </tr>
                              
                {
                  ventas.map((ventas, key) => (
                      <tr key={ventas._id}>
                          <td>{ventas.codigo}</td>
                          <td>{ventas.id_vendedor}</td>
                          <td>{ventas.producto}</td>
                          <td>{ventas.cantidad}</td>
                          <td>{ventas.precio}</td>
                          <td>{ventas.total}</td>
                          <td>
                            
                            <Tooltip title="Editar Venta" arrow>
                            <i
                              className="fas fa-edit"
                              to='/admin/usuarios'
                            />
                          </Tooltip>
                          
                          <Tooltip title="Eliminar Venta" arrow>
                            <i
                              onClick={() => eliminarVenta()}
                              className="fas fa-trash-alt"
                              to='/admin/usuarios'
                            />
                          </Tooltip>
                          </td>
                      </tr>
                  ))
                }             
              
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
    </body>  
    )
}

export default Ventas;

