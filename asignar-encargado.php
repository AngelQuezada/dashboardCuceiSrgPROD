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
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="favicon.png">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>ASIGNAR ENCARGADO</title>
</head>
<body style="background: #b0bec5">
<!-- Listado de Encargados -->
<div class="row">
	<div class="input-field col-sm-6" style="padding: 0; margin: 3%;">
      <div class="box box-solid box-success">
          <div class="box-header with-border" style="border-bottom: 2px solid black; padding: 0; margin: 0;">
              <h3 class="box-title" style="text-align: center">ASIGNAR ENCARGADO</h3>
            </div>
			    <div class="box-body">
                <div id="tablaEncargados"></div>
                <b>Cuando finalize de asignar el encargado cerrar esta ventana.</b>
          </div>
        </div>
    </div>
</div>
<!-- Listado de Encargados del Reporte Seleccionado -->
<div class="row">
	<div class="input-field col-sm-6" style="padding: 0; margin: 3%;">
      <div class="box box-solid box-success">
          <div class="box-header with-border" style="border-bottom: 2px solid black; padding: 0; margin: 0;">
              <h3 class="box-title" style="text-align: center">ENCARGADOS ASIGNADOS AL REPORTE ACTUAL</h3>
            </div>
			    <div class="box-body">
                <div id="tablaEncargadosAsignados"></div>
          </div>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
crossorigin="anonymous"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>
const URI = localStorage.getItem('uri');
$(function(){
    encargadosList();
})
let encargadosList = () => {
    let folio = localStorage.getItem("selectedFolio");
    //GENERAR TABLA ENCARGADOS
    $("#tablaEncargados").empty();
    $("#tablaEncargados").append(`<br><table class='table table-bordered table-hover'>
    <thead>
    <tr class='bg-primary' style="background-color: #12005e">
    <th>Id</th>
    <th>Nombre</th>
    <th>Apellido Paterno</th>
    <th>Apellido Materno</th>
    <th>Acciones</th>
    </tr>
    </thead>
    <tbody id="bodyTableEnc">`);
    $.ajax({
        type: "GET",
        url: `${URI}/encargado/encargados`,
        dataType: "json",
        async: false,
        success: function(data){
        $.each(data,function(_key, registro) {
            $("#bodyTableEnc").append(`<tr style="text-align: center">
            <td>`+registro.id+`</td>
            <td>`+registro.nombre+`</td>
            <td>`+registro.a_paterno+`</td>
            <td>`+registro.a_materno+`</td>
            <td><button type="button" id="btnAsignarEncargado" class="btn btn-secondary" onclick="asignarEncargado('`+folio+`','`+registro.id+`','`+this+`')" style="background-color: #00c853; color: white;"><i class="fa fa-user-plus" aria-hidden="true"></i> Asignar</button></td>            
            </tr>
            `);
            encargados();
        });
        $("#tablaEncargados").append(`</tbody>
        </table>`);
        },
        error: function() {
        $("#bodyTableEnc").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
    }
    });
}
let encargados = () => {
    let folio = localStorage.getItem("selectedFolio");
    //GENERAR TABLA ENCARGADOS ASIGNADOS POR REPORTE SELECCIONADO
    $("#tablaEncargadosAsignados").empty();
    $("#tablaEncargadosAsignados").append(`<br><table class='table table-bordered table-hover'>
    <thead>
    <tr class='bg-primary' style="background-color: #0d47a1">
    <th>Id</th>
    <th>Nombre</th>
    <th>Apellido Paterno</th>
    <th>Apellido Materno</th>
    <th>Acciones</th>
    </tr>
    </thead>
    <tbody id="bodyTableEncSel">`);
    $.ajax({
        type: "GET",
        url: `${URI}/encargado/getreporte/`+folio,
        dataType: "json",
        async: false,
        success: function(data){

        $.each(data,function(_key, registro) {
            $("#bodyTableEncSel").append(`<tr style="text-align: center">
            <td>`+registro.id+`</td>
            <td>`+registro.nombre+`</td>
            <td>`+registro.a_paterno+`</td>
            <td>`+registro.a_materno+`</td>
            <td><button type="button" class="btn btn-primary" onclick="bajaEncargado('`+folio+`','`+registro.id+`','`+this+`')" style="background-color: #d32f2f; color: white;"><i class="fa fa-user-times" aria-hidden="true"></i> QUITAR</button></td>            
            </tr>
            `);
        });
        $("#tablaEncargadosAsignados").append(`</tbody>
        </table>`);
        },
        error: function() {
        $("#bodyTableEncSel").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
    }
    });
}
let asignarEncargado = (folio,value,object) =>{
    let idPersonal = object.innerHTML = value;
    
    let datos = {
    "token" : localStorage.getItem("token"),
    "folio" : folio,
    "idPersonal" : idPersonal,
    "idUsuario" : localStorage.getItem("idUsuario")
  }
  console.log(JSON.stringify(datos));
  $.ajax({
    type: 'POST',
    url: `${URI}/encargado/asignarencargado`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      swal("Reporte de Mantenimiento", data.mensaje, "success");
      encargadosList();
      encargados();
    },
    error: function (data) {
      swal("Reporte de Mantenimiento", data.responseJSON.mensaje, "error");
    }
  });
}
let bajaEncargado = (folio,value,object) => {
    let idPersonal = object.innerHTML = value;
    
    let datos = {
    "token" : localStorage.getItem("token"),
    "folio" : folio,
    "idPersonal" : idPersonal,
    "idUsuario" : localStorage.getItem("idUsuario")
  }
  $.ajax({
    type: 'POST',
    url: `${URI}/encargado/bajaencargado`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      swal("Reporte de Mantenimiento", data.mensaje, "success");
 
      encargadosList();
      encargados();
    },
    error: function (data) {
      swal("Reporte de Mantenimiento", data.responseJSON.mensaje, "info");
    }
  });
}
</script>
</body>
</html>