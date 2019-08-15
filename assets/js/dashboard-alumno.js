var URI = localStorage.getItem('uri');
var response;
var response2;
$(function(){
    getReportesAlumno();
    getReportes2Alumno();
    if(response != 0){
      document.getElementById("divIncidencias").hidden = false;
      tablaReportes();
    }
    if(response2 !=0){
      document.getElementById("divRobo").hidden = false;
      tablaReportes2();
    }
});
/*
* Se obtiene la cantidad de registros de reportes de seguridad formato 1
* @return JSON del response del REST Web Service
*/
let getReportesAlumno = () => {
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
let getReportes2Alumno = () => {
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
        <td style="color: #f5f5f5"><textarea rows="4" cols="30" style="background: #4848488a; color: white">`+registro.hechos+`</textarea></td>
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
  <th>Ver</th>
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
            <label for="txtObservaciones" style="color: black;">Observaciones</label>
          </div>
        `);
      });

      $("#modalReportesRobo").find(".modal-body").append(`</div><div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
      </div>
      </div>
      </div>`);
    },
    error: function() {
  }
});
}