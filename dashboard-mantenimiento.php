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
      <p>Bienvenido: USUARIO</p>
      <?php
        $date = getdate();
        echo "Hoy es: ".$date['weekday']." ".$date['wday']. " de ".$date['month']. " del ".$date['year'];
      ?>
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>150<sup style="font-size: 20px">Reportes</sup></h3>
              <p>Nuevos Reportes</p>
            </div>
            <div class="icon">
              <i class="ion ion-checkmark-round"></i>
            </div>
            <a href="reportes-nuevos.php" class="small-box-footer">Ver nuevos reportes <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-green">
            <div class="inner">
              <h3>53<sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes por atender</p>
            </div>
            <div class="icon">
              <i class="ion ion-alert"></i>
            </div>
            <a href="reportes-atender.php" class="small-box-footer">Ver reportes por atender <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>44<sup style="font-size: 20px">Usuarios</sup></h3>
              <p>Usuarios Registrados</p>
            </div>
            <div class="icon">
              <i class="ion ion-person-add"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-red">
            <div class="inner">
              <h3>65<sup style="font-size: 20px">Reportes</sup></h3>
              <p>Reportes cancelados</p>
            </div>
            <div class="icon">
              <i class="ion-close-round"></i>
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
