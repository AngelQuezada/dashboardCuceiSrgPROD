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
<body class="hold-transition skin-blue sidebar-mini fixed" ng-app="">
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
		        Administrar Encargados
		        <small>Sistema de Reportes Generales</small>
          </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
          <li class="active">Administrar Encargados</li>
        </ol>
    	</section>
  	<section class="content">
    <ol class="breadcrumb" style="background-color: black;">
      <li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active" style="color: white;">Administrar Encargados</li>
    </ol>
    <div class="alert alert-info alert-dismissible" style="background: green;">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      <h4><i class="icon fa fa-info"></i>Ayuda</h4>
      <h4>Ingresar al menos 1 Apellido o Nombre para realizar la búsqueda.</h4>
      De click sobre el botón Registrar: <i class="fa fa-user-plus" aria-hidden="true"></i> para dar de alta un nuevo encargado.<br/>
      De click sobre el botón Buscar: <i class="fa fa-search" aria-hidden="true" style="color: white"></i> Para buscar un encargado.
    </div>
    <div class="row">
	    <div class="input-field col-sm-12">
            <div class="box box-solid box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Alta de Encargado</h3>
                </div>
			    <div class="box-body">
                <form name="formulario" autocomplete="off" required>
				    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtApaterno" id="txtApaterno" placeholder="Apellido Paterno" ng-model="txtApaterno" required style="text-transform:uppercase">
                        <label for="txtApaterno" style="color: black;">Apellido Paterno</label>
				    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtAmaterno" id="txtAmaterno" placeholder="Apellido Materno" ng-model="txtAmaterno" required style="text-transform:uppercase">
                        <label for="txtAmaterno" style="color: black;">Apellido Materno</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtNombre" id="txtNombre" placeholder="Nombre" ng-model="txtNombre" required style="text-transform:uppercase">
                        <label for="txtNombre" style="color: black;">Nombre</label>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary" id="idRegistroEncargado" onclick="registrarEncargado()" ng-disabled="formulario.$invalid" style="background-color: #0039cb; color: white;"><i class="fa fa-user-plus" aria-hidden="true"></i> Registrar</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
	</div>
<!-- Buscar Encargado -->
    <div class="row">
	    <div class="input-field col-sm-12">
            <div class="box box-solid box-success">
                <div class="box-header with-border">
                    <h3 class="box-title">Buscar Encargado</h3>
                </div>
			    <div class="box-body">
				    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtApaternoS" id="txtApaternoS" placeholder="Apellido Paterno" style="text-transform:uppercase">
                        <label for="txtApaternoS" style="color: black;">Apellido Paterno</label>
				    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtAmaternoS" id="txtAmaternoS" placeholder="Apellido Materno" style="text-transform:uppercase">
                        <label for="txtAmaternoS" style="color: black;">Apellido Materno</label>
                    </div>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" name="txtNombreS" id="txtNombreS" placeholder="Nombre" style="text-transform:uppercase">
                        <label for="txtNombreS" style="color: black;">Nombre</label>
                    </div>
                    <div class="col-sm-2">
                        <button class="btn btn-primary" onclick="buscarEncargado()" id="btnBuscarEncargado" style="background-color: #00695c; color: white;"><i class="fa fa-search" aria-hidden="true"></i> Buscar</button>
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
