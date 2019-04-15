const URI = localStorage.getItem('uri');

//Variable global para guardar el folio del reporte seleccionado del modal para usarlo en la
//asignacion de objetos
var folio;

/*
 * Obtener Todos los reportes
 */
let reportesTodos = async () => {
    let token = localStorage.getItem("token");
    $("#tablaResultados").empty();
    $("#tablaResultados").append(`<br><table class='table' id="tablaAsignados">
    <thead>
    <tr class='bg-primary'>
    <th>Folio</th>
    <th>Tipo de Servicio</th>
    <th>Afectado</th>
    <th>Carrera</th>
    <th>Teléfono</th>
    <th>Fecha</th>
    <th>Ver</th>
    <th>Objetos</th>
    </tr>
    </thead>
    <tbody id="bodyTable">`);
    $.ajax({
        type: "GET",
        url: `${URI}/sreporte/getsreporte`,
        dataType: "json",
        success: function (data) {
            $.each(data, function (_key, registro) {
          $("#bodyTable").append(`
          <tr>
          <input type="hidden" id="folioId" value="` + registro.id + `"/>
          <td>` + registro.id + `</td>
          <td>` + registro.tipo_servicio + `</td>
          <td>` + registro.afectado + `</td>
          <td>` + registro.carrera + `</td>
          <td>` + registro.telefono + `</td>
          <td>` + registro.fecha + `</td>
          <td><button class="btn btn-primary" id="btnVerReporte" data-toggle="modal" data-target="#myModal" onclick="verReporte('` + registro.id + `','` + this + `')" style="background-color: #0d47a1"><i class="fa fa-external-link" aria-hidden="true" style="color: white"></i></button></td>
          <td><button class="btn btn-primary" id="btnAgregarObjeto" data-toggle="modal" data-target="#modalAddObj" onclick="agregarObjeto('` + registro.id + `','` + this + `')" style="background-color: #ef6c00"><i class="fa fa-plus" aria-hidden="true" style="color: white"></i></button> <button class="btn btn-primary" id="btnVerObjetos" onclick="verObjetos('` + registro.id + `','` + this + `')" style="background-color: #009624"><i class="fa fa-eye" aria-hidden="true" style="color: white"></i></button>  </td>
          </tr>
          `);
            });
            $("#tablaResultados").append(`</tbody>
      </table>`);
            $("#tablaAsignados").DataTable({
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
        error: function () {}
    });
}
let verReporte = (value,object) => {
    let selectedFolio = object.innerHTML = value;
    generateModal(selectedFolio);
}
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
        url: `${URI}/sreporte/getsreportepa/`+selectedFolio,
        dataType: "json",
        success: function(data){
          $.each(data,function(_key, registro) {

            //ASIGNAN localStorage PARA IMPRIMIR PDF
            localStorage.setItem("folioS1", registro.id);
            localStorage.setItem("tipoServicioS1", registro.tipo_servicio);
            localStorage.setItem("afectadoS1", registro.afectado);
            localStorage.setItem("edadS1", registro.edad);
            localStorage.setItem("carreraS1", registro.carrera);
            localStorage.setItem("codigoS1", registro.codigo);
            localStorage.setItem("telefonoS1", registro.telefono);
            localStorage.setItem("fechaS1", registro.fecha);
            localStorage.setItem("horaS1", registro.hora);
            localStorage.setItem("lugarS1", registro.lugar);
            localStorage.setItem("hechosS1", registro.hechos);

            $("#modal").find(".modal-body").append(`<div class="row">
              <div class="col-sm-2" style="background-color:gray;">
                <input class="form-control" id="txtFolioR" value="`+registro.id+`" style="color: white;" disabled>
                <label for="txtFolioR" style="color: black;">Folio</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control pull-right" id="txtTipoServicio" value="`+registro.tipo_servicio+`" disabled>
                <label for="txtTipoServicio" style="color: black;">Tipo de Servicio</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtAfectado" value="`+registro.afectado+`" disabled>
                <label for="txtAfectado" style="color: black;">Afectado</label>
              </div>
              <div class="col-sm-4">
                  <input type="form-control" class="form-control" id="txtEdad" value="`+registro.edad+`" disabled>
                  <label for="txtEdad" style="color: black;">Edad</label>
              </div>
              <div class="col-sm-4">
                <input type="form-control" class="form-control" id="txtCarrera" value="`+registro.carrera+`" disabled>
                <label for="txtCarrera" style="color: black;">Carrera</label>
              </div>
              <div class="col-sm-4">
                <input type="form-control" class="form-control" id="txtCodigo" value="`+registro.codigo+`" disabled>
                <label for="txtCodigo" style="color: black;">Código</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtTelefono" value="`+registro.telefono+`" disabled>
                <label for="txtTelefono" style="color: black;">Teléfono</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtFecha" value="`+registro.fecha+`" disabled>
                <label for="txtFecha" style="color: black;">Fecha</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtHora" value="`+registro.hora+`" disabled>
                <label for="txtHora" style="color: black;">Hora</label>
              </div>
              <div class="col-sm-3">
                <input class="form-control" id="txtLugar" value="`+registro.lugar+`" disabled>
                <label for="txtLugar" style="color: black;">Lugar</label>
              </div>
              <div class="col-sm-3">
                <input class="form-control" id="txtHechos" value="`+registro.hechos+`" disabled>
                <label for="txtHechos" style="color: black;">Hechos</label>
              </div>`);
          });
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
let verObjetos = (value,object) => {
    let selectedFolio = object.innerHTML = value;
    $("#tablaObjView").empty();
    $("#tablaObjView").append(`<br><table class='table table-bordered table-hover'>
    <thead>
    <tr class='bg-primary' style="background-color: #00c853">
    <th>Folio Reporte</th>
    <th>Modelo</th>
    <th>Marca</th>
    <th>Tipo</th>
    <th>Año</th>
    <th>Color</th>
    <th>Rodado</th>
    </tr>
    </thead>
    <tbody id="bodyTableObj">`);
      $.ajax({
        type: "GET",
        url: `${URI}/sreporte/getobjsreporte/`+selectedFolio,
        dataType: "json",
        success: function(data){
          $.each(data,function(_key, registro) {
            $("#bodyTableObj").append(`<tr style="text-align: center">
            <input type="hidden" id="folioId" value="`+registro.id+`"/>
            <td>`+registro.folioReporte+`</td>
            <td>`+registro.modelo+`</td>
            <td>`+registro.marca+`</td>
            <td>`+registro.tipo+`</td>
            <td>`+registro.year+`</td>
            <td>`+registro.color+`</td>
            <td>`+registro.rodado+`</td>
            </tr>
            `);
          });
          $("#tablaObjView").append(`</tbody>
          </table>`);
        },
        error: function() {
        $("#bodyTableObj").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
      }
    });
}
let agregarObjeto = (value,object) => {
    // modalAddObj
    let selectedFolio = object.innerHTML = value;

    $("#modalAddobj").empty();
    $("#modalAddobj").append(`<div class="modal fade" id="modalAddObj" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #FAAC58">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Alta de Objetos:</h4>
      </div>
      <div class="modal-body" style="background-color: #F5ECCE" id="bodyModal">`);
           
            $("#modalAddobj").find(".modal-body").append(`
            <div class="row">
              <div class="col-sm-2" style="background-color:gray;">
                <input class="form-control" id="txtFolioOBJ" value="`+selectedFolio+`" style="color: white;" disabled>
                <label for="txtFolioOBJ" style="color: black;">Folio del Reporte</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control pull-right" id="txtModeloOBJ" required>
                <label for="txtModelOBJ" style="color: black;"><small style="color: red">*</small> Modelo</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtMarcaOBJ">
                <label for="txtMarcaOBJ" style="color: black;"><small style="color: red">*</small> Marca</label>
              </div>
              <div class="col-sm-4">
                  <input type="form-control" class="form-control" id="txtTipoOBJ">
                  <label for="txtTipoOBJ" style="color: black;"><small style="color: red">*</small> Tipo</label>
              </div>
              <div class="col-sm-3">
                <input type="date" class="form-control" id="dtAñoOBJ" class="datepicker">
                <label for="dtAñoOBJ" style="color: black;"><small style="color: red">*</small> Año</label>
              </div>
              <div class="col-sm-2">
                <input type="form-control" class="form-control" id="txtColorOBJ">
                <label for="txtColorOBJ" style="color: black;"><small style="color: red">*</small> Color</label>
              </div>
              <div class="col-sm-2">
                <input class="form-control" id="txtRodadoOBJ">
                <label for="txtRodadoOBJ" style="color: black;"><small style="color: red">*</small> Rodado</label>
              </div>`);
        
          $("#modalAddobj").find(".modal-body").append(`</div><div class="modal-footer">
            <button type="button" id="btnGuardarObjeto" class="btn btn-secondary" onclick="guardarObjeto('` + selectedFolio + `')" style="background-color: #00c853; color: white;"><i class="fa fa-save" aria-hidden="true"> Guardar</i></button>
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          </div>
          </form>
          </div>
          </div>
          </div>`);
}
let guardarObjeto = (selectedFolio) => {
    let token = localStorage.getItem("token");
    let idUsuario = localStorage.getItem("idUsuario");
    let modelo = document.getElementById('txtModeloOBJ').value;
    let marca = document.getElementById('txtMarcaOBJ').value;
    let tipo = document.getElementById('txtTipoOBJ').value;
    let fecha = document.getElementById('dtAñoOBJ').value;
    let color = document.getElementById('txtColorOBJ').value;
    let rodado = document.getElementById('txtRodadoOBJ').value;

    let datos = {
        "token" : token,
        "idUsuario" : idUsuario,
        "folio" : selectedFolio,
        "modelo" : modelo,
        "marca" : marca,
        "tipo" : tipo,
        "fecha" : fecha,
        "color" : color,
        "rodado" : rodado
    }
    $.ajax({
        type: 'POST',
        url: `${URI}/sreporte/agregarobjeto`,
        data: JSON.stringify(datos),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            swal("Reporte de Seguridad",data.mensaje, "success");
            $('#modalAddObj').modal('hide');
        },
        error: function (data) {
            swal("Reporte de Seguridad", "Ha ocurrido un error al hacer el registro: " + data.responseJSON.mensaje, "error");
        }
    });
}
let imprimir = () => {
  const URL = localStorage.getItem('url');
  window.open(`${URL}/printrs1.html`, '_blank');
}
/*
 * Se ejecuta al cargar la pagina
 */
$(function () {
    reportesTodos();
});
$(document).ajaxStart(function () {
    Pace.restart();
})