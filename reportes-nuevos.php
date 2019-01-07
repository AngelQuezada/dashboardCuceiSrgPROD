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
		        Reportes Nuevos
		        <small>Sistema de Reportes Generales</small>
      		</h1>
			<ol class="breadcrumb">
				<li><a href="#"><i class="fa fa-dashboard"></i> Dashboard-Mantenimiento</a></li>
				<li class="active">Reportes Nuevos</li>
			</ol>
    	</section>
    	<!-- END Content Header (Page header) -->
    	<!-- Contenedor principal -->
    	<section class="content">
		<div class="row">
			<div class="input-field col-sm-12">
			<fieldset style="border: 1px solid gray;">
        <legend>Búsqueda</legend>
				<div class="col-sm-3">
          <input type="text" class="form-control" name="txtApaterno" id="txtApaterno" placeholder="Apellido Paterno">
          <label for="txtApaterno" style="color: black;">Apellido Paterno</label>
				</div>
        <div class="col-sm-3">
          <input type="text" class="form-control" name="txtAmaterno" id="txtAmaterno" placeholder="Apellido Materno">
          <label for="txtAmaterno" style="color: black;">Apellido Materno</label>
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control" name="txtNombre" id="txtNombre" placeholder="Nombre">
          <label for="txtNombre" style="color: black;">Nombre</label>
        </div>
        <div class="col-sm-1">
          <input type="text" class="form-control" name="txtFolio" id="txtFolio" placeholder="Folio">
          <label for="txtFolio" style="color: black;">Folio</label>
        </div>
        <div class="col-sm-2">
          <button class="btn btn-primary" onclick="nuevaBusqueda()">Buscar</button>
        </div>			
      </fieldset>
			</div>
		</div>
    <div id="tablaResultados">
      <div id="container"></div>
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
  <script type="text/javascript">
const nuevaBusqueda = function(){
  let aPaterno = document.getElementById('txtApaterno').value;
  let aMaterno = document.getElementById('txtAmaterno').value;
  let nombre = document.getElementById('txtNombre').value;
  let folio = document.getElementById('txtFolio').value;
  reporte(aPaterno,aMaterno,nombre,folio);
}
const reporte = function(aPaterno,aMaterno,nombre,folio){
  console.log('Entro aqui');
  //$("#tablaResultados").load();
  $("#tablaResultados").parent("#container").append(`<table class='table table-striped table-dark'>
  <thead>
  <tr class bg-primary>
  <th>Folio</th>
  <th>Nombre</th>
  <th>Apellido Paterno</th>
  <th>Apellido Materno</th>
  <th>Fecha Elaboracion</th>
  </tr>
  </thead>
  <tbody id="bodyTable">`);
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/reporte/reportenpp/'+aPaterno+'/'+aMaterno+'/'+nombre+'/'+folio,
    dataType: "json",
    success: function(data){
      $.each(data,function(key, registro) {
        $("#bodyTable").append(`
        <tr>
        <td><input type="hidden" id="folioId" value="`+registro.folio+`"/></td>
        <td>`+registro.folio+`</td>
        <td>`+registro.nombre+`</td>
        <td>`+registro.a_paterno+`</td>
        <td>`+registro.a_materno+`</td>
        <td>`+registro.fecha_elaboracion+`</td>
        <td><input type="button" id="btnVerReporte" onclick="regSel()"/></td>
        </tr>
        `);
      });
      $("#container").append(`</tbody>
        </table>`);
    },
    error: function(data) {
    }
  });
}
    $(document).ready(function(){
      $("button").click(function(){
        console.log("Howdy");
        //$("#tablaResultados").empty();
        document.getElementById("tablaResultados").innerHTML = "";
        document.getElementById("tablaResultados").innerHTML = "<div id=\"container\"></div>";
      });
    });
      const regSel = function(){
    $('input[type=button]' ).click(function() {
      var bid = this.id; // button ID 
      console.log('BID: '+bid);
      var trid = $(this).closest('td').parent('input').attr('folioId'); // table row ID
      console.log('TRID: '+trid);
    });
    //let idFolio = document.getElementById('folioId').value;
  }
  </script>
  <script type="text/javascript" src="assets/js/reportes-nuevos.js"></script>
</body>
</html>