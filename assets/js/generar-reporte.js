$(document).ajaxStart(function () {
  Pace.restart();
});
var URI = localStorage.getItem('uri');

$(document).ready(function() {
  getModulo();
  $('#modulo').on("select2:select", function(e) {
    e.preventDefault();
    $("#divPiso").show();
    $("#divAula").show();
    $('#piso').html('').select2({
      data: {
        id: null,
        text: null
      }
    });

    getPiso();
  });
  $("#piso").on("select2:select", function(e){
    $('#aula').trigger('change.select2');
    //e.preventDefault();
    $('#aula').html('').select2({
      data: {
        id: null,
        text: null
      }
    });
    getAula();
  });
});
document.getElementById('btnNuevoReporte').addEventListener('click',function(){
  nuevoReporte();
});
/*
* Limpia los campos del Formulario de Reporte de Mantenimiento
*/
let cleanReport = () => {
  $("#anotacionExtra").val('');
  $('#correo').val('');
  $('#telefono').val('');
  $('#area').val('');
  $('textarea#descripcionProblema').val('');
  $('input:radio[name=descripcionServicio]').each(function () { $(this).prop('checked', false); });
  $('#modulo').html('').select2({data: {id:null, text: null}});
  $('#piso').html('').select2({data: {id:null, text: null}});
  $('#aula').html('').select2({data: {id:null, text: null}});
  getModulo();
  getPiso();
  getAula();
};
/*
* Se obtienen los datos de los campos del formulario
* Se Registra reporte de Mantenimiento
* @param token String
* @param idUsuario Integer
* @param recibe String
* @param correo String
* @param telefono Integer
* @param area String
* @param modulo String
* @param piso String
* @param aula String
* @param anotacionExtra String
* @param option Integer
* @Param descripcionProblema String
* @return JSON del response del REST Web Service
*/
let nuevoReporte = () => {
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
  if (option == 'otro') {
     option = document.getElementById('otro').value;
  }
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(correo)) {
    swal("Reporte de Mantenimiento", "Correo electrónico no valido", "error");
    return;
  }
  let datos = {
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
  };
  $.ajax({
    type: 'POST',
    url: `${URI}/reporte/nuevo`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      swal("Reporte de Mantenimiento", "Se ha registrado correctamente con el folio: "+data.folio, "success");
      cleanReport();
      //notification();
      //enviarsms();
    },
    error: function(data) {
      swal("Reporte de Mantenimiento", "Ha ocurrido un error al hacer el registro: "+data.responseJSON.mensaje, "error");
    }
  });
};

let enviarsms = () => {
  $.ajax({
    type: "GET",
    url: `${URI}/sms/enviarsms`,
    dataType: "json",
    success: function(){

    },
    error: function() {
    }
});
};

let notification = () => {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    let notification = new Notification("Se ha enviado un SMS");
  }
};

// At last, if the user has denied notifications, and you 
// want to be respectful there is no need to bother them any more.
Notification.requestPermission().then(function (result) {
}); function spawnNotification(theBody, theIcon, theTitle) {
  var options = {
    body: theBody,
    icon: theIcon
  };
  var n = new Notification(theTitle, options);
}
/*
* Se obtiene el listado de Modulos
* @return JSON del response del REST Web Service
*/
let getModulo = () => {
  $('#modulo').select2({
    width: 'resolve',
    placeholder: 'Selecciona un Módulo.',
    allowClear: true
  });
  var moduleSelect = $('#modulo');

  $.ajax({
    type: 'GET',
    url: `${URI}/modulo/modulos`
  }).then(function (data) {
    $.each(data,function(_key, registro) {
    let option = new Option(registro.module_name, registro.id, true, true);
    moduleSelect.append(option).trigger('change');
    });
    moduleSelect.trigger({
        type: 'select2:select',
        params: {
            data: data
        }
    });
});
};
/*
* Se obtiene el listado de Pisos por el modulo Seleccionado
* @return JSON del response del REST Web Service
*/
let getPiso = () => {
  let id_module = document.getElementById('modulo').value;
  let $select = $('#piso');
  $select.select2({
    width: 'resolve',
    placeholder: 'Selecciona un Piso.',
    allowClear: true
  });
    $.ajax({
      dataType: "json",
      type: 'GET',
      url: `${URI}/piso/pisos/`+id_module,
    }).then(function (data) {
      $.each(data,function(_key, registro) {
      let option = new Option(registro.floor_id, registro.floor_id, true, true);
      $select.append(option).trigger('change');
      });
      $select.trigger({
          type: 'select2:select',
          params: {
              data: data
          }
      });
      //Prevent Duplicate entries
      $('select option').each(function() {
        $(this).prevAll('option[value="' + this.value + '"]').remove();
      });
  });
};
/*
* Se obtiene el listado de Aulas por el modulo y piso seleccionado
* @return JSON del response del REST Web Service
*/
let getAula = () => {
  let idModulo = document.getElementById('modulo').value;
  let idPiso = document.getElementById('piso').value;
  //let $select = $('#aula');
  $('#aula').select2({
    width: 'resolve',
    placeholder: 'Selecciona un Aula.',
    allowClear: true
  });
  var aulaSelect = $('#aula');
  $.ajax({
    type: 'GET',
    url: `${URI}/aula/aulas/`+idModulo+'/'+idPiso
  }).then(function (data) {
    $.each(data,function(_key, registro) {
    let option = new Option(registro.aula_name, registro.aula_name, true, true);
    aulaSelect.append(option).trigger('change');
    });
    aulaSelect.trigger({
        type: 'select2:select',
        params: {
            data: data
        }
    });
});
};
/*
*Seteo el campo recibe y lo deshabilito
*/
$('#recibe').val(localStorage.getItem("nombreCompleto"));
document.getElementById("recibe").disabled = true;