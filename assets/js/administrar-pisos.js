var URI = localStorage.getItem('uri');
  let modulos = () => {
    $("#tablaModulos").empty();
      $("#tablaModulos").append(`
      <div class="row">
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
      <tbody id="bodyTableMod">`);
      $.ajax({
          type: "GET",
          url: `${URI}/infraestructura/imodulos`,
          dataType: "json",
          success: function(data){
            $.each(data,function(_key, registro) {
              $("#bodyTableMod").append(`
              <tr style="text-align: center">
              <input type="hidden" id="id" value="`+registro.id+`"/>
              <td>`+registro.id+`</td>
              <td>`+registro.module_name+`</td>
              <td><button type="button" class="btn btn-success" data-toggle="modal" data-target="#modalMod" onclick="modificar('`+registro.module_name+`','`+registro.id+`','`+this+`')"><i class="fa fa-check" aria-hidden="true" style="color: #32cb00"></i></button></td>
              </tr>
              `);
            });
            $("#bodyTableMod").append(`</div></div></div></div></tbody>
            </table>`);
          },
          error: function() {
              $("#bodyTableMod").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
          }
      });
  };
  
  $(function(){
    modulos();
  });