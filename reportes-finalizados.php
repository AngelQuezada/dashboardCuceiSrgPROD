<!DOCTYPE html>
<html>
<head>
	<title>CUCEI-SRG | Reportes Finalizados</title>
	<?php
    	include('header.php');
  	?>
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
		        Reportes Finalizados-Mantenimiento
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard-Mantenimiento</a></li>
				<li class="active">Reportes Finalizados</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
			<ol class="breadcrumb" style="background-color: black; color: white;">
				<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard Mantenimiento</a></li>
				<li class="active">Reportes Finalizados</li>
			</ol>
			<div class="alert alert-info alert-dismissible" style="background: green;">
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
				<h4><i class="icon fa fa-info"></i>Ayuda</h4>
				De click sobre el ícono: <i class="fa fa-external-link" aria-hidden="true"></i> para ver el reporte.<br/>
			</div>
			<div class="row">
				<div class="input-field col-sm-12">
					<fieldset style="border: 1px solid gray;">
						<kbd>Listado de Reportes</kbd>
						<div class="col-sm-12">
							<button class="btn btn-primary" onclick="reportesTodos()" style="background-color: #00c853; color: white;">Refrescar</button>
						</div>
					</fieldset>
				</div>
			</div>
<span id="tablaResultados"></span>
<span id="modal"></span>
    	</section>
    </div>
    <?php
    	include("control-sidebar.php");
  	?>
	</div>
	<?php
  		include('footer.php');
	?>
<script type="text/javascript" src="assets/js/reportes-finalizados.js"></script>
</body>
</html>
