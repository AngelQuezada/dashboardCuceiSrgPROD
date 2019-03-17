<!DOCTYPE html>
<html>
<head>
  <title>SRG | Ingreso</title>
<?php
    include('header.php');
?>
<link rel="stylesheet" type="text/css" href="assets/css/login.css">
</head>
<body class="hold-transition login-page" ng-app="">
<div class="login-box" style="margin-top: 0px;margin-bottom: 0px;">
  <div class="login-logo">
    <b>Admin</b>CUCEI-SRG
  </div>
  <div class="login-box-body">
    <div class="login-logo">
      Iniciar Sesión
    </div>
    <hr style="background-color: black">
    <form name="formulario" autocomplete="off" required>
      <div class="input-group margin-bottom-sm">
        <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw" aria-hidden="true"></i></span>
        <input type="email" class="form-control" placeholder="Correo Electrónico" id="txtCorreoLogin" name="txtCorreoLogin" ng-model="txtCorreoLogin" ng-minlenght="12" required>
        <span style="color: crimson;" ng-show="formulario.txtCorreoLogin.$touched && formulario.txtCorreoLogin.$invalid"><b>Correo es requerido.</b><br/></span>
      </div>
      <div class="input-group margin-bottom-sm">
        <span class="input-group-addon"><i class="fa fa-key fa-fw" aria-hidden="true"></i></span>
        <input type="password" class="form-control" placeholder="Contraseña" id="txtPassword" name="txtPassword" ng-model="txtPassword" ng-minlenght="6" required>
        <span style="color: crimson;" ng-show="formulario.txtPassword.$touched && formulario.txtPassword.$invalid"><b>Password es requerido.</b><br/></span>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-primary btn-block btn-flat" ng-disabled="formulario.$invalid" style="background-color: #1565c0; color: white;" onclick="login()" id="btnIngresar">Ingresar</button>
        </div>
         <div class="col-sm-12">
          <button class="btn btn-danger btn-block btn-flat" style="background-color: #f44336; color: white;" onclick="resetPwPage()" id="btnResetPassword">¿Contraseña perdida?</button>
        </div>
    </form>
  </div>
  </div>
</div>
<?php
    include('footer.php');
?>
<script async src="assets/js/libs/angular.min.js" type="text/javascript"></script>
<script type="text/javascript" src="assets/js/login.js"></script>
</body>
</html>
