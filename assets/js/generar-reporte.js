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
let ereaseModule = () => {
  ereaseItems();
}
let ereaseFloor = () => {
  localStorage.removeItem("getPiso");
  ereaseAula();
  $("#piso").empty();
  $("#piso").append('<option value="" disabled selected>Seleccione un Piso.</option>');
}
let ereaseAula = () => {
  localStorage.removeItem("getAula");
  $("#aula").empty();
  $("#aula").append('<option value="" disabled selected>Seleccione un Aula.</option>');
}
let getModulo = () => {
  let $select = $('#modulo');
  let lcM = localStorage.getItem("getModulo");
  if(lcM !== null){
    return;
  }
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/modulo/modulos',
    dataType: "json",
    success: function(data){
    $.each(data,function(_key, registro) {
        $select.append('<option value='+registro.id+'>MODULO: '+registro.module_name+'</option>');
      });
      localStorage.setItem("getModulo","1");
    },
    error: function() {
      alert('Error al cargar lista de Modulos');
    }
  });
}
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
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/piso/pisos/'+id_module,
    dataType: "json",
    success: function(data){
      $.each(data,function(_key, registro) {
        $("#piso").append('<option value='+registro.floor_id+'>PISO: '+registro.floor_id+'</option>');
      });
      localStorage.setItem("getPiso","1");
    },
    error: function() {
      alert('Debe seleccionar un módulo primero.');
    }
  });
}
let getAula = () => {
  let idModulo = document.getElementById('modulo').value;
  let idPiso = document.getElementById('piso').value;
  let aula = localStorage.getItem("getAula");
  if(aula !== null){
    return;
  }
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/aula/aulas/'+idModulo+'/'+idPiso,
    dataType: "json",
    success: function(data){
      $.each(data,function(_key, registro) {
        $("#aula").append('<option value='+registro.aula_name+'>AULA: '+registro.aula_name+'</option>');
      });
      localStorage.setItem("getAula","1");
    },
    error: function() {
      alert('Debe seleccionar un módulo o piso primero.');
    }
  });
}
let ereaseLC = () => {
  localStorage.removeItem("getModulo");
  localStorage.removeItem("getPiso");
  localStorage.removeItem("getAula");
}
//Elimino del LocalStorage para manipular los selects nuevamente
ereaseLC();
//Seteo el campo recibe y lo deshabilito
$('#recibe').val(localStorage.getItem("nombreCompleto"));
document.getElementById("recibe").disabled = true;
