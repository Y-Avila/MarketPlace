window.onload = iniciar;

function iniciar() {
  
    var btnGuardar = document.getElementById("btnGuardar");
    btnGuardar.addEventListener("click", clickBtnGuardar);

}

function clickBtnGuardar() {
  if (document.getElementById('switch').checked){
  
  alert("Registro Guardado")
 
  }
}