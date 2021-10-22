import React from 'react'
import { Link } from 'react-router-dom';
import 'style/styleVenta.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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

  useEffect(() => {
      getVentas();
  }, []);

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
                <th >Codigo</th>
                <th >id_vendedor</th>
                <th >producto</th>
                <th >cantidad</th>
                <th >precio</th>
                <th >total</th>                         
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

    )
}

export default Ventas;

