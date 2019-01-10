const nuevaBusqueda = function(){
  let aPaterno = document.getElementById('txtApaterno').value;
  let aMaterno = document.getElementById('txtAmaterno').value;
  let nombre = document.getElementById('txtNombre').value;
  let folio = document.getElementById('txtFolio').value;
  console.log(aPaterno);
  console.log(aMaterno);
  console.log(nombre);
  if(aPaterno === ''){
    aPaterno = '""';
  }
  if(aMaterno === ''){
    aMaterno = '""';
  }
  if(nombre === ''){
    nombre = '""';
  }
  if(folio === ''){
    folio = '""';
  }
  reporte(aPaterno,aMaterno,nombre,folio);
}
const reporte = function(aPaterno,aMaterno,nombre,folio){
  console.log('Entro aqui');
  $("#tablaResultados").empty();
  $("#tablaResultados").append(`<br><table class='table'>
  <thead>
  <tr class='bg-primary'>
  <th>Folio</th>
  <th>Nombre</th>
  <th>Apellido Paterno</th>
  <th>Apellido Materno</th>
  <th>Fecha Elaboracion</th>
  <th>Detalles</th>
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
        <input type="hidden" id="folioId" value="`+registro.folio+`"/>
        <td>`+registro.folio+`</td>
        <td>`+registro.nombre+`</td>
        <td>`+registro.a_paterno+`</td>
        <td>`+registro.a_materno+`</td>
        <td>`+registro.fecha_elaboracion+`</td>
        <td><button class='btn btn-primary' id="btnVerReporte" data-toggle="modal" data-target="#myModal" onclick="regSel('`+registro.folio+`','`+this+`')">Ver</button></td>
        </tr>
        `);
        console.log(registro.folio);
      });
      $("#container").append(`</tbody>
        </table>`);
    },
    error: function(data) {
      $("#bodyTable").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
    }
  });
}
function regSel(value,object){
    let selectedFolio = object.innerHTML = value;
    console.log(selectedFolio);
    generateModal(selectedFolio);
}
function generateModal(selectedFolio){
$("#modal").empty();
$("#modal").append(`<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header" style="background-color: #58ACFA">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title" id="myModalLabel">Datos del Reporte:</h4>
    </div>
    <div class="modal-body" style="background-color: #F5ECCE">
    <div class="row">
        <div class="col-sm-2" style="background-color:gray;">
            <input class="form-control" id="txtFolio" value="`+selectedFolio+`" disabled style="color: white;">
            <label for="txtFolio" style="color: black;">Folio</label>
        </div>
        <div class="col-sm-4">
            <input class="form-control" id="txtFecha" value="2019-01-10 11:07:49" disabled>
            <label for="txtFecha" style="color: black;">Fecha de Elaboracion</label>
        </div>
        <div class="col-sm-4">
            <input class="form-control" id="txtRecibe" value="Miguel Angel Quezada Galvan" disabled>
            <label for="txtRecibe" style="color: black;">Recibe</label>
        </div>
        <div class="col-sm-4">
            <input type="date" class="form-control" id="txtFechaRecepcion">
            <label for="txtFechaRecepcion" style="color: black;"><small style="color: blue">*</small>Fecha de Recepcion</label>
        </div>
        <div class="col-sm-4">
            <input type="date" class="form-control" id="txtFechaAsignacion">
            <label for="txtFechaAsignacion" style="color: black;"><small style="color: blue">*</small>Fecha de Asignacion</label>
        </div>
        <div class="col-sm-4">
            <input type="date" class="form-control" id="txtFechaReparacion">
            <label for="txtFechaReparacion" style="color: black;"><small style="color: blue">*</small>Fecha de Reparacion</label>
        </div>
        <div class="col-sm-4">
            <input class="form-control" id="txtNombre" value="Miguel Angel" disabled>
            <label for="txtNombre" style="color: black;">Nombre</label>
        </div>
        <div class="col-sm-3">
            <input class="form-control" id="txtApaterno" value="Quezada" disabled>
            <label for="txtApaterno" style="color: black;">Apellido Paterno</label>
        </div>
        <div class="col-sm-3">
            <input class="form-control" id="txtAmaterno" value="Galvan" disabled>
            <label for="txtAmaterno" style="color: black;">Apellido Materno</label>
        </div>
        <div class="col-sm-3">
            <input class="form-control" id="txtTelefono" value="3316716930" disabled>
            <label for="txtTelefono" style="color: black;">Teléfono</label>
        </div>
        <div class="col-sm-3">
            <input class="form-control" id="txtAreaSolicitante" value="Coordinacion" disabled>
            <label for="txtAreaSolicitante" style="color: black;">Área Solicitante</label>
        </div>
        <div class="col-sm-6">
            <input class="form-control" id="txtUbicacionServicio" value="MODULO: B PISO: 1 AULA: Aula 2" disabled>
            <label for="txtUbicacionServicio" style="color: black;">Ubicación del Servicio</label>
        </div>
        <div class="col-sm-6">
            <input class="form-control" id="txtAnotacionExtra" value="Anotacion Extra Ejemplo" disabled>
            <label for="txtAnotacionExtra" style="color: black;">Anotación extra</label>
        </div>
        <div class="col-sm-3">
            <input class="form-control" id="txtDescripcionServicio" value="2" disabled>
            <label for="txtDescripcionServicio" style="color: black;">Descripcion del Servicio</label>
        </div>
        <div class="col-sm-3">
            <input class="form-control" id="txtDescripcionProblema" value="dsdsdsd" disabled>
            <label for="txtDescripcionProblema" style="color: black;">Descripcion del Problema</label>
        </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      <button type="button" class="btn btn-primary">Guardar Cambios</button>
    </div>
  </div>
</div>
</div>`);    
}
