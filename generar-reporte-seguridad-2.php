<!DOCTYPE html>
<html>
<head>
	<title>SRG | Nuevo Reporte</title>
	<?php
    	include('header.php');
  	?>
		<link rel="stylesheet" type="text/css" href="assets/css/generar-reporte.css">
</head>
<body class="hold-transition skin-blue sidebar-mini fixed" ng-app="">
	<div class="wrapper">
<?php
  include("navbar.php");
?>
<?php
  include("sidebar.php");
?>
    <div class="content-wrapper">
				<div class="jumbotron">
					<p>COORDINACIÓN DE SERVICIOS GENERALES / UNIDAD DE SEGURIDAD</p>
    			<p>NUEVO REPORTE DE SEGURIDAD / FORMATO 2</p>
					 <small><small style="color: red">*</small> SON CAMPOS OBLIGATORIOS.</small>
				</div>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
     <fieldset>
     <legend><small style="color: red">*</small>DATOS DE IDENTIFICACION DEL AFECTADO</legend>

      <div class="row" style="margin: 2%">
          <form  name="formulariodos" autocomplete="off" required>
						
            <div class="col-sm-3">
              <input class="form-control" id="escuela" name="escuela" type="text" class="validate" ng-model="escuela" required>
              <label for="escuela" style="color: black;"> <small style="color: red">*</small>escuela/institucion</label>
            </div>

            <div class="col-sm-3">
                    <input class="form-control" name="fech" id="fech" type="date" class="datepicker">
                    <label for="fecha" style="color: black;">Fecha</label>
                  </div>

                  <div class="col-sm-3">
                        <input class="form-control" name="nombre" id="nombre" type="text" class="validate" ng-model="nombre" required>
                        <label for="nombre" style="color: black;"> <small style="color: red">*</small>Nombre</label>
                      </div>

                  <div class="col-sm-1">
                       <input class="form-control" name="edad" id="edad" type="TINYINT" class="validate" maxlength="3"  pattern="[0-9]{2}">
                       <label for="edad" style="color: black;">Edad</label>
                     </div>

                   <div class="col-sm-3">
                       <input class="form-control" name="codigo" id="codigo" type="text" class="validate"  maxlength="9" minlength="9" pattern="[0-9]{9}" placeholder="223656789" ng-model="codigo" required>
											 	<span style="color: crimson;" ng-show="formulariodos.codigo.$touched && formulariodos.codigo.$invalid">Codigo es requerido.<br/></span>
                       <label for="codigo" style="color: black;"> <small style="color: red">*</small>Codigo</label>
                     </div>

                     <div class="col-sm-3">
                       <input class="form-control" name="carrera" id="carrera" type="text" class="validate">
                       <label for="carrera" style="color: black;">Carrera</label>
                     </div>

                     <div class="col-sm-3">
                       <input class="form-control" name="email" id="email" type="email" class="validate" ng-model="email" required>
                       <label for="email" style="color: black;"> <small style="color: red">*</small>Email</label>
                     </div>

                     <div class="col-sm-3">
                      <input class="form-control" name="telefono" id="telefono" maxlength="10" minlength="10" pattern="[0-9]{10}" type="tel" class="validate" ng-model="telefono" placeholder="3312345678" required>
											<span style="color: crimson;" ng-show="formulariodos.telefono.$touched && formulariodos.telefono.$invalid">Teléfono es requerido.<br/></span>
                      <label for="telefono" style="color: black;"> <small style="color: red">*</small>Teléfono de contacto</label>
                    </div>
                  </fieldset>



                <fieldset>
                    <legend style="text-align: center;">DATOS DEL INCIDENTE</legend>
                    <div class="col-sm-3">
                      <input class="form-control" name="fecha" id="fecha" type="date" class="datepicker" ng-model="fecha" required>
                      <label for="fecha" style="color: black;"> <small style="color: red">*</small>Fecha</label>
                     </div>

                    <div class="col-sm-3">
                     <input class="form-control" name="tiempo" id="tiempo" type="time" class="timepicker">
                     <label for="tiempo" style="color: black;">Hora</label>
                    </div>

                    <div class="col-sm-4">
                     <input class="form-control" name="lugar" id="lugar" type="text" class="validate">
                     <label for="lugar" style="color: black;">Lugar (calle y cruces) Frente a (casa,oficina,baldios,edificios,etc)</label>
                    </div>
                  </fieldset>

                  <fieldset>
                    <div class="input-field col-sm-6" style="text-align:center">
                        <legend> <small style="color: red">*</small>Descripcion del suceso</legend><br>
                          <textarea rows="4" cols="50" name="sucesos" id="sucesos" class="validate" ng-model="sucesos" required>
                          </textarea>
                      </div>

                      <div class="input-field col-sm-6" style="text-align:center">
                            <legend> <small style="color: red">*</small> Descripcion de lo robado</legend><br>
                              <textarea rows="4" cols="50" name="robado" id="robado" class="validate" ng-model="robado" required>
                              </textarea>
                      </div>
                   </fieldset>

            <fieldset>
            <legend style="text-align: center;">MEDIDA FILIACION DEL AGRESOR</legend>

                  <div class="col-sm-3">
                    <input class="form-control" name="estatura" id="estatura" type="text" class="validate">
                    <label for="estatura" style="color: black;">Estatura</label>
                   </div>

                    <div class="col-sm-3">
                      <input class="form-control" name="apariencia" id="apariencia" type="text" class="validate">
                      <label for="apariencia" style="color: black;">Apariencia</label>
                     </div>

                     <div class="col-sm-3">
                       <input class="form-control" name="tez" id="tez" type="text" class="validate">
                       <label for="tez" style="color: black;">Tez</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="cabello" id="cabello" type="text" class="validate">
                        <label for="cabello" style="color: black;">Cabello</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="ojos" id="ojos" type="text" class="validate">
                        <label for="ojos" style="color: black;">Ojos</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="cara" id="cara" type="text" class="validate">
                        <label for="cara" style="color: black;">Cara</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="boca" id="boca" type="text" class="validate">
                        <label for="boca" style="color: black;">Boca</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="ropa" id="ropa" type="text" class="validate">
                        <label for="ropa" style="color: black;">Tipo de ropa</label>
                      </div>

                      <div class="col-sm-3">
                         <input class="form-control" name="uso" id="uso" type="text" class="validate">
                         <label for="uso" style="color: black;">Uso,gorra</label>
                       </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="edad" id="edad" type="TINYINT" class="validate">
                        <label for="edad" style="color: black;">Edad Aprox</label>
                      </div>

                       <div class="col-sm-3">
                        <input class="form-control" name="cicatrices" id="cicatrices" type="text" class="validate">
                        <label for="cicatrices" style="color: black;">Cicatrices</label>
                       </div>

                       <div class="col-sm-3">
                         <input class="form-control" name="tatuajes" id="tatuajes" type="text" class="validate">
                         <label for="tatuajes" style="color: black;">Tatuajes</label>
                       </div>

                       <div class="col-sm-3">
                        <input class="form-control" name="percing" id="percing" type="text" class="validate">
                        <label for="percing" style="color: black;">Percing</label>
                       </div>

                       <div class="col-sm-3">
                         <input class="form-control" name="otras" id="otras" type="text" class="validate">
                         <label for="otras" style="color: black;">Otra seña particular</label>
                        </div>
                      </fieldset>

                      <fieldset>
                        <div style="text-align: center;" class="col-sm-50">
                        <input class="form-control" name="caracteristicasvehiculo" id="caracteristicasvehiculo" type="text" class="validate">
                        <label for="caracteristicasvehiculo" style="color: black;">Medio utilizado para huir (caracteristicas del vehiculo en su caso)</label>
                       </div>

                       <div class="col-sm-12">
                        <p>Observaciones</p>
<textarea rows="4" cols="135"></textarea>
                       </div>

                      </fieldset>
                       <div style="text-align: center;">

  <button class="btn waves-effect waves-light" id="btnNuevoreportedos" ng-disabled="formulariodos.$invalid">Registrar Reporte
	</button>
         </div>
        </div>
        </form>
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

<script src="assets/js/libs/angular.min.js" type="text/javascript"></script>
</body>
</html>
