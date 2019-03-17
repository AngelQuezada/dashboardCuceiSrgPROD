const URI = localStorage.getItem('uri');
/*
* Obtener Todos los reportes
*/
let reportesTodos = () => {
    let token = localStorage.getItem("token");
    $("#tablaResultados").empty();
    $("#tablaResultados").append(`<br><table class='table' id="tablaCancelados">
    <thead>
    <tr class='bg-primary'>
    <th>Folio</th>
    <th>Status</th>
    <th>Observacion Status</th>
    <th>Ver</th>
    <th>Enviar Correo</th>
    </tr>
    </thead>
    <tbody id="bodyTable">`);
$.ajax({
    type: "GET",
    url: `${URI}/reporte/reportecancelados/`+token,
    dataType: "json",
    success: function(data){
      $.each(data,function(_key, registro) {
          let status;
          registro.idStatus === '1' ? status = "En Solicitud" :
          registro.idStatus === '2' ? status = "Asignado" :
          registro.idStatus === '3' ? status = "Finalizado" : status = "Cancelado";
          registro.observacion_status === null ? obs = "Sin Observaciones" : obs = registro.observacion_status;
          $("#bodyTable").append(`
          <tr style="text-align: center">
          <input type="hidden" id="folioId" value="`+registro.folio+`"/>
          <td>`+registro.folio+`</td>
          <td>`+status+`</td>
          <td>`+obs+`</td>
          <td><button class="btn btn-primary" id="btnVerReporte" data-toggle="modal" data-target="#myModal" onclick="verReporte('`+registro.folio+`','`+this+`')" style="background-color: #0d47a1"><i class="fa fa-external-link" aria-hidden="true" style="color: white"></i></button></td>
          <td><button class="btn btn-success" onclick="enviarCorreo('`+registro.folio+`','`+this+`')" style="background-color: green"><i class="fa fa-envelope" aria-hidden="true" style="color: white"></i></button></td>
          </tr>
          `);
      });
      $("#tablaResultados").append(`</tbody>
      </table>`);
      $("#tablaCancelados").DataTable({
        "order": false,
        "language": {
          "sProcessing": "Procesando...",
          "sLengthMenu": "Mostrar _MENU_ registros",
          "sZeroRecords": "No se encontraron resultados",
          "sEmptyTable": "Ningún dato disponible en esta tabla",
          "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
          "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
          "sInfoPostFix": "",
          "sSearch": "Buscar:",
          "sUrl": "",
          "sInfoThousands": ",",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
          },
          "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
        }
      })
    },
    error: function() {
    }
  });
}
/*
* Ver el reporte seleccionado
* @param value
*/
let verReporte = (value,object) =>{
    let selectedFolio = object.innerHTML = value;
    $("#modal").empty();
  $("#modal").append(`<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header" style="background-color: #FAAC58">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title" id="myModalLabel">Datos del Reporte:</h4>
    </div>
    <div class="modal-body" style="background-color: #F5ECCE" id="bodyModal">`);
    $.ajax({
      type: "GET",
      url: `${URI}/reporte/reporteindpp/`+selectedFolio,
      dataType: "json",
      success: function(data){
        $.each(data,function(_key, registro) {
          let ds;
          registro.descripcion_servicio === '1' ? ds = "Aire Acondicionado" :
          registro.descripcion_servicio === '2' ? ds = "Carpinteria" :
          registro.descripcion_servicio === '3' ? ds = "Cristales y/o estructura de aluminio" :
          registro.descripcion_servicio === '4' ? ds = "Eléctrico" :
          registro.descripcion_servicio === '5' ? ds = "Herrería" :
          registro.descripcion_servicio === '6' ? ds = "Hidráulico" :
          registro.descripcion_servicio === '7' ? ds = "Infraestructura" :
          registro.descripcion_servicio === '8' ? ds = "Jardinería" :
          registro.descripcion_servicio === '9' ? ds = "Limpieza" :
          registro.descripcion_servicio === '10' ? ds = "Pintura" : ds = registro.descripcion_servicio;

          //ASIGNAN localStorage PARA IMPRIMIR PDF
          localStorage.setItem("folio", registro.folio);
          localStorage.setItem("fechaElaboracion", registro.fecha_elaboracion);
          localStorage.setItem("recibe", registro.recibe);
          localStorage.setItem("fechaRecepcion", registro.fecha_recepcion);
          localStorage.setItem("fechaAsignacion", registro.fecha_asignacion);
          localStorage.setItem("fechaReparacion", registro.fecha_reparacion);
          localStorage.setItem("nombre", registro.nombre);
          localStorage.setItem("aPaterno", registro.a_paterno);
          localStorage.setItem("aMaterno", registro.a_materno);
          localStorage.setItem("telefono", registro.telefono);
          localStorage.setItem("areaSolicitante", registro.area_solicitante);
          localStorage.setItem("ubicacionServicio", registro.ubicacion_servicio);
          localStorage.setItem("anotacionExtra", registro.anotacion_extra);
          localStorage.setItem("descripcionProblema", registro.descripcion_problema);
          localStorage.setItem("descripcionServicio", ds);

          $("#modal").find(".modal-body").append(`<div class="row">
            <div class="col-sm-2" style="background-color:gray;">
              <input class="form-control" id="txtFolioR" value="`+registro.folio+`" style="color: white;" disabled>
              <label for="txtFolioR" style="color: black;">Folio</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtFecha" value="`+registro.fecha_elaboracion+`" disabled>
              <label for="txtFecha" style="color: black;">Fecha de Elaboracion</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtRecibe" value="`+registro.recibe+`" disabled>
              <label for="txtRecibe" style="color: black;">Recibe</label>
            </div>
            <div class="col-sm-4">
                <input type="date" class="form-control" id="txtFechaRecepcion" value="`+registro.fecha_recepcion+`">
                <label for="txtFechaRecepcion" style="color: black;"><small style="color: blue">*</small>Fecha de Recepcion</label>
            </div>
            <div class="col-sm-4">
              <input type="date" class="form-control" id="txtFechaAsignacion" value="`+registro.fecha_asignacion+`">
              <label for="txtFechaAsignacion" style="color: black;"><small style="color: blue">*</small>Fecha de Asignacion</label>
            </div>
            <div class="col-sm-4">
              <input type="date" class="form-control" id="txtFechaReparacion" value="`+registro.fecha_reparacion+`">
              <label for="txtFechaReparacion" style="color: black;"><small style="color: blue">*</small>Fecha de Reparacion</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtNombre" value="`+registro.nombre+`" disabled>
              <label for="txtNombre" style="color: black;">Nombre</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtApaterno" value="`+registro.a_paterno+`" disabled>
              <label for="txtApaterno" style="color: black;">Apellido Paterno</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtAmaterno" value="`+registro.a_materno+`" disabled>
              <label for="txtAmaterno" style="color: black;">Apellido Materno</label>
            </div>
            <div class="col-sm-3">
              <input class="form-control" id="txtTelefono" value="`+registro.telefono+`" disabled>
              <label for="txtTelefono" style="color: black;">Teléfono</label>
            </div>
            <div class="col-sm-3">
              <input class="form-control" id="txtAreaSolicitante" value="`+registro.area_solicitante+`" disabled>
              <label for="txtAreaSolicitante" style="color: black;">Área Solicitante</label>
            </div>
            <div class="col-sm-6">
              <input class="form-control" id="txtUbicacionServicio" value="`+registro.ubicacion_servicio+`" disabled>
              <label for="txtUbicacionServicio" style="color: black;">Ubicación del Servicio</label>
            </div>
            <div class="col-sm-12">
              <hr style="color: black; border: 1px dotted;">
            </div>
            <div class="col-sm-6">
<textarea rows="4" cols="50" id="txtAnotacionExtra" style="background-color: #F7D358;" disabled>`+registro.anotacion_extra+`</textarea>
              <label for="txtAnotacionExtra" style="color: black;">Anotación extra</label>
            </div>
            <div class="col-sm-6">
<textarea rows="4" cols="50" id="txtAnotacionExtra" style="background-color: #F7D358;" disabled>`+registro.descripcion_problema+`</textarea>
              <label for="txtDescripcionProblema" style="color: black;">Descripcion del Problema</label>
            </div>
            <div class="col-sm-12">
              <input class="form-control" id="txtDescripcionServicio" value="`+ds+`" disabled>
              <label for="txtDescripcionServicio" style="color: black;">Descripcion del Servicio</label>
            </div>
          `);
        });
        document.getElementById('txtFechaRecepcion').disabled = true;
        document.getElementById('txtFechaAsignacion').disabled = true;
        document.getElementById('txtFechaReparacion').disabled = true;
        $("#modal").find(".modal-body").append(`</div><div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="imprimir()" style="background-color: #00c853; color: white;"><i class="fa fa-print" aria-hidden="true"> Imprimir Reporte</i></button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        </div>
        </div>
        </div>
        </div>`);
      },
      error: function() {
    }
  });
}
let imprimir = () => {
  const URL = localStorage.getItem('url');
  window.open(`${URL}/print.html`, '_blank');
}
let enviarCorreo = (value, object) => {
  let folio = object.innerHTML = value;
  $.ajax({
    type: 'GET',
    url: `${URI}/reporte/getemail/`+folio,
    async: false,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      $.each(data, function (_key, registro) {
      window.open(`mailto:${registro.correo}?Subject=Agregue un Asunto`, '_blank');
      });
    },
    error: function() {}
  });
}
/*
* Se ejecuta al cargar la pagina
*/
$(function(){
  reportesTodos();
});
$(document).ajaxStart(function () {
  Pace.restart();
})