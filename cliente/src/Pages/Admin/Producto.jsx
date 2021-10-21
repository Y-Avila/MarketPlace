import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "style/style_productos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, Tooltip } from "@material-ui/core";
import axios from "axios";
import { nanoid } from "nanoid";

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
    const obtenerProducto = async () => {
    const options = { method: "GET", url: "http://localhost:5000/producto" };

    await axios
        .request(options)
        .then(function (response) {
        setProducto(response.data);
            setEjecutarConsulta(false);
        })
        .catch(function (error) {
            console.error(error);
        }); 
    };
    if (ejecutarConsulta) {
        obtenerProducto(false);
    }
    }, [ejecutarConsulta]);

    return (
    <>
    <TablaProducto listaProducto={producto} setEjecutarConsulta={setEjecutarConsulta}/>
    </>
    )
};

const EditarProducto = ({ producto, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [newProducto, setNewProducto] = useState({
    id: producto.id,
    grupo: producto.grupo,
    descripcion: producto.descripcion,
    iva: producto.iva,
    presentacion: producto.presentacion,
    cantidad: producto.cantidad,
    cod_barras: producto.cod_barras,
    });

    const actualizarProducto = async () => {

    const options = {
      method: "PATCH",
      url: `http://localhost:5000/producto/${producto._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        ...newProducto,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto modificado con éxito");
        setEdit(false);
      setEjecutarConsulta(true);
        
      })
      .catch(function (error) {
        toast.error("Error modificando el producto");
        console.error(error);
        
      }); 
  };

  const eliminarProducto = async () => {
    

    const options = {
      method: "DELETE",
      url: `http://localhost:5000/producto/${producto._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        id: producto._id,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Producto eliminado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error("Error eliminado el producto");
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
              value={newProducto.id}
              onChange={(e) =>
                setNewProducto({ ...newProducto, id: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newProducto.grupo}
              onChange={(e) =>
                setNewProducto({ ...newProducto, nombre: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newProducto.descripcion}
              onChange={(e) =>
                setNewProducto({ ...newProducto, descripcion: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newProducto.iva}
              onChange={(e) =>
                setNewProducto({ ...newProducto, iva: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newProducto.presentacion}
              onChange={(e) =>
                setNewProducto({ ...newProducto, presentacion: e.target.value })
              }
            />
          </td>
          <td>
          <input
              type="text"
              value={newProducto.cantidad}
              onChange={(e) =>
                setNewProducto({ ...newProducto, cantidad: e.target.value })
              }
            />
          </td>
          <td>
          <input
              type="text"
              value={newProducto.cod_barras}
              onChange={(e) =>
                setNewProducto({ ...newProducto, cod_barras: e.target.value })
              }
            />
          </td>
        </>      
      ) : (
        <>
          <td id="txtID">{producto.id}</td>
          <td id="grupo">{producto.grupo}</td>
          <td id="descripcion">{producto.descripcion}</td>
          <td id="iva">{producto.iva}</td>
          <td id="presentacion">{producto.presentacion}</td>
          <td id="cantidad">{producto.cantidad}</td>
          <td id="cod_barras">{producto.cod_barras}</td>
            
        </>
      )}
      <>
        <td>
          <div className="modificaciones">
            {edit ? (
              <>
                <Tooltip title="Confirmar Actualización" arrow>
                  <i
                    onClick={() => actualizarProducto()}
                    className="fas fa-check"
                    to="/admin/producto"
                  />
                </Tooltip>
                <Tooltip title="Cancelar Actualización" arrow>
                  <i onClick={() => setEdit(!edit)} className="fas fa-ban" />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Actualizar Producto" arrow>
                  <i onClick={() => setEdit(!edit)} className="far fa-edit" />
                </Tooltip>
                <Tooltip title="Eliminar Producto" arrow>
                  <i
                    onClick={() => setOpenDialog(true)}
                    eliminarProducto
                    className="far fa-trash-alt"
                  />
                </Tooltip>
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div className="eliminarProducto">
              <h1 className="eliminarProductoH1">
                ¿Está seguro de querer eliminar el Usuario?
              </h1>
              <div className="eliminarProductoBotones">
                <button
                  className="eliminarProductoBtnSi"
                  onClick={() => eliminarProducto()}
                >
                  Sí
                </button>
                <button
                  className="eliminarProductoBtnNo"
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

const TablaProducto = ({ listaProducto, setEjecutarProducto}) => {
  useEffect(() => {}, [listaProducto]);

  return (
    <>
      <div className="modulo">
        <h3>Gestión de Producto</h3>
      </div>
      <Link className="botonCrear" type="submit" to="/admin/producto/crear">
        Crear Nuevo Producto
      </Link>
      <div id="controlTabla">
        <table className="tableProducto">
        <tr>
            <th>Id</th>
            <th>Grupo</th>
            <th>Descripcion</th>
            <th>IVA</th>
            <th>Presentacion</th>
            <th>Cantidad</th>
            <th>Codigo de Barras</th>
        </tr>
            {listaProducto.map((producto) => {
            return <EditarProducto key={nanoid()} producto={producto} setEjecutarConsulta={setEjecutarConsulta} />;
        })}
        </table>
    </div>

    <ToastContainer position="bottom-center" autoClose={3500} />
        <br />
    </>
    );
};

export default Producto;
