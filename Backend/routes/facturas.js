/*
    Rutas de Usuario / Facturas
    host + /api/facturas
*/
const { getFacturas, crearFactura, actualizarFactura, eliminarFactura} = require('../controllers/facturas');
const { validarJWT } = require('../middlewares/validar-jwt');
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();


router.get('/', getFacturas);

router.post(
    '/', 
    [
        check('producto', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('vendedor', 'El nombre del vendedor es obligatorio').not().isEmpty(),
        check('precio', 'El precio del vendedor es obligatorio').not().isEmpty(),
        check('cantidad', 'La cantidad de productos es obligatorio').not().isEmpty(),
        check('sub_total', 'El sub total de la factura es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearFactura);

router.patch('/:id', actualizarFactura);

router.delete('/:id', eliminarFactura);

module.exports = router;