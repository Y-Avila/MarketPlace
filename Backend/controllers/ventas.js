const { response } = require('express');
// const Categoria = require('../models/Categoria');
const Venta = require('../models/Venta');

/**getVentas */

const getVentas = async (req, resp = response) => {


    // const ventas = await Venta.find();

    // const ventas = await Venta.find()
    //                                 .populate('category');

    const ventas = await Venta.find()
                                    .populate('category', 'name');    

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Ventas',
        ventas
    });
}

/**crearVenta */

const crearVenta = async (req, resp = response) => {

    const venta = new Venta(req.body);

    try {
        const ventaSave = await venta.save();
        resp.status(201).json({
            ok: true,
            msg: 'Venta creada de manera exitosa',
            ventaSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear la venta',
        });
    }
}

/**actualizarVenta */

const actualizarVenta = async (req, resp = response) => {

    const ventaId = req.params.id;

    try {
        
        const venta = await Venta.findById(ventaId);

        if(!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del venta no coincide con ningun elemento en la base de datos',
            });
        }

        const ventaActualizado = await Venta.findByIdAndUpdate(ventaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Venta actualizado de manera exitosa',
            venta: ventaActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el venta',
        });
    }
}

/**eliminarVenta */

const eliminarVenta = async (req, resp = response) => {

    const ventaId = req.params.id;

    try {
        
        const venta = await Venta.findById(ventaId);

        if(!venta) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del venta no coincide con ningun elemento en la base de datos',
            });
        }

        await Venta.findByIdAndDelete(ventaId);

        resp.json({
            ok: true,
            msg: 'Venta eliminada de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el venta',
        });
    }
}

// const getCategorias = async (req, resp = response) => {
//     try {

//         const categorias = await Categoria.find();
//         resp.status(200).json({
//             ok: true,
//             msg: 'Lista de categorias',
//             categorias
//         });
//     } catch (error) {
//         console.log(error);
//         resp.status(500).json({
//             ok: false,
//             msg: 'error al crear el producto',
//         });
//     }
// }

module.exports = {
    getVentas,
    crearVenta,
    actualizarVenta,
    eliminarVenta,
    
};