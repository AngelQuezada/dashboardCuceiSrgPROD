let getReportesNuevo = () => {
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
let getReportesAtender = () => {
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
let getReportesCancelado = () => {
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
let getComunidadRegistrada = () => {
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
let fechaActual = () => {
  let date = new Date();
  $('#fechaActual').append('Hoy es: '+date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());
}
getReportesNuevo();
getReportesAtender();
getReportesCancelado();
getComunidadRegistrada();
fechaActual();
  