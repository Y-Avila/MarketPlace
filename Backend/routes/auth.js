/*
    Rutas de Usuario / Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { crearUsuario, loginUsuario, revalidarToken, validarUsuarioGoogle, listarUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/auth');
const { validarGoogleAuth } = require('../middlewares/validar-google-auth');
const router = Router();



router.get('/usuario',  listarUsuario);

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ], 
    crearUsuario);

router.patch('/:id',  actualizarUsuario);
    
router.delete('/:id', eliminarUsuario);

router.post(
    '/', 
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
        validarCampos
    ],
    loginUsuario);


router.get('/renew', validarJWT, revalidarToken);

router.post('/google/login', validarGoogleAuth, validarUsuarioGoogle);

// exportar las rutas configuradas
module.exports = router;