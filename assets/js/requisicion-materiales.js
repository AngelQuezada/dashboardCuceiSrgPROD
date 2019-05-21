const URI = localStorage.getItem('uri');

let reportesTodos = () => {
    //let token = localStorage.getItem("token");
    $("#tablaResultados").empty();
    $("#tablaResultados").append(`<br><table class='table' id="tablaNuevos">
    <thead>
    <tr class='bg-primary'>
    <th>Indice</th>
    <th>Folio</th>
    <th>Fecha Solicitud</th>
    <th>Reporte</th>
    <th>Estatus</th>
    <th>Ver</th>
    <th>Modificar</th>
    </tr>
    </thead>
    <tbody id="bodyTable">`);
$.ajax({
    type: "GET",
    url: `${URI}/material/material`,
    dataType: "json",
    async: true,
    success: function(data){
      $.each(data,function(_key, registro) {
          $("#bodyTable").append(`
          <tr style="text-align: center">
          <input type="hidden" id="folioId" value="`+registro.indice+`"/>
          <td>`+registro.indice+`</td>
          <td>`+registro.folio+`</td>
          <td>`+registro.fecha_solicitud+`</td>
          <td>`+registro.reporte_proyecto+`</td>
          <td>`+registro.estatus+`</td>
          <td><button class="btn btn-primary" id="btnVerMateriales" data-toggle="modal" data-target="#myModal" onclick="verReporte('`+registro.indice+`','`+this+`')" style="background-color: #0d47a1"><i class="fa fa-external-link" aria-hidden="true" style="color: white"></i></button></td>
          <td><button class="btn btn-primary" id="btnModMateriales" data-toggle="modal" data-target="#myModalMod" onclick="modReporte('`+registro.indice+`','`+this+`')" style="background-color: #32cb00"><i class="fa fa-pencil-square-o" aria-hidden="true" style="color: white"></i></button></td>
          </tr>
          `);
      });
      $("#tablaResultados").append(`</tbody>
      </table>`);
      $("#tablaNuevos").DataTable({
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
let verReporte = (value,object) => {
    let selectedIndice = object.innerHTML = value;
    $("#modalVerMateriales").empty();
    $("#modalVerMateriales").append(`<div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #FAAC58">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Registro del Material:</h4>
      </div>
      <div class="modal-body" style="background-color: #F5ECCE" id="bodyModal">`);
      $.ajax({
        type: "GET",
        url: `${URI}/material/materialsel/`+selectedIndice,
        dataType: "json",
        async: true,
        success: function(data){
          $.each(data,function(_key, registro) {
            let diasSurtido;
            let material;
            let catalogo;
            let unidad;
            let cantidadSolicitada;
            let cantidadRecibida;
            let estatus;
            let observaciones;
            let fecha;
            registro.dias_surtido === null ? diasSurtido = 'N/A' : diasSurtido = registro.dias_surtido;
            registro.material === null ? material = 'N/A' : material = registro.material;
            registro.catalogo === null ? catalogo = 'N/A' : catalogo = registro.catalogo;
            registro.unidad === null ? unidad = 'N/A' : unidad = registro.unidad;
            registro.cantidad_solicitada === null ? cantidadSolicitada = 'N/A' : cantidadSolicitada = registro.cantidad_solicitada;
            registro.cantidad_recibida === null ? cantidadRecibida = 'N/A' : cantidadRecibida = registro.cantidad_recibida;
            registro.estatus === null ? estatus = 'Sin Estatus' : estatus = registro.estatus;
            registro.observaciones === null ? observaciones = 'Sin Observaciones' : observaciones = registro.observaciones;
            registro.fecha === null ? fecha = 'N/A' : fecha = registro.fecha;
            //ASIGNAN localStorage PARA IMPRIMIR PDF
            // localStorage.setItem("indice", registro.indice);
            // localStorage.setItem("folio", registro.folio);
            // localStorage.setItem("fechaSolicitud", registro.fecha_solicitud);
            // localStorage.setItem("reporteProyecto", registro.reporte_proyecto);
            // localStorage.setItem("solicita", registro.solicita);
            // localStorage.setItem("material", material);
            // localStorage.setItem("catalogo", catalogo);
            // localStorage.setItem("unidad", unidad);
            // localStorage.setItem("cantidadSolicitada", cantidadSolicitada);
            // localStorage.setItem("cantidadRecibida", cantidadRecibida);
            // localStorage.setItem("pendiente", registro.pendiente);
            // localStorage.setItem("fecha", registro.fecha);
            // localStorage.setItem("diasSurtido", diasSurtido);
            // localStorage.setItem("estatus", estatus);
            // localStorage.setItem("observaciones", observaciones);
            

            $("#modalVerMateriales").find(".modal-body").append(`<div class="row">
              <div class="col-sm-2" style="background-color:gray;">
                <input class="form-control" id="txtIndice" value="`+registro.indice+`" style="color: white;" disabled>
                <label for="txtIndice" style="color: black;">Indice</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtFolio" value="`+registro.folio+`" disabled>
                <label for="txtFolio" style="color: black;">Folio</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="dtFechaSolicitud" value="`+registro.fecha_solicitud+`" disabled>
                <label for="dtFechaSolicitud" style="color: black;">Fecha de Solicitud</label>
              </div>
              <div class="col-sm-4">
                  <input type="text" class="form-control" id="txtReporte" value="`+registro.reporte_proyecto+`" disabled>
                  <label for="txtReporte" style="color: black;">Reporte/Proyecto</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="txtSolicita" value="`+registro.solicita+`" disabled>
                <label for="txtSolicita" style="color: black;">Solicita</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="txtMaterial" value="`+material+`" disabled>
                <label for="txtMaterial" style="color: black;">Material</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtCatalogo" value="`+catalogo+`" disabled>
                <label for="txtCatalogo" style="color: black;">Catálogo</label>
              </div>
              <div class="col-sm-3">
                <input class="form-control" id="txtUnidad" value="`+unidad+`" disabled>
                <label for="txtUnidad" style="color: black;">Unidad</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtCantidadSolicitada" value="`+cantidadSolicitada+`" disabled>
                <label for="txtCantidadSolicitada" style="color: black;">Cantidad Solicitada</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtCantidadRecibida" value="`+cantidadRecibida+`" disabled>
                <label for="txtCantidadRecibida" style="color: black;">Cantidad Recibida</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtCantidadRecibida" value="`+registro.pendiente+`" disabled>
                <label for="txtCantidadRecibida" style="color: black;">Pendiente</label>
              </div>
              <div class="col-sm-3">
                <input class="form-control" type="date" id="dtFecha" value="`+fecha+`" disabled>
                <label for="dtFecha" style="color: black;">Fecha</label>
              </div>
              <div class="col-sm-6">
                <input class="form-control" id="txtDiasSurtido" value="`+diasSurtido+`" disabled>
                <label for="txtDiasSurtido" style="color: black;">Dias Surtido</label>
              </div>
              <div class="col-sm-6">
                <input class="form-control" id="txtEstatus" value="`+estatus+`" disabled>
                <label for="txtEstatus" style="color: black;">Estatus</label>
              </div>
              <div class="col-sm-12">
                <hr style="color: black; border: 1px dotted;">
              </div>
              <div class="col-sm-12" style="text-align: center">
  <textarea rows="4" cols="50" id="txtObservaciones" style="background-color: #F7D358;" disabled>`+observaciones+`</textarea>
                <div class="col-sm-12" style="text-align: center">
                    <label for="txtObservaciones" style="color: black;">Observaciones</label>
                </div>
            </div>
            `);
          });
          //<button type="button" class="btn btn-secondary" onclick="imprimir()" style="background-color: #00c853; color: white;"><i class="fa fa-print" aria-hidden="true"></i> Imprimir Formato Requisición de Materiales</button>
          $("#modalVerMateriales").find(".modal-body").append(`</div><div class="modal-footer">
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
* Ver el reporte seleccionado
* @param value
*/
let modReporte = (value,object) => {
    let selectedIndice = object.innerHTML = value;
    $("#modalModMateriales").empty();
    $("#modalModMateriales").append(`<div class="modal fade" id="myModalMod" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #FAAC58">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel"><kbd>MODO EDICIÓN</kbd> Registro del Material:</h4>
      </div>
      <div class="modal-body" style="background-color: #F5ECCE" id="bodyModal">`);
      $.ajax({
        type: "GET",
        url: `${URI}/material/materialsel/`+selectedIndice,
        dataType: "json",
        async: true,
        success: function(data){
          $.each(data,function(_key, registro) {
            let diasSurtido;
            let material;
            let catalogo;
            let unidad;
            let cantidadSolicitada;
            let cantidadRecibida;
            let estatus;
            let observaciones;
            let fecha;
            registro.dias_surtido === null ? diasSurtido = 'N/A' : diasSurtido = registro.dias_surtido;
            registro.material === null ? material = 'N/A' : material = registro.material;
            registro.catalogo === null ? catalogo = 'N/A' : catalogo = registro.catalogo;
            registro.unidad === null ? unidad = 'N/A' : unidad = registro.unidad;
            registro.cantidad_solicitada === null ? cantidadSolicitada = 'N/A' : cantidadSolicitada = registro.cantidad_solicitada;
            registro.cantidad_recibida === null ? cantidadRecibida = 'N/A' : cantidadRecibida = registro.cantidad_recibida;
            registro.estatus === null ? estatus = 'Sin Estatus' : estatus = registro.estatus;
            registro.observaciones === null ? observaciones = 'Sin Observaciones' : observaciones = registro.observaciones;
            registro.fecha === null ? fecha = 'N/A' : fecha = registro.fecha;

          
            $("#modalModMateriales").find(".modal-body").append(`<div class="row">
              <div class="col-sm-2" style="background-color:gray;">
                <input class="form-control" id="txtIndiceMOD" value="`+registro.indice+`" style="color: white;" disabled>
                <label for="txtIndiceMOD" style="color: black;">Indice</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtFolioMOD" value="`+registro.folio+`" disabled>
                <label for="txtFolioMOD" style="color: black;">Folio</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" type="text" id="txtFechaSolicitudMOD" value="`+registro.fecha_solicitud+`" disabled>
                <label for="txtFechaSolicitudMOD" style="color: black;">Fecha de Solicitud</label>
              </div>
              <div class="col-sm-4">
                  <input type="text" class="form-control" id="txtReporteMOD" value="`+registro.reporte_proyecto+`" disabled>
                  <label for="txtReporteMOD" style="color: black;">Reporte/Proyecto</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="txtSolicitaMOD" value="`+registro.solicita+`" disabled>
                <label for="txtSolicitaMOD" style="color: black;">Solicita</label>
              </div>
              <div class="col-sm-4">
                <input type="text" class="form-control" id="txtMaterialMOD" value="`+material+`" >
                <label for="txtMaterialMOD" style="color: blue;">Material</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtCatalogoMOD" value="`+catalogo+`" >
                <label for="txtCatalogoMOD" style="color: blue;">Catálogo</label>
              </div>
              <div class="col-sm-3">
                <input class="form-control" id="txtUnidadMOD" value="`+unidad+`" >
                <label for="txtUnidadMOD" style="color: blue;">Unidad</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtCantidadSolicitadaMOD" value="`+cantidadSolicitada+`" >
                <label for="txtCantidadSolicitadaMOD" style="color: blue;">Cantidad Solicitada</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtCantidadRecibidaMOD" value="`+cantidadRecibida+`" >
                <label for="txtCantidadRecibidaMOD" style="color: blue;">Cantidad Recibida</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtPendienteMOD" value="`+registro.pendiente+`" style="text-transform:uppercase">
                <label for="txtPendienteMOD" style="color: blue;">Pendiente</label>
              </div>
              <div class="col-sm-3">
                <input class="form-control" type="date" id="dtFechaMOD" value="`+fecha+`" >
                <label for="dtFechaMOD" style="color: blue;">Fecha</label>
              </div>
              <div class="col-sm-6">
                <input class="form-control" id="txtDiasSurtidoMOD" value="`+diasSurtido+`" >
                <label for="txtDiasSurtidoMOD" style="color: blue;">Dias Surtido</label>
              </div>
              <div class="col-sm-6">
                <input class="form-control" id="txtEstatusMOD" value="`+estatus+`" >
                <label for="txtEstatusMOD" style="color: blue;">Estatus</label>
              </div>
              <div class="col-sm-12">
                <hr style="color: black; border: 1px dotted;">
              </div>
              <div class="col-sm-12" style="text-align: center">
  <textarea rows="4" cols="50" id="txtObservacionesMOD" style="background-color: #F7D358;" >`+observaciones+`</textarea>
                <div class="col-sm-12" style="text-align: center">
                    <label for="txtObservacionesMOD" style="color: blue;">Observaciones</label>
                </div>
            </div>
            `);
          });

          $("#modalModMateriales").find(".modal-body").append(`</div><div class="modal-footer">
            <button type="button" class="btn btn-primary" onclick="guardarReporte()" style="background-color: #64dd17; color: black;"><i class="fa fa-floppy-o" aria-hidden="true"></i> GUARDAR CAMBIOS</button>
            <button type="button" class="btn btn-default" data-dismiss="modal" style="background-color: #dd2c00; color: white;">Cancelar</button>
          </div>
          </div>
          </div>
          </div>`);
        },
        error: function() {
      }
    });
  }
  let guardarReporte = () =>{
    let token = localStorage.getItem("token");
    let idUsuario = localStorage.getItem("idUsuario");
    let indice = document.getElementById('txtIndiceMOD').value;
    let folio = document.getElementById('txtFolioMOD').value;
    let fechaSolicitud = document.getElementById('txtFechaSolicitudMOD').value;
    let reporteProyecto = document.getElementById('txtReporteMOD').value;
    let solicita = document.getElementById('txtSolicitaMOD').value;
    let material = document.getElementById('txtMaterialMOD').value;
    let catalogo = document.getElementById('txtCatalogoMOD').value;
    let unidad = document.getElementById('txtUnidadMOD').value;
    let cantidadSolicitada = document.getElementById('txtCantidadSolicitadaMOD').value;
    let cantidadRecibida = document.getElementById('txtCantidadRecibidaMOD').value;
    let pendiente = document.getElementById('txtPendienteMOD').value;
    pendiente = pendiente.toUpperCase();
    let fecha = document.getElementById('dtFechaMOD').value;
    let diasSurtido = document.getElementById('txtDiasSurtidoMOD').value;
    let estatus = document.getElementById('txtEstatusMOD').value;
    let observaciones = $("textarea#txtObservacionesMOD").val();

    let datos = {
      "token" : token,
      "idUsuario" : idUsuario,
      "indice" : indice,
      "folio" : folio,
      "fechaSolicitud" : fechaSolicitud,
      "reporteProyecto" : reporteProyecto,
      "solici ta" : solicita,
      "material" : material,
      "catalogo" : catalogo,
      "unidad" : unidad,
      "cantidadSolicitada" : cantidadSolicitada,
      "cantidadRecibida" : cantidadRecibida,
      "pendiente" : pendiente,
      "fecha" : fecha,
      "diasSurtido" : diasSurtido,
      "estatus" : estatus,
      "observaciones" : observaciones
    }
    $.ajax({
      type: 'POST',
      url: `${URI}/material/materialselmod`,
      data: JSON.stringify(datos),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(data){
        swal("Requisición de Materiales", data.mensaje, "success");
        $('#myModalMod').modal('hide');
        reportesTodos();
      },
      error: function(data) {
        swal("Requisición de Materiales", "Ha ocurrido un error al hacer el registro: "+data.responseJSON.mensaje, "error");
      }
    });
  }
  let imprimir = () =>{

  }
$(function(){
    reportesTodos();
});