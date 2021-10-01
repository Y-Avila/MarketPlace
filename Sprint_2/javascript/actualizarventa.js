window.onload = iniciar;


 
  function iniciar() {
   
    var btnGuardar = document.getElementById("btnGuardarActualizacion");
    btnGuardarActualizacion.addEventListener("click", clickBtnGuardarActualizacion);
 
}

  function clickBtnGuardarActualizacion(){
    if(document.getElementById("inputForm")){
      alert("se actualizo el registro")
      
    }
    
}