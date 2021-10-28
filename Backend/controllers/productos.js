const { response } = require('express');
const Producto = require('../models/Producto');

/**getProductos */

const getProductos = async (req, resp = response) => {


    // const productos = await Producto.find();

    // const productos = await Producto.find()
    //                                 .populate('category');

    const productos = await Producto.find()
                                    .populate();    

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Productos',
        productos
    });
}

/**crearProducto */

const crearProducto = async (req, resp = response) => {

    const producto = new Producto(req.body);

    try {
        const productSave = await producto.save();
        resp.status(201).json({
            ok: true,
            msg: 'Producto creado de manera exitosa',
            productSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el producto',
        });
    }
}

/**actualizarProducto */

const actualizarProducto = async (req, resp = response) => {

    const productoId = req.params.id;

    try {
        
        const producto = await Producto.findById(productoId);

        if(!producto) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la base de datos',
            });
        }

        const productoActualizado = await Producto.findByIdAndUpdate(productoId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Producto actualizado de manera exitosa',
            producto: productoActualizado
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el producto',
        });
    }
}

/**eliminarProducto */

const eliminarProducto = async (req, resp = response) => {

    const productoId = req.params.id;

    try {
        
        const producto = await Producto.findById(productoId);

        if(!producto) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del producto no coincide con ningun elemento en la base de datos',
            });
        }

        await Producto.findByIdAndDelete(productoId);

        resp.json({
            ok: true,
            msg: 'Producto eliminado de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear el producto',
        });
    }
}


module.exports = {
    getProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto,
    
};