<!DOCTYPE html>
<html>
<head>
  <title>SRG | Ingreso</title>
<?php
    include('header.php');
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
      Ingreso
    </div>
    <hr style="background-color: black; margin: 0px">
    <form name="formulario" action="verify.php" method="GET" autocomplete="true" required>
      <div class="input-group margin-bottom-sm" style="margin: 0px">
        <span class="input-group-addon"><i class="fa fa-key fa-fw" aria-hidden="true" style="color: #0064b7"></i></span>
        <input type="email" class="form-control" placeholder="Ingrese su correo electrónico" id="txtCorreo" name="txtCorreo" ng-model="txtCorreo" required>
        <span style="color: crimson;" ng-show="formulario.txtCorreo.$touched && formulario.txtCorreo.$invalid"><b>Correo es requerido.</b><br/></span>
      </div>
      <br>
      <div class="row">
        <div class="col-sm-12">
          <button id="btnLogin" type="submit" class="btn btn-primary btn-block btn-flat" ng-disabled="formulario.$invalid" style="color: black; border-radius: 20px">Siguiente</button>
          <button id="btnAtras" type="button" class="btn btn-danger btn-block btn-flat"  style="background-color: #f44336; color: white; border-radius: 20px" onclick="regresar();">Regresar</button>
        </div>
    </form>
  </div>
  </div>
</div>
<?php
    include('footer.php');
?>
<script async src="assets/js/libs/angular.min.js" type="text/javascript"></script>
<script type="text/javascript">
let regresar = () => {
    window.location.replace(`index.html`);
}
</script>
</body>
</html>
