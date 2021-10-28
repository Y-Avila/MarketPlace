import React from 'react';
// import 'style/styleVenta.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Ventas from "Pages/Admin/Ventas.jsx";
import useAuth from 'Hook/useAuth';

const base_url = process.env.REACT_APP_RUTA_SERVER;

const VentasRegistrar = () => {
    const auth = useAuth();
    const [productos, setProductos] = useState([])
    const [usuarios, setUsuarios] = useState([])
    const [id_vendedor, setId_vendedor] = useState()
    const [productoventa, setproductoventa] = useState()    
    const [cantidad, setCantidad] = useState()
    const [precio, setPrecio] = useState()
    const [total, setTotal] = useState("$ 0.00")

    const getProductos = async () => {

        const options = {
            method: "GET", url: `${base_url}productos`,
            headers: {
                'Authorization': `Bearer ${auth.token}`
            }
        };

        await axios
            .request(options)
            .then(function (response) {
                setProductos(response.data.productos);
                
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    

    const getUsuarios = async () => {
        const options = {
        method: "GET",
        url:`${base_url}auth/usuario`,
        headers: {
          'Authorization': `Bearer ${auth.token}` 
      }};

      await axios
        .request(options)
        .then(function (response) {
          setUsuarios(response.data.usuario);
        })
        .catch(function (error) {
          console.error(error);
        });

    }


    useEffect(() => {
        getProductos();
        getUsuarios();
    }, []); 

    useEffect(() => {
        setTotal(cantidad*precio);
    }, [cantidad, precio]); 

    
    
    const enviarDatos = async() => {

        const options = {
            method: "POST", url: `${base_url}ventas/`,
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
        
         data: {
           
            id_vendedor:id_vendedor,
            producto:productoventa,
            cantidad:cantidad,
            precio:precio,
            total:total
         },
    };   
               
    
     await  axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      return(
        <Ventas/>
      )
    
    };

    return (
        <div>
           <div className="main">
                <div className="modulo">
                    <h3>Modulo de Administación</h3>
                </div>
    
                <form >
                    <div className="contenedorformularioventa">

                        

                        <select                      
                        
                            value={id_vendedor}
                            onChange={(e) => {
                            setId_vendedor(e.target.value);
                            }}
                            defaultValue={0} 
                            required
                            > 
                            <option value={0}>Seleccionar Nombre del Vendedor</option>  

                            {
                            usuarios.map((usuarios, key) => (
                                <option key={usuarios._id}>
                                    {usuarios.name}
                                </option>
                            ))
                            }
                        </select>

                        
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
                                    {productos.name}
                                </option>
                            ))
                            } 
                        </select>

                        
                        <input 
                            value={cantidad}
                            type="number"
                            min="0"
                            max="20"
                            onChange={(e) => {
                                setCantidad(e.target.value);
                                }}
                            placeholder="Cantidad" 
                            required
                        />
                        <input 
                            value={precio}
                            type="number"
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
                            placeholder={`$${total}` } 
                            
                        /> 
                        <label>                        
                        Total Venta
                        </label> 
                        

                                                        
                        

                        <div>
                            <button type="submit" className="Botonguardarventa"
                                
                                onClick={() => {
                                    enviarDatos();
                                }}> 
                                
                                    Guardar
                                                               
                            </button> 
                            <Link 
                            className="Botonguardarventa"
                            type="submit"
                            to="/admin/Ventas">
                                Regresar a Ventas
                            </Link>

                        </div>
                        
                            
                        
                        
                        
                    </div>
                </form>
        </div>
    </div>
    )
}

export default VentasRegistrar;