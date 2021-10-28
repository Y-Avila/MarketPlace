
import React from 'react';

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import  {Tooltip , Dialog} from "@material-ui/core";

import "react-toastify/dist/ReactToastify.css";
import { toast} from "react-toastify";
import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import useAuth from 'Hook/useAuth';


const base_url = process.env.REACT_APP_RUTA_SERVER;


const Ventas = () => {
  const auth = useAuth();
  const [ventas, setVentas] = useState([]);


import { toast} from "react-toastify";
import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";


  const getVentas = async () => {

    const options = {
      method: "GET", url: `${base_url}ventas`,
      headers: {
          'Authorization': `Bearer ${auth.token}`
      }
  };

  await axios
      .request(options)
      .then(function (response) {
          setVentas(response.data.ventas);
      })
      .catch(function (error) {
          console.error(error);
      });

  }

 
  useEffect(() => {
      getVentas();

  }, );


  

    return (
      <>
        <TablaVentas Listaventas={ventas} />
      </>
    )    
};


export default Ventas;


const EditarVentas = ({ ventas }) => {

  const auth = useAuth();

  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  
  const [newVenta, setNewVenta] = useState({    


    codigo: ventas._id,

    id_vendedor: ventas.id_vendedor,
    producto: ventas.producto,
    cantidad: ventas.cantidad,
    precio: ventas.precio,
    total: ventas.total,

  });

  const actualizarVenta = async () => {


    const options = {
      method: "PATCH",
      url: `${base_url}ventas/${ventas._id}`,
      headers: { "Content-Type": "application/json",
      'Authorization': `Bearer ${auth.token}` },

      data: {
        ...newVenta,
      },
      
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Venta modificado con éxito");
        setEdit(false);
      })
      .catch(function (error) {
        toast.error("Error modificando la venta");
        console.error(error);
       
      });
    setNewVenta(); 


  };



  const eliminarVenta = async () => {
    console.log(newVenta);

    const options = {
      method: "DELETE",

      url: `${base_url}ventas/${ventas._id}`,
      headers: { "Content-Type": "application/json",        'Authorization': `Bearer ${auth.token}` },

      data: {
        id: ventas._id,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Venta eliminada con éxito");
        setEdit(false);
        

      })
      .catch(function (error) {
        toast.error("Error eliminado la venta");
        console.error(error);
      });
    setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>          
          <td>
            <input
              type="text"
              value={newVenta.codigo}
              onChange={(e) =>
                setNewVenta({ ...newVenta, codigo: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newVenta.id_vendedor}
              onChange={(e) =>
                setNewVenta({ ...newVenta, id_vendedor: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newVenta.producto}
              onChange={(e) =>
                setNewVenta({ ...newVenta, producto: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newVenta.cantidad}
              onChange={(e) =>
                setNewVenta({ ...newVenta, cantidad: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newVenta.precio}
              onChange={(e) =>
                setNewVenta({ ...newVenta, precio: e.target.value })
              }
            />
          </td>
          <td>
            <input              
              value={newVenta.total}
              onChange={(e) =>
                setNewVenta({ ...newVenta, total: e.target.value })
              }
              
              required
            />
          </td>        
          
        </>
      ) : (
        <>

          <td id="codigo">{ventas._id.slice(20)}</td>

          <td id="id_vendedor">{ventas.id_vendedor}</td>
          <td id="producto">{ventas.producto}</td>
          <td id="cantidad">{ventas.cantidad}</td>
          <td id="precio">{ventas.precio}</td>
          <td id="total">{ventas.total}</td>          
        </>
      )}
      <>
        <td>
          <div className="modificaciones">
            {edit ? (
              <>
                <Tooltip title="Confirmar Actualización" arrow>
                  <i
                    onClick={() => actualizarVenta()}

                    className="fas fa-check"
                    to='/admin/ventas'
                  />
                </Tooltip>
                <Tooltip title="Cancelar Actualización" arrow>
                  <i onClick={() => setEdit(!edit)} className="fas fa-ban" />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Actualizar Venta" arrow>
                  <i onClick={() => setEdit(!edit)} className="far fa-edit" />
                </Tooltip>
                <Tooltip title="Eliminar Venta" arrow>
                  <i
                    onClick={() => setOpenDialog(true)}
                    eliminarVenta
                    className="far fa-trash-alt"
                  />
                </Tooltip>
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div className="eliminarVenta">
              <h1 className="eliminarVentaH1">
                ¿Está seguro de querer eliminar la venta?
              </h1>
              <div className="eliminarVentaBotones">
                <button
                  className="eliminarVentaBtnSi"
                  onClick={() => eliminarVenta()}
                >
                  Sí
                </button>
                <button
                  className="eliminarVentaBtnNo"
                  onClick={() => setOpenDialog(false)}
                >
                  No
                </button>
              </div>
            </div>
          </Dialog>
        </td>
      </>
    </tr>
  );
};


const TablaVentas = ({ Listaventas }) => {
  useEffect(() => {}, [Listaventas]);

  return (
  <body>
    <div>
      <div className="main">
         <div className="modulo">
           <h3>Listado de Ventas</h3>
         </div>

         <br></br>  

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

             {Listaventas.map((ventas) => {
               return <EditarVentas key={nanoid()} ventas={ventas} />;

             })}             

             
           </table>

         </center>           

         <ToastContainer position="bottom-center" autoClose={5000} />
   
       </div>
     </div>   
   </body>  
   );  

};

