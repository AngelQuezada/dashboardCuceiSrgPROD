<!DOCTYPE html>
<html>
<head>
  <title>Admin-CUCEI-SRG | Registro</title>
  <?php
      include('header.php');
  ?>
</head>
<body class="hold-transition register-page">
<div class="register-box">
  <div class="register-logo">
    <b>Admin</b>CUCEI-SRG
  </div>
    <div class="register-box-body">
      <div class="login-logo">
        Restablecer Contraseña
        <hr style="background-color: gray">
      </div>
          <div class="form-group" style="text-align: center;">
            <label for="correo" style="color: blue;">Ingrese su correo eletrónico actual</label>
            <input type="email" id="txtCorreoReset" class="form-control" placeholder="correo@cucei.udg.mx" required>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <button type="button" class="btn btn-primary btn-block btn-flat" style="background-color: #1565c0; color: white;" onclick="resetPassword();">Enviar solicitud</button>
            </div>
            <div class="col-sm-12">
              <button type="button" class="btn btn-danger btn-block btn-flat" style="background-color: #f44336; color: white;" onclick="regresar();">Regresar</button>
            </div>
          </div>
    </div> 
</div>
 <?php
      include('footer.php');
 ?>
</body>
<!-- <script type="text/javascript" src="assets/js/registro.js"></script> -->
<script>
$(function() {
  $('#txtCorreoReset').keypress(function(e) {
      if(e.which == 13) {
        resetPassword();
      }
  });
});
/*
* C O R R E G I R  O  A G R E G A R   F I C H E R O  JS  N U E V O
*/
/*
* Redirige hacia la pagina index
*/
let regresar = () => {
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
    //window.history.go(-1);
}
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
* Manda correo electronico para restablecer contraseña a la cuenta actual
* @return Promise
*/
let resetPassword = () => {
  let auth = firebase.auth();
  let email = document.getElementById("txtCorreoReset").value;
  if(email.replace(/\s/g,"") == ""){
        swal("ADMIN CUCEI-SRG","Ingrese su Correo Electrónico Primero", "info");
        return;
      }
    swal("¿Estás Seguro de Restablecer su Contraseña?", {
    icon: 'info',
    title: 'ADMIN CUCEI-SRG',
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
    catch: {
      text: "Restablecer",
      value: "restablecer",
      }
    },
  }).then((value) => {
    switch (value) {
      case "restablecer":
        auth.sendPasswordResetEmail(email).then(function(){
          swal("ADMIN CUCEI-SRG", "¡Correo Enviado!, Verifica tu correo electrónico.","success");
          $('#txtCorreoReset').val('');
          }).catch(function(error){
            let errorCode = error.code;
            swal("¡Oops!", "Verifica tu correo electrónico e inténtalo nuevamente. error code: "+errorCode, "error");
        });
      break;
    }
  });
}
</script>
</html>