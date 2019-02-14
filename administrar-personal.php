<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<head>
	<title>CUCEI-SRG | Administración de Gráficas</title>
	<?php
    	include('header.php');
  	?>
</head>
<body class="hold-transition skin-blue sidebar-mini">
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
		        Administración de Personal
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active">Personal</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
            <ol class="breadcrumb" style="background-color: black; color: white;">
				<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active">Administrar Personal</li>
			</ol>
            <h1>¿Qué Desea Hacer?</h1>
            <h4>Seleccione la opción:</h4>
                <div class="row">
                    <div class="col-sm-6" data-toggle="modal" data-target="#modalAltaPersonal" style="text-align: center; background-color: #0d47a1; color: white;">
                        <h2>Dar de Alta Nuevo Personal</h2>
                    </div>
                    <div class="col-sm-6" data-toggle="modal" data-target="#modalBajaPersonal" style="text-align: center; background-color: #b71c1c; color: white;">
                        <h2>Dar de Baja Personal</h2>
                    </div>
                    <br/>
                    <div class="col-sm-12" data-toggle="modal" data-target="#modalHabilitarPersonal" style="text-align: center; background-color: #1a237e; color: white;">
                        <h2>Habilitar Personal dado de Baja</h2>
                    </div>
                    <div class="col-sm-12" data-toggle="modal" data-target="#modalAsignarAdministrador" style="text-align: center; background-color: #1b5e20; color: white;">
                        <h2>Asignar Administradores</h2>
                    </div>
                    <div class="col-sm-6" style="text-align: center; background-color: #311b92; color: white;">
                        <h2>Asignar Roles de Personal</h2>
                    </div>
                    <div class="col-sm-6" data-toggle="modal" data-target="#modalConsultarUsuarioActual" onclick="datosPersonales()" style="text-align: center; background-color: #e65100; color: white;">
                        <h2>Consultar Mis Datos Personales</h2>
                    </div>
                </div>
    	</section>
    </div>
        <!-- Modal Alta Personal -->
        <div id="modalAltaPersonal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header" style="background-color: #1565c0;">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" style="background-color: #cfd8dc;">
                <div class="register-box">
                    <div class="register-logo">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" style="background-color: #eceff1;">
                    <div class="login-logo">
                        Registro de Personal
                    </div>
                    <hr style="background-color: gray">
                    <form autocomplete="off">
                        <div class="form-group">
                            <label for="txtCorreo" style="color: blue;">Correo electrónico:</label>
                            </i><input type="email" class="form-control" placeholder="correo@cucei.udg.mx" id="txtCorreo" required>
                        </div>
                        <div class="form-group">
                            <label for="txtPassword" style="color: blue;">Contraseña:</label>
                            </i><input type="password" class="form-control" placeholder="Escribe tu password" id="txtPassword" required>
                            <p style="color: red; text-align: center;">La contraseña debe contener al menos 6 carácteres.</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" class="btn btn-primary btn-block btn-flat" onclick="altaPersonal();" style="background-color: #304ffe; color: white;">Registrar</button>
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

 <!-- Modal Baja Personal -->
 <div id="modalBajaPersonal" class="modal fade" role="dialog">
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
                        Baja de Personal
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
                                <button type="button" class="btn btn-primary btn-block btn-flat" onclick="bajaPersonal();" style="background-color: #f44336; color: white;">Dar de Baja</button>
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

<!-- Modal Habilitar Personal -->
 <div id="modalHabilitarPersonal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header" style="background-color: #1a237e;">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" style="background-color: #cfd8dc;">
                <div class="register-box">
                    <div class="register-logo">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" style="background-color: #eceff1;">
                    <div class="login-logo">
                        Habilitar Personal
                    </div>
                    <hr style="background-color: gray">
                    <form autocomplete="off" id="formulario">
                        <div class="form-group">
                            <label for="txtCorreoHabilitar" style="color: blue;">Ingresa el Correo Electrónico a habilitar</label>
                            <input type="email" class="form-control" placeholder="correo@cucei.udg.mx" id="txtCorreoHabilitar" required>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" class="btn btn-primary btn-block btn-flat" onclick="habilitarPersonal();" style="background-color: #6200ea; color: white;">Habilitar Personal</button>
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

<!-- Modal Asignar Administrador -->
 <div id="modalAsignarAdministrador" class="modal fade" role="dialog">
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
                        Asignar Administrador
                    </div>
                    <hr style="background-color: gray">
                    <form autocomplete="off" id="formulario">
                        <div class="form-group">
                            <label for="txtCorreoHabilitar" style="color: blue;">Ingresa el Correo Electrónico</label>
                            <input type="email" class="form-control" placeholder="correo@cucei.udg.mx" id="txtCorreoAdmin" required>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" class="btn btn-primary btn-block btn-flat" onclick="asignarAdministrador();" style="background-color: #00c853; color: black;">Asignar Administrador</button>
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
<span id="modalPersonal"></span>
<?php
    include("control-sidebar.php");
?>
</div>
<?php
    include('footer.php');
?>
<script type="text/javascript" src="assets/js/administrar-personal.js"></script>
</body>
</html>