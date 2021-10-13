import React from 'react'

const Producto = () => {
    return (
        <div>
            <div class="modulo">
                <h3>Modulo de Administación</h3>
            </div>
            <br></br>
            <br></br>

            <center>                
                <table>
                    <tr>
                        <th >ID</th>
                        <th>GRUPO</th>
                        <th >NOMBRE PRODUCTO</th>
                        <th >PRESENTACIÓN</th>
                        <th >PRECIO</th>
                        <th >REFERENCIA</th>
                        <th >CÓDIGO DE BARRA</th>

                        
                    </tr>
                    <TR>
                        <td>1</td>
                        <TD>BEBIDAS PACK</TD>
                        <TD>JUGO HIT VARIOS PACKX6</TD>
                        <TD>SIXPACK</TD>
                        <TD>8900</TD>
                        <TD>N-A</TD>
                        <TD>77905567224</TD>
                    </TR>
                        <td>2</td>
                        <TD>BEBIDAS PACK</TD>
                        <TD>ALPIN VARIOS PACKX6</TD>
                        <TD>SIXPACK</TD>
                        <TD>12900</TD>
                        <TD>N-A</TD>
                        <TD>77905576413</TD>
                    <tr>
                        <td>3</td>
                        <TD>BEBIDAS PACK</TD>
                        <TD>PONNY MALTA PACKX6</TD>
                        <TD>SIXPACK</TD>
                        <TD>5900</TD>
                        <TD>N-A</TD>
                        <TD>77905507537</TD>
                    </tr>
                        <td>4</td>
                        <TD>BEBIDAS PACK</TD>
                        <TD>DEL VALLE SURTIDOS PACKX6</TD>
                        <TD>SIXPACK</TD>
                        <TD>7900</TD>
                        <TD>N-A</TD>
                        <TD>77905567227</TD>
                    <tr>
                        <td>5</td>
                        <TD>BEBIDAS</TD>
                        <TD>JUGO HIT VARIOS PACKX6</TD>
                        <TD>SIXPACK</TD>
                        <TD>8900</TD>
                        <TD>N-A</TD>
                        <TD>77905567224</TD>
                    </tr>

                </table>

            </center>
            <br>
            <div class="lp">

            <P>
                No. Páginas 1 de 25 
                <button> << Anterior</button>
                <button> Siguiente >></button>
                <input class="busqueda" type="text" placeholder="Buscar">

            </P>

            <div>
                <a href="/src/edicionproducto.html">
                    <button>Editar producto</button>
                </a>
                
                <a href="/src/venta.html">
                    <button>Registrar nuevo producto</button>
                </a>
            </div>
        </div>
    )
}

export default Producto
