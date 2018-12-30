const getReportesNuevo = function(){
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/reporte/nuevos',
    dataType: "json",
    success: function(data){
      document.getElementById("reporteSolicitud").innerHTML = data;
    },
    error: function(data) {
    }
  });
}
const getReportesAtender = function(){
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/reporte/atender',
    dataType: "json",
    success: function(data){
      document.getElementById("reporteAsignado").innerHTML = data;
    },
    error: function(data) {
    }
  });
}
const getReportesCancelado = function(){
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/reporte/cancelados',
    dataType: "json",
    success: function(data){
      document.getElementById("reporteCancelado").innerHTML = data;
    },
    error: function(data) {
    }
  });
}
const getComunidadRegistrada = function(){
  $.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/usuario/totalusuarios',
    dataType: "json",
    success: function(data){
      document.getElementById("comunidadRegistrada").innerHTML = data;
    },
    error: function(data) {
    }
  });
}
const fechaActual = function(){
  let d = new Date();
  $('#fechaActual').append('Hoy es: '+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear());
}



//obtainName();
getReportesNuevo();
getReportesAtender();
getReportesCancelado();
getComunidadRegistrada();
fechaActual();
  