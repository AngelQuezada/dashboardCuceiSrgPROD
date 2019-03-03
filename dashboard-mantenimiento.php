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
        Dashboard-Mantenimiento
        <small>Sistema de Reportes Generales</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
        <li class="active">Dashboard Mantenimiento</li>
      </ol>
    </section>
    <section class="content">
      <p id="fechaActual"></p>
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <div class="small-box" style="background-color: #81d4fa">
            <div class="inner">
              <h3><span class="fa fa-spinner fa-spin" style="font-size:24px" id="spinnerReporteN"></span><span id="reporteSolicitud"></span><sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes en solicitud</p>
            </div>
            <div class="icon">
              <i class="ion ion-checkmark-round" style="color: #64dd17"></i>
            </div>
            <a href="reportes-nuevos.php" class="small-box-footer">Ver nuevos reportes <i class="fa fa-arrow-circle-right" style="color: green"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-xs-6">
          <div class="small-box" style="background-color: #bdbdbd">
            <div class="inner">
              <h3><span class="fa fa-spinner fa-spin" style="font-size:24px" id="spinnerReporteA"></span><span id="reporteAsignado"></span><sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes Asignados</p>
            </div>
            <div class="icon">
              <i class="fa fa-check-square-o" style="color: #039be5"></i>
            </div>
            <a href="reportes-asignados.php" class="small-box-footer">Ver reportes Asignados <i class="fa fa-arrow-circle-right" style="color: #039be5"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-xs-6">
          <div class="small-box" style="background-color: #81d4fa">
            <div class="inner">
              <h3><span class="fa fa-spinner fa-spin" style="font-size:24px" id="spinnerReporteF"></span><span id="reporteFinalizado"></span><sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes Finalizados</p>
            </div>
            <div class="icon">
              <i class="fa fa-list-alt" style="color: #ff4081"></i>
            </div>
            <a href="reportes-finalizados.php" class="small-box-footer">Ver reportes Finalizados <i class="fa fa-arrow-circle-right" style="color: #ff80ab"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-xs-6">
          <div class="small-box" style="background-color: #bdbdbd">
            <div class="inner">
              <h3><span class="fa fa-spinner fa-spin" style="font-size:24px" id="spinnerReporteC"></span><span id="reporteCancelado"></span><sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes cancelados</p>
            </div>
            <div class="icon">
              <i class="ion-close-round" style="color: #e53935"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box" style="background-color: #81d4fa">
            <div class="inner">
              <h3><span class="fa fa-spinner fa-spin" style="font-size:24px" id="spinnerReporteCR"></span><span id="comunidadRegistrada"></span><sup style="font-size: 20px">Usuarios</sup></h3>
              <p>Comunidad registrada</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add" style="color: #f57c00"></i>
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
