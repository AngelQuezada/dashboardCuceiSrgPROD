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
	<title>SRG | Buscar Reporte</title>
	<?php
    include('header.php');
  ?>
  <?php
    include('cookiePolicy.php');
  ?>
</head>
<body class="hold-transition skin-purple sidebar-mini fixed">
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
		        Búsqueda de Reportes
		        <small style="color: #f5f5f5">Sistema de Reportes Generales</small>
          </h1>
        <ol class="breadcrumb">
          <li><a href="#" style="color: #f5f5f5"><i class="fa fa-dashboard"></i> Dashboard-Mantenimiento</a></li>
          <li class="active" style="color: #f5f5f5">Reportes</li>
        </ol>
    	</section>
  	<section class="content">
    <ol class="breadcrumb" style="background-color: black;">
      <li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard</a></li>
      <li class="active" style="color: white;">Buscar Reportes</li>
    </ol>
    <div class="alert alert-default alert-dismissible" style="background: #12005e;">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
      <h4><i class="icon fa fa-info"></i>Ayuda</h4>
      <h5>Apellidos y/o Nombres con la primer letra Mayúscula.</h5>
      <h5>Ingresar al menos 1 Apellido para realizar la búsqueda.</h5>
      De click sobre el ícono: <i class="fa fa-external-link" aria-hidden="true"></i> para ver el reporte.<br/>
      De click sobre el ícono: <i class="fa fa-envelope" aria-hidden="true" style="color: white"></i> Para enviar un correo a la persona quien reportó.
    </div>
		<div class="row">
			<div class="input-field col-sm-12">
      <div class="box box-danger" style="background: #484848">
          <div class="box-header with-border">
            <h3 class="box-title" style="color: #f5f5f5">Buscar Reporte</h3>
          </div>
			 <div class="box-body">
				<div class="col-sm-3">
          <input type="text" class="form-control" name="txtApaterno" id="txtApaterno" placeholder="Apellido Paterno" style="color: #f5f5f5">
          <label for="txtApaterno" style="color: #f5f5f5">Apellido Paterno</label>
				</div>
        <div class="col-sm-3">
          <input type="text" class="form-control" name="txtAmaterno" id="txtAmaterno" placeholder="Apellido Materno" style="color: #f5f5f5">
          <label for="txtAmaterno" style="color: #f5f5f5">Apellido Materno</label>
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" name="txtNombre" id="txtNombre" placeholder="Nombre" style="color: #f5f5f5">
          <label for="txtNombre" style="color: #f5f5f5">Nombre</label>
        </div>
        <div class="col-sm-1">
          <input type="text" class="form-control" name="txtFolio" id="txtFolio" placeholder="Folio" style="color: #f5f5f5">
          <label for="txtFolio" style="color: #f5f5f5">Folio</label>
        </div>
        <div class="col-sm-2">
          <button class="btn btn-primary" id="btnBuscarReporte" style="background-color: #00695c; color: white; border-radius: 20px"><i class="fa fa-search" aria-hidden="true"></i> Buscar</button>
        </div>
        </div>
      </div>
    </div>
		</div>
    <span id="tablaResultados"></span>
    <span id="modal"></span>
    <span id="modalEncargado"></span>
  	</section>
  </div>
    <?php
    	include("control-sidebar.php");
  	?>
	</div>
	<?php
  	include('footer.php');
	?>
<script type="text/javascript" src="assets/js/reportes-busqueda.js"></script>
</body>
</html>
