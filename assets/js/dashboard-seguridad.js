var URI = localStorage.getItem('uri');
$(function(){
    getReportesS1();
    getReportesS2();
});

/*
* Se obtiene la cantidad de registros de reportes nuevos
* @return JSON del response del REST Web Service
*/
let getReportesS1 = () => {
    let request = new XMLHttpRequest();
    request.open("GET",`${URI}/sreporte/getnuevos1`,false);
    request.onreadystatechange = () => {
      if (request.status !== 200){
        return;
      }
    let response = JSON.parse(request.response);
    $("#spinnerReporteS1").hide();
    $('.overlay').remove();
    document.getElementById('reporteSeguridad1').innerHTML = response;
    }
    request.send();
}
/*
* Se obtiene la cantidad de registros de reportes nuevos
* @return JSON del response del REST Web Service
*/
let getReportesS2 = () => {
    let request = new XMLHttpRequest();
    request.open("GET",`${URI}/sreporte/getnuevos2`,false);
    request.onreadystatechange = () => {
      if (request.status !== 200){
        return;
      }
    let response = JSON.parse(request.response);
    $("#spinnerReporteS2").hide();
    $('.overlay').remove();
    document.getElementById('reporteSeguridad2').innerHTML = response;
    }
    request.send();
}
$(document).ajaxStart(function () {
  Pace.restart();
})