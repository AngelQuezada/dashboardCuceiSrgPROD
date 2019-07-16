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
  <title>SRG | Mantenimiento</title>
  <?php
    include('header.php');
  ?>
  <?php
    include('cookiePolicy.php');
  ?>
</head>
<body class="hold-transition skin-purple sidebar-mini fixed" style="overflow: hidden;">
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
        Dashboard-Mantenimiento
        <small style="color: #f5f5f5">Sistema de Reportes Generales</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#" style="color: #f5f5f5"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active" style="color: #f5f5f5">Dashboard Mantenimiento</li>
      </ol>
    </section>
    <section class="content">
      <div class="alert alert-default alert-dismissible" style="background: #12005e;">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="color: white">&times;</button>
        <h4><i class="icon fa fa-info"></i>¡BIENVENID@!</h4>
        Este es su Dashboard, donde podrá ver el conteo de los reportes de Mantenimiento por cada estatus.<br/>
        En la barra lateral derecha tiene los accesos a cada módulo del sistema para la administración.
      </div>
      <!-- <div class="alert alert-error" style="background: red;">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h4><i class="icon fa fa-info"></i>Aviso:</h4>
        <h4><b>En este panel se mostrarán las actualizaciones del sistema.</b></h4>
        <h4>Para cualquier duda y/o problema ir a la sección de soporte.</h4>
      </div> -->
      <div class="row">
        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #0026ca">
              <h3 class="box-title">Reportes en Solicitud</h3>
            </div>
            <div class="box-body" style="background-color: #7a7cff">
              <h3><span id="reporteSolicitud"></span> Reportes</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteN"></i>
            </div>
            <div style="background-color: #0026ca">
            <a href="reportes-nuevos.php" class="small-box-footer" style="color: white">Ver Reportes Nuevos <i class="fa fa-arrow-circle-right" style="color: white"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #0026ca">
              <h3 class="box-title">Reportes Asignados</h3>
            </div>
            <div class="box-body" style="background-color: #7a7cff">
              <h3><span id="reporteAsignado"></span> Reportes</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteA"></i>
            </div>
            <div style="background-color: #0026ca">
            <a href="reportes-asignados.php" class="small-box-footer" style="color: white">Ver Reportes Asignados <i class="fa fa-arrow-circle-right" style="color: white"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #0026ca">
              <h3 class="box-title">Reportes Finalizados</h3>
            </div>
            <div class="box-body" style="background-color: #7a7cff">
              <h3><span id="reporteFinalizado"></span> Reportes</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteF"></i>
            </div>
            <div style="background-color: #0026ca">
            <a href="reportes-finalizados.php" class="small-box-footer" style="color: white">Ver Reportes Finalizados <i class="fa fa-arrow-circle-right" style="color: white"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #0026ca">
              <h3 class="box-title">Reportes Cancelados</h3>
            </div>
            <div class="box-body" style="background-color: #7a7cff">
              <h3><span id="reporteCancelado"></span> Reportes</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteC"></i>
            </div>
            <div style="background-color: #0026ca">
            <a href="reportes-cancelados.php" class="small-box-footer" style="color: white">Ver Reportes Cancelados <i class="fa fa-arrow-circle-right" style="color: white"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #0026ca">
              <h3 class="box-title">Comunidad Registrada</h3>
            </div>
            <div class="box-body" style="background-color: #7a7cff">
              <h3><span id="comunidadRegistrada"></span> Usuarios</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteCR"></i>
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
<script src="assets/js/dashboard-mantenimiento.js" type="text/javascript"></script>
</body>
</html>
