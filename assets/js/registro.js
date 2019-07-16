var URI = localStorage.getItem('uri');
var URL = localStorage.getItem('url');
/*
* Registro de datos hacia la Base de datos del usuario
* dado de alta en Firebase por primera vez
* @return Promise
*/
let finalizarRegistro = () => {
  let nombre = document.getElementById('txtNombre').value;
  let aPaterno = document.getElementById('txtApaterno').value;
  let aMaterno = document.getElementById('txtAmaterno').value;
  let datos = {
    "nombre" : nombre,
    "aPaterno" : aPaterno,
    "aMaterno" : aMaterno,
    "correo" : localStorage.getItem("email")
  };
  $.ajax({
    type: 'POST',
    url: `${URI}/personal/nuevo`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(){
    window.location.replace(`${URL}/validator.php`);
    },
    error: function(data) {
    swal("¡Oops!", "Hemos tenido un error: "+data.mensaje, "error");
    }
  });
};
