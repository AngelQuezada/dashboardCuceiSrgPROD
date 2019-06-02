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
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />

</head>
<body class="hold-transition login-page" style="overflow: hidden; background: linear-gradient(to right, #2B32B2, #1488CC);" ng-app="">
<div class="login-box" style="margin-top: 0px;">
  <div class="login-logo">
    <b style="color: white">Admin</b><span style="color: white">CUCEI-SRG</span>
  </div>
  <div class="login-box-body" style="border-radius: 20px; background-color: #eeeeee">
    <div class="login-logo">
      Iniciar Sesión
    </div>
    <hr style="background-color: black">
    <form name="formulario" autocomplete="off" required>
      <div class="input-group margin-bottom-sm">
        <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw" aria-hidden="true" style="color: #0064b7"></i></span>
        <input type="email" class="form-control" placeholder="Correo Electrónico" id="txtCorreoLogin" name="txtCorreoLogin" ng-model="txtCorreoLogin" ng-minlenght="12" required>
        <span style="color: crimson;" ng-show="formulario.txtCorreoLogin.$touched && formulario.txtCorreoLogin.$invalid"><b>Correo es requerido.</b><br/></span>
      </div>
      <div class="input-group margin-bottom-sm">
        <span class="input-group-addon"><i class="fa fa-key fa-fw" aria-hidden="true" style="color: #ffd600"></i></span>
        <input type="password" class="form-control" placeholder="Contraseña" id="txtPassword" name="txtPassword" ng-model="txtPassword" ng-minlenght="6" required>
        <span style="color: crimson;" ng-show="formulario.txtPassword.$touched && formulario.txtPassword.$invalid"><b>Password es requerido.</b><br/></span>
      </div>
      <div class="col-sm-12" style="text-align: center" id="captcha"></div>
      <br>
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-primary btn-block btn-flat" ng-disabled="formulario.$invalid" style="background-color: #00c853; color: white; border-radius: 20px" onclick="verifyReCaptcha()" id="btnIngresar">Ingresar</button>
        </div>
         <div class="col-sm-12">
          <button class="btn btn-danger btn-block btn-flat" style="background-color: #f44336; color: white; border-radius: 20px" onclick="resetPwPage()" id="btnResetPassword">¿Contraseña perdida?</button>
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
    'theme' : 'dark'
  });
};
</script>
</body>
</html>
