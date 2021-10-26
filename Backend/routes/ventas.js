/*
    Rutas de Venta / Ventas
    host + /api/ventas
*/
const { getVentas, crearVenta, actualizarVenta, eliminarVenta} = require('../controllers/ventas');
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();



router.get('/', getVentas);

router.post(
    '/', 
    [
        check('id_vendedor', 'El id del vendedor es obligatorio').not().isEmpty(),
        check('producto', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('cantidad', 'La cantidad de producto es obligatoria').not().isEmpty(),
        check('precio', 'El precio del producto es obligatorio').not().isEmpty(),
        check('total', 'El total de la compra es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearVenta);

router.patch('/:id', actualizarVenta);

router.delete('/:id', eliminarVenta);



module.exports = router;