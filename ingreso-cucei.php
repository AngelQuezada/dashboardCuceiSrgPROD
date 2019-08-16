<!DOCTYPE html>
<html>
<head>
  <title>SRG | Ingreso</title>
<?php
    include('header.php');
?>
<?php
    include('cookiePolicy.php');
?>
<link rel="stylesheet" type="text/css" href="assets/css/login.css">
</head>
<body class="hold-transition login-page" style="overflow: hidden; background: linear-gradient(to right, #2B32B2, #1488CC);" ng-app="">
<div class="login-box" style="margin-top: 0px;">
  <div class="login-logo">
    <img src="assets/img/logo.png" style="width: 60%">
  </div>
  <div class="login-box-body" style="border-radius: 20px; background-color: #eeeeee;">
    <div class="login-logo" style="margin: 0px">
      Iniciar Sesión
    </div>
    <hr style="background-color: black; margin: 0px">
    <form name="formulario" autocomplete="off" required>
      <div class="input-group margin-bottom-sm" style="margin: 0px">
        <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw" aria-hidden="true" style="color: #0064b7"></i></span>
        <input type="email" class="form-control" placeholder="Correo Institucional" id="txtCorreoLogin" name="txtCorreoLogin" ng-model="txtCorreoLogin" ng-minlenght="12" required>
        <span style="color: crimson;" ng-show="formulario.txtCorreoLogin.$touched && formulario.txtCorreoLogin.$invalid"><b>Correo es requerido.</b><br/></span>
      </div>
      <div class="input-group margin-bottom-sm" style="margin: 0px">
        <span class="input-group-addon"><i class="fa fa-key fa-fw" aria-hidden="true" style="color: #ffd600"></i></span>
        <input type="password" class="form-control" placeholder="Contraseña" id="txtPassword" name="txtPassword" ng-model="txtPassword" ng-minlenght="6" required>
        <span style="color: crimson;" ng-show="formulario.txtPassword.$touched && formulario.txtPassword.$invalid"><b>Password es requerido.</b><br/></span>
      </div>
      <div class="col-sm-12" style="text-align: center" id="captcha"></div>
      <br>
      <div class="row">
        <div class="col-sm-12">
            <button id="btnLogin" class="btn btn-primary btn-block btn-flat" ng-disabled="formulario.$invalid" style="color: black; border-radius: 20px" onclick="verifyReCaptcha()">Ingresar</button>
            <button id="btnRegistro" class="btn btn-primary btn-block btn-flat" style="color: black; border-radius: 20px" onclick="registrarse()">Registrarse</button>
        </div>
        <div class="col-sm-12">
          <button id="btnAtras" type="button" class="btn btn-danger btn-block btn-flat"  style="background-color: #f44336; color: white; border-radius: 20px" onclick="regresar();">Regresar</button>
        </div>
         <div class="col-sm-12" style="text-align: center">
          <a href="#" style="color: #f44336;" onclick="resetPwPage()" id="btnResetPassword">Recuperar contraseña</a>
        </div>
    </form>
  </div>
  </div>
</div>
<?php
    include('footer.php');
?>
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        async defer>
    </script>
<script async src="assets/js/libs/angular.min.js" type="text/javascript"></script>
<script>
  let verifyReCaptcha = () => {
    let captchaVerify =  grecaptcha.getResponse(captcha);
    if(!captchaVerify){
      swal("ADMIN CUCEI-SRG", "Realice el captcha antes de continuar", "error");
    }else{
     login();
    }
  }
  var verifyCallback = function(response) {
    if(response){
    }else{
      alert(response);
    }
  };
  var onloadCallback = function() {
    captcha = grecaptcha.render('captcha', {
      'sitekey' : '6Lfmq6YUAAAAAEANI-3OH-kRXj3gPV4zPa3wsuK8',
      'callback' : verifyCallback,
      'theme' : 'light'
    });
  };

  $(document).ajaxStart(function () {
    Pace.restart();
});

  let registrarse = () => {
    window.location.replace(`cucei-registro.php`);
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
* Inicia Sesión con el Correo/Contraseña de Firebase
* @return Promise
*/
let login = () => {
    let correo = document.getElementById('txtCorreoLogin').value;
    let password = document.getElementById('txtPassword').value;
    if(/@cucei.udg.mx\s*$/.test(correo) || /@academicos.udg.mx\s*$/.test(correo)){
      firebase.auth().signInWithEmailAndPassword(correo, password).then(function(){
        window.location.replace('validator-cucei.php');
    }).catch(function(error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == 'auth/network-request-failed' && errorMessage == 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.') {
        swal("¡Oops!", "Compruebe su Conexión a Internet.", "error");
        return;
        }
        if (errorCode == 'auth/wrong-password' && errorMessage == 'The password is invalid or the user does not have a password.') {
        swal("¡Oops!", "El Correo Electrónico o Contraseña es Inválido.", "error");
        return;
        }
        if (errorCode == 'auth/user-not-found' && errorMessage == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
        swal("¡Oops!", "La Cuenta No Existe.", "error");
        return;
        }
        if (errorCode == 'auth/invalid-email' && errorMessage == 'The email address is badly formatted.') {
        swal("¡Oops!", "El Correo Electrónico es Inválido.", "error");
        return;
        }
    });
    }else{
      swal("¡Oops!", "El correo electronico debe de ser institucional cucei.udg.mx o academicos.udg.mx", "error");
      return;
    }
};
/*
* Se llama la funcion cuando la pagina carga
*/
$(function() {
  userLogIn();
      $('#txtPassword').keypress(function(e) {
          if(e.which == 13) {
            login();
          }
      });
      $('#txtCorreoLogin').keypress(function(e) {
          if(e.which == 13) {
            login();
        }
    });
  });
let resetPwPage = () => {
    window.location.replace('reset-password-cucei.php');
}
let regresar = () => {
  window.location.replace('index.html');
}
/*
* Funcion rdireccionar index si el usuario esta logeado
*/
let userLogIn = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         window.location.replace('validator-cucei.php');
      }
  });
}
</script>
</body>
</html>
