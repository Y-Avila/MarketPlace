import React from 'react';
import 'style/styleVenta.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Ventas from "Pages/Admin/Ventas";

const VentasRegistrar = () => {

    const [productos, setProductos] = useState([])
    const [id_vendedor, setId_vendedor] = useState([])
    const [codigo, setCodigo] = useState([])
    const [productoventa, setproductoventa] = useState([])    
    const [cantidad, setCantidad] = useState([])
    const [precio, setPrecio] = useState([])
    const [total, setTotal] = useState([])

    const getProductos = async () => {

        const options = {
            method: 'GET',
            url: 'http://localhost:5000/productos'
        };

        await axios
            .request(options)
            .then(function (response) {
                setProductos(response.data);
            }).catch(function (error) {
                console.error(error);
            });
    }

    useEffect(() => {
        getProductos();
    }, []); 
    
    
    const enviarDatos = async() => {

        const options = {
         method: "POST",
         url: "http://localhost:5000/ventas",
         headers: { "Content-Type": "application/json" },
         data: {
            codigo:codigo,
            id_vendedor:id_vendedor,
            producto:productoventa,
            cantidad:cantidad,
            precio:precio,
            total:total
         },
       };   
       return(
            <Ventas/>
        )         
    }

    return (
        <div>
           <div className="main">
                <div className="modulo">
                    <h3>Modulo de Administación</h3>
                </div>
    
                <form>
                    <div className="contenedorformularioventa">

                        <input 
                            value={codigo}
                            onChange={(e) => {
                                setCodigo(e.target.value);
                                }}
                            placeholder="Codigo de Venta" 
                            required 
                        />

                        <input 
                            value={id_vendedor}
                            onChange={(e) => {
                                setId_vendedor(e.target.value);
                                }}
                            placeholder="id_vendedor" 
                            required 
                        />

                        <select
                            value={productoventa}
                            onChange={(e) => {
                            setproductoventa(e.target.value);
                            }}
                            defaultValue={0} 
                            required
                            > 
                            <option value={0}>Seleccionar un producto</option>  

                            {
                            productos.map((productos, key) => (
                                <option key={productos._id}>
                                    {productos.descripcion}
                                </option>
                            ))
                            } 
                        </select>

                        <input
                            disabled 
                            placeholder="Presentacion"                            
                        />

                        <input 
                            value={cantidad}
                            onChange={(e) => {
                                setCantidad(e.target.value);
                                }}
                            placeholder="Cantidad" 
                            required
                        />
                        <input 
                            value={precio}
                            onChange={(e) => {
                                setPrecio(e.target.value);
                                }}
                            placeholder="Precio" 
                            required
                        />

                        <input 
                            value={total}
                            onChange={(e) => {
                                setTotal(e.target.value);
                                }}
                            disabled 
                            placeholder="Total" 
                            required
                        />  

                                                        
                        <button type="submit" className="Botonguardarventa"
                            
                            onClick={() => {
                                enviarDatos();
                            }}> 
                                Guardar
                        </button>  
                        
                        
                    </div>
                </form>
        </div>
    </div>
    )
}

export default VentasRegistrar;