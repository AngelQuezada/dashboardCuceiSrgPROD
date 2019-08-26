<?php
session_start();
if (!isset($_SESSION['personal'])){ 
  echo "<script>window.location.replace(`401.php`);</script>"; 
  } 
?>
<?php
  require('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>SRG | Administrar Encargados</title>
	<?php
    include('header.php');
  ?>
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
		        Administrar Encargados
		        <small style="color: #f5f5f5">Sistema de Reportes Generales</small>
          </h1>
        <ol class="breadcrumb">
          <li><a href="#" style="color: #f5f5f5"><i class="fa fa-dashboard"></i> Dashboard</a></li>
          <li class="active" style="color: #f5f5f5">Administrar Encargados</li>
        </ol>
    	</section>
  	<section class="content">
    <ol class="breadcrumb" style="background-color: black;">
      <li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard" style="color: #f5f5f5"></i> Dashboard</a></li>
      <li class="active" style="color: white;" style="color: #f5f5f5">Administrar Encargados</li>
    </ol>
    <div class="alert alert-default alert-dismissible" style="background: #12005e;">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      <h4><i class="icon fa fa-info"></i>Ayuda</h4>
      <h4>Ingresar al menos 1 Apellido o Nombre para realizar la búsqueda.</h4>
      De click sobre el botón Registrar: <i class="fa fa-user-plus" aria-hidden="true"></i> para dar de alta un nuevo encargado.<br/>
      De click sobre el botón Buscar: <i class="fa fa-search" aria-hidden="true" style="color: white"></i> Para buscar un encargado.
    </div>
    <div class="row">
	    <div class="input-field col-sm-12">
            <div class="box box-solid box-default">
                <div class="box-header with-border" style="background: #000000">
                    <h3 class="box-title" style="color: #f5f5f5">Alta de Encargado</h3>
                </div>
			    <div class="box-body" style="background: #212121;">
                <form name="formulario" autocomplete="off" required>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" name="txtApaterno" id="txtApaterno" placeholder="Apellido Paterno" ng-model="txtApaterno" style="text-transform:uppercase; color: #f5f5f5;" required>
                    <span style="color: crimson;" ng-show="formulario.txtApaterno.$touched && formulario.txtApaterno.$invalid">Apellido paterno es requerido.<br/></span>
                    <label for="txtApaterno" style="color: #f5f5f5">Apellido Paterno</label>
                  </div>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" name="txtAmaterno" id="txtAmaterno" placeholder="Apellido Materno" ng-model="txtAmaterno" style="text-transform:uppercase; color: #f5f5f5;">
                      <label for="txtAmaterno" style="color: #f5f5f5">Apellido Materno</label>
                    </div>
                    <div class="col-sm-3">
                      <input type="text" class="form-control" name="txtNombre" id="txtNombre" placeholder="Nombre" ng-model="txtNombre" style="text-transform:uppercase; color: #f5f5f5;" required>
                      <span style="color: crimson;" ng-show="formulario.txtNombre.$touched && formulario.txtNombre.$invalid">Nombre es requerido.<br/></span>
                      <label for="txtNombre" style="color: #f5f5f5">Nombre</label>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary" id="idRegistroEncargado" onclick="registrarEncargado()" ng-disabled="formulario.$invalid" style="background-color: #0039cb; color: white; border-radius: 20px"><i class="fa fa-user-plus" aria-hidden="true"></i> Registrar</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
	</div>
<!-- Buscar Encargado -->
    <div class="row">
	    <div class="input-field col-sm-12">
            <div class="box box-solid box-default">
                <div class="box-header with-border" style="background: #000000">
                    <h3 class="box-title" style="color: #f5f5f5">Buscar Encargado</h3>
                </div>
			    <div class="box-body" style="background: #212121;">
				    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtApaternoS" id="txtApaternoS" placeholder="Apellido Paterno" style="text-transform:uppercase; color: #f5f5f5">
                        <label for="txtApaternoS" style="color: #f5f5f5">Apellido Paterno</label>
				    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtAmaternoS" id="txtAmaternoS" placeholder="Apellido Materno" style="text-transform:uppercase; color: #f5f5f5">
                        <label for="txtAmaternoS" style="color: #f5f5f5">Apellido Materno</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtNombreS" id="txtNombreS" placeholder="Nombre" style="text-transform:uppercase; color: #f5f5f5">
                        <label for="txtNombreS" style="color: #f5f5f5">Nombre</label>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary" onclick="buscarEncargado()" id="btnBuscarEncargado" style="background-color: #00695c; color: white; border-radius: 20px;"><i class="fa fa-search" aria-hidden="true"></i> Buscar</button>
                    </div>
                </div>
            </div>
        </div>
	</div>
    <span id="modalEncargado"></span>
    <span id="tablaEncargado"></span>
  	</section>
  </div>
<?php
    include("control-sidebar.php");
?>
	</div>
<?php
    include('footer.php');
?>
<script async src="assets/js/libs/angular.min.js" type="text/javascript"></script>
<script type="text/javascript" src="assets/js/administrar-encargados.js"></script>
</body>
</html>
