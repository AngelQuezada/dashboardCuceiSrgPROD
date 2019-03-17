<!DOCTYPE html>
<html>
<head>
  <title>SRG | Restablecer</title>
  <?php
      include('header.php');
  ?>
</head>
<body class="hold-transition register-page" ng-app="">
<div class="register-box" style="margin-top: 0%">
  <div class="register-logo">
    <b>Admin</b>CUCEI-SRG
  </div>
    <div class="register-box-body">
      <div class="login-logo">
        Restablecer Contraseña
        <label for="correo" style="color: blue;">Ingrese su correo eletrónico actual</label>
        <hr style="background-color: gray">
      </div>
      <form name="formulario" autocomplete="off" required>
          <div class="input-group margin-bottom-sm">
            <span class="input-group-addon"><i class="fa fa-envelope-o fa-fw" aria-hidden="true"></i></span>
            <input type="email" id="txtCorreoReset" name="txtCorreoReset" class="form-control" placeholder="Correo Electrónico" ng-model="txtCorreoReset" ng-minlenght="12" required>
            <span style="color: crimson;" ng-show="formulario.txtCorreoReset.$touched && formulario.txtCorreoReset.$invalid"><b>Correo es requerido.</b><br/></span>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <button type="button" class="btn btn-primary btn-block btn-flat" ng-disabled="formulario.$invalid" style="background-color: #1565c0; color: white;" onclick="resetPassword();">Enviar solicitud</button>
            </div>
            <div class="col-sm-12">
              <button type="button" class="btn btn-danger btn-block btn-flat"  style="background-color: #f44336; color: white;" onclick="regresar();">Regresar</button>
            </div>
          </div>
    </div> 
    </form>
</div>
 <?php
      include('footer.php');
 ?>
<script async src="assets/js/libs/angular.min.js" type="text/javascript"></script>
<script type="text/javascript" src="assets/js/reset-password.js"></script>
</body>
</html>