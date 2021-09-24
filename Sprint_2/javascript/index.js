window.onload = iniciar;

function iniciar() {
  var btnGuardar = document.getElementById("btnGuardar");
  btnGuardar.addEventListener("click", clickBtnGuardar);

  var btnBorrar = document.getElementById("btnBorrar");
  btnBorrar.addEventListener("click", clickLimpiarFormulario);
  
}

// function btnGuardar(){
//   var btnGuardar = document.getElementById("btnGuardar");
//   btnGuardar.addEventListener("click", clickBtnGuardar);
// }

function clickBtnGuardar() {
  alert("Se guardaron los correctamente");
}

// function btnBorrar() {
//   var btnBorrar = document.getElementById("btnBorrar");
//   btnBorrar.addEventListener("click", clickLimpiarFormulario);
// }

function clickLimpiarFormulario() {
  document.getElementById("inputAct").value="";
  document.getElementById("inputAct6").value="";
  document.getElementById("inputAct2").value="";
  document.getElementById("inputAct3").value="";
  document.getElementById("inputAct4").value="";
  document.getElementById("inputAct5").value="";
      
}