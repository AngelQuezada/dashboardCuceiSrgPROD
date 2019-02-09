<!DOCTYPE html>
<html>
<head>
	<title>CUCEI-SRG | Reportes Cancelados</title>
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
		        Reportes Cancelados-Mantenimiento
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard-Mantenimiento</a></li>
				<li class="active">Reportes Cancelados</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
		<ol class="breadcrumb" style="background-color: black; color: white;">
				<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard Mantenimiento</a></li>
				<li class="active">Reportes Cancelados</li>
			</ol>
			<div class="row">
				<div class="input-field col-sm-12">
					<fieldset style="border: 1px solid gray;">
						<kbd>Listado de Reportes</kbd>
						<div class="col-sm-12">
							<button class="btn btn-primary" onclick="reportesTodos()">Refrescar</button>
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
<script type="text/javascript" src="assets/js/reportes-cancelados.js"></script>
</body>
</html>