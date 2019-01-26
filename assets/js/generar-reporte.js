/*
* Limpia los campos del Formulario de Reporte de Mantenimiento
*/
let cleanReport = () => {
  ereaseLC();
  ereaseModule();
  $("#anotacionExtra").val('');
  $('#correo').val('');
  $('#telefono').val('');
  $('#area').val('');
  $('textarea#descripcionProblema').val('');
  $('input:radio[name=descripcionServicio]').each(function () { $(this).prop('checked', false); });
}
/*
* Se obtienen los datos de los campos del formulario
*/
let nuevoReporte = () => {
  let token = localStorage.getItem("token");
  let idUsuario = localStorage.getItem("idUsuario");
  let recibe = document.getElementById('recibe').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let area = document.getElementById('area').value;
  let modulo = $("#modulo option:selected").text();
  let piso = $("#piso option:selected").text();
  let aula = $("#aula option:selected").text();
  let anotacionExtra = document.getElementById('anotacionExtra').value;
  let option = document.querySelector('input[name="descripcionServicio"]:checked').value;
  let descripcionProblema = $("textarea#descripcionProblema").val();
  if (option == 'otro') {
     option = document.getElementById('otro').value;
  }
  registrarReporte(token,idUsuario,recibe,correo,telefono,area,modulo,piso,aula,anotacionExtra,option,descripcionProblema);
}
/*
* Se Registra reporte de Mantenimiento
* @param token String
* @param idUsuario Integer
* @param recibe String
* @param correo String
* @param telefono Integer
* @param area String
* @param modulo String
* @param piso String
* @param aula String
* @param anotacionExtra String
* @param option Integer
* @Param descripcionProblema String
* @return JSON del response del REST Web Service
*/
let registrarReporte = (token,idUsuario,recibe,correo,telefono,area,modulo,piso,aula,anotacionExtra,option,descripcionProblema) => {
  let datos = {
    "token" : token,
    "idUsuario" : idUsuario,
    "recibe" : recibe,
    "correo" : correo,
    "telefono" : telefono,
    "area" : area,
    "modulo" : modulo,
    "piso" : piso,
    "aula" : aula,
    "anotacionExtra" : anotacionExtra,
    "option" : option,
    "descripcionProblema": descripcionProblema
  }
  $.ajax({
    type: 'POST',
    url: 'http://localhost/API-CUCEI-SRG/index.php/reporte/nuevo',
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      swal("Reporte de Mantenimiento", "Se ha registrado correctamente con el folio: "+data.folio, "success");
      cleanReport();
    },
    error: function(data) {
      swal("Reporte de Mantenimiento", "Ha ocurrido un error al hacer el registro: "+data.responseJSON.mensaje, "error");
    }
  });
}
/*
* Se Elimina el elemento del DOM divSeleccion y se crea nuevamente
*/
let ereaseItems = () => {
  ereaseLC();
  $("#divSeleccion").empty();
  $("#divSeleccion").append(`<fieldset>
  <legend>Ubicación del servicio</legend>
  <div id="divModulo">
    <label for="modulo" style="color: black;"><small style="color: red">*</small>Módulo:</label>
    <select class="form-control" id="modulo" onclick="getModulo()" required><option value="" disabled selected>Seleccione un Módulo.</option></select>
    <button class="btn btn-danger" onclick="ereaseModule()">Cambiar</button><br>
  </div>
  <div id="divPiso">
    <label for="piso" style="color: black;"><small style="color: red">*</small>Piso:</label>
    <select class="form-control" id="piso" 
    onclick="getPiso()" required><option value="" disabled selected>Seleccione un Piso.</option></select>
    <button class="btn btn-danger" onclick="ereaseFloor()">Cambiar</button><br>
  </div>
  <div id="divAula">
    <label for="aula" style="color: black;"><small style="color: red">*</small>Aula:</label>
    <select class="form-control" id="aula"
    onclick="getAula()" 
    required><option value="" disabled selected>Seleccione un Aula.</option></select>
    <button class="btn btn-danger" onclick="ereaseAula()">Cambiar</btn><br>
  </div>
  <button class="btn btn-warning" onclick="ereaseItems()">Reiniciar</button>
  <input class="form-control" id="anotacionExtra" type="text" name="anotacionExtra" placeholder="Escriba aqui si necesita hacer una descripción sobre el lugar.">
  <label for="recibe" style="color: black;">Anotación Extra sobre el sitio</label>
</fieldset>`);
}
/*
* Se elimina valor actual del campo Modulo
*/
let ereaseModule = () => {
  ereaseItems();
}
/*
* Se elimina valor actual del campo Piso
*/
let ereaseFloor = () => {
  localStorage.removeItem("getPiso");
  ereaseAula();
  $("#piso").empty();
  $("#piso").append('<option value="" disabled selected>Seleccione un Piso.</option>');
}
/*
* Se elimina valor actul del campo Aula
*/
let ereaseAula = () => {
  localStorage.removeItem("getAula");
  $("#aula").empty();
  $("#aula").append('<option value="" disabled selected>Seleccione un Aula.</option>');
}

