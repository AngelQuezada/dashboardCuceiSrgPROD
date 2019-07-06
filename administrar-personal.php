<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<head>
	<title>SRG | Personal</title>
	<?php
        include('header.php');
    ?>
<link rel="stylesheet" type="text/css" href="assets/css/administrar-personal.css">
</head>
<body class="hold-transition skin-purple sidebar-mini fixed" style="overflow: hidden;" ng-app="">
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
		        Administración de Personal
		        <small style="color: #f5f5f5">Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#"style="color: #f5f5f5"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active" style="color: #f5f5f5">Personal</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
            <ol class="breadcrumb" id="breadcrumbContent">
				<li><a href="dashboard-mantenimiento.php" style="color: #f5f5f5"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active" id="liContent" style="color: #f5f5f5">Administrar Personal</li>
			</ol>
            <h1 style="color: #f5f5f5">¿Qué Desea Hacer?</h1>
            <h4 style="color: #f5f5f5">Seleccione la opción:</h4>
            <div class="alert alert-default alert-dismissible" style="background: #12005e;" id="alertInfo">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i class="icon fa fa-info"></i>Ayuda [PARA ADMINISTRADORES DEL SISTEMA]</h4>
                <h4>Para dar de alta nuevo personal de click sobre el recuadro: "Dar de Alta Nuevo Personal" y despúes asigne su rol.</h4>
                <h4>Servicio Social: Cuando termine se debe dar de baja.</h4>
            </div>
                <div class="row">
                    <div class="col-sm-6" id="divAltaPersonal" data-toggle="modal" data-target="#modalAltaPersonal">
                        <h2>Dar de Alta Nuevo Personal</h2>
                    </div>
                    <div class="col-sm-6" id="divBajaPersonal" data-toggle="modal" data-target="#modalBajaPersonal">
                        <h2>Dar de Baja Personal</h2>
                    </div>
                    <br/>
                    <div class="col-sm-12" id="divHabilitarPersonal" data-toggle="modal" data-target="#modalHabilitarPersonal">
                        <h2>Habilitar Personal dado de Baja</h2>
                    </div>
                    <div class="col-sm-6" id="divAsignarRol" data-toggle="modal" data-target="#modalRolPersonal">
                        <h2>Asignar Roles de Personal</h2>
                    </div>
                    <div class="col-sm-6" id="divConsultaDatosP" data-toggle="modal" data-target="#modalConsultarUsuarioActual" onclick="datosPersonales()">
                        <h2>Consultar Mis Datos Personales</h2>
                    </div>
                </div>
    	</section>
    </div>
        <!-- Modal Alta Personal -->
        <div id="modalAltaPersonal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header" id="headerModalAltaPersonal">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" id="modalBodyAltaPersonal">
                <div class="register-box" style="margin-top: 0px;">
                    <div class="register-logo" style="margin: 0px">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" id="registerboxAltaPersonal" style="background-color: #eeeeee; margin: 0px; border-radius: 20px">
                    <div class="login-logo" style="margin: 0px">
                        Registro de Personal
                    </div>
                    <hr id="hrAltaPersonal" style="background-color: black; margin: 0px">
                    <form name="formularioAlta" autocomplete="off" required>
                        <div class="form-group"  style="margin: 5px">
                            <label for="txtCorreo" id="txtCorreoAltaPersonal">Correo electrónico:</label>
                            </i><input type="email" class="form-control" placeholder="correo@dominio.com" id="txtCorreo" name="txtCorreo" ng-model="txtCorreo" ng-minlength="5" required>
                            <span style="color: crimson;" ng-show="formularioAlta.txtCorreo.$touched && formularioAlta.txtCorreo.$invalid">Correo es requerido.<br/></span>
                        </div>
                        <div class="form-group">
                            <label for="txtPassword" id="txtPasswordAltaPersonal">Contraseña:</label>
                            </i><input type="password" class="form-control" placeholder="Escribe tu password" id="txtPassword" name="txtPassword" ng-model="txtPassword" ng-minlength="6" required>
                            <p id="pNotaPasswordAltaPersonal">La contraseña debe contener al menos 6 carácteres.</p>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" id="btnAltaPersonal" class="btn btn-primary btn-block btn-flat" ng-disabled="formularioAlta.$invalid" style="border-radius: 20px" onclick="altaPersonal();">Registrar</button>
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
            <div class="modal-header" id="headerBajaPersonal">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" id="bodyBajaPersonal" style="margin: 0px">
                <div class="register-box">
                    <div class="register-logo" style="margin: 0px">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" id="registerboxBajaPersonal" style="background-color: #eeeeee; margin: 0px; border-radius: 20px">
                    <div class="login-logo" style="margin: 0px">
                        Baja de Personal
                    </div>
                    <hr id="hrBajaPersonal" style="margin: 0px; color: black">
                    <form autocomplete="off" id="formulario">
                        <h5 id="hAlertaBajaPersonal"><b>Cuidado:</b> <i>El usuario dado de baja <b>NO</b> podrá acceder al sistema hasta que sea habilitado nuevamente.</i></h5>
                        <div class="form-group" style="margin: 0px">
                            <label for="txtCorreoBaja" id="txtCorreoBaja" style="color: blue">Ingresa el Correo Electrónico</label>
                            <input type="email" class="form-control" placeholder="correo@dominio.com" id="txtCorreoBaja" required>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" id="btnBajaPersonal" class="btn btn-primary btn-block btn-flat" style="border-radius: 20px" onclick="bajaPersonal();">Dar de Baja</button>
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
                <div class="register-box" style="margin-top: 0px">
                    <div class="register-logo" style="margin: 0px">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" style="background-color: #eeeeee; margin: 0px; border-radius: 20px">
                    <div class="login-logo" style="margin: 0px">
                        Habilitar Personal
                    </div>
                    <hr style="background-color: black; margin: 0px">
                    <form autocomplete="off" id="formulario">
                        <div class="form-group" style="margin: 5px">
                            <label for="txtCorreoHabilitar" style="color: blue;">Ingresa el Correo Electrónico a habilitar</label>
                            <input type="email" class="form-control" placeholder="correo@cucei.udg.mx" id="txtCorreoHabilitar" required>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <button type="button" class="btn btn-primary btn-block btn-flat" onclick="habilitarPersonal();" style="background-color: #6200ea; color: white; border-radius: 20px">Habilitar Personal</button>
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

 <!-- Modal Asignar Rol Personal -->
 <div id="modalRolPersonal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header" style="background-color: #c51162">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" style="background-color: #cfd8dc;">
                <div class="register-box">
                    <div class="register-logo" style="margin: 0px">
                        <b>Admin</b>CUCEI-SRG
                    </div>
                <div class="register-box-body" style="background-color: #eeeeee; margin: 0px; border-radius: 20px">
                    <div class="login-logo" style="margin: 0px">
                        Asignar Rol
                    </div>
                    <hr style="background-color: gray; margin: 0px">
                    <form autocomplete="off" id="formulario">
                        <div class="form-group" style="margin: 5px">
                            <label for="txtCorreoPersonal" style="color: blue">Ingresa el Correo Electrónico del Personal a Asignar</label>
                            <input type="email" class="form-control" placeholder="correo@dominio.com" id="txtCorreoPersonal" required>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <legend>Elige el Rol a Asignar</legend>
                            </div>

                            <div class="input-field col-sm-6">
                                <label style="color: black;">
                                <input name="rol" id="rol" type="radio" value="3" required/>
                                <span>Admin. Mantenimiento</span>
                                </label>
                            </div>
                            <div class="input-field col-sm-6">
                                <label style="color: black;">
                                <input name="rol" id="rol" type="radio" value="6" required/>
                                <span>Admin. Seguridad</span>
                                </label>
                            </div>
                            <div class="input-field col-sm-6">
                                <label style="color: black;">
                                <input name="rol" id="rol" type="radio" value="4" required/>
                                <span>Personal</span>
                                </label>
                            </div>
                            <div class="input-field col-sm-6">
                                <label style="color: black;">
                                <input name="rol" id="rol" type="radio" value="5" required/>
                                <span>Servicio Social</span>
                                </label>
                            </div>
                            <div class="col-sm-12">
                                <button type="button" id="btnRolPersonal" class="btn btn-primary btn-block btn-flat" onclick="asignarRolPersonal();" style="background-color: #f50057; color: white; border-radius: 20px">Asignar Rol</button>
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
<script>
$(function(){
  let status = localStorage.getItem("status");
  if(status === '1' || status === '4' || status === '5'){
    swal("ADMIN CUCEI-SRG", "No cuenta con los suficientes privilegios para acceder a los demás menús del Sistema. Contacte con el Administrador.", "info");
    $("#alertInfo").remove();
    $("#divAltaPersonal").remove();
    $("#divBajaPersonal").remove();
    $("#divHabilitarPersonal").remove();
    $("#divAsignarRol").remove();
    $("#breadcrumbContent").remove();
  }
});
</script>
<script async src="assets/js/libs/angular.min.js" type="text/javascript"></script>
<script async type="text/javascript" src="assets/js/administrar-personal.js"></script>
</body>
</html>
