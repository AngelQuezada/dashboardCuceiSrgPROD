<!DOCTYPE html>
<html>
<head>
	 <title>Nuevo Reporte - Mantenimiento</title>
  <?php
    include('header.php');
  ?>
 <link rel="stylesheet" type="text/css" href="assets/css/generar-reporte.css">
</head>
<body class="hold-transition skin-blue sidebar-mini" ng-app="">
<div class="wrapper">
	<?php
      include("navbar.php");
    ?>
    <?php
      include("sidebar.php");
    ?>
  <div class="content-wrapper">
  	<div class="jumbotron">
        <p>COORDINACION DE SERVICIOS GENERALES / UNIDAD DE MANTENIMIENTO</p>
        <p>SOLICITUD MANTENIMIENTO PREVENTIVO / CORRECTIVO</p>
    </div>
    <div class="row" id="principal">
      <form name="formulario" autocomplete="off">
                <div class="col-sm-3">
                    <input class="form-control" id="recibe" type="text" name="recibe" required>
                    <label for="recibe">Recibe</label>
                </div>
                <div class="col-sm-3">
                  <input class="form-control" id="correo" type="email" class="validate" name="correo" placeholder="email@dominio.udg.mx" ng-model="correo" required>
                  <span style="color: crimson;" ng-show="formulario.correo.$touched && formulario.correo.$invalid">Email es requerido.<br/></span>
                  <label for="correo">Correo</label>
                </div>
                <div class="col-sm-2">
                 <input type="tel" class="form-control" id="telefono" name="telefono" maxlength="10" minlength="10" pattern="[0-9]{10}" ng-model="telefono" placeholder="3312345678" required>
                 <span style="color: crimson;" ng-show="formulario.telefono.$touched && formulario.telefono.$invalid">Telefono es requerido.<br/></span>
                 <label for="telefono">Teléfono de contacto</label>
                </div>
                <div class="input-field col-sm-3">
                  <input class="form-control" id="area" type="text" class="validate" name="area" ng-model="area" placeholder="Area" required>
                  <span style="color: crimson;" ng-show="formulario.area.$touched && formulario.area.$invalid">Area es requerido.<br/></span>
                  <label for="area">Area solicitante</label>
                </div>
                <div class="input-field col-sm-12">
                  <fieldset>
                    <legend>Ubicacion del servicio</legend>
                    <label for="modulo">Modulo:</label>
                    <select class="form-control" id="modulo" onclick="getModulo()"><option value="" disabled selected>Seleccione un Módulo.</option></select>
                    <button class="btn btn-danger" onclick="ereaseModule()">Cambiar</button><br>
                    <label for="piso">Piso:</label>
                    <select class="form-control" id="piso" 
                    onclick="getPiso()"><option value="" disabled selected>Seleccione un Piso.</option></select>
                    <button class="btn btn-danger" onclick="ereaseFloor()">Cambiar</button><br>
                    <label for="aula">Aula:</label>
                    <select class="form-control" id="aula"
                    onclick="getAula()" 
                    ><option value="" disabled selected>Seleccione un Aula.</option></select>
                    <button class="btn btn-danger" onclick="ereaseAula()">Cambiar</btn><br>
                    <button class="btn btn-warning" onclick="ereaseItems()">Reiniciar</button>
                  </fieldset>
                </div>
                <div class="input-field col-sm-12">
                    <fieldset>
                      <legend>Descripcion del servicio solicitado o falla a reparar</legend>
                      <div class="row">
                        <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="1"/>
                                <span>Aire Acondicionado</span>
                            </label>
                        </div>
                        <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="2"/>
                                <span>Carpinteria</span>
                            </label>
                        </div>
                        <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="3"/>
                                <span>Cristales y/o estructura de aluminio</span>
                            </label>
                        </div>
                         <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="4"/>
                                <span>Electrico</span>
                            </label>
                        </div>
                        <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="5"/>
                                <span>Herreria</span>
                            </label>
                        </div>
                        <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="6"/>
                                <span>Hidraulico</span>
                            </label>
                        </div>
                         <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="7"/>
                                <span>Infraestructura</span>
                            </label>
                        </div>
                        <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="8"/>
                                <span>Jardineria</span>
                            </label>
                        </div>
                        <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="9"/>
                                <span>Limpieza</span>
                            </label>
                        </div>
                        <div class="input-field col-sm-3">
                            <label>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="10"/>
                                <span>Pintura</span>
                            </label>
                        </div>
                        <div class="input-field col-sm-3">
                            <label>
                                <span id="inputOtro"></span>
                                <input name="descripcionServicio" id="descripcionServicio" type="radio" value="otro"> <input type="text" name="otro" id="otro" placeholder="Otro">
                                <span>Otro</span>
                            </label>
                        </div>
                      </div>
                    </fieldset>
                </div>
                <div class="input-field col-sm-12" id="txbox">
                  <p>Descripcion del problema</p><br>
<textarea rows="4" cols="50" name="descripcionProblema" id="descripcionProblema"></textarea>
                </div>
                <div class="col-sm-12" id="divButton">
                  <button class="btn btn-primary" onclick="nuevoReporte()" id="btnNuevoReporte" ng-disabled="formulario.$invalid">Registrar Reporte
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
<script src="assets/js/generar-reporte.js" type="text/javascript"></script>
</body>
</html>