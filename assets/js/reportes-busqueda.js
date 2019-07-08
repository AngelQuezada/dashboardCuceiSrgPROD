$(document).ajaxStart(function () {
  Pace.restart();
})
var idEncargado;
const URI = localStorage.getItem('uri');
document.getElementById('btnBuscarReporte').addEventListener('click',function(){
  nuevaBusqueda();
});
/*
* Se Obtienen los datos del formulario
*/
let nuevaBusqueda = () => {
  let aPaterno = document.getElementById('txtApaterno').value;
  let aMaterno = document.getElementById('txtAmaterno').value;
  let nombre = document.getElementById('txtNombre').value;
  let folio = document.getElementById('txtFolio').value;
  aPaterno === '' ? aPaterno = '""' : aPaterno;
  aMaterno === '' ? aMaterno = '""' : aMaterno;
  nombre === '' ? nombre = '""' : nombre;
  folio === '' ? folio = '""' : folio;
  reporte(aPaterno,aMaterno,nombre,folio);
}
/*
* Regresa un JSON con el response del REST Web Service
* @param aPaterno String
* @param aMaterno String
* @param nombre String
* @param folio String
*/
let reporte = (aPaterno,aMaterno,nombre,folio) => {
  $("#tablaResultados").empty();
  $("#tablaResultados").append(`<br><table class='table'>
  <thead>
  <tr class='bg-primary' style="background: #000000">
  <th>Folio</th>
  <th>Nombre</th>
  <th>Apellido Paterno</th>
  <th>Apellido Materno</th>
  <th>Fecha de Recepción</th>
  <th>Detalles</th>
  <th>Enviar Correo</th>
  </tr>
  </thead>
  <tbody id="bodyTable">`);
  $.ajax({
    type: "GET",
    url: `${URI}/reporte/reportenpp/`+aPaterno+'/'+aMaterno+'/'+nombre+'/'+folio,
    dataType: "json",
    success: function(data){
      $.each(data,function(_key, registro) {
        let fr;
         registro.fecha_recepcion === null ? fr = "Sin Fecha de Recepción" : fr = registro.fecha_recepcion;
        $("#bodyTable").append(`
        <tr style="text-align: center; background: #484848">
        <input type="hidden" id="folioId" value="`+registro.folio+`"/>
        <td style="color: #f5f5f5">`+registro.folio+`</td>
        <td style="color: #f5f5f5">`+registro.nombre+`</td>
        <td style="color: #f5f5f5">`+registro.a_paterno+`</td>
        <td style="color: #f5f5f5">`+registro.a_materno+`</td>
        <td style="color: #f5f5f5">`+fr+`</td>
        <td><button class='btn btn-primary' id="btnVerReporte" data-toggle="modal" data-target="#myModal" onclick="regSel('`+registro.folio+`','`+this+`')" style="background-color: #0d47a1; color: white"><i class="fa fa-external-link" aria-hidden="true" style="color: white"></i></button></td>
        <td><button class="btn btn-success" onclick="enviarCorreo('`+registro.folio+`','`+this+`')" style="background-color: green"><i class="fa fa-envelope" aria-hidden="true" style="color: white"></i></button></td>        
        </tr>
        `);
      });
      $("#container").append(`</tbody>
        </table>`);
    },
    error: function() {
      $("#bodyTable").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
    }
  });
}
/*
* Obtener el id de la fila seleccionada
* @param value
*/
let regSel = (value,object) => {
  let selectedFolio = object.innerHTML = value;
  generateModal(selectedFolio);
}
/*
* Generar un Modal con el folio seleccionado
* @param selectedFolio Integer
*/
let generateModal = (selectedFolio) => {
  $("#modal").empty();
  $("#modal").append(`<div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header" style="background-color: #212121">
      <button type="button" class="close" data-dismiss="modal" style="color: #ffffff" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title" id="myModalLabel" style="color: #f5f5f5">Datos del Reporte:</h4>
    </div>
    <div class="modal-body" style="background-color: #484848" id="bodyModal">`);
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
          registro.descripcion_servicio === '10' ? ds = "Pintura" : 
          registro.descripcion_servicio === '11' ? ds = "Cerrajería" : ds = registro.descripcion_servicio;

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
              <label for="txtFolioR" style="color: #ffffff">Folio</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control pull-right" id="txtFecha" style="color: #ffffff" value="`+registro.fecha_elaboracion+`" disabled>
              <label for="txtFecha" style="color: #ffffff">Fecha de Elaboración</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtRecibe" style="color: #ffffff" value="`+registro.recibe+`" disabled>
              <label for="txtRecibe" style="color: #ffffff">Recibe</label>
            </div>
            <div class="col-sm-4">
                <input type="date" class="form-control" id="txtFechaRecepcion" style="color: #ffffff" value="`+registro.fecha_recepcion+`">
                <label for="txtFechaRecepcion" style="color: #ffffff"><small style="color: blue">*</small>Fecha de Recepción</label>
            </div>
            <div class="col-sm-4">
              <input type="date" class="form-control" id="txtFechaAsignacion" style="color: #ffffff" value="`+registro.fecha_asignacion+`">
              <label for="txtFechaAsignacion" style="color: #ffffff"><small style="color: blue">*</small>Fecha de Asignación</label>
            </div>
            <div class="col-sm-4">
              <input type="date" class="form-control" id="txtFechaReparacion" style="color: #ffffff" value="`+registro.fecha_reparacion+`">
              <label for="txtFechaReparacion" style="color: #ffffff"><small style="color: blue">*</small>Fecha de Reparación</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtNombre" style="color: #ffffff" value="`+registro.nombre+`" disabled>
              <label for="txtNombre" style="color: #ffffff">Nombre</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtApaterno" style="color: #ffffff" value="`+registro.a_paterno+`" disabled>
              <label for="txtApaterno" style="color: #ffffff">Apellido Paterno</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtAmaterno" style="color: #ffffff" value="`+registro.a_materno+`" disabled>
              <label for="txtAmaterno" style="color: #ffffff">Apellido Materno</label>
            </div>
            <div class="col-sm-3">
              <input class="form-control" id="txtTelefono" style="color: #ffffff" value="`+registro.telefono+`" disabled>
              <label for="txtTelefono" style="color: #ffffff">Teléfono</label>
            </div>
            <div class="col-sm-3">
              <input class="form-control" id="txtAreaSolicitante" style="color: #ffffff" value="`+registro.area_solicitante+`" disabled>
              <label for="txtAreaSolicitante" style="color: #ffffff">Área Solicitante</label>
            </div>
            <div class="col-sm-6">
              <input class="form-control" id="txtUbicacionServicio" style="color: #ffffff" value="`+registro.ubicacion_servicio+`" disabled>
              <label for="txtUbicacionServicio" style="color: #ffffff">Ubicación del Servicio</label>
            </div>
            <div class="col-sm-12">
              <hr style="color: black; border: 1px dotted;">
            </div>
            <div class="col-sm-6">
<b><textarea rows="4" cols="50" id="txtAnotacionExtra" style="background-color: #cfcfcf;" disabled>`+registro.anotacion_extra+`</textarea></b>
              <label for="txtAnotacionExtra" style="color: #ffffff">Anotación extra</label>
            </div>
            <div class="col-sm-6">
<b><textarea rows="4" cols="50" id="txtAnotacionExtra" style="background-color: #cfcfcf;" disabled>`+registro.descripcion_problema+`</textarea></b>
              <label for="txtDescripcionProblema" style="color: #ffffff">Descripción del Problema</label>
            </div>
            <div class="col-sm-12">
              <input class="form-control" id="txtDescripcionServicio" style="color: #ffffff" value="`+ds+`" disabled>
              <label for="txtDescripcionServicio" style="color: #ffffff">Descripción del Servicio</label>
            </div>
          `);
        });
        let fechaRecepcion = document.getElementById('txtFechaRecepcion').value;
        let fechaAsignacion = document.getElementById('txtFechaAsignacion').value;
        let fechaReparacion = document.getElementById('txtFechaReparacion').value;
        let fer = new Date(fechaRecepcion);
        let fa = new Date(fechaAsignacion);
        let fr = new Date(fechaReparacion);
        if (!isNaN(fer)) {
          document.getElementById("txtFechaRecepcion").disabled = true;
        }
        if (!isNaN(fa)) {
          document.getElementById("txtFechaAsignacion").disabled = true;
        }
        if (!isNaN(fr)) {
          document.getElementById("txtFechaReparacion").disabled = true;
        }
        $("#modal").find(".modal-body").append(`</div><div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="imprimir()" style="background-color: #00c853; color: white; border-radius: 20px"><i class="fa fa-print" aria-hidden="true"></i> Imprimir Reporte</button>
          <button type="button" class="btn btn-danger" style="background-color: #f44336; color: white; border-radius: 20px" onclick="cancelarReporte()"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar Reporte</button>
          <button type="button" class="btn btn-secondary" onclick="busquedaEncargado(`+selectedFolio+`)" style="background-color: #e65100; color: white; border-radius: 20px"><i class="fa fa-user" aria-hidden="true"></i>Asignar Encargado</button>
          <button type="button" class="btn btn-primary" onclick="guardarReporte()" style="background-color: #01579b; color: white; border-radius: 20px"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>
          <button type="button" class="btn btn-default" style="color: #ffffff" data-dismiss="modal">Cerrar</button>
        </div>
        </div>
        </div>
        </div>`);
      },
      error: function() {
    }
  });
}
/*
* Guardar el reporte modificado
* @return JSON del response del REST Web Service
*/
let guardarReporte = () => {
  let token = localStorage.getItem("token");
  let folio = document.getElementById('txtFolioR').value;
  let fechaRecepcion = document.getElementById('txtFechaRecepcion').value;
  let fechaAsignacion = document.getElementById('txtFechaAsignacion').value;
  let fechaReparacion = document.getElementById('txtFechaReparacion').value;
  let datos = {
    "token" : token,
    "folio" : folio,
    "fecha-recepcion" : fechaRecepcion,
    "fecha-asignacion" : fechaAsignacion,
    "fecha-reparacion" : fechaReparacion
  }
  $.ajax({
    type: 'POST',
    url: `${URI}/reporte/modreporte`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      swal("¡Registro Modificado!",data.mensaje, "success");
      $('#myModal').modal('hide');
    },
    error: function(data) {
      swal("Reporte de Mantenimiento",data.responseJSON.mensaje, "info");
    }
  });
}
/*
* Cancelar el reporte seleccionado
* @return JSON del response del REST Web Service
*/
let cancelarReporte = () =>{
  swal("¿Estás Seguro de Cancelar el reporte?", {
    buttons: {
    catch: {
      text: "SI",
      value: "OK",
      },
      no: true,
    },
  }).then((value) => {
  switch (value) {
    case "OK":
      let token = localStorage.getItem("token");
      let folio = document.getElementById('txtFolioR').value;
      let datos = {
        "token" : token,
        "folio" : folio
      }
      $.ajax({
        type: 'POST',
        url: `${URI}/reporte/cancelar`,
        data: JSON.stringify(datos),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(data){
          swal("¡Registro Modificado!",data.mensaje, "success");
          $('#myModal').modal('hide');
        },
        error: function(data) {
          swal("Reporte de Mantenimiento",data.responseJSON.mensaje, "info");
        }
      });
    break;
    case "no":
    swal("Reporte de Mantenimiento","No se realizó ningun cambio", "info");
    break;
  }
 });
}
/*
* Se Obtienen los datos del formulario de Busqueda de Encargado
*/
let busquedaEncargado = (selectedFolio) => {
  let URL = localStorage.getItem("url");
  localStorage.setItem("selectedFolio",selectedFolio);
  newwindow=window.open(URL+'/asignar-encargado.php','Asignar Encargado','height=800,width=600');
       if (window.focus) {newwindow.focus()}
       return false;
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
let imprimir = () => {
  const URL = localStorage.getItem('url');
  window.open(`${URL}/print.html`, '_blank');
}