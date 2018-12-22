const nuevoReporte = function(){
  alert("Boton Generar Reporte");
}
const ereaseItems = function(){
    document.getElementById("modulo").disabled = false;
    document.getElementById("piso").disabled = false;
    document.getElementById("aula").disabled = false;   
    $("#modulo").empty();
    $("#piso").empty();
    $("#aula").empty();
  }
  const ereaseModule = function(){
    ereaseFloor();
    ereaseAula();
    document.getElementById("modulo").disabled = false;
    $("#modulo").empty();
  }
  const ereaseFloor = function(){
    ereaseAula();
    document.getElementById("piso").disabled = false;
    $("#piso").empty();

  }
  const ereaseAula = function(){
    document.getElementById("aula").disabled = false;   
    $("#aula").empty();
  }
  const getModulo = function(){
    $.ajax({
    type: "GET",
    url: 'http://localhost/api-cucei/index.php/modulo/modulos', 
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
    url: 'http://localhost/api-cucei/index.php/piso/pisos/'+id_module,
    dataType: "json",
    success: function(data){
      $.each(data,function(key, registro) {
        $("#piso").append('<option value='+registro.floor_id+'>PISO: '+registro.floor_id+'</option>');
      });
      document.getElementById("piso").disabled = true;       
    },
    error: function(data) {
      alert('Error al cargar lista de Pisos');
    }
  });
}
const getAula = function(){
  var id_module = document.getElementById('modulo').value;
  var floor_id = document.getElementById('piso').value;
  $.ajax({
    type: "GET",
    url: 'http://localhost/api-cucei/index.php/aula/aulas/'+id_module+'/'+floor_id,
    dataType: "json",
    success: function(data){
      $.each(data,function(key, registro) {
        $("#aula").append('<option value='+registro.aula_name+'>AULA: '+registro.aula_name+'</option>');
      });
      document.getElementById("aula").disabled = true;       
    },
    error: function(data) {
      alert('Error al cargar lista de Aulas');
    }
  });
}