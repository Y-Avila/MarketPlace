import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "style/styleUsuarios.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, Tooltip } from "@material-ui/core";
import axios from "axios";
import { nanoid } from "nanoid";
import useAuth from "Hook/useAuth";

const base_url = process.env.REACT_APP_RUTA_SERVER;

const Producto = () => {
    const auth = useAuth();
    const [producto, setProducto] = useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

    useEffect(() => {
        const obtenerProducto = async () => {
            const options = {
                method: "GET", url: `${base_url}productos`,
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            };

            await axios
                .request(options)
                .then(function (response) {
                    setProducto(response.data.productos);
                    setEjecutarConsulta(false);
                })
                .catch(function (error) {
                    console.error(error);
                });
        };
        if (ejecutarConsulta) {
            obtenerProducto(false);
        }
    }, [ejecutarConsulta, auth]);

    return (
        <>
            <TablaProducto listaProducto={producto} setEjecutarConsulta={setEjecutarConsulta} />
        </>
    )
};

const EditarProducto = ({ producto, setEjecutarConsulta,productos }) => {
    const auth = useAuth();
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [newProducto, setNewProducto] = useState({
        id: producto._id,
        grupo: producto.grupo,
        descripcion: producto.descripcion,
        name: producto.name,
        presentacion: producto.presentacion,
        cantidad: producto.referencia,
        cod_barras: producto.bar_code,
    });

    const ActualizarProducto = async () => {

        const options = {
            method: "PATCH",
            url: `${base_url}productos/${producto._id}`,
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${auth.token}`
            },

            data: newProducto
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





    const EliminarProducto = async () => {
        const options = {
            method: "DELETE",
            url: `${base_url}productos/${producto._id}`,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${auth.token}`
                },
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
                <td id="txtID">
                    {producto._id}
                </td>
                <td>
                    <input
                        type="text"
                        value={newProducto.name}
                        onChange={(e) =>
                            setNewProducto({ ...newProducto, name: e.target.value })
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
                        value={newProducto.presentacion}
                        onChange={(e) =>
                            setNewProducto({ ...newProducto, presentacion: e.target.value })
                        }
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={newProducto.referencia}
                        onChange={(e) =>
                            setNewProducto({ ...newProducto, referencia: e.target.value })
                        }
                    />
                </td>
                <td>
                    <input
                        type="text"
                        value={newProducto.bar_code}
                        onChange={(e) =>
                            setNewProducto({ ...newProducto, bar_code: e.target.value })
                        }
                    />
                </td>
            </>
        ) : (
            <>
                <td id="txtID">{producto._id.slice(20)}</td>
                <td id="name">{producto.name}</td>
                <td id="grupo">{producto.grupo}</td>
                <td id="descripcion">{producto.descripcion}</td>
                <td id="presentacion">{producto.presentacion}</td>
                <td id="cantidad">{producto.referencia}</td>
                <td id="cod_barras">{producto.bar_code}</td>

            </>
        )}
        <>
            <td>
                <div className="modificaciones">
                    {edit ? (
                        <>
                            <Tooltip title="Confirmar Actualización" arrow>
                                <i
                                    onClick={() => ActualizarProducto()}
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
                                    EliminarProducto
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
                                onClick={() => EliminarProducto()}
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

const TablaProducto = ({ listaProducto, setEjecutarConsulta }) => {
    useEffect(() => { }, [listaProducto]);

    return (
        <>
            <div className="modulo">
                <h3>Gestión de Producto</h3>
            </div>
            <Link className="botonCrear" type="submit" to="/admin/productos/crear">
                Crear Nuevo Producto
            </Link><br /><br /><br /><br />
            <div id="controlTabla">
                <table className="tableProducto">
                    <thead>
                        <th>Id</th>
                        <th>Grupo</th>
                        <th>Descripcion</th>
                        <th>name</th>
                        <th>Presentacion</th>
                        <th>Cantidad</th>
                        <th>Codigo de Barras</th>
                        <th>Modificaciones</th>
                    </thead>
                    <tbody>
                        {listaProducto.map((producto) => {
                            return (
                                <EditarProducto key={nanoid()} producto={producto} setEjecutarConsulta={setEjecutarConsulta} />
                            );
                        })}
                    </tbody>

                </table>
            </div>

            <ToastContainer position="bottom-center" autoClose={3500} />
            <br />
        </>
    );
};

export default Producto;


