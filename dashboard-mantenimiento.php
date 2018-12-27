<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
  <title>CUCEI-SRG | Dashboard</title>
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
    <!-- Content Header (Page header) -->
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
    <!-- END Content Header (Page header) -->
    <!-- Contenedor principal -->
    <section class="content">
      <p id="fechaActual"></p>
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-black">
            <div class="inner">
              <h3><span id="reporteSolicitud">...</span><sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes en solicitud</p>
            </div>
            <div class="icon">
              <i class="ion ion-checkmark-round" style="color: green"></i>
            </div>
            <a href="reportes-nuevos.php" class="small-box-footer">Ver nuevos reportes <i class="fa fa-arrow-circle-right" style="color: green"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-black">
            <div class="inner">
              <h3><span id="reporteAsignado">...</span><sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes Asignados</p>
            </div>
            <div class="icon">
              <i class="fa fa-check-square-o" style="color: blue"></i>
            </div>
            <a href="reportes-atender.php" class="small-box-footer">Ver reportes Asignados <i class="fa fa-arrow-circle-right" style="color: blue"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-black">
            <div class="inner">
              <h3><span id="reporteCancelado">...</span><sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes cancelados</p>
            </div>
            <div class="icon">
              <i class="ion-close-round" style="color: red"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-black">
            <div class="inner">
              <h3><span id="comunidadRegistrada">...</span><sup style="font-size: 20px">Usuarios</sup></h3>
              <p>Comunidad registrada</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add" style="color: orange"></i>
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
