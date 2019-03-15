<!DOCTYPE html>
<html>
<head>
	<title>SRG | Usuarios</title>
	<?php
    	include('header.php');
  ?>
<link rel="stylesheet" type="text/css" href="assets/css/administrar-usuarios.css">
</head>
<body class="hold-transition skin-blue sidebar-mini fixed">
	<div class="wrapper">
	  <?php
      include("navbar.php");
    ?>
    <?php
      include("sidebar.php");
    ?>
    <div class="content-wrapper">
    	<section class="content-header">
    		<h1>
		        Administración de Usuarios
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active">Usuarios</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
				<ol class="breadcrumb" style="background-color: black; color: white;">
					<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard</a></li>
					<li class="active">Administrar Usuarios</li>
				</ol>
				<h1>¿Qué Desea Hacer?</h1>
				<h4>Seleccione la opción:</h4>
				<h3><b>Usuarios comprende de: Alumnos,Académicos y personal del CUCEI (a excepción del CSG).</b></h3>
				<div class="row">
					<div class="col-sm-6" id="divBajaUsuario" data-toggle="modal" data-target="#modalBanearUsuario" style="text-align: center; background-color: #b71c1c; color: white;">
							<h2>Dar de Baja Usuario</h2><br/>
							<h4>Utilizar cuando un usuario infrinja una regla</h4>
					</div>
					<div class="col-sm-6" id="divAltaUsuario" data-toggle="modal" data-target="#modalHabilitarUsuario" style="text-align: center; background-color: #1b5e20; color: white;">
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
                <div class="register-box">
                    <div class="register-logo">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" style="background-color: #eceff1;">
                    <div class="login-logo">
                        Baja de Usuario
                    </div>
                    <hr style="background-color: gray">
                    <form autocomplete="off" id="formulario">
                        <h5 style="background-color: #d32f2f; color: white;">Cuidado: El usuario dado de baja NO podrá acceder al Sistema hasta que sea habilitado nuevamente.</h5>
                        <div class="form-group">
                            <label for="txtCorreoBaja" style="color: blue;">Ingresa el Correo Electrónico a dar de Baja</label>
                            <input type="email" class="form-control" placeholder="correo@cucei.udg.mx" id="txtCorreoBaja" required>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" class="btn btn-primary btn-block btn-flat" onclick="bajaUsuario();" style="background-color: #f44336; color: white;">Dar de Baja</button>
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
                <div class="register-box">
                    <div class="register-logo">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" style="background-color: #eceff1;">
                    <div class="login-logo">
                        Habilitar Usuario
                    </div>
                    <hr style="background-color: gray">
                    <form autocomplete="off" id="formulario">
                        <div class="form-group">
                            <label for="txtCorreoHabilitar" style="color: blue;">Ingresa el Correo Electrónico a habilitar</label>
                            <input type="email" class="form-control" placeholder="correo@cucei.udg.mx" id="txtCorreoHabilitar" required>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" class="btn btn-primary btn-block btn-flat" onclick="habilitarUsuario();" style="background-color: #00c853; color: white;">Habilitar Usuario</button>
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
<script type="text/javascript" src="assets/js/administrar-usuario.js"></script>
</body>
</html>