import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "style/styleUsuarios.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, Tooltip } from "@material-ui/core";
import axios from "axios";
import { nanoid } from "nanoid";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const options = { method: "GET", url: "http://localhost:5000/usuarios" };

    axios
      .request(options)
      .then(function (response) {
        setUsuarios(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <TablaUsuarios listaUsuarios={usuarios} />
    </div>
  );
};

const EditarUsuarios = ({ usuarios }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUsuario, setNewUsuario] = useState({
    id: usuarios.id,
    nombre: usuarios.nombre,
    apellidos: usuarios.apellidos,
    telefono: usuarios.telefono,
    email: usuarios.email,
    rol: usuarios.rol,
    estado: usuarios.estado,
  });

  const actualizarUsuario = async () => {
    console.log(newUsuario);

    const options = {
      method: "PATCH",
      url: `http://localhost:5000/usuarios/${usuarios._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        ...newUsuario,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Usuario modificado con éxito");
        setEdit(false);
      })
      .catch(function (error) {
        toast.error("Error modificando el usuario");
        console.error(error);
      });
  };

  const eliminarUsuario = async () => {
    console.log(newUsuario);

    const options = {
      method: "DELETE",
      url: `http://localhost:5000/usuarios/${usuarios._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        id: usuarios._id,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Usuario eliminado con éxito");
        setEdit(false);
      })
      .catch(function (error) {
        toast.error("Error eliminado el usuario");
        console.error(error);
      });
      setOpenDialog(true);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              type="text"
              value={newUsuario.id}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, id: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newUsuario.nombre}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, nombre: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newUsuario.apellidos}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, apellidos: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newUsuario.telefono}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, telefono: e.target.value })
              }
            />
          </td>
          <td>
            <input
              type="text"
              value={newUsuario.email}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, email: e.target.value })
              }
            />
          </td>
          <td>
            <select
              id="rol"
              value={newUsuario.rol}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, rol: e.target.value })
              }
            >
              <option>vendedor</option>
              <option>Administrador</option>
            </select>
          </td>
          <td>
            <input
              type="checkbox"
              key={nanoid()}
              value={newUsuario.estado}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, estado: e.target.value })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td id="txtID">{usuarios.id}</td>
          <td id="nombre">{usuarios.nombre}</td>
          <td id="apellido">{usuarios.apellidos}</td>
          <td id="telefono">{usuarios.telefono}</td>
          <td id="email">{usuarios.email}</td>
          <td id="rol">
            <select id="rol" defaultValue={usuarios.rol}>
              <option>vendedor</option>
              <option>Administrador</option>
            </select>
          </td>
          <td id="estado">

            <div id="swEstado" class="switch-container">
              <input type="checkbox" id="switch" />
              <label for="switch" class="lbl"></label>
            </div>
          </td>
        </>
      )}
      <>
        <td>
          <div className="modificaciones">
            {edit ? (
              <>
                <Tooltip title='Confirmar Actualización' arrow>
                  <i
                    onClick={() => actualizarUsuario()}
                    className="fas fa-check"
                  />
                </Tooltip>
                <Tooltip title='Cancelar Actualización' arrow>
                  <i onClick={() => setEdit(!edit)} className="fas fa-ban" />
                </Tooltip>

                
              </>
            ) : (
              <>
              <Tooltip title='Actualizar Usuario' arrow>
                 <i onClick={() => setEdit(!edit)} className="far fa-edit" />
              </Tooltip>
              <Tooltip title='Eliminar Usuario' arrow>
                <i onClick={() => setOpenDialog(true)} eliminarUsuario className="far fa-trash-alt" />
              </Tooltip>

                
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div className="eliminarUsuario">
              <h1 className="eliminarUsuarioH1" >¿Está seguro de querer eliminar el vehículo?</h1>
              <div className="eliminarUsuarioBotones">
                <button className="eliminarUsuarioBtnSi" onClick={() => eliminarUsuario()}>Sí</button>
                <button className="eliminarUsuarioBtnNo" onClick={() => setOpenDialog(false)}>No</button>
              </div>
            </div>
          </Dialog>
        </td>
      </>
    </tr>
  );
};

const TablaUsuarios = ({ listaUsuarios }) => {
  useEffect(() => {}, [listaUsuarios]);

  return (
    <div>
      <div class="main">
        <div class="modulo">
          <h3>Gestión de Usuarios</h3>
        </div>
        <Link class="botonCrear" type="submit" to="/usuarios/crear">
          Crear Nuevo Usuario
        </Link>
        <div id="controlTabla">
          <table class="tableUsuarios">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Modificaciones</th>
            </tr>
            {listaUsuarios.map((usuarios) => {
              return <EditarUsuarios key={nanoid()} usuarios={usuarios} />;
            })}
          </table>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={5000} />
      <br />
    </div>
  );
};

export default Usuarios;
