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


const base_url=process.env.REACT_APP_RUTA_SERVER;
 
const Usuarios = () => {
  const auth = useAuth();
  const [usuarios, setUsuarios] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      const options = {
        method: "GET",
        url:`${base_url}auth/usuario`,
        headers: {
          'Authorization': `Bearer ${auth.token}` 
      }};

      await axios
        .request(options)
        .then(function (response) {
          setUsuarios(response.data.usuario);
          setEjecutarConsulta(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    if (ejecutarConsulta) {
      obtenerUsuarios(false);
    }
  }, [ejecutarConsulta, auth]);


  return (
    <>
   
      <TablaUsuarios
        listaUsuarios={usuarios}
        setEjecutarConsulta={setEjecutarConsulta}
      />
    </>
  );
};

const EditarUsuarios = ({ usuarios, setEjecutarConsulta}) => {
  const auth = useAuth();
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [newUsuario, setNewUsuario] = useState({
  
    name: usuarios.name,
    email: usuarios.email,
    rol: usuarios.rol,
    estado: usuarios.estado
  });

  const actualizarUsuario = async () => {
    const options = {
      method: "PATCH",
      url: `${base_url}auth/${usuarios._id}`,
      headers: { "Content-Type": "application/json",
      'Authorization': `Bearer ${auth.token}`
    },
      data: newUsuario,
    };

    await axios
      .request(options)
      .then(function (response) {
        toast.success("Usuario modificado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error("Error modificando el usuario");
        console.error(error);
      });
  };

  const eliminarUsuario = async () => {
    const options = {
      method: "DELETE",
      url: `${base_url}auth/${usuarios._id}`,
      headers: { "Content-Type": "application/json", 
      'Authorization': `Bearer ${auth.token}`},
      data: {
        id: usuarios._id,
      },
    };
    
    await axios
      .request(options)
      .then(function (response) {
        toast.success("Usuario eliminado con éxito");
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error("Error eliminado el usuario");
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
              value={newUsuario.name}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, name: e.target.value })
              }
            />
          </td>         
          <td id="email">{usuarios.email}</td>
          <td>
            <select
              id="rol"
              value={newUsuario.estado}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, estado: e.target.value })
              }
              defaultValue=""
              required
            >
              <option disabled value="">
                Seleccione el estado
              </option>
              <option>Inactivo</option>
              <option>Activo</option>
            </select>
          </td>
          <td>
            <select
              id="rol"
              value={newUsuario.rol}
              onChange={(e) =>
                setNewUsuario({ ...newUsuario, rol: e.target.value })
              }
              defaultValue=""
              required
            >
              <option disabled value="">
                Seleccione el Rol
              </option>
              <option >Indefinido</option>
              <option >Vendedor</option>
              <option>Administrador</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td id="nombre">{usuarios.name}</td>
          <td id="email">{usuarios.email}</td>
          <td id="estado">{usuarios.estado}</td>
          <td id="rol">{usuarios.rol}</td>
          
        </>
      )}
      <>
        <td>
          <div className="modificaciones">
            {edit ? (
              <>
                <Tooltip title="Confirmar Actualización" arrow>
                  <i
                    onClick={() => actualizarUsuario()}
                    className="fas fa-check"
                    to="/admin/usuarios"
                  />
                </Tooltip>
                <Tooltip title="Cancelar Actualización" arrow>
                  <i onClick={() => setEdit(!edit)} className="fas fa-ban" />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Actualizar Usuario" arrow>
                  <i onClick={() => setEdit(!edit)} className="far fa-edit" />
                </Tooltip>
                <Tooltip title="Eliminar Usuario" arrow>
                  <i
                    onClick={() => setOpenDialog(true)}
                    eliminarUsuario
                    className="far fa-trash-alt"
                  />
                </Tooltip>
              </>
            )}
          </div>
          <Dialog open={openDialog}>
            <div className="eliminarUsuario">
              <h1 className="eliminarUsuarioH1">
                ¿Está seguro de querer eliminar el Usuario?
              </h1>
              <div className="eliminarUsuarioBotones">
                <button
                  className="eliminarUsuarioBtnSi"
                  onClick={() => eliminarUsuario()}
                >
                  Sí
                </button>
                <button
                  className="eliminarUsuarioBtnNo"
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

const TablaUsuarios = ({ listaUsuarios, setEjecutarConsulta }) => {
  useEffect(() => {}, [listaUsuarios]);

  return (
    <>
      <div className="modulo">
        <h3>Gestión de Usuarios</h3>
      </div>
      <Link className="botonCrear" type="submit" to="/admin/usuarios/crear">
        Crear Nuevo Usuario
      </Link>
      <div className="controlTabla">
        <table className="tableUsuarios">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Rol</th>
              <th>Modificaciones</th>
            </tr>
          </thead>
          <tbody>
            {listaUsuarios.map((usuarios) => {
              return (
                <EditarUsuarios
                  key={nanoid()}
                  usuarios={usuarios}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
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

export default Usuarios;
