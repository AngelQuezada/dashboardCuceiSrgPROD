$(document).ajaxStart(function () {
    Pace.restart();
  })
const URI = localStorage.getItem('uri');

$(document).ready(function() {
    getInstitucion();
});
let cleanReport = () => {
    $('#institucion').html('').select2({data: {id:null, text: null}});
    $("#txtEdad").val('');
    $("#txtCodigo").val('');
    $("#txtCarrera").val('');
    $("#txtEmail").val('');
    $("#txtTelefono").val('');
    document.getElementById("dtFecha").valueAsDate = null;
    $("#dtTiempo").val('');
    $("#txtLugar").val('');
    $('textarea#txtSuceso').val('');
    $('textarea#txtRobado').val('');
    $("#txtEstatura").val('');
    $("#txtApariencia").val('');
    $("#txtTez").val('');
    $("#txtCabello").val('');
    $("#txtOjos").val('');
    $("#txtCara").val('');
    $("#txtBoca").val('');
    $("#txtRopa").val('');
    $("#txtUso").val('');
    $("#txtEdadAgresor").val('');
    $("#txtCicatrices").val('');
    $("#txtTatuaje").val('');
    $("#txtPiercing").val('');
    $("#txtSeñaParticular").val('');
    $("#txtMedioHuida").val('');
    $('textarea#txtObservaciones').val('');
    getInstitucion();
}
/*
* Se obtiene el listado de Instituciones
* @return JSON del response del REST Web Service
*/
let getInstitucion = () => {
    $('#institucion').select2({
      width: 'resolve',
      placeholder: 'Selecciona una institución.',
      allowClear: true
    });
    var institucionSelect = $('#institucion');
  
    $.ajax({
      type: 'GET',
      url: `${URI}/sreporte/getinstituciones`
    }).then(function (data) {
      $.each(data,function(_key, registro) {
      let option = new Option(registro.institucion, registro.id, true, true);
      institucionSelect.append(option).trigger('change');
      });
      institucionSelect.trigger({
          type: 'select2:select',
          params: {
              data: data
          }
      });
  });
}
let nuevoReporteSeguridad2 = () => {
    let token = localStorage.getItem("token");
    let idUsuario = localStorage.getItem("idUsuario");
    let institucion = $("#institucion option:selected").text();
    let edad = document.getElementById('txtEdad').value;
    let codigo = document.getElementById('txtCodigo').value;
    let carrera = document.getElementById('txtCarrera').value;
    let email = document.getElementById('txtEmail').value;
    let telefono = document.getElementById('txtTelefono').value;
    let fecha = document.getElementById('dtFecha').value;
    let hora = document.getElementById('dtTiempo').value;
    let lugar = document.getElementById('txtLugar').value;
    let suceso = $("textarea#txtSuceso").val();
    let robado = $("textarea#txtRobado").val();
    let estatura = document.getElementById('txtEstatura').value;
    let apariencia = document.getElementById('txtApariencia').value;
    let tez = document.getElementById('txtTez').value;
    let cabello = document.getElementById('txtCabello').value;
    let ojos = document.getElementById('txtOjos').value;
    let cara = document.getElementById('txtCara').value;
    let boca = document.getElementById('txtBoca').value;
    let ropa = document.getElementById('txtRopa').value;
    let uso = document.getElementById('txtUso').value;
    let edadAgresor = document.getElementById('txtEdadAgresor').value;
    let cicatrices = document.getElementById('txtCicatrices').value;
    let tatuajes = document.getElementById('txtTatuaje').value;
    let piercing = document.getElementById('txtPiercing').value;
    let señaParticular = document.getElementById('txtSeñaParticular').value;
    let metodoHuida = document.getElementById('txtMedioHuida').value;
    let observaciones = $("textarea#txtObservaciones").val();

    let datos = {
        "token" : token,
        "idUsuario" : idUsuario,
        "institucion" : institucion,
        "edad" : edad,
        "codigo" : codigo,
        "carrera" : carrera,
        "email" : email,
        "telefono" : telefono,
        "fecha" : fecha,
        "hora" : hora,
        "lugar" : lugar,
        "suceso" : suceso,
        "robado" : robado,
        "estatura" : estatura,
        "apariencia" : apariencia,
        "tez" : tez,
        "cabello" : cabello,
        "ojos" : ojos,
        "cara" : cara,
        "boca" : boca,
        "ropa" : ropa,
        "uso" : uso,
        "edadAgresor" : edadAgresor,
        "cicatrices" : cicatrices,
        "tatuajes" : tatuajes,
        "piercing" : piercing,
        "señaParticular" : señaParticular,
        "metodoHuida" : metodoHuida,
        "observaciones" : observaciones
    }
    console.log(JSON.stringify(datos));
    $.ajax({
        type: 'POST',
        url: `${URI}/sreporte/nuevors2`,
        data: JSON.stringify(datos),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            swal("Reporte de Seguridad",data.mensaje, "success");
            cleanReport();
        },
        error: function (data) {
            swal("Reporte de Seguridad", "Ha ocurrido un error al hacer el registro: " + data.responseJSON.mensaje, "error");
        }
    });
}
let reportesTodosFormato2 = () => {
    let token = localStorage.getItem("token");
    $("#tablaResultados").empty();
    $("#tablaResultados").append(`<br><table class='table' id="tablaSeguridad2">
    <thead>
    <tr class='bg-primary'>
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
    <tbody id="bodyTable">`);
    $.ajax({
        type: "GET",
        url: `${URI}/sreporte/getsreporte2`,
        dataType: "json",
        success: function (data) {
            $.each(data, function (_key, registro) {
            let escuela;
            registro.idInstitucion === '1' ? escuela = "Centro Universitario de Ciencias Exactas e Ingenierias CUCEI" :
            registro.idInstitucion === '2' ? escuela = "Escuela Vocacional de Guadalajara" :
            registro.idInstitucion === '3' ? escuela = "Escuela Preparatoria No. 12" :
            registro.idInstitucion === '4' ? escuela = "Escuela Politecnica UdeG" : escuela = registro.idInstitucion;
          $("#bodyTable").append(`
          <tr>
          <input type="hidden" id="folioId" value="` + registro.id + `"/>
          <td>` + registro.id + `</td>
          <td>` + registro.fecha_elaboracion + `</td>
          <td>` + registro.nombre + `</td>
          <td>` + registro.codigo + `</td>
          <td>` + registro.correo + `</td>
          <td>` + registro.telefono + `</td>
          <td>` + escuela + `</td>
          <td><button class="btn btn-primary" id="btnVerReporte" data-toggle="modal" data-target="#myModal" onclick="verReporte('` + registro.id + `','` + this + `')" style="background-color: #0d47a1"><i class="fa fa-external-link" aria-hidden="true" style="color: white"></i></button></td>
          </tr>
          `);
            });
            $("#tablaResultados").append(`</tbody>
      </table>`);
            $("#tablaSeguridad2").DataTable({
                "order": false,
                "language": {
                    "sProcessing": "Procesando...",
                    "sLengthMenu": "Mostrar _MENU_ registros",
                    "sZeroRecords": "No se encontraron resultados",
                    "sEmptyTable": "Ningún dato disponible en esta tabla",
                    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix": "",
                    "sSearch": "Buscar:",
                    "sUrl": "",
                    "sInfoThousands": ",",
                    "sLoadingRecords": "Cargando...",
                    "oPaginate": {
                        "sFirst": "Primero",
                        "sLast": "Último",
                        "sNext": "Siguiente",
                        "sPrevious": "Anterior"
                    },
                    "oAria": {
                        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                    }
                }
            })
        },
        error: function () {}
    });
}

