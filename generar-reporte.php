<?php
session_start();
if (!isset($_SESSION['personal'])){ 
  echo "<script>window.location.replace(`401.php`);</script>"; 
  } 
?>
<?php
  require('centinela.php');
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
<body class="hold-transition skin-blue sidebar-mini fixed" ng-app="">
<div class="wrapper">
<?php
  include("navbar.php");
?>
<?php
  include("sidebar.php");
?>
<div class="content-wrapper" style="background: #212121; !important">
  <div class="jumbotron">
    <p>COORDINACIÓN DE SERVICIOS GENERALES / UNIDAD DE MANTENIMIENTO</p>
    <p>SOLICITUD MANTENIMIENTO PREVENTIVO / CORRECTIVO</p>
    <small><small style="color: red">*</small> SON CAMPOS OBLIGATORIOS.</small>
  </div>
  <div class="alert alert-default alert-dismissible" style="background: #12005e;">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true" style="color: white">&times;</button>
    <h4><i class="icon fa fa-info"></i>Ayuda</h4>
    <h5>Asegurese de conocer el correo electrónico del usuario que reportó el incidente.</h5>
    <h5>Agregue una anotación extra si solo no existe un Piso ni Aula del Módulo Seleccionado.</h5>
  </div>
  <div class="row" id="principal">
    <form name="formulario" autocomplete="off" required>
      <div class="col-sm-3">
        <input class="form-control" id="recibe" type="text" name="recibe" style="color: #f5f5f5;" required>
        <label for="recibe" style="color: #f5f5f5;">Recibe</label>
      </div>
      <div class="col-sm-3">
        <input class="form-control" id="correo" type="email" class="validate" name="correo" placeholder="Correo Electrónico del Usuario" style="color: #f5f5f5;" required>
        <span style="color: crimson;" ng-show="formulario.correo.$touched && formulario.correo.$invalid">Email es requerido.<br/></span>
        <label for="correo" style="color: #f5f5f5;"><small style="color: red">*</small>Correo</label>
      </div>
      <div class="col-sm-2">
        <input type="tel" class="form-control" id="telefono" name="telefono" maxlength="10" minlength="10" pattern="[0-9]{10}" ng-model="telefono" placeholder="Teléfono" style="color: #f5f5f5;" required>
        <span style="color: crimson;" ng-show="formulario.telefono.$touched && formulario.telefono.$invalid">Teléfono es requerido.<br/></span>
        <label for="telefono" style="color: #f5f5f5;"><small style="color: red">*</small>Teléfono de contacto</label>
      </div>
      <div class="input-field col-sm-3">
        <input class="form-control" id="area" type="text" class="validate" name="area" ng-model="area" placeholder="Área Solicitante" style="color: #f5f5f5;" required>
        <span style="color: crimson;" ng-show="formulario.area.$touched && formulario.area.$invalid">Área es requerido.<br/></span>
        <label for="area" style="color: #f5f5f5;"><small style="color: red">*</small>Área solicitante</label>
      </div>
      <div class="input-field col-sm-12" id="divSeleccion">
        <fieldset>
          <legend style="color: #f5f5f5"><small style="color: red">*</small>Ubicación del servicio</legend>
          <div id="divModulo">
            <label for="modulo" style="color: #f5f5f5;"><small style="color: red">*</small>Módulo:</label>
            <select class="form-control" id="modulo" required><option></option></select>
          </div>
          <div id="divPiso">
            <label for="piso" style="color: #f5f5f5;"><small style="color: red">*</small>Piso:</label>
            <select class="form-control" id="piso" required><option></option></select>
          </div>
          <div id="divAula">
            <label for="aula" style="color: #f5f5f5;"><small style="color: red">*</small>Aula:</label>
            <select class="form-control" id="aula" required><option></option></select>
          </div>
          <input class="form-control" id="anotacionExtra" type="text" name="anotacionExtra" placeholder="Escriba aqui si necesita hacer una descripción sobre el lugar." style="color: #f5f5f5;">
          <label for="recibe" style="color: #f5f5f5;">Anotación Extra sobre el sitio</label>
        </fieldset>
      </div>
      <div class="input-field col-sm-12">
        <fieldset>
          <legend style="color: #f5f5f5"><small style="color: red">*</small>Descripción del servicio solicitado o falla a reparar</legend>
          <div class="row">
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="1" required/>
                <span>Aire Acondicionado</span>
              </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="2"/>
                <span>Carpinteria</span>
              </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="3"/>
                <span>Cristales y/o estructura de aluminio</span>
              </label>
            </div>
              <div class="input-field col-sm-3">
                <label style="color: #f5f5f5;">
                  <input name="descripcionServicio" id="descripcionServicio" type="radio" value="4"/>
                  <span>Eléctrico</span>
                </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="5"/>
                <span>Herrería</span>
              </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="6"/>
                <span>Hidráulico</span>
              </label>
            </div>
              <div class="input-field col-sm-3">
                <label style="color: #f5f5f5;">
                  <input name="descripcionServicio" id="descripcionServicio" type="radio" value="7"/>
                  <span>Infraestructura</span>
                </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="8"/>
                <span>Jardinería</span>
              </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="9"/>
                <span>Limpieza</span>
              </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="10"/>
                <span>Pintura</span>
              </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="11"/>
                <span>Cerrajería</span>
              </label>
            </div>
            <div class="input-field col-sm-3">
              <label style="color: #f5f5f5;">
                <span id="inputOtro"></span>
                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="otro"> <input type="text" name="otro" id="otro" placeholder="Otro" style="color: black;">
                <span>Otro</span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
      <div class="input-field col-sm-12" id="txbox">
        <fieldset>
          <legend style="color: #f5f5f5"><small style="color: red">*</small>Descripción del problema</legend>
<b><textarea rows="4" cols="50" name="descripcionProblema" id="descripcionProblema" style="background-color: #9e9e9e; color: black"></textarea></b>
        </fieldset>
      </div>
      <div class="col-sm-12" id="divButton">
        <button class="btn btn-primary btn-block btn-flat" id="btnNuevoReporte" ng-disabled="formulario.$invalid" style="color: white; border-radius: 20px; background-color: #00b248">REGISTRAR NUEVO REPORTE DE MANTENIMIENTO
        </button>
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
<script type="text/javascript" src="assets/js/generar-reporte.js"></script>
</body>
</html>
