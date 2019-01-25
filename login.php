<!DOCTYPE html>
<html>
<head>
  <title>Admin-CUCEI-SRG | Ingreso</title>
  <?php
      include('header.php');
  ?>
</head>
<body class="hold-transition login-page">

<div class="container">
  <div class="row">
    <div class="col-sm-12">
        <div class="card" id="login" style="width:250px">
            <img class="card-img-top" src="">
            <div class="card-body">
              <button class="btn btn-secondary btn-block btn-flat" onclick="registroPage()" id="btnRegistro">Registrate</button>
            </div>
        </div><!-- card -->
    </div>
</div>

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
        <label for="txtCorreo" style="color: blue;">Correo electrónico</label>
        <i class="fa fa-envelope"></i><input type="email" class="form-control" placeholder="correo@dominio.com" id="txtCorreo">
      </div>
      <div class="form-group">
        <label for="txtPassword" style="color: blue;">Contraseña</label>
        <i class="fa fa-key"></i><input type="password" class="form-control" placeholder="Contraseña" id="txtPassword">
      </div>
    </form>
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-primary btn-block btn-flat" onclick="login()" id="btnIngresar">Ingresar</button>
        </div>
        <div class="col-sm-12">
        </div>
         <div class="col-sm-12">
          <button class="btn btn-danger btn-block btn-flat" onclick="resetPwPage()" id="btnResetPassword">¿Contraseña perdida?</button>
        </div>
      </div>
  </div>
</div>
</div><br>
  <?php
      include('footer.php');
  ?>
<script type="text/javascript">
/*
* Funcion rdireccionar index si el usuario esta logeado
*/
let userLogIn = () => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
        }
    });
  }
/*
* Redirecciona a la pagina de registro
*/
let registroPage = () => {
  window.location.replace("http://localhost/DashboardCuceiSrg/registro.php");
}
/*
* Se llama la funcion cuando la pagina carga
*/
window.onload = () => {
  userLogIn();
}
</script>
<script type="text/javascript" src="assets/js/registro.js"></script>
</body>
</html>