let verReporte = (value,object) => {
    let selectedFolio = object.innerHTML = value;
    $("#modalReporteSeg2").empty();
    $("#modalReporteSeg2").append(`<div class="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <div class="modal-header" style="background-color: #FAAC58">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Datos del Reporte:</h4>
        </div>
        <div class="modal-body" style="background-color: #F5ECCE" id="bodyModal">`);
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

          //ASIGNAN localStorage PARA IMPRIMIR PDF
          localStorage.setItem("escuelaS2", escuela);
          localStorage.setItem("folioS2", registro.id);
          localStorage.setItem("fechaElaboracionS2", registro.fecha_elaboracion);
          localStorage.setItem("nombreS2", registro.nombre);
          localStorage.setItem("edadS2", registro.edad);
          localStorage.setItem("codigoS2", registro.codigo);
          localStorage.setItem("carreraS2", registro.carrera);
          localStorage.setItem("correoS2", registro.correo);
          localStorage.setItem("telefonoS2", registro.telefono);
          localStorage.setItem("fechaIncidenteS2", registro.fecha_incidente);
          localStorage.setItem("horaIncidenteS2", registro.hora_incidente);
          localStorage.setItem("lugarS2", registro.lugar);
          localStorage.setItem("descripcionSucesoS2", registro.descripcion_suceso);
          localStorage.setItem("tipoRoboS2", registro.tipo_robo);
          localStorage.setItem("estaturaS2", registro.estatura);
          localStorage.setItem("aparienciaS2", registro.apariencia);
          localStorage.setItem("tezS2", registro.tez);
          localStorage.setItem("cabelloS2", registro.cabello);
          localStorage.setItem("ojosS2", registro.ojos);
          localStorage.setItem("caraS2", registro.cara);
          localStorage.setItem("bocaS2", registro.boca);
          localStorage.setItem("tipoRopaS2", registro.tipo_ropa);
          localStorage.setItem("usoGorraS2", registro.objeto_rostro);
          localStorage.setItem("edadAproxS2", registro.edad_aprox);
          localStorage.setItem("cicatrizS2", registro.cicatriz);
          localStorage.setItem("tatuajeS2", registro.tatuaje);
          localStorage.setItem("piercingS2", registro.piercing);
          localStorage.setItem("otroS2", registro.otro);
          localStorage.setItem("metodoHuidaS2", registro.metodo_huida);
          localStorage.setItem("observacionesS2", registro.observaciones);

          $("#modalReporteSeg2").find(".modal-body").append(`<div class="row">
            <div class="col-sm-1" style="background-color:gray;">
              <input class="form-control" id="txtFolioR" value="`+registro.id+`" style="color: white;" disabled>
              <label for="txtFolioR" style="color: black;">Folio</label>
            </div>
            <div class="col-sm-7">
              <input class="form-control" id="txtEscuela" value="`+escuela+`" disabled>
              <label for="txtEscuela" style="color: black;">Escuela/Institución</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control pull-right" id="txtFecha" value="`+registro.fecha_elaboracion+`" disabled>
              <label for="txtFecha" style="color: black;">Fecha de Elaboración</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtNombre" value="`+registro.nombre+`" disabled>
              <label for="txtNombre" style="color: black;">Nombre</label>
            </div>
            <div class="col-sm-4">
                <input type="text" class="form-control" id="txtEdad" value="`+registro.edad+`" disabled>
                <label for="txtEdad" style="color: black;">Edad</label>
            </div>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="txtCodigo" value="`+registro.codigo+`" disabled>
              <label for="txtCodigo" style="color: black;">Código</label>
            </div>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="txtCarrera" value="`+registro.carrera+`" disabled>
              <label for="txtCarrera" style="color: black;">Carrera</label>
            </div>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="txtCorreo" value="`+registro.correo+`" disabled>
              <label for="txtCorreo" style="color: black;">Correo</label>
            </div>
            <div class="col-sm-4">
              <input type="text" class="form-control" id="txtTelefono" value="`+registro.telefono+`" disabled>
              <label for="txtTelefono" style="color: black;">Teléfono</label>
            </div>
            <div class="col-sm-4">
              <input type="date" class="form-control" id="txtFechaIncidente" value="`+registro.fecha_incidente+`" disabled>
              <label for="txtFechaIncidente" style="color: black;">Fecha de Incidente</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtHoraIncidente" value="`+registro.hora_incidente+`" disabled>
              <label for="txtHoraIncidente" style="color: black;">Hora de Incidente</label>
            </div>
            <div class="col-sm-4">
              <input class="form-control" id="txtLugar" value="`+registro.lugar+`" disabled>
              <label for="txtLugar" style="color: black;">Lugar</label>
            </div>
            <div class="col-sm-6">
<textarea rows="4" cols="50" id="txtDescripcionSuceso" style="background-color: #F7D358;" disabled>`+registro.descripcion_suceso+`</textarea>
                <label for="txtDescripcionSuceso" style="color: black;">Descripción del Suceso</label>
            </div>
            <div class="col-sm-6">
<textarea rows="4" cols="50" id="txtDescripcionRobado" style="background-color: #F7D358;" disabled>`+registro.tipo_robo+`</textarea>
                <label for="txtDescripcionRobado" style="color: black;">Descripción de lo robado</label>
            </div>
            <div class="col-sm-12">
              <hr style="color: black; border: 1px dotted;">
            </div>
            <div class="col-sm-3">
                <input class="form-control" id="txtEstatura" value="`+registro.estatura+`" disabled>
                <label for="txtEstatura" style="color: black;">Estatura</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtApariencia" value="`+registro.apariencia+`" disabled>
              <label for="txtApariencia" style="color: black;">Apariencia</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtTez" value="`+registro.tez+`" disabled>
              <label for="txtTez" style="color: black;">Tez</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtCabello" value="`+registro.cabello+`" disabled>
              <label for="txtCabello" style="color: black;">Cabello</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtOjos" value="`+registro.ojos+`" disabled>
              <label for="txtOjos" style="color: black;">Ojos</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtCara" value="`+registro.cara+`" disabled>
              <label for="txtCara" style="color: black;">Cara</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtBoca" value="`+registro.boca+`" disabled>
              <label for="txtBoca" style="color: black;">Boca</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtTipoRopa" value="`+registro.tipo_ropa+`" disabled>
              <label for="txtTipoRopa" style="color: black;">Tipo de ropa</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtObjetoRostro" value="`+registro.objeto_rostro+`" disabled>
              <label for="txtObjetoRostro" style="color: black;">Uso,Gorra</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtEdadAprox" value="`+registro.edad_aprox+`" disabled>
              <label for="txtEdadAprox" style="color: black;">Edad aprox</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtCicatriz" value="`+registro.cicatriz+`" disabled>
              <label for="txtCicatriz" style="color: black;">Cicatrices</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtTatuaje" value="`+registro.tatuaje+`" disabled>
              <label for="txtTatuaje" style="color: black;">Tatuaje</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtPiercing" value="`+registro.piercing+`" disabled>
              <label for="txtPiercing" style="color: black;">Piercing</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtOtro" value="`+registro.otro+`" disabled>
              <label for="txtOtro" style="color: black;">Otro</label>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="txtOtro" value="`+registro.metodo_huida+`" disabled>
              <label for="txtOtro" style="color: black;">Método de huida</label>
            </div>
            <div class="col-sm-12">
              <hr style="color: black; border: 1px dotted;">
            </div>
            <div class="col-sm-12" style="text-align: center">
<textarea rows="4" cols="50" id="txtObservaciones" style="background-color: #F7D358;" disabled>`+registro.observaciones+`</textarea><br/>
              <label for="txtObservaciones" style="color: black;">Observaciones</label>
            </div>
          `);
        });

        $("#modalReporteSeg2").find(".modal-body").append(`</div><div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="imprimir()" style="background-color: #00c853; color: white;"><i class="fa fa-print" aria-hidden="true"> Imprimir Reporte</i></button>
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
let imprimir = () => {
  const URL = localStorage.getItem('url');
  window.open(`${URL}/printrs2.html`, '_blank');
}
reportesTodosFormato2();