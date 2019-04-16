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
     <legend><small style="color: red">*</small>DATOS DE IDENTIFICACIÓN DEL AFECTADO</legend>

      <div class="row" style="margin: 2%">
          <form  name="formularioSeguridad2" autocomplete="off" required>
          
            <div id="divInstitucion" class="col-sm-6">
              <label for="institucion" style="color: black;"><small style="color: red">*</small>Institución:</label>
              <select class="form-control" id="institucion" required><option></option></select>
            </div>

            <div class="col-sm-3">
              <input class="form-control" name="txtEdad" id="txtEdad" type="text" class="validate" maxlength="3" pattern="[0-9]{2}" ng-model="txtEdad" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtEdad.$touched && formularioSeguridad2.txtEdad.$invalid">Edad es requerido.<br/></span>
              <label for="txtEdad" style="color: black;"><small style="color: red">*</small>Edad</label>
            </div>

            <div class="col-sm-3">
              <input class="form-control" name="txtCodigo" id="txtCodigo" type="number" class="validate"  maxlength="9" minlength="9" pattern="[0-9]{9}" placeholder="215258004" ng-model="txtCodigo" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtCodigo.$touched && formularioSeguridad2.txtCodigo.$invalid">Código es requerido.<br/></span>
              <label for="codigo" style="color: black;"><small style="color: red">*</small>Código</label>
            </div>

            <div class="col-sm-4">
              <input class="form-control" name="txtCarrera" id="txtCarrera" type="text" class="validate" ng-model="txtCarrera" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtCarrera.$touched && formularioSeguridad2.txtCarrera.$invalid">Carrera es requerido.<br/></span>
              <label for="txtCarrera" style="color: black;"><small style="color: red">*</small>Carrera</label>
            </div>

            <div class="col-sm-4">
              <input class="form-control" name="txtEmail" id="txtEmail" type="email" class="validate" ng-model="txtEmail" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtEmail.$touched && formularioSeguridad2.txtEmail.$invalid">Email es requerido.<br/></span>
              <label for="txtEmail" style="color: black;"><small style="color: red">*</small>Email</label>
            </div>

            <div class="col-sm-4">
              <input class="form-control" name="txtTelefono" id="txtTelefono" max="9999999999" type="number" class="validate" ng-model="txtTelefono" placeholder="3312345678" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtTelefono.$touched && formularioSeguridad2.txtTelefono.$invalid">Teléfono es requerido.<br/></span>
              <label for="txtTelefono" style="color: black;"><small style="color: red">*</small>Teléfono de contacto</label>
            </div>
        </fieldset>

        <fieldset>
          <legend><small style="color: red">*</small>DATOS DEL INCIDENTE</legend>
          <!-- CAMPO FECHA QUE SE GENERE AUTOMATICAMENTE -->
          <div class="col-sm-3">
            <input class="form-control" id="dtFecha" name="dtFecha" type="date" class="datepicker" ng-model="dtFecha" required>
            <span style="color: crimson;" ng-show="formularioSeguridad2.dtFecha.$touched && formularioSeguridad2.dtFecha.$invalid">Fecha es requerido.<br/></span>
            <label for="fecha" style="color: black;"><small style="color: red">*</small>Fecha</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" name="dtTiempo" id="dtTiempo" type="time" class="timepicker" ng-model="dtTiempo" required>
            <span style="color: crimson;" ng-show="formularioSeguridad2.dtTiempo.$touched && formularioSeguridad2.dtTiempo.$invalid">Hora es requerido.<br/></span>
            <label for="dtTiempo" style="color: black;"><small style="color: red">*</small>Hora</label>
          </div>

          <div class="col-sm-4">
            <input class="form-control" name="txtLugar" id="txtLugar" type="text" class="validate" ng-model="txtLugar" required>
            <span style="color: crimson;" ng-show="formularioSeguridad2.txtLugar.$touched && formularioSeguridad2.txtLugar.$invalid">Lugar es requerido.<br/></span>
            <label for="txtLugar" style="color: black;"><small style="color: red">*</small>Lugar (calle y cruces) Frente a (casa,oficina,baldíos,edificios,etc)</label>
          </div>
        </fieldset>

        <fieldset>
          <div class="input-field col-sm-6" style="text-align:center">
            <legend><small style="color: red">*</small>Descripción del suceso</legend><br>
            <textarea rows="4" cols="50" name="txtSuceso" id="txtSuceso" class="validate" ng-model="txtSuceso" required></textarea>
            <span style="color: crimson;" ng-show="formularioSeguridad2.txtSuceso.$touched && formularioSeguridad2.txtSuceso.$invalid">Descripción del suceso es requerido.<br/></span>
          </div>

          <div class="input-field col-sm-6" style="text-align:center">
            <legend><small style="color: red">*</small>Descripción de lo robado</legend><br>
            <textarea rows="4" cols="50" name="txtRobado" id="txtRobado" class="validate" ng-model="txtRobado" required></textarea>
            <span style="color: crimson;" ng-show="formularioSeguridad2.txtRobado.$touched && formularioSeguridad2.txtRobado.$invalid">Descripción de lo robado es requerido.<br/></span>
          </div>
        </fieldset>

        <fieldset>
          <legend>MEDIDA FILIACIÓN DEL AGRESOR</legend>
          <div class="col-sm-3">
            <input class="form-control" id="txtEstatura" type="text">
            <label for="txtEstatura" style="color: black;">Estatura</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtApariencia" type="text">
            <label for="txtApariencia" style="color: black;">Apariencia</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtTez" type="text">
            <label for="txtTez" style="color: black;">Tez</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtCabello" type="text">
            <label for="txtCabello" style="color: black;">Cabello</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtOjos" type="text">
            <label for="txtOjos" style="color: black;">Ojos</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtCara" type="text">
            <label for="txtCara" style="color: black;">Cara</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtBoca" type="text">
            <label for="txtBoca" style="color: black;">Boca</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtRopa" type="text">
            <label for="txtRopa" style="color: black;">Tipo de ropa</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtUso" type="text">
            <label for="txtUso" style="color: black;">Uso,gorra</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtEdadAgresor" type="text">
            <label for="txtEdadAgresor" style="color: black;">Edad Aprox</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtCicatrices" type="text">
            <label for="txtCicatrices" style="color: black;">Cicatrices</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtTatuaje" type="text">
            <label for="txtTatuaje" style="color: black;">Tatuajes</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtPiercing" type="text">
            <label for="txtPiercing" style="color: black;">Piercing</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtSeñaParticular" type="text">
            <label for="txtSeñaParticular" style="color: black;">Otra seña particular</label>
          </div>
        </fieldset>

        <fieldset>
          <div style="text-align: center;" class="col-sm-12">
            <input class="form-control" id="txtMedioHuida" type="text">
            <label for="txtMedioHuida" style="color: black;">Medio utilizado para huir (características del vehículo en su caso)</label>
          </div>

          <div class="col-sm-12" style="text-align:center">
            <legend>OBSERVACIONES</legend>
<textarea rows="4" cols="100" id="txtObservaciones"></textarea>
          </div>

        </fieldset>
        <div style="text-align: center;">
          <button class="btn waves-effect waves-light" id="btnNuevoReporteSeg2" onclick="nuevoReporteSeguridad2()" ng-disabled="formularioSeguridad2.$invalid">Registrar Reporte</button>
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
<script type="text/javascript" src="assets/js/reportes-seguridad2.js"></script>
</body>
</html>
