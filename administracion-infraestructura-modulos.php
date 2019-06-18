<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>SRG | Infraestructura</title>
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
		        Administración de Infraestructura
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active">Infraestructura</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
			<h2>Administración de la Infraestructura de CUCEI - Módulos</h2>
            <div class="alert alert-info alert-dismissible" style="background: green;">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h4><i class="icon fa fa-info"></i>Ayuda</h4>
                Aquí podrá administrar los módulos de CUCEI
            </div>
			<button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="agregarModulo()" style="background-color: #00e676; color: white; border-radius: 20px;"><i class="fa fa-plus" aria-hidden="true"></i> Añadir Nuevo Módulo</button>
			<span id="tablaModulos"></span>
            <span id="modalNuevoModulo"></span>
			<span id="modalModificarModulo"></span>
    	</section>
    </div>
    <?php
    	include("control-sidebar.php");
  	?>
	</div>
	<?php
  		include('footer.php');
	?>
<script type="text/javascript" src="assets/js/administrar-modulos.js"></script>
</body>
</html>