<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>SRG | Gráficas</title>
	<?php
    	include('header.php');
	?>
<link rel="stylesheet" type="text/css" href="assets/css/generar-graficas.css">
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
		        Administración de Gráficas
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard-Mantenimiento</a></li>
				<li class="active">Gráficas</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
				<h2>Gráfica de los Estatus del Reporte de Mantenimiento.</h2>
				<div id="containerChart"></div>
    	</section>
    </div>
    <?php
    	include("control-sidebar.php");
  	?>
	</div>
	<?php
  		include('footer.php');
	?>
<script src="https://d3js.org/d3.v2.min.js"></script>
<script type="text/javascript" src="assets/js/administrar-graficas.js"></script>
</body>
</html>