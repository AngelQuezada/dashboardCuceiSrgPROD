var URI = localStorage.getItem('uri');

let modulos = () => {
  $("#tablaModulos").empty();
    $("#tablaModulos").append(`<div class="row">
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
    <th>Modificar</th>
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
            <td><button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalMod" onclick="modificar('`+registro.module_name+`','`+registro.id+`','`+this+`')"><i class="fa fa-pencil" aria-hidden="true" style="color: #32cb00"></i></button></td>
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

let agregarModulo = () => {
    $("#modalNuevoModulo").empty();
    $("#modalNuevoModulo").append(`<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #FAAC58">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Registro de Módulo</h4>
        </div>
        <div class="modal-body" style="background-color: #F5ECCE">
        <div class="row">
        <div class="col-sm-12">
          <b><input class="form-control" id="txtModulo" style="text-transform:uppercase" autofocus></b>
          <label for="txtModulo" style="color: black;">Nombre del Módulo</label>
        </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" onclick="guardarModulo()" style="background-color: #00c853; color: white; border-radius: 20px"><i class="fa fa-floppy-o" aria-hidden="true"></i> GUARDAR</button>
          <button class="btn btn-warning" data-dismiss="modal" style="background-color: #f44336; color: white; border-radius: 20px"><i class="fa fa-times" aria-hidden="true"></i> CANCELAR</button>
        </div>
      </div>
    </div>
  </div>
  `);
};

let guardarModulo = () => {
  let modulo = document.getElementById('txtModulo').value.toUpperCase();
  if(modulo === ''){
    swal("ADMIN CUCEI-SRG","Completa el Campo antes de Guardar", "info");
    return;    
  }
  let token = localStorage.getItem("token");
  let idUsuario = localStorage.getItem("idUsuario");
  let datos = {
    "token" : token,
    "idUsuario" : idUsuario,
    "modulo" : modulo
  };
  $.ajax({
    type: 'POST',
    url: `${URI}/modulo/altamodulo`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      swal("ADMIN CUCEI-SRG",data.mensaje, "success");
      limpiar();
      modulos();
    },
    error: function(data) {
      swal("ADMIN CUCEI-SRG",data.responseJSON.mensaje, "info");
    }
  });
};
let modificar = (value,object) => {
  let selectedModule = object.innerHTML = value;
  let idModulo = object;
  $("#modalModificarModulo").empty();
    $("#modalModificarModulo").append(`<div id="modalMod" class="modal fade" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #FAAC58">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Modificación de Módulo</h4>
        </div>
        <div class="modal-body" style="background-color: #F5ECCE">
        <div class="row">
        <div class="col-sm-12">
          <b><input class="form-control" id="txtModuloMod" style="text-transform:uppercase" value="${selectedModule}" autofocus></b>
          <label for="txtModuloMod" style="color: black;">Nombre del Módulo</label>
        </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" onclick="guardarModuloMod('`+idModulo+`')" style="background-color: #00c853; color: white; border-radius: 20px"><i class="fa fa-floppy-o" aria-hidden="true"></i> MODIFICAR</button>
          <button class="btn btn-warning" data-dismiss="modal" style="background-color: #f44336; color: white; border-radius: 20px"><i class="fa fa-times" aria-hidden="true"></i> CANCELAR</button>
        </div>
      </div>
    </div>
  </div>
  `);
};
let guardarModuloMod = (idModulo) => {
 let moduloMod = document.getElementById('txtModuloMod').value.toUpperCase();
  if(moduloMod === ''){
    swal("ADMIN CUCEI-SRG","Completa el Campo antes de Modificar", "info");
    return;
  }
  let token = localStorage.getItem("token");
  let idUsuario = localStorage.getItem("idUsuario");
  let datos = {
    "token" : token,
    "idUsuario" : idUsuario,
    "moduloMod" : moduloMod,
    "idModulo" : idModulo
  };
  $.ajax({
    type: 'POST',
    url: `${URI}/modulo/modmodulo`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      swal("ADMIN CUCEI-SRG",data.mensaje, "success");
      modulos();
      $('#modalMod').modal('hide');
    },
    error: function(data) {
      swal("ADMIN CUCEI-SRG",data.responseJSON.mensaje, "info");
    }
  });
};
let limpiar = () => {
  $("#txtModulo").val('');
};
$(function(){
    modulos();
});