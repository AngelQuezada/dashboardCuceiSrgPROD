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
    <b style="color: white">Admin</b><span style="color: white">CUCEI-SRG</span>
  </div>
  <div class="login-box-body" style="border-radius: 20px; background-color: #eeeeee;">
    <div class="login-logo" style="margin: 0px">
      Iniciar Sesión
    </div>
    <hr style="background-color: black; margin: 0px">
    <form name="formulario" autocomplete="off" required>
      <div class="input-group margin-bottom-sm" style="margin: 0px">
        <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw" aria-hidden="true" style="color: #0064b7"></i></span>
        <input type="email" class="form-control" placeholder="Correo Electrónico" id="txtCorreoLogin" name="txtCorreoLogin" ng-model="txtCorreoLogin" ng-minlenght="12" required>
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
<script type="text/javascript" src="assets/js/login.js"></script>
<!-- Script para recaptcha -->
<script type="text/javascript">
var URL = localStorage.getItem('url');
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
let registrarse = () => {
  window.location.replace(`${URL}/registro.php`);
}
</script>
</body>
</html>
