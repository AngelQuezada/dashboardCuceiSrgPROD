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
      ¡Bienvenid@!
    </div>
    <hr style="background-color: black">
    <p style="text-align: center;">Completa el registro antes de poder ingresar al sistema.</p>
    <form autocomplete="off">
      <div class="form-group">
        <label for="txtCorreoRegistrado" style="color: blue;">Correo electrónico registrado</label>
        <i class="fa fa-envelope"></i><input type="email" class="form-control" id="txtCorreoRegistrado">
      </div>
      <div class="form-group">
        <label for="txtNombre" style="color: blue;">Nombre</label>
        <i class="fa fa-key"></i><input type="text" class="form-control" placeholder="Nombre" id="txtNombre">
      </div>
      <div class="form-group">
        <label for="txtApaterno" style="color: blue;">Apellido Paterno</label>
        <i class="fa fa-key"></i><input type="text" class="form-control" placeholder="Apellido Paterno" id="txtApaterno">
      </div>
      <div class="form-group">
        <label for="txtAmaterno" style="color: blue;">Apellido Materno</label>
        <i class="fa fa-key"></i><input type="text" class="form-control" placeholder="Apellido Materno" id="txtAmaterno">
      </div>
    </form>
      <div class="row">
        <div class="col-sm-12">
          <button class="btn btn-primary btn-block btn-flat" onclick="finalizarRegistro()">Finalizar Registro</button>
        </div>
      </div>
  </div>
</div>
  <?php
      include('footer.php');
  ?>
  <script type="text/javascript">
    window.onload = function(){
      $('#txtCorreoRegistrado').val(localStorage.getItem("email"));
      document.getElementById("txtCorreoRegistrado").disabled = true;
    }
  </script>
  <script type="text/javascript" src="assets/js/registro.js"></script>
</body>
</html>
