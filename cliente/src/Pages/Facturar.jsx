import React from 'react';

const Facturar = () => {
    return (
        <div>
           <div class="main">
                <div class="modulo">
                <h3>Modulo de Administación</h3>
                </div>
    
                <form class="my-form">
                    <b class="interfaz_producto">Producto</b><br/><br/>
                    <div class="container">
                        <select>
                            <option select disable>Seleccione</option>
                            <option value="1-L">Laptop</option>
                            <option value="2-C">Camara</option>
                            <option value="3-T">Televisor</option>
                            <option value="4-U">USB</option>   
                        </select>
                    </div> <br/>
                    <div class="grid grid-2">
                        <input type="number" placeholder="Precio" required />
                        <input type="number" placeholder="Cantidad" required/>
                    </div>
                    <div id="btn_guardar"></div>

            <button a id="btnGuardar" href="#" class= "btn btn-primary btn-block btn-large"><b>Guardar</b></button>
        </form>
        </div>
        <br/><br/>
        <div id="tabla_interfaz">
        <table>
            <thead>
                <tr>
                    <th>Producto</th> <th>Precio</th> <th>Cantidad</th><th>SubTotal</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
        </table>
    </div>
    <div id="iva"> 
        <p><b>IVA:</b></p>
        <input type="number" id="IVA" class="caja"/>
    </div> <br/>
    <div id="total"> 
        <p><b>Total:</b></p>
        <input type="number" id="Total" class="caja"/>
    </div>
    </div>
    )
}

export default Facturar;