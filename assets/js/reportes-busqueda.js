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
  <tr class='bg-primary'>
  <th>Folio</th>
  <th>Nombre</th>
  <th>Apellido Paterno</th>
  <th>Apellido Materno</th>
  <th>Fecha de Recepción</th>
  <th>Detalles</th>
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
        <tr>
        <input type="hidden" id="folioId" value="`+registro.folio+`"/>
        <td>`+registro.folio+`</td>
        <td>`+registro.nombre+`</td>
        <td>`+registro.a_paterno+`</td>
        <td>`+registro.a_materno+`</td>
        <td>`+fr+`</td>
        <td><button class='btn btn-primary' id="btnVerReporte" data-toggle="modal" data-target="#myModal" onclick="regSel('`+registro.folio+`','`+this+`')" style="background-color: #0d47a1; color: white">Ver</button></td>
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
          <button type="button" class="btn btn-secondary" onclick="imprimir()" style="background-color: #00c853; color: white;"><i class="fa fa-print" aria-hidden="true"> Imprimir Reporte</i></button>
          <button type="button" class="btn btn-danger" style="background-color: #f44336; color: white;" onclick="cancelarReporte()"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar Reporte</button>
          <button type="button" class="btn btn-secondary" onclick="asignarEncargado(`+selectedFolio+`)" style="background-color: #e65100; color: white;"><i class="fa fa-user" aria-hidden="true"></i>Asignar Encargado</button>
          <button type="button" class="btn btn-primary" onclick="guardarReporte()" style="background-color: #01579b; color: white;"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>
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
let asignarEncargado = (selectedFolio) => {
  idEncargado = null;
  swal("Escribe el correo del encargado a asignar:", {
      content: "input"
    }).then((correotxt) => {
      if (correotxt.replace(/\s/g, "") == "") {
        swal("Reporte de Mantenimiento", "No se realizó ningun cambio", "info");
        return;
      }
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(correotxt)){
        swal("Reporte de Mantenimiento", "Correo electrónico no valido", "error");
        return;
      }
      swal(`Has escrito: ${correotxt}` + ' ¿Es Correcto?', {
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
            $.ajax({
              type: 'GET',
              url: `${URI}/personal/getidempleado/`+correotxt,
              contentType: 'application/json; charset=utf-8',
              dataType: 'json',
              async: false,
              success: function (data) {
                 idEncargado = data.id;
              },
              error: function (data) {
                swal("Reporte de Mantenimiento", data.responseJSON.mensaje, "info");
                return;
              }
            });
            let datos = {
              "token" : localStorage.getItem("token"),
              "folio" : selectedFolio,
              "idPersonal": idEncargado,
              "idUsuario" : localStorage.getItem("idUsuario")
            }
            console.log(JSON.stringify(datos));
            $.ajax({
              type: 'POST',
              url: `${URI}/reporte/asignarencargado`,
              data: JSON.stringify(datos),
              contentType: 'application/json; charset=utf-8',
              dataType: 'json',
              success: function (data) {
                swal("Reporte de Mantenimiento", data.mensaje, "success");
              },
              error: function (data) {
                swal("Reporte de Mantenimiento", data.responseJSON.mensaje, "info");
              }
            });
            break;
          case "no":
            swal("Reporte de Mantenimiento", "No se realizó ningun cambio", "info");
            break;
        }
      });
    });
}
let imprimir = () => {
  const URL = localStorage.getItem('url');
  window.open(`${URL}/print.html`, '_blank');
}
