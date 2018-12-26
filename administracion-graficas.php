<?php
  require_once('centinela.php');
?>
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
</html>