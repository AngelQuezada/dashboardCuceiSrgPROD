<!DOCTYPE html>
<html>
<head>
  <title>Admin-CUCEI-SRG | Ingreso</title>
  <?php
      include('header.php');
  ?>
</head>
<body class="hold-transition login-page">
<div class="login-box" style="margin-top: 0px;margin-bottom: 0px;">
  <div class="login-logo">
    <b>Admin</b>CUCEI-SRG
  </div>
  <div class="login-box-body">
    <div class="login-logo">
      Iniciar Sesión
    </div>
    <hr style="background-color: black">
    <form autocomplete="off">
      <div class="form-group">
        <label for="txtCorreoLogin" style="color: blue;">Correo electrónico:</label>
        <input type="email" class="form-control" placeholder="correo@dominio.com" id="txtCorreoLogin">
      </div>
      <div class="form-group">
        <label for="txtPassword" style="color: blue;">Contraseña:</label>
        <input type="password" class="form-control" placeholder="Contraseña" id="txtPassword">
      </div>
    </form>
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-primary btn-block btn-flat" style="background-color: #1565c0; color: white;" onclick="login()" id="btnIngresar">Ingresar</button>
        </div>
        <div class="col-sm-12">
        </div>
         <div class="col-sm-12">
          <button class="btn btn-danger btn-block btn-flat" style="background-color: #f44336; color: white;" onclick="resetPwPage()" id="btnResetPassword">¿Contraseña perdida?</button>
        </div>
      </div>
  </div>
</div>
</div><br>
  <?php
      include('footer.php');
  ?>
<script type="text/javascript" src="assets/js/login.js"></script>
</body>
</html>
