/*
    Rutas de Usuario / Productos
    host + /api/productos
*/
const { getProductos, crearProducto, actualizarProducto, eliminarProducto} = require('../controllers/productos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();



router.get('/', getProductos);

router.post(
    '/', 
    [
        
        check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('descripcion', 'La descripcion del producto es obligatorio').not().isEmpty(),
        check('grupo', 'El grupo del producto es obligatorio').not().isEmpty(),
        check('presentacion', 'La presentacion del producto es obligatorio').not().isEmpty(),
        check('referencia', 'La referencia del producto es obligatorio').not().isEmpty(),
        check('bar_code', 'El codigo de barras del producto es obligatorio').not().isEmpty(),
        
        validarCampos
    ],
    crearProducto);

router.patch('/:id', actualizarProducto);

router.delete('/:id', eliminarProducto);


module.exports = router;