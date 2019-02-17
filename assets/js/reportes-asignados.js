const URI = localStorage.getItem('uri');
/*
* Obtener Todos los reportes
*/
//Variable global para guardar la observacion del reporte
var obs;
let reportesTodos = () => {
    let token = localStorage.getItem("token");
    $("#tablaResultados").empty();
    $("#tablaResultados").append(`<br><table class='table'>
    <thead>
    <tr class='bg-primary'>
    <th>Folio</th>
    <th>Status</th>
    <th>Observacion Status</th>
    <th>Ver</th>
    <th>Agregar Observación</th>
    <th>Cancelar</th>
    </tr>
    </thead>
    <tbody id="bodyTable">`);
$.ajax({
    type: "GET",
    url: `${URI}/reporte/reporteasignados/`+token,
    dataType: "json",
    success: function(data){
      $.each(data,function(_key, registro) {
          let status;
          registro.idStatus === '1' ? status = "En Solicitud" :
          registro.idStatus === '2' ? status = "Asignado" :
          registro.idStatus === '3' ? status = "Finalizado" : status = "Cancelado";
          registro.observacion_status === null ? obs = "Sin Observaciones" : obs = registro.observacion_status;
          $("#bodyTable").append(`
          <tr>
          <input type="hidden" id="folioId" value="`+registro.folio+`"/>
          <td>`+registro.folio+`</td>
          <td>`+status+`</td>
          <td>`+obs+`</td>
          <td><button class="btn btn-primary" id="btnVerReporte" data-toggle="modal" data-target="#myModal" onclick="verReporte('`+registro.folio+`','`+this+`')"><i class="fa fa-external-link" aria-hidden="true"></i></button></td>
          <td><button class="btn btn-primary" id="btnAgregarObservacion" onclick="agregarObservacion('`+registro.folio+`','`+obs+`','`+this+`')"><i class="fa fa-bullhorn" aria-hidden="true"></i></button></td>
          <td><button class="btn btn-primary" onclick="cancelarReporte('`+registro.folio+`','`+this+`')"><i class="fa fa-ban" aria-hidden="true"></i></button></td>
          </tr>
          `);
      });
      $("#tablaResultados").append(`</tbody>
      </table>`);
    },
    error: function() {}
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
      url: 'http://localhost/API-CUCEI-SRG/index.php/reporte/reporteindpp/'+selectedFolio,
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
          <button type="button" class="btn btn-secondary" style="background-color: green; color: white;"><i class="fa fa-print" aria-hidden="true">Imprimir</i></button>
          <button type="button" class="btn btn-danger" style="background-color: red; color: white;" onclick="cancelarReportem()"><i class="fa fa-ban" aria-hidden="true"></i>Cancelar Reporte</button>
          <button type="button" class="btn btn-secondary" style="background-color: orange; color: white;"><i class="fa fa-user" aria-hidden="true"></i>Asignar Encargado</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" onclick="guardarReporte()" style="background-color: blue; color: white;"><i class="fa fa-floppy-o" aria-hidden="true"></i>Guardar Cambios</button>
        </div>
        </div>
        </div>
        </div>`);
      },
      error: function() {}
  });
}
/*
* Cancelar el reporte seleccionado
* @return JSON del response del REST Web Service
*/
let cancelarReporte = (value,object) => {
    let token = localStorage.getItem("token");
    let folio = object.innerHTML = value;
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
            swal("¡Reporte Cancelado!",data.mensaje, "success");
            reportesTodos();
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
* Agregar Observacion al reporte seleccionado
* @return JSON del response del REST Web Service
*/
let agregarObservacion = (value,object) => {
  let folio = object.innerHTML = value;
  let observacion = object;
  if(observacion === "Sin Observaciones"){
    swal("Teclea una nueva Observación:", {
      content: "input",
    })
    .then((observacion) => {
      if(observacion.replace(/\s/g,"") == ""){
        swal("Reporte de Mantenimiento","No se realizó ningun cambio", "info");
        return;
      }
      swal(`Has escrito: ${observacion}`+' ¿Es Correcto?',{
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
            let idUsuario = localStorage.getItem("idUsuario");
            let datos = {
              "token" : token,
              "idUsuario" : idUsuario,
              "observacion" : observacion,
              "folio" : folio
            }
            $.ajax({
              type: 'POST',
              url: `${URI}/reporte/genobservacion`,
              data: JSON.stringify(datos),
              contentType: 'application/json; charset=utf-8',
              dataType: 'json',
              success: function(data){
                swal("¡Registro Modificado!",data.mensaje, "success");
                reportesTodos();
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
    });
  }
  else{
    swal("Reporte de Mantenimiento","Ya cuenta con observación el Estatus", "info");
    return;
  }
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
let cancelarReportem = () =>{
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
* Se ejecuta al cargar la pagina
*/
$(function(){
  reportesTodos();
});
