/*
* Obtener Todos los reportes
*/
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
        url: 'http://localhost/API-CUCEI-SRG/index.php/reporte/reportenuevos/'+token,
        dataType: "json",
        success: function(data){
          $.each(data,function(_key, registro) {
              let status;
              registro.idStatus === '1' ? status = "En Solicitud" :
              registro.idStatus === '2' ? status = "Asignado" :
              registro.idStatus === '3' ? status = "Finalizado" : status = "Cancelado";
              let obs;
              registro.observacion_status === null ? obs = "Sin Observaciones" : obs = registro.observacion_status;
              $("#bodyTable").append(`
              <tr>
              <input type="hidden" id="folioId" value="`+registro.folio+`"/>
              <td>`+registro.folio+`</td>
              <td>`+status+`</td>
              <td>`+obs+`</td>
              <td><button class="btn btn-primary" id="btnVerReporte" onclick="verReporte('`+registro.folio+`','`+this+`')"><i class="fa fa-external-link" aria-hidden="true"></i></button></td>
              <td><button class="btn btn-primary" id="btnAgregarObservacion" onclick="agregarObservacion('`+registro.folio+`','`+this+`')"><i class="fa fa-bullhorn" aria-hidden="true"></i></button></td>
              <td><button class="btn btn-primary"><i class="fa fa-ban" aria-hidden="true"></i></button></td>
              </tr>
              `);
          });
          $("#tablaResultados").append(`</tbody>
          </table>`);
        },
        error: function() {
        }
      });
}
/*
* Se ejecuta al cargar la pagina
*/
window.onload = () => {
    reportesTodos();
}