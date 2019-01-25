/*
* Se obtiene la cantidad de registros de reportes nuevos
* @return JSON del response del REST Web Service
*/
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
/*
* Se obtiene la cantidad de registros de reportes por atender
* @return JSON del response del REST Web Service
*/
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
/*
* Se obtiene la cantidad de registros de reportes Cancelados
* @return JSON del response del REST Web Service
*/
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
/*
* Se obtiene la cantidad de registros de usuarios registrados
* @return JSON del response del REST Web Service
*/
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
/*
* Se obtiene la fecha Actual-
*/
let fechaActual = () => {
  let date = new Date();
  $('#fechaActual').append('Hoy es: '+date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear());
}
getReportesNuevo();
getReportesAtender();
getReportesCancelado();
getComunidadRegistrada();
fechaActual();
  