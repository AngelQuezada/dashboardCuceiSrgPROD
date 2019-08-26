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
        <p>NUEVO REPORTE DE SEGURIDAD FORMATO 1 / NUEVO REPORTE</p>
        <small><small style="color: red">*</small> SON CAMPOS OBLIGATORIOS.</small>
    </div>
  <div class="row" id = "principal" style="margin: 2%">
      <form name="formularioseguridad" autocomplete="off" required>
        <div class="col-sm-12">
          <legend style="color: #f5f5f5;"><small style="color: red">*</small>DATOS DEL AFECTADO</legend>
        </div>
        <div class="col-sm-6">
          <input class="form-control" id="txtCorreo" name="txtCorreo" ng-model="txtCorreo" type="email" class="validate" placeholder="Correo Electrónico" style="color: #f5f5f5;" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtCorreo.$touched && formularioseguridad.txtCorreo.$invalid">Correo es requerido.<br/></span>
          <label for="txtTipoServicio" style="color: #f5f5f5;"><small style="color: red">*</small>Correo Registrado del Afectado</label>
        </div>
        <div class="col-sm-6">
          <input class="form-control" id="txtTipoServicio" name="txtTipoServicio" ng-model="txtTipoServicio" type="text" class="validate" placeholder="Tipo de Servicio" style="color: #f5f5f5;" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtTipoServicio.$touched && formularioseguridad.txtTipoServicio.$invalid">Tipo de Servicio es requerido.<br/></span>
          <label for="txtTipoServicio" style="color: #f5f5f5;"><small style="color: red">*</small>Tipo de Servicio</label>
        </div>
        <div class="col-sm-3">
          <input class="form-control" name="txtEdad" id="txtEdad" ng-model="txtEdad" type="TINYINT" class="validate" maxlength="3"  pattern="[0-9]{2}" placeholder="Edad" style="color: #f5f5f5;" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtEdad.$touched && formularioseguridad.txtEdad.$invalid">Edad es requerido.<br/></span>          
          <label for="txtEdad" style="color: #f5f5f5;"><small style="color: red">*</small>Edad</label>
        </div>
        <div class="col-sm-3">
          <input class="form-control" name="txtCarrera" id="txtCarrera" ng-model="txtCarrera" type="text" class="validate" style="color: #f5f5f5;" placeholder="Carrera" style="color: #f5f5f5;" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtCarrera.$touched && formularioseguridad.txtCarrera.$invalid">Carrera es requerido.<br/></span>                    
          <label for="txtCarrera" style="color: #f5f5f5;"><small style="color: red">*</small>Carrera </label>
        </div>
        <div class="col-sm-3">
          <input class="form-control" name="txtCodigo" id="txtCodigo" type="text" class="validate"  maxlength="9" minlength="9" pattern="[0-9]{9}" ng-model="txtCodigo" placeholder="Código" style="color: #f5f5f5;" required >
          <span style="color: crimson;" ng-show="formularioseguridad.txtCodigo.$touched && formularioseguridad.txtCodigo.$invalid">Codigo es requerido.<br/></span>
          <label for="codigo" style="color: #f5f5f5;"><small style="color: red">*</small>Código</label>
        </div>
        <div class="col-sm-3">
          <input class="form-control" name="txtTelefono" id="txtTelefono"  maxlength="10" minlength="10" pattern="[0-9]{10}" type="tel" ng-model="txtTelefono" placeholder="Teléfono" style="color: #f5f5f5;" required >
          <span style="color: crimson;" ng-show="formularioseguridad.txtTelefono.$touched && formularioseguridad.txtTelefono.$invalid">Teléfono es requerido.<br/></span>
          <label for="txtTelefono" style="color: #f5f5f5;"><small style="color: red">*</small>Teléfono</label>
        </div>
        <div class="col-sm-12">
          <hr class="botm-line">
          <legend style="color: #f5f5f5;"><small style="color: red">*</small>REPORTE</legend>
        </div>
        <div class="col-sm-4">
          <input class="form-control" name="txtFecha" id="txtFecha" type="date" class="datepicker" ng-model="txtFecha" style="color: #f5f5f5;" required>
          <label for="txtFecha" style="color: #f5f5f5;"> <small style="color: red">*</small> Fecha</label>
        </div>
        <div class="col-sm-4">
          <input class="form-control" name="txtHora" id="txtHora" type="time" class="timepicker"style="color: #f5f5f5;" required>
          <label for="txtHora" style="color: #f5f5f5;">Hora</label>
        </div>
        <div class="col-sm-4">
          <input class="form-control" name="txtLugar" id="txtLugar" type="text" class="validate" ng-model="txtLugar" placeholder="Lugar" style="color: #f5f5f5;" required>
          <span style="color: crimson;" ng-show="formularioseguridad.txtLugar.$touched && formularioseguridad.txtLugar.$invalid">Lugar es requerido.<br/></span>
          <label for="txtLugar" style="color: #f5f5f5;"><small style="color: red">*</small>Lugar</label>
        </div>
        <div class="input-field col-sm-12" style="text-align:center">
          <legend style="text-align: center; color: #f5f5f5;"><small style="color: red">*</small>Hechos</legend>
          <b><textarea rows="4" cols="50" name="txtHechos" id="txtHechos" class="validate" ng-model="txtHechos" style="background-color: #9e9e9e; color: black" required></textarea></b><br/>
          <span style="color: crimson;" ng-show="formularioseguridad.txtHechos.$touched && formularioseguridad.txtHechos.$invalid">Hechos es requerido.<br/></span>
        </div>
        <div class="col-sm-12">
          <hr class="botm-line">
          <legend style="color: #f5f5f5;">DESCRIPCIÓN DE OBJETOS</legend>
        </div>    
        <div class="col-sm-12">
          <div class="col-sm-3">
            <input class="form-control" name="txtModelo" id="txtModelo" type="text" class="validate" placeholder="Modelo" style="color: #f5f5f5;">
            <label for="txtModelo" style="color: #f5f5f5;">Modelo</label>
          </div>
          <div class="col-sm-3">
            <input class="form-control" name="txtMarca" id="txtMarca" type="text" class="validate" placeholder="Marca" style="color: #f5f5f5;">
            <label for="txtMarca" style="color: #f5f5f5;">Marca</label>
          </div>
          <div class="col-sm-3">
            <input class="form-control" name="txtTipo" id="txtTipo" type="text" class="validate" placeholder="Tipo" style="color: #f5f5f5;">
            <label for="txtTipo" style="color: #f5f5f5;">Tipo</label>
          </div>
          <div class="col-sm-3">
            <input class="form-control" name="dtAño" id="dtAño" type="date" class="validate" placeholder="Año" style="color: #f5f5f5;">
            <label for="dtAño" style="color: #f5f5f5;">Año</label>
          </div>
          <div class="col-sm-6">
            <input class="form-control" name="txtColor" id="txtColor" type="text" class="validate" placeholder="Color" style="color: #f5f5f5;">
            <label for="txtColor" style="color: #f5f5f5;">Color</label>
          </div>
          <div class="col-sm-6">
            <input class="form-control" name="txtRodado" id="txtRodado" type="text" class="validate" placeholder="Rodado" style="color: #f5f5f5;">
            <label for="txtRodado" style="color: #f5f5f5;">Rodado</label>
          </div>
        </div>
        <div class="col-sm-12" style="text-align: center;" id="divBoton">
          <button class="btn btn-primary btn-block btn-flat" onclick="nuevoReporteSeg()"  id="btnNuevoReporteSeg" ng-disabled="formularioseguridad.$invalid" style="color: white; border-radius: 20px; background-color: #00b248">REGISTRAR NUEVO REPORTE DE SEGURIDAD FORMATO 1</button>
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