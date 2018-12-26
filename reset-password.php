<!DOCTYPE html>
<html>
<head>
  <title>Admin-CUCEI-SRG | Registro</title>
  <?php
      include('header.php');
  ?>
</head>
<body class="hold-transition register-page">
<div class="register-box">
  <div class="register-logo">
    <b>Admin</b>CUCEI-SRG
  </div>
  <form autocomplete="off">
    <div class="register-box-body">
      <div class="login-logo">
        Restablecer Contraseña
        <hr style="background-color: gray">
      </div>
          <div class="form-group">
            <label for="correo" style="color: blue;">Ingrese su correo eletrónico actual</label>
            <i class="fa fa-envelope"></i>
            <input type="email" class="form-control" placeholder="correo@cucei.udg.mx" id="email" required>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <button type="button" class="btn btn-primary btn-block btn-flat" onclick="resetPassword();">Enviar solicitud</button>
            </div>
            <div class="col-sm-12">
              <button type="button" class="btn btn-danger btn-block btn-flat" onclick="regresar();">Regresar</button>
            </div>
          </div>
    </div> 
  </form>
</div>
 <?php
      include('footer.php');
 ?>
<script src="assets/js/registro.js" type="text/javascript"></script>
</body>
</html>