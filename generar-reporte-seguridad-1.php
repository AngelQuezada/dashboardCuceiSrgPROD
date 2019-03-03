<!DOCTYPE html>
<html>
<head>
	<title>CUCEI-SRG | Administración de Gráficas</title>
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
		        Nuevo Reporte de Seguridad FORMATO 1
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard-Seguridad</a></li>
				<li class="active">Nuevo Reporte</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reporte 1 Seguridad</title>
</head>
<body>

    <div style="text-align: center;">
         <p>UNIVERSIDAD DE GUADALAJARA
         <P>CENTRO UNIVERITARIO DE CIENCIAS EXACTAS E INGENIERIAS</P>
         <p>COORDINACION DE SERVICIOS GENERALES</p>
         <p>UNIDAD DE SEGURIDAD</p>
         </p>
         <p><b>Formato 1</b> Hoja de Reporte</p>
     </div>

      <div class="row" style="margin: 2%">
        <form action="" method="POST">
            <div class="col-sm-6">
              <input class="form-control" id="tipoS" name="tipoS" type="text" class="validate">
              <label for="escuela">Tipo de servicio</label>
            </div>

            <div  class="col-sm-2">
                    <input class="form-control" name="NumeroReporte" id="NumeroReporte" type="text" class="validate">
                    <label for="fecha">No.Reporte</label>
            </div>

            <div class="col-sm-6">
                <input class="form-control" name="afectado" id="afectado" type="text" class="validate">
                <label for="afectado">Afectado</label>
            </div>

            <div class="col-sm-3">
                <input class="form-control" name="edad" id="edad" type="TINYINT" class="validate">
                <label for="edad">Edad</label>
            </div>

            <div class="col-sm-3">
                <input class="form-control" name="carrera" id="carrera" type="text" class="validate">
                <label for="carrera">Carrera</label>
            </div>

            <div class="col-sm-3">
                <input class="form-control" name="codigo" id="codigo" type="text" class="validate">
                <label for="codigo">Codigo</label>
            </div>

            <div class="col-sm-3">
                <input class="form-control" name="telefono" id="telefono" type="text" class="validate">
                <label for="telefono">Teléfono</label>
            </div>
<div class="col-sm-12">
  <legend style="text-align: center;">REPORTE</legend>
</div>
<div class="col-sm-5">
            <fieldset>


              <div class="col-sm-4">
                <input class="form-control" name="fecha" id="fecha" type="date" class="datepicker">
                <label for="fecha">Fecha</label>
              </div>

              <div class="col-sm-3">
                <input class="form-control" name="tiempo" id="tiempo" type="time" class="timepicker">
                <label for="tiempo">Hora</label>
            </div>
            </fieldset>
</div>
            <div class="col-sm-6">
                <input class="form-control" name="lugar" id="lugar" type="text" class="validate">
                <label for="lugar">Lugar</label>
            </div>

            <div class="input-field col-sm-12" style="text-align:center">
                <p>Hechos</p><br>
                <textarea rows="4" cols="50">
                </textarea>
            </div>
          <!--  <fieldset>-->
          <div class="col-sm-12">
          <legend style="text-align: center;">DESCRIPCION DE OBJETOS</legend>
        </div>
          <div class="col-sm-12">
            <div class="col-sm-3">
            <input class="form-control" name="modelo" id="modelo" type="text" class="validate">
            <label for="modelo">Modelo</label>
            </div>

            <div class="col-sm-3">
            <input class="form-control" name="marca" id="marca" type="text" class="validate">
            <label for="marca">Marca</label>
            </div>

            <div class="col-sm-3">
            <input class="form-control" name="tipo" id="tipo" type="text" class="validate">
            <label for="tipo">Tipo</label>
            </div>

            <div class="col-sm-3">
            <input class="form-control" name="año" id="año" type="date" class="validate">
            <label for="año">Año</label>
            </div>

            <div class="col-sm-3">
            <input class="form-control" name="color" id="color" type="text" class="validate">
            <label for="color">Color</label>
            </div>

            <div class="col-sm-3">
            <input class="form-control" name="rodado" id="rodado" type="text" class="validate">
            <label for="rodado">Rodado</label>
            </div>
          </div>
          <!--</fieldset>-->
            <div class="col-sm-12" style="text-align: center;"><button class="btn waves-effect waves-light" type="submit" name="action" id="btn-reset" style="background-color: rgb(62, 88, 233);">Registrar Reporte</button>
            </div>
    </form>
</div>
</body>
<script type="text/javascript">
    $(document).ready(function(){
    $('.datepicker').datepicker();
  });
</script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</html>

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