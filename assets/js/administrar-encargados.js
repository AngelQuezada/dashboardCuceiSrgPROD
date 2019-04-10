var URI = localStorage.getItem('uri');

let registrarEncargado = () => {
 let aPaterno = document.getElementById('txtApaterno').value.toUpperCase();
 let aMaterno = document.getElementById('txtAmaterno').value.toUpperCase();
 let nombre = document.getElementById('txtNombre').value.toUpperCase();
 let token = localStorage.getItem("token");
 let idUsuario = localStorage.getItem("idUsuario");
 let datos = {
     "token" : token,
     "idUsuario" : idUsuario,
     "aPaterno" : aPaterno,
     "aMaterno" : aMaterno,
     "nombre" : nombre
 }
 $.ajax({
    type: 'POST',
    url: `${URI}/encargado/altaencargado`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      swal("ADMIN CUCEI-SRG", data.mensaje, "success");
      buscarEncargado();
      $("#txtApaterno").val('');
      $("#txtAmaterno").val('');
      $("#txtNombre").val('');
    },
    error: function(data) {
      swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
      return;
    }
  });
}

let buscarEncargado = () => {
    let aPaterno = document.getElementById('txtApaternoS');
    if(aPaterno){
        if(aPaterno.value === ''){
            aPaterno = "";
        }else{
           aPaterno = aPaterno.value.toUpperCase();
        }
    }
    let aMaterno = document.getElementById('txtAmaternoS');
    if(aMaterno){
        if(aMaterno.value === ''){
            aMaterno = "";
        }else{
            aMaterno = aMaterno.value.toUpperCase();
        }
    }
    let nombre = document.getElementById('txtNombreS');
    if(nombre){
        if (nombre.value === ''){
            nombre = "";
        }else{
            nombre = nombre.value.toUpperCase();
        }
    }
    //Traer todo el listado de Encargados en una tabla
    if(aPaterno === '' && aMaterno === '' && nombre === ''){
        $("#tablaEncargado").empty();
        $("#tablaEncargado").append(`<div class="row">
	    <div class="input-field col-sm-12">
            <div class="box box-solid box-warning">
                <div class="box-header with-border">
                    <h3 class="box-title">Listado de Encargados</h3>
                </div>
			    <div class="box-body">
        <br><table class='table table-bordered table-hover'>
        <thead>
        <tr class='bg-primary' style="background-color: #ff9100">
        <th>id</th>
        <th>Nombre</th>
        <th>Apellido Paterno</th>
        <th>Apellido Materno</th>
        </tr>
        </thead>
        <tbody id="bodyTable">`);
        $.ajax({
            type: "GET",
            url: `${URI}/encargado/encargados`,
            dataType: "json",
            success: function(data){
              $.each(data,function(_key, registro) {
                $("#bodyTable").append(`
                <tr style="text-align: center">
                <input type="hidden" id="id" value="`+registro.id+`"/>
                <td>`+registro.id+`</td>
                <td>`+registro.nombre+`</td>
                <td>`+registro.a_paterno+`</td>
                <td>`+registro.a_materno+`</td>
                </tr>
                `);
              });
              $("#bodyTable").append(`</div></div></div></div></tbody>
              </table>`);
            },
            error: function() {
                $("#bodyTable").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
            }
        });
    }else{
        aPaterno === '' ? aPaterno = '""' : aPaterno;
        aMaterno === '' ? aMaterno = '""' : aMaterno;
        nombre === '' ? nombre = '""' : nombre;
        $("#tablaEncargado").empty();
        $("#tablaEncargado").append(`<div class="row">
	    <div class="input-field col-sm-12">
            <div class="box box-solid box-warning">
                <div class="box-header with-border">
                    <h3 class="box-title">Listado de Encargados</h3>
                </div>
			    <div class="box-body">
        <br><table class='table table-bordered table-hover' id="tablaEncargados">
        <thead>
        <tr class='bg-primary' style="background-color: #ff9100">
        <th>id</th>
        <th>Nombre</th>
        <th>Apellido Paterno</th>
        <th>Apellido Materno</th>
        </tr>
        </thead>
        <tbody id="bodyTable">`);
        $.ajax({
            type: "GET",
            url: `${URI}/encargado/buscaencargado/`+aPaterno+'/'+aMaterno+'/'+nombre,
            dataType: "json",
            success: function(data){
                $.each(data,function(_key, registro) {
                $("#bodyTable").append(`
                <tr style="text-align: center">
                <input type="hidden" id="id" value="`+registro.id+`"/>
                <td>`+registro.id+`</td>
                <td>`+registro.nombre+`</td>
                <td>`+registro.a_paterno+`</td>
                <td>`+registro.a_materno+`</td>
                </tr>
                `);
              });
              $("#bodyTable").append(`</div></div></div></div></tbody>
              </table>`);
            },
            error: function() {
                $("#bodyTable").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
            }
        });
    }
}