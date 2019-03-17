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
        <p>NUEVO REPORTE DE SEGURIDAD FORMATO 1 / NUEVO REPORTE</p>
        <small><small style="color: red">*</small> SON CAMPOS OBLIGATORIOS.</small>
    </div>
  <div class="row" id = "principal" style="margin: 2%">
      <form name="formularioseguridad" autocomplete="off" required>
        <div class="col-sm-12">
          <legend><small style="color: red">*</small>DATOS DEL AFECTADO</legend>
        </div>
        <div class="col-sm-6">
          <input class="form-control" id="txtCorreo" name="txtCorreo" ng-model="txtCorreo" type="email" class="validate" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtCorreo.$touched && formularioseguridad.txtCorreo.$invalid">Correo es requerido.<br/></span>
          <label for="txtTipoServicio" style="color: black;"><small style="color: red">*</small>Correo Registrado del Afectado</label>
        </div>
        <div class="col-sm-6">
          <input class="form-control" id="txtTipoServicio" name="txtTipoServicio" ng-model="txtTipoServicio" type="text" class="validate" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtTipoServicio.$touched && formularioseguridad.txtTipoServicio.$invalid">Tipo de Servicio es requerido.<br/></span>
          <label for="txtTipoServicio" style="color: black;"><small style="color: red">*</small>Tipo de Servicio</label>
        </div>
        <div class="col-sm-3">
          <input class="form-control" name="txtEdad" id="txtEdad" ng-model="txtEdad" type="TINYINT" class="validate" maxlength="3"  pattern="[0-9]{2}" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtEdad.$touched && formularioseguridad.txtEdad.$invalid">Edad es requerido.<br/></span>          
          <label for="txtEdad" style="color: black;"><small style="color: red">*</small>Edad</label>
        </div>
        <div class="col-sm-3">
          <input class="form-control" name="txtCarrera" id="txtCarrera" ng-model="txtCarrera" type="text" class="validate" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtCarrera.$touched && formularioseguridad.txtCarrera.$invalid">Carrera es requerido.<br/></span>                    
          <label for="txtCarrera" style="color: black;"><small style="color: red">*</small>Carrera </label>
        </div>
        <div class="col-sm-3">
          <input class="form-control" name="txtCodigo" id="txtCodigo" type="text" class="validate"  maxlength="9" minlength="9" pattern="[0-9]{9}" ng-model="txtCodigo" placeholder="215258004" required >
          <span style="color: crimson;" ng-show="formularioseguridad.txtCodigo.$touched && formularioseguridad.txtCodigo.$invalid">Codigo es requerido.<br/></span>
          <label for="codigo" style="color: black;"><small style="color: red">*</small>Código</label>
        </div>
        <div class="col-sm-3">
          <input class="form-control" name="txtTelefono" id="txtTelefono"  maxlength="10" minlength="10" pattern="[0-9]{10}" type="tel" ng-model="txtTelefono" placeholder="3312345678" required >
          <span style="color: crimson;" ng-show="formularioseguridad.txtTelefono.$touched && formularioseguridad.txtTelefono.$invalid">Teléfono es requerido.<br/></span>
          <label for="txtTelefono" style="color: black;"><small style="color: red">*</small>Teléfono</label>
        </div>
        <div class="col-sm-12">
          <legend><small style="color: red">*</small>REPORTE</legend>
        </div>
        <div class="col-sm-5">
          <fieldset>
            <div class="col-sm-4">
              <input class="form-control" name="txtFecha" id="txtFecha" type="date" class="datepicker" ng-model="txtFecha" required>
              <label for="txtFecha" style="color: black;"> <small style="color: red">*</small> Fecha</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" name="txtHora" id="txtHora" type="time" class="timepicker">
              <label for="txtHora" style="color: black;">Hora</label>
            </div>
          </fieldset>
        </div>
        <div class="col-sm-6">
          <input class="form-control" name="txtLugar" id="txtLugar" type="text" class="validate" ng-model="txtLugar" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtLugar.$touched && formularioseguridad.txtLugar.$invalid">Lugar es requerido.<br/></span>
          <label for="txtLugar" style="color: black;"><small style="color: red">*</small>Lugar</label>
        </div>
        <div class="input-field col-sm-12" style="text-align:center">
          <legend style="text-align: center"><small style="color: red">*</small>Hechos</legend>
          <textarea rows="4" cols="50" name="txtHechos" id="txtHechos" class="validate" ng-model="txtHechos" required></textarea><br/>
          <span style="color: crimson;" ng-show="formularioseguridad.txtHechos.$touched && formularioseguridad.txtHechos.$invalid">Hechos es requerido.<br/></span>
        </div>
        <div class="col-sm-12">
          <legend>DESCRIPCIÓN DE OBJETOS</legend>
        </div>    
        <div class="col-sm-12">
          <div class="col-sm-3">
            <input class="form-control" name="txtModelo" id="txtModelo" type="text" class="validate">
            <label for="txtModelo" style="color: black;">Modelo</label>
          </div>
          <div class="col-sm-3">
            <input class="form-control" name="txtMarca" id="txtMarca" type="text" class="validate">
            <label for="txtMarca" style="color: black;">Marca</label>
          </div>
          <div class="col-sm-3">
            <input class="form-control" name="txtTipo" id="txtTipo" type="text" class="validate">
            <label for="txtTipo" style="color: black;">Tipo</label>
          </div>
          <div class="col-sm-2">
            <input class="form-control" name="dtAño" id="dtAño" type="date" class="validate">
            <label for="dtAño" style="color: black;">Año</label>
          </div>
          <div class="col-sm-3">
            <input class="form-control" name="txtColor" id="txtColor" type="text" class="validate">
            <label for="txtColor" style="color: black;">Color</label>
          </div>
          <div class="col-sm-3">
            <input class="form-control" name="txtRodado" id="txtRodado" type="text" class="validate">
            <label for="txtRodado" style="color: black;">Rodado</label>
          </div>
        </div>
        <div class="col-sm-12" style="text-align: center;" id="divBoton">
          <button class="btn btn-primary" onclick="nuevoReporteSeg()"  id="btnNuevoReporteSeg" ng-disabled="formularioseguridad.$invalid">Registrar Reporte</button>
        </div>
    </form>
</div>
<?php
	include("control-sidebar.php");
?>
  </div>
</div>
<?php
    require('footer.php');
?>
<script src="assets/js/libs/angular.min.js" type="text/javascript"></script>
<script type="text/javascript" src="assets/js/generar-reporte-seguridad1.js"></script>
</body>
</html>