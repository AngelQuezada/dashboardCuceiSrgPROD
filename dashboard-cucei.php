<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>REPORTES</title>
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway|Candal">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/dashboard-alumno.css">
  <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png">
  <link rel="manifest" href="favicon_io/site.webmanifest">
</head>
<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
  <!--banner-->
  <section id="banner" class="banner">
    <div class="bg-color">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="col-md-12">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span class="icon-bar"></span>
				        <span class="icon-bar"></span>
				      </button>
              <a class="navbar-brand" href="#"><img src="assets/img/logo.png" class="img-responsive" style="width: 140px; margin-top: -16px;"></a>
            </div>
            <div class="collapse navbar-collapse navbar-right" id="myNavbar">
              <ul class="nav navbar-nav">
                <li class=""><a href="#reportes">Reportes</a></li>
                <li class=""><a href="logout-cucei.php">Salir</a></li>
              </ul>
            </div>
          </div>
        </div>  
      </nav>
 <br><br>
  <!--reportes-->
  <section id="reportes" class="section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="ser-title" style="color: white">Tus Reportes de Mantenimiento & Seguridad</h2>
          <hr class="botm-line">
        </div>
        <div class="col-md-12 col-sm-12">
            <p style="color: white">Usted tiene: <span id="cantidadReportesManten"></span> Reportes de Mantenimiento</p>
          <p style="color: white">Usted tiene: <span id="cantidadReportes"></span> Reportes de Incidencias</p>
          <p style="color: white">Usted tiene: <span id="cantidadReportesRobo"></span> Reportes de Robo</p>
        </div>
        <div id="divManten" class="col-md-12 col-sm-12" hidden>
          <h4 style="color: white;">Tabla de Reportes de Mantenimiento</h4>
          <span id="tablaReportesManten"></span>
          <span id="modalReportesManten"></span>
        </div>
        <div id="divIncidencias" class="col-md-12 col-sm-12" hidden>
          <h4 style="color: white;">Tabla de Reportes de Incidencias</h4>
          <span id="tablaReportes"></span>
        </div>
        <div id="divRobo" class="col-md-12 col-sm-12" hidden>
          <h4 style="color: white;">Tabla de Reportes de Robo</h4>
          <span id="tablaReportesRobo"></span>
          <span id="modalReportesRobo"></span>
        </div>
      </div>
    </div>
  </section>
  <!--/ contact-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="assets/js/libs/jquery.easing.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  <script src="assets/js/libs/custom.js"></script>
  <script src="assets/js/dashboard-cucei.js"></script>
</body>
</html>