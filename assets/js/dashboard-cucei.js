var URI = localStorage.getItem('uri');
var response;
var response2;
var response3;
$(function(){
  let nombreAcademPersonal = localStorage.getItem("nombreCompleto");
  document.getElementById("nombreAcademPersonal").innerHTML = nombreAcademPersonal;
    getReportes();
    getReportes2();
    getReportes3();
    if(response != 0){
      document.getElementById("divIncidencias").hidden = false;
      tablaReportes();
    }
    if(response2 != 0){
      document.getElementById("divRobo").hidden = false;
      tablaReportes2();
    }
    if(response3 != 0){
        document.getElementById("divManten").hidden = false;
        tablaReportes3();
    }
});
/*
* Se obtiene la cantidad de registros de reportes de seguridad formato 1
* @return JSON del response del REST Web Service
*/
let getReportes = () => {
    let correo = localStorage.getItem("email");
    let request = new XMLHttpRequest();
    request.open("GET",`${URI}/usuario/reportes/${correo}`,false);
    request.onreadystatechange = () => {
      if (request.status !== 200){
        return;
      }
        response = JSON.parse(request.response);
        document.getElementById("cantidadReportes").innerHTML = response;
    };
    request.send();
};
/*
* Se obtiene la cantidad de registros de reportes de seguridad formato 2
* @return JSON del response del REST Web Service
*/
let getReportes2 = () => {
  let correo = localStorage.getItem("email");
  let request = new XMLHttpRequest();
  request.open("GET",`${URI}/usuario/reportes2/${correo}`,false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      return;
    }
      response2 = JSON.parse(request.response);
      document.getElementById("cantidadReportesRobo").innerHTML = response2;
  };
  request.send();
};
let getReportes3 = () => {
  let idUsuario = localStorage.getItem("idUsuario");
  let request = new XMLHttpRequest();
  request.open("GET",`${URI}/usuario/reportes3/${idUsuario}`,false);
  request.onreadystatechange = () => {
    if (request.status !== 200){
      return;
    }
      response3 = JSON.parse(request.response);
      document.getElementById("cantidadReportesManten").innerHTML = response3;
  };
  request.send();
};
let tablaReportes = () => {
  let correo = localStorage.getItem("email");
  $("#tablaReportes").empty();
  $("#tablaReportes").append(`<br><table class='table'>
  <thead>
  <tr class='bg-primary' style="background: rgba(41, 145, 206, 0.342)">
  <th>Folio del Reporte</th>
  <th>Tipo de Servicio</th>
  <th>Afectado</th>
  <th>Edad</th>
  <th>Carrera</th>
  <th>Código</th>
  <th>Teléfono</th>
  <th>Fecha</th>
  <th>Hora</th>
  <th>Lugar</th>
  <th>Hechos</th>
  </tr>
  </thead>
  <tbody id="bodyTable">`);
  $.ajax({
    type: "GET",
    url: `${URI}/usuario/reportealumno/`+correo,
    dataType: "json",
    success: function(data){
      $.each(data,function(_key, registro) {
        $("#bodyTable").append(`
        <tr style="text-align: center; background: #4848488a">
        <input type="hidden" id="folioId" value="`+registro.id+`"/>
        <td style="color: #f5f5f5">`+registro.id+`</td>
        <td style="color: #f5f5f5">`+registro.tipo_servicio+`</td>
        <td style="color: #f5f5f5">`+registro.afectado+`</td>
        <td style="color: #f5f5f5">`+registro.edad+`</td>
        <td style="color: #f5f5f5">`+registro.carrera+`</td>
        <td style="color: #f5f5f5">`+registro.codigo+`</td>
        <td style="color: #f5f5f5">`+registro.telefono+`</td>
        <td style="color: #f5f5f5">`+registro.fecha+`</td>
        <td style="color: #f5f5f5">`+registro.hora+`</td>
        <td style="color: #f5f5f5">`+registro.lugar+`</td>
        <td style="color: #f5f5f5"><textarea rows="4" cols="30" style="background: #4848488a; color: white" disabled>`+registro.hechos+`</textarea></td>
        </tr>
        `);
      });
      $("#container").append(`</tbody>
        </table>`);
    },
    error: function() {
      $("#bodyTable").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
    }
  });
};

