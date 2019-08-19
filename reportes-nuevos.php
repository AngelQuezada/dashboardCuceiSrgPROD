<?php
session_start();
if (!isset($_SESSION['personal'])){ 
  echo "<script>window.location.replace(`401.php`);</script>"; 
  } 
?>
<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>SRG | Nuevos Reportes</title>
	<?php
    	include('header.php');
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
		        Reportes Nuevos
		        <small style="color: #f5f5f5">Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="dashboard-mantenimiento.php" style="color: #f5f5f5"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active" style="color: #f5f5f5">Reportes Nuevos</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
			<ol class="breadcrumb" style="background-color: black;">
				<li><a href="dashboard-mantenimiento.php"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active" style="color: white;">Reportes Nuevos</li>
			</ol>
			<div class="alert alert-default alert-dismissible" style="background: #12005e;">
				<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
				<h4><i class="icon fa fa-info"></i>Ayuda</h4>
				De click sobre el ícono: <i class="fa fa-external-link" aria-hidden="true"></i> Para ver el reporte.<br/>
				De click sobre el ícono: <i class="fa fa-bullhorn" aria-hidden="true"></i> Para agregar una observación.<br/>
				De click sobre el ícono: <i class="fa fa-ban" aria-hidden="true"></i> Para cancelar un reporte.<br/>
				De click sobre el ícono: <i class="fa fa-envelope" aria-hidden="true" style="color: white"></i> Para enviar un correo a la persona quien reportó.
			</div>
			<div class="row">
				<div class="input-field col-sm-12">

					<div class="box box-danger" style="background: #484848">
						<div class="box-header with-border">
							<h3 class="box-title" style="color: #f5f5f5">Listado de Reportes</h3>
						</div>
						<div class="box-body">
							<div class="col-sm-12">
								<button class="btn btn-primary" onclick="reportesTodos()" style="background-color: #00695c; color: white; border-radius: 20px">Refrescar</button>
							</div>
						</div>
					</div>

				</div>
			</div>
<span id="tablaResultados"></span>
<span id="modal"></span>
<span id="modalEncargados"><span id="tablaEncargados"></span></span>
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
