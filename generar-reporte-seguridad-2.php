<?php
session_start();
if (!isset($_SESSION['personal'])){ 
  echo "<script>window.location.replace(`401.php`);</script>"; 
  } 
?>
<?php
  require_once('centinela.php');
?>
<!DOCTYPE html>
<html>
<head>
	<title>SRG | Nuevo Reporte</title>
<?php
    include('header.php');
?>
		<link rel="stylesheet" type="text/css" href="assets/css/generar-reporte.css">
</head>
<body class="hold-transition skin-purple sidebar-mini fixed" ng-app="">
	<div class="wrapper">
<?php
  include("navbar.php");
?>
<?php
  include("sidebar.php");
?>
    <div class="content-wrapper" style="background: #212121; !important">
				<div class="jumbotron">
					<p>COORDINACIÓN DE SERVICIOS GENERALES / UNIDAD DE SEGURIDAD</p>
    			<p>NUEVO REPORTE DE SEGURIDAD / FORMATO 2</p>
					 <small><small style="color: red">*</small> SON CAMPOS OBLIGATORIOS.</small>
				</div>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
     <fieldset>
     <legend style="color: #f5f5f5;"><small style="color: red">*</small>DATOS DE IDENTIFICACIÓN DEL AFECTADO</legend>

      <div class="row" style="margin: 2%">
          <form name="formularioSeguridad2" autocomplete="off" required>
          
            <div id="divInstitucion" class="col-sm-6">
              <label for="institucion" style="color: #f5f5f5;"><small style="color: red">*</small>Institución:</label>
              <select class="form-control" id="institucion" required><option></option></select>
            </div>

            <div class="col-sm-3">
              <input class="form-control" name="txtEdad" id="txtEdad" type="text" class="validate" maxlength="3" pattern="[0-9]{2}" ng-model="txtEdad"  placeholder="Edad" style="color: #f5f5f5;" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtEdad.$touched && formularioSeguridad2.txtEdad.$invalid">Edad es requerido.<br/></span>
              <label for="txtEdad" style="color: #f5f5f5;"><small style="color: red">*</small>Edad</label>
            </div>

            <div class="col-sm-3">
              <input class="form-control" name="txtCodigo" id="txtCodigo" type="number" class="validate"  maxlength="9" minlength="9" pattern="[0-9]{9}" placeholder="Código" ng-model="txtCodigo" style="color: #f5f5f5;" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtCodigo.$touched && formularioSeguridad2.txtCodigo.$invalid">Código es requerido.<br/></span>
              <label for="codigo" style="color: #f5f5f5;"><small style="color: red">*</small>Código</label>
            </div>

            <div class="col-sm-4">
              <input class="form-control" name="txtCarrera" id="txtCarrera" type="text" class="validate" ng-model="txtCarrera" placeholder="Carrera" style="color: #f5f5f5;" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtCarrera.$touched && formularioSeguridad2.txtCarrera.$invalid">Carrera es requerido.<br/></span>
              <label for="txtCarrera" style="color: #f5f5f5;"><small style="color: red">*</small>Carrera</label>
            </div>

            <div class="col-sm-4">
              <input class="form-control" name="txtEmail" id="txtEmail" type="email" class="validate" ng-model="txtEmail" placeholder="Correo Electrónico" style="color: #f5f5f5;" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtEmail.$touched && formularioSeguridad2.txtEmail.$invalid">Correo es requerido.<br/></span>
              <label for="txtEmail" style="color: #f5f5f5;"><small style="color: red">*</small>Email</label>
            </div>

            <div class="col-sm-4">
              <input class="form-control" name="txtTelefono" id="txtTelefono" max="9999999999" type="number" class="validate" ng-model="txtTelefono" placeholder="Teléfono" style="color: #f5f5f5;" required>
              <span style="color: crimson;" ng-show="formularioSeguridad2.txtTelefono.$touched && formularioSeguridad2.txtTelefono.$invalid">Teléfono es requerido.<br/></span>
              <label for="txtTelefono" style="color: #f5f5f5;"><small style="color: red">*</small>Teléfono de contacto</label>
            </div>
        </fieldset>
        <hr class="botm-line">
        <fieldset>
          <legend style="color: #f5f5f5;"><small style="color: red">*</small>DATOS DEL INCIDENTE</legend>
          <!-- CAMPO FECHA QUE SE GENERE AUTOMATICAMENTE -->
          <div class="col-sm-4">
            <input class="form-control" id="dtFecha" name="dtFecha" type="date" class="datepicker" ng-model="dtFecha" style="color: #f5f5f5;" required>
            <span style="color: crimson;" ng-show="formularioSeguridad2.dtFecha.$touched && formularioSeguridad2.dtFecha.$invalid">Fecha es requerido.<br/></span>
            <label for="fecha" style="color: #f5f5f5;"><small style="color: red">*</small>Fecha</label>
          </div>

          <div class="col-sm-4">
            <input class="form-control" name="dtTiempo" id="dtTiempo" type="time" class="timepicker" ng-model="dtTiempo" style="color: #f5f5f5;" required>
            <span style="color: crimson;" ng-show="formularioSeguridad2.dtTiempo.$touched && formularioSeguridad2.dtTiempo.$invalid">Hora es requerido.<br/></span>
            <label for="dtTiempo" style="color: #f5f5f5;"><small style="color: red">*</small>Hora</label>
          </div>

          <div class="col-sm-4">
            <input type="text" class="form-control" name="txtLugar" id="txtLugar"  class="validate" ng-model="txtLugar" placeholder="Lugar" style="color: #f5f5f5;" required>
            <span style="color: crimson;" ng-show="formularioSeguridad2.txtLugar.$touched && formularioSeguridad2.txtLugar.$invalid">Lugar es requerido.<br/></span>
            <label for="txtLugar" style="color: #f5f5f5;"><small style="color: red">*</small>Lugar (calle y cruces) Frente a (casa,oficina,baldíos,edificios,etc)</label>
          </div>
        </fieldset>
        <hr class="botm-line">
        <fieldset>
          <div class="input-field col-sm-6" style="text-align:center">
            <legend style="color: #f5f5f5;"><small style="color: red">*</small>DESCRIPCIÓN DEL SUCESO</legend><small style="color: #f5f5f5">Describa el Suceso</small><br>
            <b><textarea rows="4" cols="50" name="txtSuceso" id="txtSuceso" class="validate" ng-model="txtSuceso" style="background-color: #9e9e9e; color: black" required></textarea></b>
            <span style="color: crimson;" ng-show="formularioSeguridad2.txtSuceso.$touched && formularioSeguridad2.txtSuceso.$invalid">Descripción del suceso es requerido.<br/></span>
          </div>

          <div class="input-field col-sm-6" style="text-align:center">
            <legend style="color: #f5f5f5;"><small style="color: red">*</small>DESCRIPCIÓN DE LO ROBADO</legend><small style="color: #f5f5f5">Qué le Robó, Dañó, etc.</small><br>
            <b><textarea rows="4" cols="50" name="txtRobado" id="txtRobado" class="validate" ng-model="txtRobado" style="background-color: #9e9e9e; color: black" required></textarea></b>
            <span style="color: crimson;" ng-show="formularioSeguridad2.txtRobado.$touched && formularioSeguridad2.txtRobado.$invalid">Descripción de lo robado es requerido.<br/></span>
          </div>
        </fieldset>
        <hr class="botm-line">
        <fieldset>
          <legend style="color: #f5f5f5;">MEDIDA FILIACIÓN DEL AGRESOR</legend>
          <div class="col-sm-3">
            <input class="form-control" id="txtEstatura" type="text" placeholder="Estatura" style="color: #f5f5f5;">
            <label for="txtEstatura" style="color: #f5f5f5;">Estatura</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtApariencia" type="text" placeholder="Apariencia" style="color: #f5f5f5;">
            <label for="txtApariencia" style="color: #f5f5f5;">Apariencia</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtTez" type="text" placeholder="Tez" style="color: #f5f5f5;">
            <label for="txtTez" style="color: #f5f5f5;">Tez</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtCabello" type="text" placeholder="Cabello" style="color: #f5f5f5;">
            <label for="txtCabello" style="color: #f5f5f5;">Cabello</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtOjos" type="text" placeholder="Ojos" style="color: #f5f5f5;">
            <label for="txtOjos" style="color: #f5f5f5;">Ojos</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtCara" type="text" placeholder="Cara" style="color: #f5f5f5;">
            <label for="txtCara" style="color: #f5f5f5;">Cara</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtBoca" type="text" placeholder="Boca" style="color: #f5f5f5;">
            <label for="txtBoca" style="color: #f5f5f5;">Boca</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtRopa" type="text" placeholder="Tipo de Ropa" style="color: #f5f5f5;">
            <label for="txtRopa" style="color: #f5f5f5;">Tipo de ropa</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtUso" type="text" placeholder="Usó Gorra" style="color: #f5f5f5;">
            <label for="txtUso" style="color: #f5f5f5;">Usó Gorra</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtEdadAgresor" type="text" placeholder="Edad Aproximada" style="color: #f5f5f5;">
            <label for="txtEdadAgresor" style="color: #f5f5f5;">Edad Aprox</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtCicatrices" type="text" placeholder="Cicatrices" style="color: #f5f5f5;">
            <label for="txtCicatrices" style="color: #f5f5f5;">Cicatrices</label>
          </div>

          <div class="col-sm-3">
            <input class="form-control" id="txtTatuaje" type="text" placeholder="Tatuajes" style="color: #f5f5f5;">
            <label for="txtTatuaje" style="color: #f5f5f5;">Tatuajes</label>
          </div>

          <div class="col-sm-6">
            <input class="form-control" id="txtPiercing" type="text" placeholder="Piercing" style="color: #f5f5f5;">
            <label for="txtPiercing" style="color: #f5f5f5;">Piercing</label>
          </div>

          <div class="col-sm-6">
            <input class="form-control" id="txtSeñaParticular" type="text" placeholder="Otra seña Particular" style="color: #f5f5f5;">
            <label for="txtSeñaParticular" style="color: #f5f5f5;">Otra seña particular</label>
          </div>
        </fieldset>

        <fieldset>
          <div style="text-align: center;" class="col-sm-12">
            <input class="form-control" id="txtMedioHuida" type="text" placeholder="Medio de Huida" style="color: #f5f5f5;">
            <label for="txtMedioHuida" style="color: #f5f5f5;">Medio utilizado para huir (características del vehículo en su caso)</label>
          </div>
          <div class="col-sm-12" style="text-align:center">
            <hr class="botm-line">
            <legend style="color: #f5f5f5;">OBSERVACIONES</legend>
<b><textarea rows="4" cols="100" id="txtObservaciones" style="background-color: #9e9e9e; color: black"></textarea></b>
          </div>

        </fieldset>
        <div style="text-align: center;">
          <button class="btn btn-primary btn-block btn-flat" id="btnNuevoReporteSeg2" onclick="nuevoReporteSeguridad2()" ng-disabled="formularioSeguridad2.$invalid" style="color: white; border-radius: 20px; background-color: #00b248">REGISTRAR NUEVO REPORTE DE SEGURIDAD FORMATO 2</button>
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