/*
* Se obtiene el listado de Modulos
* @return JSON del response del REST Web Service
*/
let getModulo = () => {
  let $select = $('#modulo');
  let lcM = localStorage.getItem("getModulo");
  if(lcM !== null){
    return;
  }
  let request = new XMLHttpRequest();
  request.open("GET",'http://localhost/API-CUCEI-SRG/index.php/modulo/modulos',false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      alert('Error al cargar lista de Modulos');
      return;
    }
  let response = JSON.parse(request.response);
    response.forEach(element => {
      $select.append('<option value='+element.id+'>MODULO: '+element.module_name+'</option>');
    });
    localStorage.setItem("getModulo","1");         
  }
  request.send();
}
/*
* Se obtiene el listado de Pisos por el modulo Seleccionado
* @return JSON del response del REST Web Service
*/
let getPiso = () => {
  var id_module = document.getElementById('modulo').value;
  if (id_module === '1') {
      swal("Reporte de Mantenimiento", "Describe la ubicacion en el siguiente campo.", "info");
  	$("#divPiso").remove();
  	$("#divAula").remove();
  }
  let piso = localStorage.getItem("getPiso");
  if(piso !== null){
    return;
  }
  let request = new XMLHttpRequest();
  request.open("GET",'http://localhost/API-CUCEI-SRG/index.php/piso/pisos/'+id_module,false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      alert('Debe Seleccionar un módulo primero.') 
      return;
    }
  let response = JSON.parse(request.response);
    response.forEach(element => {
      $("#piso").append('<option value='+element.floor_id+'>PISO: '+element.floor_id+'</option>');      
    });
    localStorage.setItem("getPiso","1");         
  }
  request.send();
}
/*
* Se obtiene el listado de Aulas por el modulo y piso seleccionado
* @return JSON del response del REST Web Service
*/
let getAula = () => {
  let idModulo = document.getElementById('modulo').value;
  let idPiso = document.getElementById('piso').value;
  let aula = localStorage.getItem("getAula");
  if(aula !== null){
    return;
  }
  let request = new XMLHttpRequest();
  request.open("GET",'http://localhost/API-CUCEI-SRG/index.php/aula/aulas/'+idModulo+'/'+idPiso,false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      alert('Debe Seleccionar un módulo o piso primero.') 
      return;
    }
  let response = JSON.parse(request.response);
    response.forEach(element => {
      $("#aula").append('<option value='+element.aula_name+'>AULA: '+element.aula_name+'</option>');
    });
    localStorage.setItem("getAula","1");      
  }
  request.send();
}
/*
* Se eliminan las variables del LocalStorage del Navegador
*/
let ereaseLC = () => {
  localStorage.removeItem("getModulo");
  localStorage.removeItem("getPiso");
  localStorage.removeItem("getAula");
}
/*
* Elimino del LocalStorage para manipular los selects nuevamente
*/
ereaseLC();
/*
*Seteo el campo recibe y lo deshabilito
*/
$('#recibe').val(localStorage.getItem("nombreCompleto"));
document.getElementById("recibe").disabled = true;
