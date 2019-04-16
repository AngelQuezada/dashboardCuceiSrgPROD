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
                <h4><strong>Querid@ Usuario del Sistema: <span id="user"></span></strong></h4><h5>Como parte de nuestro compromiso al ofrecerle un sistema de calidad, les otorgamos una forma de comunicarse con el equipo de desarrollo de CUCEI-SRG.</h5>
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
                        <h4>Correo electrónico de Soporte: firebase.cuceisrg001@gmail.com</h4>
                        <button class="btn btn-primary" onclick="messageEmail()" style="background-color: white; color: black;"><i class="fa fa-envelope-o" aria-hidden="true"></i> Enviar Correo</button>
                    </div>
                </div>
            </div>
            <div style="text-align: center">
                <div class="row">
                    <div class="input-field col-sm-5">
                        <div class="box box-solid box-success">
                            <div class="box-header with-border">
                                <h3 class="box-title">Manual de Usuario</h3>
                            </div>
                            <div class="box-body">
                                <button class="btn btn-primary" onclick="manualUsuario()" style="background-color: #64dd17; color: black;"><i class="fa fa-cloud-download" aria-hidden="true"></i> Descargar</button>
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col-sm-5">
                        <div class="box box-solid box-success">
                            <div class="box-header with-border">
                                <h3 class="box-title">Manual Técnico</h3>
                            </div>
                            <div class="box-body">
                                <button class="btn btn-primary" onclick="manualTecnico()" style="background-color: #64dd17; color: black;"><i class="fa fa-cloud-download" aria-hidden="true"></i> Descargar</button>                            
                            </div>
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
let manualUsuario = () => {
    swal("ADMIN CUCEI-SRG", "Disponible Próximamente.", "info");    
}
let manualTecnico = () => {
    swal("ADMIN CUCEI-SRG", "Disponible Próximamente.", "info");
}
let messageEmail = () =>{
    window.open('mailto:firebase.cuceisrg001@gmail.com?Subject=Agregue un Asunto', '_blank');
}
$(function(){
    $('#user').append('<span>'+localStorage.getItem("nombreCompleto")+'</span>.<br/>');
});
</script>
</body>
</html>