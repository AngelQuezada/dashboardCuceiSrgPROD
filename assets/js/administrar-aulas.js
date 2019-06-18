var URI = localStorage.getItem('uri');

let modulos = () => {
    $("#tablaModulos").empty();
        $("#tablaModulos").append(`<h3>1.- Seleccione un Módulo: </h3><div class="row">
	    <div class="input-field col-sm-12">
            <div class="box box-solid box-secondary">
                <div class="box-header with-border" style="background-color: #009624">
                    <h3 class="box-title" style="color: white">Listado de Módulos</h3>
                </div>
			    <div class="box-body" style="background-color: #eeeeee">
        <br><table class='table table-bordered table-hover' id="tableModules">
        <thead>
        <tr class='bg-primary' style="background-color: #00c853">
        <th>id</th>
        <th>Modulo</th>
        <th>Seleccionar</th>
        </tr>
        </thead>
        <tbody id="bodyTable">`);
        $.ajax({
            type: "GET",
            url: `${URI}/infraestructura/imodulos`,
            dataType: "json",
            success: function(data){
              $.each(data,function(_key, registro) {
                $("#bodyTable").append(`
                <tr style="text-align: center">
                <input type="hidden" id="id" value="`+registro.id+`"/>
                <td>`+registro.id+`</td>
                <td>`+registro.module_name+`</td>
                <td><button type="button" class="btn btn-success" onclick="verPisos('`+registro.id+`','`+this+`')"><i class="fa fa-check" aria-hidden="true"></i></button></td>
                </tr>
                `);
              });
              $("#bodyTable").append(`</div></div></div></div></tbody>
              </table>`);
              $("#tableModules").DataTable({
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
                $("#bodyTable").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
            }
        });
};
let verPisos = (value,object) => {
    let selectedModule = object.innerHTML = value;
    localStorage.setItem("modulo",selectedModule);
    $("#tablaModulos").empty();
    $("#tablaPisos").empty();
    $("#tablaPisos").append(`<h3>2.- Seleccione un Piso: </h3><div class="row">
    <div class="input-field col-sm-12">
        <div class="box box-solid box-secondary">
            <div class="box-header with-border" style="background-color: #009624">
                <h3 class="box-title" style="color: white">Listado de Pisos</h3>
            </div>
            <div class="box-body" style="background-color: #eeeeee">
    <br><table class='table table-bordered table-hover' id="tableFloors">
    <thead>
    <tr class='bg-primary' style="background-color: #00c853">
    <th>Piso</th>
    <th>Seleccionar</th>
    </tr>
    </thead>
    <tbody id="bodyTable">`);
    $.ajax({
        type: "GET",
        url: `${URI}/infraestructura/ipisos/${selectedModule}`,
        dataType: "json",
        success: function(data){
          $.each(data,function(_key, registro) {
            $("#bodyTable").append(`
            <tr style="text-align: center">
            <input type="hidden" id="id" value="`+registro.floor_id+`"/>
            <td>`+registro.floor_id+`</td>
            <td><button type="button" class="btn btn-success" onclick="verAulas('`+registro.floor_id+`','`+this+`')"><i class="fa fa-check" aria-hidden="true"></i></button></td>
            </tr>
            `);
          });
          $("#bodyTable").append(`</div></div></div></div></tbody>
          </table>`);
          $("#tableModules").DataTable({
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
            $("#bodyTable").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
        }
    });
};
let verAulas = (value,object) => {
    let selectedFloor = object.innerHTML = value;
    localStorage.setItem("piso",selectedFloor);
    let modulo = localStorage.getItem("modulo");
    //alert(`Modulo: ${modulo}, Piso: ${selectedFloor}`);
    $("#tablaModulos").empty();
    $("#tablaPisos").empty();
    $("#tablaAulas").empty();
    $("#tablaAulas").append(`<h3>3.- Administración de Aulas: </h3><div class="row">
    <div class="input-field col-sm-12">
        <div class="box box-solid box-secondary">
            <div class="box-header with-border" style="background-color: #009624">
                <h3 class="box-title" style="color: white">Listado de Aulas</h3>
            </div>
            <div class="box-body" style="background-color: #eeeeee">
    <br><table class='table table-bordered table-hover' id="tableAulas">
    <thead>
    <tr class='bg-primary' style="background-color: #00c853">
    <th>Aula</th>
    <th>Acciones</th>
    </tr>
    </thead>
    <tbody id="bodyTable">`);
    $.ajax({
        type: "GET",
        url: `${URI}/infraestructura/iaulas/${modulo}/${selectedFloor}`,
        dataType: "json",
        success: function(data){
          $.each(data,function(_key, registro) {
            $("#bodyTable").append(`
            <tr style="text-align: center">
            <input type="hidden" id="id" value="`+registro.id+`"/>
            <td>`+registro.aula_name+`</td>
            <td><button type="button" class="btn btn-success" onclick="modificarAula('`+registro.floor_id+`','`+this+`')"><i class="fa fa-pencil" aria-hidden="true"></i></button><button type="button" class="btn btn-success" onclick="eliminarAula('`+registro.floor_id+`','`+this+`')"><i class="fa fa-trash-o" aria-hidden="true"></i></button></td>
            </tr>
            `);
          });
          $("#bodyTable").append(`</div></div></div></div></tbody>
          </table>`);
          $("#tableAulas").DataTable({
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
            $("#bodyTable").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
        }
    });

};

document.getElementById('btnReiniciar').addEventListener('click',function(){
    $("#tablaModulos").empty();
    $("#tablaPisos").empty();
    $("#tablaAulas").empty();
    modulos();
});

$(function(){
    modulos();
});