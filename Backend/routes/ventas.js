/*
    Rutas de Usuario / Productos
    host + /api/productos
*/
const { getProductos, crearProducto, actualizarProducto, eliminarProducto, getCategorias} = require('../controllers/productos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

/**Aplicar validacion de token a todas las rutas por defecto */
router.use(validarJWT);

router.get('/', getProductos);

router.post(
    '/', 
    [
        check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('bar_code', 'El codigo de barras del producto es obligatorio').not().isEmpty(),
        check('category', 'La categoria del producto es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearProducto);

router.put(
    '/:id', 
    [
        check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('bar_code', 'El codigo de barras del producto es obligatorio').not().isEmpty(),
        check('category', 'La categoria del producto es obligatoria').not().isEmpty(),
        validarCampos
    ],
    actualizarProducto);

router.delete('/:id', eliminarProducto);

router.get('/categorias', getCategorias);

module.exports = router;