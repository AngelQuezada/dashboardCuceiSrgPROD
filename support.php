<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>SRG | Soporte</title>
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
		        Soporte al Usuario
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
				<li class="active">Soporte</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
            <div class="alert alert-info" style="background: blue">
                <h2><strong>Querid@ Usuario del Sistema:</strong></h2><h3>Como parte de nuestro compromiso al ofrecerle un sistema de calidad, les otorgamos una forma de comunicarse con el equipo de desarrollo de CUCEI-SRG.</h3>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="progress" style="height: 3%;">
                        <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                            <kbd>🚩 CUCEI SRG | Soporte 🚩</kbd>
                        </div>
                    </div>
                </div>
            </div>
            <div class="alert alert-success" style="background: green">
                <div class="row">
                    <div class="col-sm-12">
                        <h2><strong>Correo electrónico de Soporte:</strong></h2><h4>firebase.cuceisrg001@gmail.com</h4>
                        <button class="btn btn-primary" onclick="messageEmail()" style="background-color: white"><a href="mailto:firebase.cuceisrg001@gmail.com?Subject=AyudaCuceiSrg" target="_top" style="color: black">Enviar Correo</a></button>
                    </div>
                </div>
            </div>
    	</section>
    </div>
    <?php
    	include("control-sidebar.php");
  	?>
	</div>
	<?php
  		include('footer.php');
    ?>
<script>
let messageEmail = () =>{
    swal("CUCEI-SRG", "Se abrió una nueva ventana o pestaña del navegador a su correo.", "info");
}
</script>
</body>
</html>