<?php
  require('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
  <title>CUCEI-SRG | Dashboard - Mantenimiento</title>
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
        Dashboard-Mantenimiento
        <small>Sistema de Reportes Generales</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active">Dashboard Mantenimiento</li>
      </ol>
    </section>
    <section class="content">
      <h4 id="fechaActual"></h3>
      <div class="alert alert-info alert-dismissible" style="background: green;">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <h4><i class="icon fa fa-info"></i>¡BIENVENID@!</h4>
        Este es su Dashboard, donde podrá ver el conteo de los reportes de Mantenimiento por cada estatus.<br/>
        En la barra lateral derecha tiene los accesos a cada módulo del sistema para la administración.
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #4d82cb">
              <h3 class="box-title">Reportes en Solicitud</h3>
            </div>
            <div class="box-body" style="background-color: #eceff1">
              <h3><span id="reporteSolicitud"></span> Reportes</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteN"></i>
            </div>
            <div style="background-color: #82b1ff">
            <a href="reportes-nuevos.php" class="small-box-footer" style="color: white">Ver Reportes Nuevos <i class="fa fa-arrow-circle-right" style="color: white"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #0069c0">
              <h3 class="box-title">Reportes Asignados</h3>
            </div>
            <div class="box-body" style="background-color: #eceff1">
              <h3><span id="reporteAsignado"></span> Reportes</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteA"></i>
            </div>
            <div style="background-color: #2196f3">
            <a href="reportes-asignados.php" class="small-box-footer" style="color: white">Ver Reportes Asignados <i class="fa fa-arrow-circle-right" style="color: white"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #4d82cb">
              <h3 class="box-title">Reportes Finalizados</h3>
            </div>
            <div class="box-body">
              <h3><span id="reporteFinalizado"></span> Reportes</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteF"></i>
            </div>
            <div style="background-color: #82b1ff">
            <a href="reportes-finalizados.php" class="small-box-footer" style="color: white">Ver Reportes Finalizados <i class="fa fa-arrow-circle-right" style="color: white"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #0069c0">
              <h3 class="box-title">Reportes Cancelados</h3>
            </div>
            <div class="box-body">
              <h3><span id="reporteCancelado"></span> Reportes</h3>
            </div>
            <div class="overlay">
              <i class="fa fa-refresh fa-spin" id="spinnerReporteC"></i>
            </div>
            <div style="background-color: #2196f3">
            <a href="reportes-finalizados.php" class="small-box-footer" style="color: white">Ver Reportes Cancelados <i class="fa fa-arrow-circle-right" style="color: white"></i></a>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="box box-primary box-solid">
            <div class="box-header" style="background-color: #4d82cb">
              <h3 class="box-title">Comunidad Registrada</h3>
            </div>
            <div class="box-body">
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
