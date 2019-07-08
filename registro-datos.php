<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
  <title>Admin-CUCEI-SRG | Ingreso</title>
  <?php
      include('header.php');
  ?>
  <link rel="stylesheet" type="text/css" href="assets/css/registro-datos.css">
</head>
<body class="hold-transition login-page" style="background: linear-gradient(to right, #2B32B2, #1488CC);" ng-app="">
<div class="login-box" style="margin-top: 0px;">
  <div class="login-logo">
    <b style="color: white">Admin</b><span style="color: white">CUCEI-SRG</span>
  </div>
  <div class="login-box-body" style="border-radius: 20px; background-color: #eeeeee;">
    <div class="login-logo">
      ¡Bienvenid@!
    </div>
    <hr style="background-color: black; margin: 0px">
    <p style="text-align: center;"><b>Completa el registro antes de poder ingresar al sistema.</b></p>
    <p><small style="color: red">*</small><b>Campos Obligatorios</b></p>
    <form name="formulario" autocomplete="off" required>
      <div class="form-group">
        <label for="txtCorreoRegistrado" style="color: blue;">Correo Electrónico Registrado</label>
        <i class="fa fa-envelope"></i><b><input type="email" class="form-control" class="validate" id="txtCorreoRegistrado" required></b>
      </div>
      <div class="form-group">
        <small style="color: red">*<label for="txtNombre" style="color: blue;">Nombre(s)</label>
        <input type="text" class="form-control" placeholder="Ingresa tu Nombre" name="txtNombre" id="txtNombre" ng-model="txtNombre" ng-minlength="4" required>
        <span style="color: crimson;" ng-show="formulario.txtNombre.$touched && formulario.txtNombre.$invalid">Nombre es requerido.<br/></span>
      </div>
      <div class="form-group">
        <small style="color: red">*<label for="txtApaterno" style="color: blue;">Apellido Paterno</label>
        <input type="text" class="form-control" placeholder="Ingresa tu Apellido Paterno" name="txtApaterno" id="txtApaterno" ng-model="txtApaterno" ng-minlength="4" required>
        <span style="color: crimson;" ng-show="formulario.txtApaterno.$touched && formulario.txtApaterno.$invalid">Apellido Paterno es requerido.<br/></span>
      </div>
      <div class="form-group">
        <label for="txtAmaterno" style="color: blue;">Apellido Materno</label>
        <input type="text" class="form-control" placeholder="Ingresa tu Apellido Materno" id="txtAmaterno">
      </div>
    </form>
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-primary btn-block btn-flat" id="btnFinalizarRegistro" ng-disabled="formulario.$invalid" onclick="finalizarRegistro()">Finalizar Registro</button>
        </div>
      </div>
  </div>
</div>
  <?php
    include('footer.php');
  ?>
  <script type="text/javascript">
 var URL = localStorage.getItem("url");
    window.onload = function(){
      if(localStorage.getItem("email") === null){
        window.location.replace(`${URL}/401.php`);
      }
      $('#txtCorreoRegistrado').val(localStorage.getItem("email"));
      document.getElementById("txtCorreoRegistrado").disabled = true;
    }
  </script>
  <script async src="assets/js/libs/angular.min.js" type="text/javascript"></script>
  <script type="text/javascript" src="assets/js/registro.js"></script>
</body>
</html>
