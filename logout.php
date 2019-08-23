<?php
session_start();

// Destruir todas las variables de sesión.
$_SESSION = array();

// Si se desea destruir la sesión completamente, borre también la cookie de sesión.
// Nota: ¡Esto destruirá la sesión, y no la información de la sesión!
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Finalmente, destruir la sesión.
session_destroy();
?>
<link rel="stylesheet" type="text/css" href="assets/css/logout.css">
<body style="background: linear-gradient(to right, #2B32B2, #1488CC);">
<div style="text-align: center">
  <img src="assets/img/logo.png" style="width: 20%">
</div>
</body>
<?php
  include('footer.php');
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
      window.location.replace(`${URL}/index.html`);
    },
    error: function() {
      alert('Ha ocurrido un error al intentar cerrar sesión ');
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
