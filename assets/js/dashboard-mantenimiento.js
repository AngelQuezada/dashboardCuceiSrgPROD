/*
* Se obtiene la cantidad de registros de reportes nuevos
* @return JSON del response del REST Web Service
*/
let getReportesNuevo = () => {
  let request = new XMLHttpRequest();
  request.open("GET",'http://localhost/API-CUCEI-SRG/index.php/reporte/nuevos',false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      return;
    }
  let response = JSON.parse(request.response);
  document.getElementById("reporteSolicitud").innerHTML = response;
  }
  request.send();
}
/*
* Se obtiene la cantidad de registros de reportes por atender
* @return JSON del response del REST Web Service
*/
let getReportesAtender = () => {
  let request = new XMLHttpRequest();
  request.open("GET",'http://localhost/API-CUCEI-SRG/index.php/reporte/atender',false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      return;
    }
  let response = JSON.parse(request.response);
  document.getElementById("reporteAsignado").innerHTML = response;
    
  }
  request.send();
}
/*
* Se obtiene la cantidad de registros de reportes finalizados
* @return JSON del response del REST Web Service
*/
let getReportesFinalizado = () => {
  let request = new XMLHttpRequest();
  request.open("GET",'http://localhost/API-CUCEI-SRG/index.php/reporte/finalizado',false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      document.getElementById("reporteFinalizado").innerHTML = "ERROR";
      return;
    }
  let response = JSON.parse(request.response);
  document.getElementById("reporteFinalizado").innerHTML = response;
    
  }
  request.send();
}
/*
* Se obtiene la cantidad de registros de reportes Cancelados
* @return JSON del response del REST Web Service
*/
let getReportesCancelado = () => {
  let request = new XMLHttpRequest();
  request.open("GET",'http://localhost/API-CUCEI-SRG/index.php/reporte/cancelados',false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      return;
    }
  let response = JSON.parse(request.response);
  document.getElementById("reporteCancelado").innerHTML = response;
  }
  request.send();
}
/*
* Se obtiene la cantidad de registros de usuarios registrados
* @return JSON del response del REST Web Service
*/
let getComunidadRegistrada = () => {
  let request = new XMLHttpRequest();
  request.open("GET",'http://localhost/API-CUCEI-SRG/index.php/usuario/totalusuarios',false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      console.log("ERROR");
      return;
    }
  let response = JSON.parse(request.response);
  document.getElementById("comunidadRegistrada").innerHTML = response;
  }
  request.send();
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
getReportesFinalizado();
getReportesCancelado();
getComunidadRegistrada();
fechaActual();
  