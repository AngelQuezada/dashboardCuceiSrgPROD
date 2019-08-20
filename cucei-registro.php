
<!DOCTYPE html>
<html>
<head>
  <title>SRG | Registro</title>
<?php
    include('header.php');
?>
<?php
    include('cookiePolicy.php');
?>
<link rel="stylesheet" type="text/css" href="assets/css/login.css">
<link rel="icon" href="favicon.png">
</head>
<body class="hold-transition login-page" style="overflow: hidden; background: linear-gradient(to right, #2B32B2, #1488CC);" ng-app="">
<div class="login-box" style="margin-top: 0px;">
  <div class="login-logo">
    <img src="assets/img/logo.png" style="width: 60%">
  </div>
  <div class="login-box-body" style="border-radius: 20px; background-color: #eeeeee;">
    <div class="login-logo" style="margin: 0px">
      Registrarse
    </div>
    <div style="text-align: center">
      <h4>Se acepta tanto correo académico <img src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-7.png"></img> ó <b>cucei.udg.mx</b></h4>
    </div>
    <hr style="background-color: black; margin: 0px">
    <form name="formulario" autocomplete="off" required>
      <div class="input-group margin-bottom-sm" style="margin: 0px">
        <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw" aria-hidden="true" style="color: #0064b7"></i></span>
        <input type="email" class="form-control" placeholder="Ingresa tu correo institucional" id="txtCorreoRegistro" name="txtCorreoRegistro" ng-model="txtCorreoRegistro" ng-minlenght="12" required>
        <span style="color: crimson;" ng-show="formulario.txtCorreoRegistro.$touched && formulario.txtCorreoRegistro.$invalid"><b>Correo es requerido.</b><br/></span>
      </div>
               <div class="col-sm-12" style="text-align: center">
          <p><a href="http://www.cucs.udg.mx/sites/default/files/google_academico_-_instrucciones_0.pdf" target="_blank" style="color: rgb(23, 12, 184);">Ayuda Correo Académico Google</a></p>
        </div>
      <div class="input-group margin-bottom-sm" style="margin: 0px;">
        <span class="input-group-addon"><i class="fa fa-key fa-fw" aria-hidden="true" style="color: #ffd600"></i></span>
        <input type="password" class="form-control" placeholder="Ingresa tu nueva contraseña" id="txtPasswordRegistro" name="txtPasswordRegistro" ng-model="txtPasswordRegistro" ng-minlenght="6" required>
        <span style="color: crimson;" ng-show="formulario.txtPasswordRegistro.$touched && formulario.txtPasswordRegistro.$invalid"><b>Password es requerido.</b><br/></span>
      </div>
      <div class="col-sm-12" style="text-align: center" id="captcha"></div>
      <br>
      <div class="row">
        <div class="col-sm-12">
          <button id="btnLogin" class="btn btn-primary btn-block btn-flat" ng-disabled="formulario.$invalid" style="color: white; border-radius: 20px" onclick="verifyReCaptcha()" id="btnIngresar">Registrarse</button>
        </div>
         <div class="col-sm-12" style="text-align: center">
          <a href="ingreso-cucei.php" style="color: #f44336;">Cancelar Registro</a>
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
<!-- Script para recaptcha -->
<script type="text/javascript">
let verifyReCaptcha = () => {
  let captchaVerify =  grecaptcha.getResponse(captcha);
  if(!captchaVerify){
    swal("ADMIN CUCEI-SRG", "Realice el captcha antes de continuar", "error");
  }else{
    registroPersonal();
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
let registroPersonal = () => {
  const config2 = {
    apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
    authDomain: "cucei-srg.firebaseapp.com",
    databaseURL: "https://cucei-srg.firebaseio.com",
    projectId: "cucei-srg",
    storageBucket: "cucei-srg.appspot.com",
    messagingSenderId: "56958534713"
  };
  let secondaryAcc = firebase.initializeApp(config2,"Secondary");
  let email = document.getElementById('txtCorreoRegistro').value;
  let password = document.getElementById('txtPasswordRegistro').value;
  if(/@cucei.udg.mx\s*$/.test(email) || /@academicos.udg.mx\s*$/.test(email)) {
    secondaryAcc.auth().createUserWithEmailAndPassword(email,password).then(function(){
    let user = secondaryAcc.auth().currentUser;
    user.sendEmailVerification().then(function(){
      $('#txtCorreoRegistro').val('');
      $('#txtPasswordRegistro').val('');
      secondaryAcc.auth().signOut();
      secondaryAcc.delete();
      swal("La Cuenta se ha dado de Alta Correctamente", {
              closeOnClickOutside: false,
              closeOnEsc: false,
              title: "ADMIN CUCEI-SRG",
              icon: "success",
                buttons: {
                catch: {
                  text: "Regresar",
                  value: "salir",
                  }
                },
              }).then((value) => {
                switch (value) {
                  case "salir":
                    window.location.replace('ingreso-cucei.php');
                  break;
                }
              });
    });
  }).catch(function(error){
    secondaryAcc.delete();
    let errorCode = error.code;
    let errorMessage = error.message;
    $('#txtCorreoRegistro').val('');
    $('#txtPasswordRegistro').val('');
    if (errorCode == 'auth/invalid-email' && errorMessage == 'The email address is badly formatted.') {
      swal("¡Oops!", "El correo electronico es invalido", "error");
      return;
    }
    if (errorCode == 'The email address is badly formatted.' && errorMessage == 'auth/invalid-email') {
      swal("¡Oops!", "El correo electronico es invalido", "error");
      return;
    }
    if (errorCode == 'auth/weak-password' && errorMessage == 'Password should be at least 6 characters') {
      swal("¡Oops!", "La Contraseña debe tener al menos 6 caracteres", "error");
      return;
    }
    if (errorCode == 'auth/email-already-in-use' && errorMessage == 'The email address is already in use by another account.') {
      swal("¡Oops!", "El correo electronico ya esta registrado en el sistema", "error");
      return;
    }
  });

  }else{
    swal("¡Oops!", "El correo electronico debe de ser institucional cucei.udg.mx o academicos.udg.mx", "error");
    return;
  }
};
$(function() {
  $('#txtPasswordRegistro').keypress(function(e) {
    if(e.which == 13) {
      verifyReCaptcha();
    }
  });
  $('#txtCorreoRegistro').keypress(function(e) {
    if(e.which == 13) {
      verifyReCaptcha();
    }
  });
});
</script>
</body>
</html>
