<!DOCTYPE html>
<html>
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
		        Reportes Nuevos
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active">Reportes Nuevos</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
			<ol class="breadcrumb" style="background-color: black;">
				<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active" style="color: white;">Reportes Nuevos</li>
			</ol>
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
</body>
<script type="text/javascript" src="assets/js/reportes-nuevos.js"></script>
</html>
