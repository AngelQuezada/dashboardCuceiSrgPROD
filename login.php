<!DOCTYPE html>
<html>
<head>
  <title>Admin-CUCEI-SRG | Ingreso</title>
  <?php
      include('header.php');
  ?>
</head>
<body class="hold-transition login-page">
<div class="login-box">
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
        <label for="correo" style="color: blue;">Correo electrónico</label>
        <i class="fa fa-envelope"></i><input type="email" class="form-control" placeholder="correo@cucei.udg.mx" id="correo">
      </div>
      <div class="form-group">
        <label for="password" style="color: blue;">Contraseña</label>
        <i class="fa fa-key"></i><input type="password" class="form-control" placeholder="Contraseña" id="password">
      </div>
    </form>
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-primary btn-block btn-flat" onclick="login()" id="btnIngresar">Ingresar</button>
        </div>
         <div class="col-sm-12">
          <button class="btn btn-danger btn-block btn-flat" onclick="resetPwPage()">¿Contraseña perdida?</button>
        </div>
      </div>
  </div>
</div>
  <?php
      include('footer.php');
  ?>
  <script type="text/javascript">
  const userLogIn = function(){
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
        }
    });
  }
  window.onload = function(){
    userLogIn();
  }
  </script>
  <script type="text/javascript" src="assets/js/registro.js"></script>
</body>
</html>
