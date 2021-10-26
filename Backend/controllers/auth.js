const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');


const listarUsuario = async (req, resp = response) => {

    const  usuario  = await Usuario.find()
                                    .populate();    

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Usuario',
        usuario
        
    });
}


const crearUsuario = async (req, resp = response) => {

    const { email, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return resp.status(400).json({
                ok: false,
                msg: 'ya existe un usuario registrado con este email'
            });
        }

        usuario = new Usuario(req.body);

        /**Encriptando contraseña */
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        resp.status(201).json({
            ok: true,
            msg: 'Usuario creado de manera exitosa',
            uid: usuario.id,
            name: usuario.name
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al guardar el registro',
        });

    }
}

const actualizarUsuario = async (req, resp = response) => {

    const  usuarioId = req.params.id;

    try {
        
        const usuario = await Usuario.findById(usuarioId);

        if(!usuario) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del usuario no coincide con ningun elemento en la base de datos',
            });
        }

        const usuarioActualizado = await Usuario.findByIdAndUpdate(usuarioId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Usuario actualizado de manera exitosa',
            usuario: usuarioActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el usuario',
        });
    }
}

const eliminarUsuario = async (req, resp = response) => {

    const usuarioId = req.params.id;

    try {
        
        const usuario = await Usuario.findById(usuarioId);

        if(!usuario) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del usuario no coincide con ningun elemento en la base de datos',
            });
        }

        await Usuario.findByIdAndDelete(usuarioId);

        resp.json({
            ok: true,
            msg: 'Usuario eliminado de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el usuario',
        });
    }
}

const loginUsuario = async (req, resp = response) => {

    const { email, password } = req.body;

    try {

        /**Confirmar email */
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Confirmar email */

        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }

        /**Generar Token */
        const token = await generarJWT(usuario.id, usuario.name);

        resp.json({
            ok: true,
            msg: 'Ok',
            uid: usuario.id,
            name: usuario.name,
            token
        });

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }
}

const revalidarToken = async (req, resp = response) => {


    const { uid, name } = req;

    /**Generar Nuevo Token */
    const token = await generarJWT(uid, name);

    resp.json({
        ok: true,
        token: token
    });
}

const validarUsuarioGoogle = async (req, resp = response) => {
    const { uid, name, email, rol, estado } = req;

    try {
        /*Confirmar email */
        let usuario = await Usuario.findOne({ email, idToken: uid  })
           
            
        if (usuario) {

            

            if (usuario.estado === 'Inactivo' || usuario.rol === 'Indefinido' ) {
                // 
                resp.status(401).json({
                    ok: false,
                    msg: 'El usuario aun no ha sido autorizado por el administrador'
                });
            } else {

                /**Generar Token */
                const token = await generarJWT(usuario.id, usuario.name);

                resp.json({
                    ok: true,
                    msg: 'Ok',
                    uid: usuario.id,
                    name: usuario.name,
                    rol: usuario.rol,
                    token
                });
            }
        } else {
            usuario = new Usuario({ 
                name,
                email,
                password: uid,
                idToken: uid });

            const newUser = await usuario.save();
            resp.status(201).json({
                ok: true,
                msg: 'Usuario creado de manera exitosa, para poder acceder comuniquese con el administrador',
                uid: usuario.id,
                name: usuario.name
            });
        }

    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok: false,
            msg: 'error al autenticar',
        });
    }
}

module.exports = {
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    loginUsuario,
    revalidarToken,
    validarUsuarioGoogle,
    listarUsuario
};