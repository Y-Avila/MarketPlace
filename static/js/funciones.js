function multiplicar(){
     var x = parseInt(document.getElementById('Cantidad del Producto').value);
     var y = parseInt(document.getElementById('Valor Unitario').value);
     document.getElementById('Valor Total').innerHTML = x+y;
}