let tablaReportes2 = () => {
  let correo = localStorage.getItem("email");
  $("#tablaReportesRobo").empty();
  $("#tablaReportesRobo").append(`<br><table class='table'>
  <thead>
  <tr class='bg-primary' style="background: rgba(41, 145, 206, 0.342)">
  <th>Folio</th>
  <th>Fecha Elaboracion</th>
  <th>Nombre</th>
  <th>Codigo</th>
  <th>Correo</th>
  <th>Telefono</th>
  <th>Escuela/Institucion</th>
  <th>Ver Reporte</th>
  </tr>
  </thead>
  <tbody id="bodyTable2">`);
  $.ajax({
      type: "GET",
      url: `${URI}/usuario/getsreporte2/`+correo,
      dataType: "json",
      success: function (data) {
          $.each(data, function (_key, registro) {
          let escuela;
          registro.idInstitucion === '1' ? escuela = "Centro Universitario de Ciencias Exactas e Ingenierias CUCEI" :
          registro.idInstitucion === '2' ? escuela = "Escuela Vocacional de Guadalajara" :
          registro.idInstitucion === '3' ? escuela = "Escuela Preparatoria No. 12" :
          registro.idInstitucion === '4' ? escuela = "Escuela Politecnica UdeG" : escuela = registro.idInstitucion;
        $("#bodyTable2").append(`
        <tr style="text-align: center; background: #4848488a">
        <input type="hidden" id="folioId" value="` + registro.id + `"/>
        <td style="color: #f5f5f5">` + registro.id + `</td>
        <td style="color: #f5f5f5">` + registro.fecha_elaboracion + `</td>
        <td style="color: #f5f5f5">` + registro.nombre + `</td>
        <td style="color: #f5f5f5">` + registro.codigo + `</td>
        <td style="color: #f5f5f5">` + registro.correo + `</td>
        <td style="color: #f5f5f5">` + registro.telefono + `</td>
        <td style="color: #f5f5f5">` + escuela + `</td>
        <td><button class="btn btn-primary" id="btnVerReporte" data-toggle="modal" data-target="#myModal" onclick="verReporte('` + registro.id + `','` + this + `')" style="background-color: #0d47a1"><i class="fa fa-external-link" aria-hidden="true" style="color: white"></i></button></td>
        </tr>
        `);
          });
          $("#tablaReportesRobo").append(`</tbody>
    </table>`);
      },
      error: function () {
        $("#bodyTable2").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
      }
  });
};
let verReporte = (value,object) => {
  let selectedFolio = object.innerHTML = value;
  $("#modalReportesRobo").empty();
  $("#modalReportesRobo").append(`<div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
  <div class="modal-header" style="background-color: #212121">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 class="modal-title" id="myModalLabel" style="color: #f5f5f5">Datos del Reporte:</h4>
    </div>
    <div class="modal-body" style="background-color: #484848" id="bodyModal">`);
  $.ajax({
    type: "GET",
    url: `${URI}/sreporte/getsreporte2pa/`+selectedFolio,
    dataType: "json",
    success: function(data){
      $.each(data,function(_key, registro) {
          let escuela;
          registro.idInstitucion === '1' ? escuela = "Centro Universitario de Ciencias Exactas e Ingenierias CUCEI" :
          registro.idInstitucion === '2' ? escuela = "Escuela Vocacional de Guadalajara" :
          registro.idInstitucion === '3' ? escuela = "Escuela Preparatoria No. 12" :
          registro.idInstitucion === '4' ? escuela = "Escuela Politecnica UdeG" : escuela = registro.idInstitucion;

        $("#modalReportesRobo").find(".modal-body").append(`<div class="row">
          <div class="col-sm-1">
            <input class="form-control" id="txtFolioR" value="`+registro.id+`" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" disabled>
            <label for="txtFolioR" style="color: #ffffff">Folio</label>
          </div>
          <div class="col-sm-7">
            <input class="form-control" id="txtEscuela" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+escuela+`" disabled>
            <label for="txtEscuela"  style="color: #ffffff">Escuela/Institución</label>
          </div>
          <div class="col-sm-4">
            <input class="form-control pull-right" id="txtFecha" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.fecha_elaboracion+`" disabled>
            <label for="txtFecha" style="color: #ffffff">Fecha de Elaboración</label>
          </div>
          <div class="col-sm-4">
            <input class="form-control" id="txtNombre" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.nombre+`" disabled>
            <label for="txtNombre" style="color: #ffffff">Nombre</label>
          </div>
          <div class="col-sm-4">
              <input type="text" class="form-control" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" id="txtEdad" value="`+registro.edad+`" disabled>
              <label for="txtEdad" style="color: #ffffff">Edad</label>
          </div>
          <div class="col-sm-4">
            <input type="text" class="form-control" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" id="txtCodigo" value="`+registro.codigo+`" disabled>
            <label for="txtCodigo" style="color: #ffffff">Código</label>
          </div>
          <div class="col-sm-4">
            <input type="text" class="form-control" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" id="txtCarrera" value="`+registro.carrera+`" disabled>
            <label for="txtCarrera" style="color: #ffffff">Carrera</label>
          </div>
          <div class="col-sm-4">
            <input type="text" class="form-control" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" id="txtCorreo" value="`+registro.correo+`" disabled>
            <label for="txtCorreo" style="color: #ffffff">Correo</label>
          </div>
          <div class="col-sm-4">
            <input type="text" class="form-control" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" id="txtTelefono" value="`+registro.telefono+`" disabled>
            <label for="txtTelefono" style="color: #ffffff">Teléfono</label>
          </div>
          <div class="col-sm-4">
            <input type="date" class="form-control" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" id="txtFechaIncidente" value="`+registro.fecha_incidente+`" disabled>
            <label for="txtFechaIncidente" style="color: #ffffff">Fecha de Incidente</label>
          </div>
          <div class="col-sm-4">
            <input class="form-control" id="txtHoraIncidente" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.hora_incidente+`" disabled>
            <label for="txtHoraIncidente" style="color: #ffffff">Hora de Incidente</label>
          </div>
          <div class="col-sm-4">
            <input class="form-control" id="txtLugar" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.lugar+`" disabled>
            <label for="txtLugar" style="color: #ffffff">Lugar</label>
          </div>
          <div class="col-sm-6">
<textarea rows="4" cols="50" id="txtDescripcionSuceso" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" disabled>`+registro.descripcion_suceso+`</textarea>
              <label for="txtDescripcionSuceso" style="color: #ffffff">Descripción del Suceso</label>
          </div>
          <div class="col-sm-6">
<textarea rows="4" cols="50" id="txtDescripcionRobado" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" disabled>`+registro.tipo_robo+`</textarea>
              <label for="txtDescripcionRobado" style="color: #ffffff">Descripción de lo robado</label>
          </div>
          <div class="col-sm-12">
            <hr style="color: black; border: 1px dotted;">
          </div>
          <div class="col-sm-3">
              <input class="form-control" id="txtEstatura" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.estatura+`" disabled>
              <label for="txtEstatura" style="color: #ffffff">Estatura</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtApariencia" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.apariencia+`" disabled>
            <label for="txtApariencia" style="color: #ffffff">Apariencia</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtTez" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.tez+`" disabled>
            <label for="txtTez" style="color: #ffffff">Tez</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtCabello" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.cabello+`" disabled>
            <label for="txtCabello" style="color: #ffffff">Cabello</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtOjos" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.ojos+`" disabled>
            <label for="txtOjos" style="color: #ffffff">Ojos</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtCara" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.cara+`" disabled>
            <label for="txtCara" style="color: #ffffff">Cara</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtBoca" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.boca+`" disabled>
            <label for="txtBoca" style="color: #ffffff;">Boca</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtTipoRopa" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.tipo_ropa+`" disabled>
            <label for="txtTipoRopa" style="color: #ffffff;">Tipo de ropa</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtObjetoRostro" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.objeto_rostro+`" disabled>
            <label for="txtObjetoRostro" style="color: #ffffff;">Uso,Gorra</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtEdadAprox" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.edad_aprox+`" disabled>
            <label for="txtEdadAprox" style="color: #ffffff;">Edad aprox</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtCicatriz" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.cicatriz+`" disabled>
            <label for="txtCicatriz" style="color: #ffffff;">Cicatrices</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtTatuaje" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.tatuaje+`" disabled>
            <label for="txtTatuaje" style="color: #ffffff;">Tatuaje</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtPiercing" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.piercing+`" disabled>
            <label for="txtPiercing" style="color: #ffffff;">Piercing</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtOtro" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.otro+`" disabled>
            <label for="txtOtro" style="color: #ffffff;">Otro</label>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="txtOtro" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.metodo_huida+`" disabled>
            <label for="txtOtro" style="color: #ffffff;">Método de huida</label>
          </div>
          <div class="col-sm-12">
            <hr style="color: black; border: 1px dotted;">
          </div>
          <div class="col-sm-12" style="text-align: center">
<textarea rows="4" cols="50" id="txtObservaciones" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" disabled>`+registro.observaciones+`</textarea><br/>
            <label for="txtObservaciones" style="color: #f5f5f5;">Observaciones</label>
          </div>
        `);
      });
      $("#modalReportesRobo").find(".modal-body").append(`</div><div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" style="background: rgba(0, 8, 10, 0.322); color: #ffffff">Cerrar</button>
      </div>
      </div>
      </div>
      </div>`);
    },
    error: function() {
  }
});
};
let tablaReportes3 = () => {
    let idUsuario = localStorage.getItem("idUsuario");
    $("#tablaReportesManten").empty();
    $("#tablaReportesManten").append(`<br><table class='table'>
    <thead>
    <tr class='bg-primary' style="background: rgba(41, 145, 206, 0.342)">
    <th>Folio del Reporte</th>
    <th>Observación Estatus</th>
    <th>Estatus</th>
    <th>Ver Reporte</th>
    </tr>
    </thead>
    <tbody id="bodyTable3">`);
    $.ajax({
      type: "GET",
      url: `${URI}/usuario/reportemanten/`+idUsuario,
      dataType: "json",
      success: function(data){
        $.each(data,function(_key, registro) {
          let status;
          let obs;
          registro.observacion_status === null ? obs = "Sin Observaciones" : obs = registro.observacion_status;
          registro.idStatus === '1' ? status = "En Solicitud" : 
          registro.idStatus === '2' ? status = "Asignado" : 
          registro.idStatus === '3' ? status = "Finalizado" :
          registro.idStatus === '4' ? status = "Cancelado" : status = registro.idStatus;
          $("#bodyTable3").append(`
          <tr style="text-align: center; background: #4848488a">
          <input type="hidden" id="folioId" value="`+registro.folio+`"/>
          <td style="color: #f5f5f5">`+registro.folio+`</td>
          <td style="color: #f5f5f5">`+obs+`</td>
          <td style="color: #f5f5f5">`+status+`</td>
          <td><button class="btn btn-primary" id="btnVerReporte2" data-toggle="modal" data-target="#myModal2" onclick="verReporteManten('` + registro.folio + `','` + this + `')" style="background-color: #0d47a1"><i class="fa fa-external-link" aria-hidden="true" style="color: white"></i></button></td>
          </tr>
          `);
        });
        $("#bodyTable3").append(`</tbody>
          </table>`);
      },
      error: function() {
        $("#bodyTable3").append(`<p style="color: red;">No Hay Resultados Para Mostrar.</p>`);
      }
    });
  };

  /*
* Generar un Modal con el folio seleccionado
* @param Object
*/
let verReporteManten = (value,object) => {
    let selectedFolio = object.innerHTML = value;
    $("#modalReportesManten").empty();
    $("#modalReportesManten").append(`<div class="modal fade" id="myModal2" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #212121">
        <button type="button" class="close" data-dismiss="modal" style="color: #ffffff" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel" style="color: #f5f5f5">Datos del Reporte:</h4>
      </div>
      <div class="modal-body" style="background-color: #484848" id="bodyModal">`);
      $.ajax({
        type: "GET",
        url: `${URI}/reporte/reporteindpp/`+selectedFolio,
        dataType: "json",
        success: function(data){
          $.each(data,function(_key, registro) {
            let ds;
            registro.descripcion_servicio === '1' ? ds = "Aire Acondicionado" :
            registro.descripcion_servicio === '2' ? ds = "Carpinteria" :
            registro.descripcion_servicio === '3' ? ds = "Cristales y/o estructura de aluminio" :
            registro.descripcion_servicio === '4' ? ds = "Eléctrico" :
            registro.descripcion_servicio === '5' ? ds = "Herrería" :
            registro.descripcion_servicio === '6' ? ds = "Hidráulico" :
            registro.descripcion_servicio === '7' ? ds = "Infraestructura" :
            registro.descripcion_servicio === '8' ? ds = "Jardinería" :
            registro.descripcion_servicio === '9' ? ds = "Limpieza" :
            registro.descripcion_servicio === '10' ? ds = "Pintura" : 
            registro.descripcion_servicio === '11' ? ds = "Cerrajería" : ds = registro.descripcion_servicio;
  
            $("#modalReportesManten").find(".modal-body").append(`<div class="row">
              <div class="col-sm-2">
                <input class="form-control" id="txtFolioR" value="`+registro.folio+`" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" disabled>
                <label for="txtFolioR" style="background: rgba(0, 8, 10, 0.322); color: #ffffff">Folio</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control pull-right" id="txtFecha" style="background: rgba(0, 8, 10, 0.322); color: #ffffff"value="`+registro.fecha_elaboracion+`" disabled>
                <label for="txtFecha" style="color: #ffffff">Fecha de Elaboración</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtRecibe" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.recibe+`" disabled>
                <label for="txtRecibe" style="color: #ffffff">Recibe</label>
              </div>
              <div class="col-sm-4">
                  <input type="date" class="form-control" id="txtFechaRecepcion" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.fecha_recepcion+`" disabled>
                  <label for="txtFechaRecepcion" style="color: #ffffff"><small style="color: blue">*</small>Fecha de Recepción</label>
              </div>
              <div class="col-sm-4">
                <input type="date" class="form-control" id="txtFechaAsignacion" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.fecha_asignacion+`" disabled>
                <label for="txtFechaAsignacion" style="color: #ffffff"><small style="color: blue">*</small>Fecha de Asignación</label>
              </div>
              <div class="col-sm-4">
                <input type="date" class="form-control" id="txtFechaReparacion" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.fecha_reparacion+`" disabled>
                <label for="txtFechaReparacion" style="color: #ffffff"><small style="color: blue">*</small>Fecha de Reparación</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtNombre" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.nombre+`" disabled>
                <label for="txtNombre" style="color: #ffffff">Nombre</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtApaterno" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.a_paterno+`" disabled>
                <label for="txtApaterno" style="color: #ffffff">Apellido Paterno</label>
              </div>
              <div class="col-sm-4">
                <input class="form-control" id="txtAmaterno" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.a_materno+`" disabled>
                <label for="txtAmaterno" style="color: #ffffff">Apellido Materno</label>
              </div>
              <div class="col-sm-3">
                <input class="form-control" id="txtTelefono" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.telefono+`" disabled>
                <label for="txtTelefono" style="color: #ffffff">Teléfono</label>
              </div>
              <div class="col-sm-3">
                <input class="form-control" id="txtAreaSolicitante" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.area_solicitante+`" disabled>
                <label for="txtAreaSolicitante" style="color: #ffffff">Área Solicitante</label>
              </div>
              <div class="col-sm-6">
                <input class="form-control" id="txtUbicacionServicio" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+registro.ubicacion_servicio+`" disabled>
                <label for="txtUbicacionServicio" style="color: #ffffff">Ubicación del Servicio</label>
              </div>
              <div class="col-sm-12">
                <hr style="color: black; border: 1px dotted;">
              </div>
              <div class="col-sm-6">
  <b><textarea rows="4" cols="50" id="txtAnotacionExtra" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" disabled>`+registro.anotacion_extra+`</textarea></b>
                <label for="txtAnotacionExtra" style="color: #ffffff">Anotación extra</label>
              </div>
              <div class="col-sm-6">
  <b><textarea rows="4" cols="50" id="txtAnotacionExtra" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" disabled>`+registro.descripcion_problema+`</textarea></b>
                <label for="txtDescripcionProblema" style="color: #ffffff">Descripción del Problema</label>
              </div>
              <div class="col-sm-12">
                <input class="form-control" id="txtDescripcionServicio" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" value="`+ds+`" disabled>
                <label for="txtDescripcionServicio" style="color: #ffffff">Descripción del Servicio</label>
              </div>
            `);
          });
          let fechaRecepcion = document.getElementById('txtFechaRecepcion').value;
          let fechaAsignacion = document.getElementById('txtFechaAsignacion').value;
          let fechaReparacion = document.getElementById('txtFechaReparacion').value;
          let fer = new Date(fechaRecepcion);
          let fa = new Date(fechaAsignacion);
          let fr = new Date(fechaReparacion);
          if (!isNaN(fer)) {
            document.getElementById("txtFechaRecepcion").disabled = true;
          }
          if (!isNaN(fa)) {
            document.getElementById("txtFechaAsignacion").disabled = true;
          }
          if (!isNaN(fr)) {
            document.getElementById("txtFechaReparacion").disabled = true;
          }
          $("#modalReportesManten").find(".modal-body").append(`</div><div class="modal-footer">
            <button type="button" class="btn btn-default" style="background: rgba(0, 8, 10, 0.322); color: #ffffff" data-dismiss="modal">Cerrar</button>
          </div>
          </div>
          </div>
          </div>`);
        },
        error: function() {
      }
    });
  };