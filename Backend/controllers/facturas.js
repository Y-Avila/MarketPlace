const { response } = require('express');
const Factura = require('../models/Factura');

const getFacturas = async (req, resp = response) => {



    const facturas = await Factura.find()
                                    .populate();    

    resp.status(200).json({
        ok: true,
        msg: 'Lista de Facturas',
        facturas
    });
}

/**crearProducto */

const crearFactura = async (req, resp = response) => {

    const factura = new Factura(req.body);

    try {
        const facturaSave = await factura.save();
        resp.status(201).json({
            ok: true,
            msg: 'Factura creado de manera exitosa',
            facturaSave
        });

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear la factura',
        });
    }
}

/**actualizarFactura */

const actualizarFactura = async (req, resp = response) => {

    const facturaId = req.params.id;

    try {
        
        const factura = await Factura.findById(facturaId);

        if(!factura) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del factura no coincide con ningun elemento en la base de datos',
            });
        }

        const facturaActualizada = await Factura.findByIdAndUpdate(facturaId, req.body, { new: true });

        resp.json({
            ok: true,
            msg: 'Factura actualizada de manera exitosa',
            factura: facturaActualizada
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear la factura',
        });
    }
}

/**eliminarFactura */

const eliminarFactura = async (req, resp = response) => {

    const facturaId = req.params.id;

    try {
        
        const factura = await Factura.findById(facturaId);

        if(!factura) {
            resp.status(404).json({
                ok: false,
                msg: 'El id del factura no coincide con ningun elemento en la base de datos',
            });
        }

        await Factura.findByIdAndDelete(facturaId);

        resp.json({
            ok: true,
            msg: 'Factura eliminada de manera exitosa'
        });


    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'error al crear la factura',
        });
    }
}



module.exports = {
    getFacturas,
    crearFactura,
    actualizarFactura,
    eliminarFactura,
    
};