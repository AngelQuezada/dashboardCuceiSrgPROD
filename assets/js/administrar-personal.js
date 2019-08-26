var URI = localStorage.getItem('uri');
/*
* Variables de configuracion de Firebase
*/
const config = {
    apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
    authDomain: "cucei-srg.firebaseapp.com",
    databaseURL: "https://cucei-srg.firebaseio.com",
    projectId: "cucei-srg",
    storageBucket: "cucei-srg.appspot.com",
    messagingSenderId: "56958534713"
  };
firebase.initializeApp(config);
let altaPersonal = () =>{
const config2 = {
    apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
    authDomain: "cucei-srg.firebaseapp.com",
    databaseURL: "https://cucei-srg.firebaseio.com",
    projectId: "cucei-srg",
    storageBucket: "cucei-srg.appspot.com",
    messagingSenderId: "56958534713"
  };
  let secondaryAcc = firebase.initializeApp(config2,"Secondary");
  let email = document.getElementById('txtCorreo').value;
  let password = document.getElementById('txtPassword').value;
  let nombre = document.getElementById('txtNombreAlta').value;
  let aPaterno = document.getElementById('txtApellidoPaterno').value;
  let aMaterno = document.getElementById('txtApellidoMaterno').value;

  let option = document.querySelector('input[name="rolAlta"]:checked').value;

  let datos = {
    "nombre" : nombre,
    "aPaterno" : aPaterno,
    "aMaterno" : aMaterno,
    "correo" : email,
    "rol" : option
  };
  secondaryAcc.auth().createUserWithEmailAndPassword(email,password).then(function(){
    let user = secondaryAcc.auth().currentUser;
      user.sendEmailVerification().then(function(){
        $.ajax({
          type: 'POST',
          url: `${URI}/personal/nuevopersonal`,
          data: JSON.stringify(datos),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(){
            $('#txtCorreo').val('');
            $('#txtPassword').val('');
            $('#txtNombreAlta').val('');
            $('#txtApellidoPaterno').val('');
            $('#txtApellidoMaterno').val('');
            $('input:radio[name=rolAlta]').each(function () { $(this).prop('checked', false); });
            swal("ADMIN CUCEI-SRG", "La cuenta se ha dado de alta correctamente, se ha enviado un correo de confirmación", "success");
          },
          error: function() {
            swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
          }
        });
        }).catch(function(){
          swal("ADMIN CUCEI-SRG", "La cuenta se ha dado de alta correctamente, pero no se envió el correo de confirmación", "info");
      });
      secondaryAcc.auth().signOut();
      secondaryAcc.delete();
      return;
  }).catch(function(error){
    secondaryAcc.delete();
    let errorCode = error.code;
    let errorMessage = error.message;
    $('#txtCorreo').val('');
    $('#txtPassword').val('');
    $('#txtNombreAlta').val('');
    $('#txtApellidoPaterno').val('');
    $('#txtApellidoMaterno').val('');
    $('input:radio[name=rolAlta]').each(function () { $(this).prop('checked', false); });
    $.ajax({
      type: 'POST',
      url: `${URI}/personal/nuevopersonal`,
      data: JSON.stringify(datos),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function(){
        $('#txtCorreo').val('');
        $('#txtPassword').val('');
        $('#txtNombreAlta').val('');
        $('#txtApellidoPaterno').val('');
        $('#txtApellidoMaterno').val('');
        $('input:radio[name=rolAlta]').each(function () { $(this).prop('checked', false); });
        swal("ADMIN CUCEI-SRG", "La cuenta se ha dado de alta correctamente, se ha enviado un correo de confirmación", "success");
      },
      error: function() {
        $('#txtCorreo').val('');
        $('#txtPassword').val('');
        $('#txtNombreAlta').val('');
        $('#txtApellidoPaterno').val('');
        $('#txtApellidoMaterno').val('');
        $('input:radio[name=rolAlta]').each(function () { $(this).prop('checked', false); });
        swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
      }
    });
    if (errorCode == 'auth/invalid-email' && errorMessage == 'The email address is badly formatted.') {
      swal("¡Oops!", "El correo electronico es invalido", "error");
      return;
    }
    if (errorCode == 'The email address is badly formatted.' && errorMessage == 'auth/invalid-email') {
      swal("¡Oops!", "El correo electronico es inválido", "error");
      return;
    }
    if (errorCode == 'auth/weak-password' && errorMessage == 'Password should be at least 6 characters') {
      swal("¡Oops!", "La Contraseña debe tener al menos 6 caracteres", "error");
      return;
    }
    if (errorCode == 'auth/email-already-in-use' && errorMessage == 'The email address is already in use by another account.') {
      swal("¡Oops!", "El correo electronico ya esta registrado en el sistema", "error");
      $.ajax({
        type: 'POST',
        url: `${URI}/personal/nuevopersonal`,
        data: JSON.stringify(datos),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(){
          $('#txtCorreo').val('');
          $('#txtPassword').val('');
          $('#txtNombreAlta').val('');
          $('#txtApellidoPaterno').val('');
          $('#txtApellidoMaterno').val('');
          $('input:radio[name=rolAlta]').each(function () { $(this).prop('checked', false); });
          swal("ADMIN CUCEI-SRG", "Se ha dado de alta en el sistema.", "success");
        },
        error: function() {
          $('#txtCorreo').val('');
          $('#txtPassword').val('');
          $('#txtNombreAlta').val('');
          $('#txtApellidoPaterno').val('');
          $('#txtApellidoMaterno').val('');
          $('input:radio[name=rolAlta]').each(function () { $(this).prop('checked', false); });
          swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
        }
      });
    }
  });
};
let bajaPersonal = () =>{
  let correo = document.getElementById('txtCorreoBaja').value;
  let motivo = document.getElementById('txtMotivo').value;
  let token = localStorage.getItem("token");
  let idUsuario = localStorage.getItem("idUsuario");
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(correo)) {
    swal("Reporte de Mantenimiento", "Correo electrónico no valido", "error");
    return;
  }
  let datos = {
    "correo" : correo,
    "motivo" : motivo,
    "token" : token,
    "idUsuario" : idUsuario
  }
  swal(`¿Está seguro de dar de baja el correo: ${correo}?`, {
    icon: 'info',
    title: 'ADMIN CUCEI-SRG',
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
    catch: {
      text: "DAR DE BAJA",
      value: "baja"
      },
      cancelar: true,
    },
  }).then((value) => {
    switch (value) {
      case "baja":
        $.ajax({
          type: 'POST',
          url: `${URI}/personal/revokepersonal`,
          data: JSON.stringify(datos),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(data){
            swal("ADMIN CUCEI-SRG", data.mensaje, "info");
            $("#txtCorreoBaja").val('');
            $("#txtMotivo").val('');
          },
          error: function(data) {
            swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
            $("#txtCorreoBaja").val('');
            $("#txtMotivo").val('');
            return;
          }
        });
      break;
      case "cancelar" :
      swal("ADMIN CUCEI-SRG", "No se realizó ninguna acción.","info");
      break;
    }
  });
};
let habilitarPersonal = () => {
  let correo = document.getElementById('txtCorreoHabilitar').value;
  let token = localStorage.getItem("token");
	let idUsuario = localStorage.getItem("idUsuario");
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(correo)) {
    swal("Reporte de Mantenimiento", "Correo electrónico no valido", "error");
    return;
  }
  let datos = {
    "correo" : correo,
    "token" : token,
    "idUsuario" : idUsuario
  }
  swal(`¿Está seguro de habilitar el correo: ${correo}?`, {
    icon: 'info',
    title: 'ADMIN CUCEI-SRG',
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
    catch: {
      text: "DAR DE ALTA",
      value: "alta"
      },
      cancelar: true,
    },
  }).then((value) => {
    switch (value) {
      case "alta":
        $.ajax({
          type: 'POST',
          url: `${URI}/personal/unrevokepersonal`,
          data: JSON.stringify(datos),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(data){
            swal("ADMIN CUCEI-SRG", data.mensaje, "info");
            $("#txtCorreoHabilitar").val('');
          },
          error: function(data) {
            swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
            $("#txtCorreoHabilitar").val('');
            return;
          }
        });
      break;
      case "cancelar" :
      swal("ADMIN CUCEI-SRG", "No se realizó ninguna acción.","info");
      break;
    }
  });
};
let datosPersonales = () =>{
  let email = localStorage.getItem("email");
  let nombreCompleto = localStorage.getItem("nombreCompleto");
  let status = localStorage.getItem("status");
  let telefono = localStorage.getItem("telefono");
  let st;
  let tel;
  telefono === 'null' ? tel = 'No hay número registrado' : tel = telefono;
  if(status === '3'){
    st = 'ADMIN MANTENIMIENTO';
  }else if(status === '4'){
    st = 'PERSONAL CSG';
  }else if(status === '5'){
    st = 'SERVICIO SOCIAL';
  }else if(status === '6'){
    st = 'ADMIN SEGURIDAD';
  }else if(status === '1'){
    st = 'USUARIO SIN ROL';
  }
  $("#modalPersonal").empty();
  $("#modalPersonal").append(`<div id="modalConsultarUsuarioActual" class="modal fade" role="dialog">
          <div class="modal-dialog">
              <div class="modal-content">
              <div class="modal-header" style="background-color: #e65100;">
                  <button type="button" class="close" data-dismiss="modal" style="color: black;">&times;</button>
              </div>
              <div class="modal-body" style="background-color: #cfd8dc;">
                  <div class="register-box" style="margin-top: 0px;">
                      <div class="register-logo" style="margin: 0px;">
                          <b>Admin</b>CUCEI-SRG
                      </div>
                  <div class="register-box-body" style="background-color: #eeeeee; margin: 0px; border-radius: 20px">
                      <div class="login-logo" style="margin: 0px;">
                          Mis Datos
                      </div>
                      <hr style="background-color: black; margin: 0px">
                          <div class="form-group">
                              <div class="row">
                                  <div class="col-sm-12">
                                      <label for="txtRol" style="color: blue;">Rol en el Sistema</label><br/>
                                      <b id="txtRol" style="background-color: purple; color: white;">${st}</b>
                                  </div>
                                  <div class="col-sm-12">
                                      <label for="txtCorreoAdmin" style="color: blue;">Correo Electrónico</label><br/>
                                      <b id="txtCorreoAdmin">`+email+`</b>
                                  </div>
                                  <div class="col-sm-12">
                                      <label for="txtNombreCompleto" style="color: blue;">Nombre Completo</label><br/>
                                      <b id="txtNombreAdmin">`+nombreCompleto+`</b>
                                  </div>
                                  <div class="col-sm-12">
                                      <label for="txtCelular" style="color: blue;">Número Celular</label><br/>
                                      <b id="txtCelular">`+tel+`</b>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-sm-12">
                                  <button type="button" class="btn btn-primary btn-block btn-flat" onclick="cambiarContraseña();" style="background-color: #ff6f00; color: black; border-radius: 20px">Cambiar Contraseña</button>
                                  <button type="button" class="btn btn-primary btn-block btn-flat" onclick="cambiarCelular();" style="background-color: #00b248; color: black; border-radius: 20px">Cambiar/Agregar Celular</button>
                              </div>
                          </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
};
let cambiarContraseña = () => {
  swal("Escribe tu nueva Contraseña [6 CARACTERES MINIMO]:", {
    content: "input",
    buttons: ["Cancelar", true]
  })
  .then((passwordNuevo) => {
    if(passwordNuevo.replace(/\s/g,"") == ""){
      swal("ADMIN CUCEI-SRG","No se realizó ningun cambio", "info");
      return;
    }
  swal(`Has escrito: ${passwordNuevo}`+' ¿Es Correcto?',{
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
      catch: {
        text: "SI",
        value: "OK",
        },
        no: true,
      },
    }).then((value) => {
    switch (value) {
      case "OK":
        let user1 = firebase.auth().currentUser;
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            user.updatePassword(passwordNuevo).then(function() {
              swal("ADMIN CUCEI-SRG","Se ha Cambiado la contraseña correctamente.", "success");
              }).catch(function(error) {
                  let errorCode = error.code;
                  let errorMessage = error.message;
                  if (errorCode == 'auth/requires-recent-login' && errorMessage == 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.') {
                    swal("¡Oops!", "Compruebe su Conexión a Internet.", "error");
                    return;
                  }
                  if (errorCode == 'auth/requires-recent-login' && errorMessage == 'This operation is sensitive and requires recent authentication. Log in again before retrying this request.') {
                    swal("¡Oops!", "Para cambiar su contraseña, por seguridad debe iniciar sesión de nuevo para comprobar que es usted.", "error");
                    return;
                  }
                  if (errorCode == 'auth/weak-password' && errorMessage == 'Password should be at least 6 characters') {
                    swal("La contraseña debe tener mínimo 6 caractéres", "error");
                    return;
                  }
            });
          } else {
            window.location.replace('logout.php');
          }
        });
      break;
      case "no":
        swal("ADMIN CUCEI-SRG","No se realizó ningun cambio", "info");
      break;
    }
  });
});
};
let asignarRolPersonal = () => {
  let correoPersonal = document.getElementById('txtCorreoPersonal').value;
  let option = document.querySelector('input[name="rol"]:checked').value;
  let token = localStorage.getItem("token");
  let idUsuario = localStorage.getItem("idUsuario");
  let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(correoPersonal)) {
    swal("Reporte de Mantenimiento", "Correo electrónico no valido", "error");
    return;
  }
  let datos = {
    "correo" : correoPersonal,
    "rol" : option,
    "token" : token,
    "idUsuario" : idUsuario
  };
  $.ajax({
    type: 'POST',
    url: `${URI}/personal/asignarrol`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      swal("ADMIN CUCEI-SRG", data.mensaje, "success");
      $('#txtCorreoPersonal').val('');
      $('input:radio[name=rol]').each(function () { $(this).prop('checked', false); });
    },
    error: function (data) {
      $('#txtCorreoPersonal').val('');
      $('input:radio[name=rol]').each(function () { $(this).prop('checked', false); });
      swal("ADMIN CUCEI-SRG", "Ha ocurrido un error: " + data.responseJSON.mensaje, "error");
    }
  });
};
let cambiarCelular = () => {
  var tel;
  var telefono;
  var codNacional = "+52";
  swal("Escribe tu número celular a 10 dígitos:", {
    content: "input",
    buttons: ["Cancelar", true]
  })
  .then((celular) => {
    tel = celular;
    if(celular.replace(/\s/g,"") == ""){
      swal("ADMIN CUCEI-SRG","No se realizó ningun cambio", "info");
      return;
    }
  swal(`Has escrito: ${celular}`+' ¿Es Correcto?',{
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
      catch: {
        text: "SI",
        value: "OK",
        },
        no: true,
      },
    }).then((value) => {
    switch (value) {
      case "OK":
          let token = localStorage.getItem("token");
          let idUsuario = localStorage.getItem("idUsuario");
          telefono = codNacional.concat(tel);
          let datos = {
            "telefono" : telefono,
            "token" : token,
            "idUsuario" : idUsuario
          }
        $.ajax({
          type: 'POST',
          url: `${URI}/sms/registrarnumero`,
          data: JSON.stringify(datos),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          success: function(data){
            swal("ADMIN CUCEI-SRG", data.mensaje, "success");
            localStorage.removeItem("telefono");
            localStorage.setItem("telefono",telefono);
            $('#txtCelular').empty();
            $('#txtCelular').append(telefono);
          },
          error: function(data) {
            swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
            return;
          }
        });
      break;
      case "no":
        swal("ADMIN CUCEI-SRG","No se realizó ningun cambio", "info");
      break;
    }
  });
});
};
