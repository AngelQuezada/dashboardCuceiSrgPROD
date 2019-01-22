<!DOCTYPE html>
<html>
<head>
	<title>CUCEI-SRG | Administración de Gráficas</title>
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
    	<section class="content-header">
    		<h1>
		        Nuevo Reporte de Seguridad FORMATO 2
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
      <div style="text-align: center;">
         <p>UNIVERSIDAD DE GUADALAJARA 
         <P>COORDINACION DE SEGURIDAD UNIVERSITARIA</P> 
         </p>
         <p><b>Formato 2</b> Reporte de incidencias</p>
     </div>
     
     <fieldset>
     <legend style="text-align: center;">DATOS DE IDENTIFICACION DEL AFECTADO</legend>

      <div class="row" style="margin: 2%">
          <form action="" method="POST">
            <div class="col-sm-3">
              <input class="form-control" id="escuela" name="escuela" type="text" class="validate">
              <label for="escuela">escuela/institucion</label>
            </div>
            
            <div class="col-sm-3">
                    <input class="form-control" name="fecha" id="fecha" type="date" class="datepicker">
                    <label for="fecha">Fecha</label>
                  </div>
                  
                  <div class="col-sm-3">
                        <input class="form-control" name="nombre" id="nombre" type="text" class="validate">
                        <label for="nombre">Nombre</label>
                      </div>

                  <div class="col-sm-1">
                       <input class="form-control" name="edad" id="edad" type="TINYINT" class="validate">
                       <label for="edad">Edad</label>
                     </div>

                   <div class="col-sm-3">
                       <input class="form-control" name="codigo" id="codigo" type="text" class="validate">
                       <label for="codigo">Codigo</label>
                     </div>

                     <div class="col-sm-3">
                       <input class="form-control" name="carrera" id="carrera" type="text" class="validate">
                       <label for="carrera">Carrera</label>
                     </div>

                     <div class="col-sm-3">
                       <input class="form-control" name="email" id="email" type="email" class="validate">
                       <label for="email">Email</label>
                     </div>

                     <div class="col-sm-3">
                      <input class="form-control" name="telefono" id="telefono" type="tel" class="validate">
                      <label for="telefono">Teléfono de contacto</label>
                    </div>
                  </fieldset>
                    
          
  
                <fieldset>
                    <legend style="text-align: center;">DATOS DEL INCIDENTE</legend>
                    <div class="col-sm-3">
                      <input class="form-control" name="fecha" id="fecha" type="date" class="datepicker">
                      <label for="fecha">Fecha</label>
                     </div>

                    <div class="col-sm-3">
                     <input class="form-control" name="tiempo" id="tiempo" type="time" class="timepicker">
                     <label for="tiempo">Hora</label>
                    </div>
                 
                    <div class="col-sm-4">
                     <input class="form-control" name="lugar" id="lugar" type="text" class="validate">
                     <label for="lugar">Lugar (calle y cruces) Frente a (casa,oficina,baldios,edificios,etc)</label>
                    </div>
                  </fieldset>
                  
                  <fieldset>
                    <div class="input-field col-sm-6" style="text-align:center">
                        <legend>Descripcion el suceso</legend><br>
                          <textarea rows="4" cols="50">
                          </textarea>
                      </div>

                      <div class="input-field col-sm-6" style="text-align:center">
                            <legend>Descripcion de lo robado</legend><br>
                              <textarea rows="4" cols="50">
                              </textarea>
                      </div>
                   </fieldset>
                   
            <fieldset>
            <legend style="text-align: center;">MEDIDA FILIACION DEL AGRESOR</legend>

                  <div class="col-sm-3">
                    <input class="form-control" name="estatura" id="estatura" type="text" class="validate">
                    <label for="estatura">Estatura</label>
                   </div>

                    <div class="col-sm-3">
                      <input class="form-control" name="apariencia" id="apariencia" type="text" class="validate">
                      <label for="apariencia">Apariencia</label>
                     </div>

                     <div class="col-sm-3">
                       <input class="form-control" name="tez" id="tez" type="text" class="validate">
                       <label for="tez">Tez</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="cabello" id="cabello" type="text" class="validate">
                        <label for="cabello">Cabello</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="ojos" id="ojos" type="text" class="validate">
                        <label for="ojos">Ojos</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="cara" id="cara" type="text" class="validate">
                        <label for="cara">Cara</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="boca" id="boca" type="text" class="validate">
                        <label for="boca">Boca</label>
                      </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="ropa" id="ropa" type="text" class="validate">
                        <label for="ropa">Tipo de ropa</label>
                      </div>

                      <div class="col-sm-3">
                         <input class="form-control" name="uso" id="uso" type="text" class="validate">
                         <label for="uso">Uso,gorra</label>
                       </div>

                      <div class="col-sm-3">
                        <input class="form-control" name="edad" id="edad" type="TINYINT" class="validate">
                        <label for="edad">Edad Aprox</label>
                      </div>

                       <div class="col-sm-3">
                        <input class="form-control" name="cicatrices" id="cicatrices" type="text" class="validate">
                        <label for="cicatrices">Cicatrices</label>
                       </div>

                       <div class="col-sm-3">
                         <input class="form-control" name="tatuajes" id="tatuajes" type="text" class="validate">
                         <label for="tatuajes">Tatuajes</label>
                       </div>
                                                             
                       <div class="col-sm-3">
                        <input class="form-control" name="percing" id="percing" type="text" class="validate">
                        <label for="percing">Percing</label>
                       </div>

                       <div class="col-sm-3">
                         <input class="form-control" name="otras" id="otras" type="text" class="validate">
                         <label for="otras">Otra seña particular</label>
                        </div>
                      </fieldset>
                      
                      <fieldset>
                        <div style="text-align: center;" class="col-sm-50">
                        <input class="form-control" name="caracteristicasvehiculo" id="caracteristicasvehiculo" type="text" class="validate">
                        <label for="caracteristicasvehiculo">Medio utilizado para huir (caracteristicas del vehiculo en su caso)</label>
                       </div>
                        
                       <div class="col-sm-12">
                        <p>Observaciones</p>
                      <textarea rows="4" cols="150">
                          </textarea>
                       </div>

                      </fieldset>
                       <div style="text-align: center;">

  <button class="btn waves-effect waves-light" type="submit" name="action" id="btn-reset" style="background-color: rgb(62, 88, 233);">Registrar Reporte
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
</body>
</html>