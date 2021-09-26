window.onload = iniciar;


function iniciar() {
  var btnGuardar = document.getElementById("btnGuardar");
  btnGuardar.addEventListener("click", clickBtnGuardar);
}

function clickBtnGuardar() {
  

  if (document.getElementById('switch').checked)
  {
  alert('El usuario cambiado a activo'/*+' '+(combo.innerText.valueOf())*/);
  }else{
    alert('El usuario cambiado a inactivo');
  };
  // selected();
}

// function selected(){
//   var combo = document.getElementById("rol");
//   var selected = combo.options[combo.textContent];
  
//   alert(selected);
// }