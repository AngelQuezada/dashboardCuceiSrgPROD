const cleanReport = function(){
    ereaseModule();
    $("#anotacionExtra").val('');
    $('#correo').val('');
    $('#telefono').val('');
    $('#area').val('');
    $('textarea#descripcionProblema').val('');
    $('input:radio[name=descripcionServicio]').each(function () { $(this).prop('checked', false); });
}
const nuevoReporte = function(){
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
  //Si se selecciona la opcion otro
  if (option == 'otro') {
     option = document.getElementById('otro').value;
  }
  registrarReporte(token,idUsuario,recibe,correo,telefono,area,modulo,piso,aula,anotacionExtra,option,descripcionProblema);
}

const registrarReporte = function(token,idUsuario,recibe,correo,telefono,area,modulo,piso,aula,anotacionExtra,option,descripcionProblema){
  var datos = {
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
        swal("Reporte de Mantenimiento", "Ha ocurrido un error al hacer el registro: "+JSON.stringify(data.responseJSON.mensaje), "error");
    }
  });
}
const ereaseItems = function(){
    document.getElementById("modulo").disabled = false;
    document.getElementById("piso").disabled = false;
    document.getElementById("aula").disabled = false;   
    $("#modulo").empty();
    $("#piso").empty();
    $("#aula").empty();
    $("#modulo").append('<option value="" disabled selected>Seleccione un Módulo.</option>');
    $("#piso").append('<option value="" disabled selected>Seleccione un Piso.</option>');
    $("#aula").append('<option value="" disabled selected>Seleccione un Aula.</option>');
}
  const ereaseModule = function(){
    ereaseFloor();
    ereaseAula();
    document.getElementById("modulo").disabled = false;
    $("#modulo").empty();
    $("#modulo").append('<option value="" disabled selected>Seleccione un Módulo.</option>');
}
  const ereaseFloor = function(){
    ereaseAula();
    document.getElementById("piso").disabled = false;
    $("#piso").empty();
    $("#piso").append('<option value="" disabled selected>Seleccione un Piso.</option>');

}
  const ereaseAula = function(){
    document.getElementById("aula").disabled = false;   
    $("#aula").empty();
    $("#aula").append('<option value="" disabled selected>Seleccione un Aula.</option>');
}
  const getModulo = function(){
    $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/modulo/modulos', 
    dataType: "json",
    success: function(data){
      $.each(data,function(key, registro) {
        $("#modulo").append('<option value='+registro.id+'>MODULO: '+registro.module_name+'</option>');
      });
      document.getElementById("modulo").disabled = true;     
    },
    error: function(data) {
      alert('Error al cargar lista de Modulos');
    }
  });
 
};
const getPiso = function(){
  var id_module = document.getElementById('modulo').value;
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/piso/pisos/'+id_module,
    dataType: "json",
    success: function(data){
      $.each(data,function(key, registro) {
        $("#piso").append('<option value='+registro.floor_id+'>PISO: '+registro.floor_id+'</option>');
      });
      document.getElementById("piso").disabled = true;       
    },
    error: function(data) {
      alert('Debe seleccionar un módulo primero.');
    }
  });
}
const getAula = function(){
  var id_module = document.getElementById('modulo').value;
  var floor_id = document.getElementById('piso').value;
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/aula/aulas/'+id_module+'/'+floor_id,
    dataType: "json",
    success: function(data){
      $.each(data,function(key, registro) {
        $("#aula").append('<option value='+registro.aula_name+'>AULA: '+registro.aula_name+'</option>');
      });
      document.getElementById("aula").disabled = true;       
    },
    error: function(data) {
      alert('Debe seleccionar un módulo o piso primero.');
    }
  });
}
//Seteo el campo recibe y lo deshabilito
$('#recibe').val(localStorage.getItem("nombreCompleto"));
document.getElementById("recibe").disabled = true;
