<link rel="stylesheet" type="text/css" href="assets/css/logout.css">
<body style="background: linear-gradient(to right, #0f0c29, #302b63, #24243e);">
<h2 style="text-align: center; color: white"><kbd>ADMIN CUCEI-SRG BETA</kbd></h2>
</body>
<?php
  include('footer.php');
?>
<?php
  require_once('centinela.php');
?>
<script type="text/javascript">
$(document).ajaxStart(function () {
  Pace.restart();
})
var URI = localStorage.getItem('uri');
var URL = localStorage.getItem('url');
/*
* Variables de configuracion de Firebase
*/
const config = {
    apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
    authDomain: "cucei-srg.firebaseapp.com",
    databaseURL: "https://cucei-srg.firebaseio.com",
    projectId: "cucei-srg",
    storageBucket: "cucei-srg.appspot.com",
    messagingSenderId: "56958534713"
};
firebase.initializeApp(config);
/*
* Cierra sesion en firebase del usuario logeado
*/
let logout = () => {
  firebase.auth().signOut().then(function() {
    deleteToken();
  }).catch(function() {
    swal("Admin CUCEI-SRG", "Has ocurrido un error al intentar cerrar sesión", "error");
    return;
  });
}
/*
* Se elimina el token de base de datos con referencia al correo
*/
let deleteToken = () => {
  let correo = localStorage.getItem("email");
  let token = localStorage.getItem("token");
  let datos = {
    "correo" : correo,
    "token" : token
  }
  $.ajax({
    type: 'POST',
    url: `${URI}/personal/deletetoken`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(){
      localStorage.clear();
      window.location.replace(`${URL}/index.php`);
    },
    error: function() {
      alert('Ha ocurrido un error al intentar registrarse: ');
    }
  });
}
/*
* Se llama la funcion cuando la pagina carga
*/
window.onload = () => {
  logout();
}
</script>
