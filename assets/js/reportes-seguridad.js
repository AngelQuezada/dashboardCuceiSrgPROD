const URI = localStorage.getItem('uri');

//Variable global para guardar el folio del reporte seleccionado del modal para usarlo en la
//asignacion de objetos
var folio;

/*
 * Obtener Todos los reportes
 */
//Variable global para guardar la observacion del reporte
var obs;
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
          <td><button class="btn btn-primary" id="btnAgregarObjeto" onclick="agregarObjeto('` + registro.id + `','` + this + `')" style="background-color: #ef6c00"><i class="fa fa-plus" aria-hidden="true" style="color: white"></i></button></td>
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
/*
 * Se ejecuta al cargar la pagina
 */
$(function () {
    reportesTodos();
});

$(document).ajaxStart(function () {
    Pace.restart();
})