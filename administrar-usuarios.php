<?php
session_start();
if (!isset($_SESSION['personal'])){ 
  echo "<script>window.location.replace(`401.php`);</script>"; 
  } 
?>
<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>SRG | Usuarios</title>
    <?php
        include('header.php');
    ?>
<link rel="stylesheet" type="text/css" href="assets/css/administrar-usuarios.css">
</head>
<body class="hold-transition skin-purple sidebar-mini fixed" ng-app="">
	<div class="wrapper">
	  <?php
      include("navbar.php");
    ?>
    <?php
      include("sidebar.php");
    ?>
    <div class="content-wrapper" style="background: #212121; !important">
    	<section class="content-header">
    		<h1 style="color: #f5f5f5">
		        Administración de Usuarios
		        <small style="color: #f5f5f5">Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#" style="color: #f5f5f5"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active" style="color: #f5f5f5">Usuarios</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
				<ol class="breadcrumb" style="background-color:#000a12; color: white;">
					<li><a href="dashboard-mantenimiento.php" style="color: #f5f5f5"><i class="fa fa-dashboard"></i> Dashboard</a></li>
					<li class="active" style="color: #f5f5f5">Administrar Usuarios</li>
				</ol>
				<h1 style="color: #f5f5f5">¿Qué Desea Hacer?</h1>
				<h4 style="color: #f5f5f5">Seleccione la opción:</h4>
				<h3 style="color: #f5f5f5"><b>Usuarios comprende de: Alumnos,Académicos y personal del CUCEI (a excepción del CSG).</b></h3>
				<div class="row">
					<div class="col-sm-6" id="divBajaUsuario" data-toggle="modal" data-target="#modalBanearUsuario" style="text-align: center; background-color: #7f0000; color: white;">
							<h2>Dar de Baja Usuario</h2><br/>
							<h4>Utilizar cuando un usuario infrinja una regla</h4>
					</div>
					<div class="col-sm-6" id="divAltaUsuario" data-toggle="modal" data-target="#modalHabilitarUsuario" style="text-align: center; background-color: #1faa00; color: white;">
						<h2>Habilitar Usuario dado de Baja</h2><br/>
						<h4>Habilitar un usuario del sistema</h4>
					</div>
				</div>
    	</section>
    </div>
		<!-- Modal Banear Usuario -->
 <div id="modalBanearUsuario" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header" style="background-color: #b71c1c;">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" style="background-color: #cfd8dc;">
                <div class="register-box" style="margin-top: 0px;">
                    <div class="register-logo">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" style="border-radius: 20px; background-color: #eeeeee;">
                    <div class="login-logo">
                        Baja de Usuario
                    </div>
                    <hr style="background-color: gray">
                    <form autocomplete="off" name="formulario" id="formulario">
                        <h5 style="background-color: #d32f2f; color: white;">Cuidado: El usuario dado de baja NO podrá acceder al Sistema hasta que sea habilitado nuevamente.</h5>
                        <div class="form-group">
                            <label for="txtCorreoBaja" style="color: blue;">Ingresa el Correo Electrónico a dar de Baja</label>
                            <input type="email" class="form-control" placeholder="Correo Electrónico" id="txtCorreoBaja" name="txtCorreoBaja" ng-model="txtCorreoBaja" ng-minlength="5" required>
                            <span style="color: crimson;" ng-show="formulario.txtCorreoBaja.$touched && formulario.txtCorreoBaja.$invalid">Correo es requerido.<br/></span>
                        </div>
                        <div class="form-group" style="margin: 0px">
                            <label for="txtMotivoBaja" style="color: blue">Ingrese el Motivo de Baja</label>
                            <input type="text" class="form-control" placeholder="Ingresa el Motivo" id="txtMotivoBaja" name="txtMotivoBaja" ng-model="txtMotivoBaja" ng-minlength="5" required>
                            <span style="color: crimson;" ng-show="formulario.txtMotivoBaja.$touched && formulario.txtMotivoBaja.$invalid">Motivo es requerido.<br/></span>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" ng-disabled="formulario.$invalid" class="btn btn-primary btn-block btn-flat" onclick="bajaUsuario();" style="background-color: #f44336; color: white; border-radius: 20px">Dar de Baja</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Modal Habilitar Usuario -->
 <div id="modalHabilitarUsuario" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header" style="background-color: #1b5e20;">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" style="background-color: #cfd8dc;">
                <div class="register-box" style="margin-top: 0px;">
                    <div class="register-logo">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" style="border-radius: 20px; background-color: #eeeeee;">
                    <div class="login-logo" style="margin: 0px">
                        Habilitar Usuario
                    </div>
                    <hr style="background-color: gray">
                    <form autocomplete="off" name="formularioAlta" id="formularioAlta">
                        <div class="form-group">
                            <label for="txtCorreoHabilitar" style="color: blue;">Ingresa el Correo Electrónico a habilitar</label>
                            <input type="email" class="form-control" placeholder="Correo Electrónico" id="txtCorreoHabilitar" name="txtCorreoHabilitar" ng-model="txtCorreoHabilitar" ng-minlength="5" required>
                            <span style="color: crimson;" ng-show="formularioAlta.txtCorreoHabilitar.$touched && formularioAlta.txtCorreoHabilitar.$invalid">Correo es requerido.<br/></span>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" ng-disabled="formularioAlta.$invalid" class="btn btn-primary btn-block btn-flat" onclick="habilitarUsuario();" style="background-color: #00c853; color: white; border-radius: 20px;">Habilitar Usuario</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
    <?php
    	include("control-sidebar.php");
  	?>
	</div>
	<?php
  		include('footer.php');
    ?>
<script async src="assets/js/libs/angular.min.js" type="text/javascript"></script>
<script type="text/javascript" src="assets/js/administrar-usuario.js"></script>
</body>
</html>