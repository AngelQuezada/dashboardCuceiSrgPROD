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
  secondaryAcc.auth().createUserWithEmailAndPassword(email,password).then(function(){
      swal("ADMIN CUCEI-SRG", "La Cuenta se ha dado de Alta Correctamente", "success");
      $('#txtCorreo').val('');
      $('#txtPassword').val('');
      secondaryAcc.auth().signOut();
      secondaryAcc.delete();
      return;
  }).catch(function(error){
    secondaryAcc.delete();
    let errorCode = error.code;
    let errorMessage = error.message;
    $('#txtCorreo').val('');
    $('#txtPassword').val('');
    if (errorCode == 'auth/invalid-email' && errorMessage == 'The email address is badly formatted.') {
      swal("¡Oops!", "El correo electronico es invalido", "error");
      return;
    }
    if (errorCode == 'The email address is badly formatted.' && errorMessage == 'auth/invalid-email') {
      swal("¡Oops!", "El correo electronico es invalido", "error");
      return;
    }
    if (errorCode == 'auth/weak-password' && errorMessage == 'Password should be at least 6 characters') {
      swal("¡Oops!", "La Contraseña debe tener al menos 6 caracteres", "error");
      return;
    }
    if (errorCode == 'auth/email-already-in-use' && errorMessage == 'The email address is already in use by another account.') {
      swal("¡Oops!", "El correo electronico ya esta registrado en el sistema", "error");
      return;
    }
  });
}
let bajaPersonal = () =>{
  let correo = document.getElementById('txtCorreoBaja').value;
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
          },
          error: function(data) {
            swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
            $("#txtCorreoBaja").val('');
            return;
          }
        });
      break;
      case "cancelar" :
      swal("ADMIN CUCEI-SRG", "No se realizó ninguna acción.","info");
      break;
    }
  });
}
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
}
let datosPersonales = () =>{
  let email = localStorage.getItem("email");
  let nombreCompleto = localStorage.getItem("nombreCompleto");
  let status = localStorage.getItem("status");
  let telefono = localStorage.getItem("telefono");
  let st;
  if(status === '3'){
    st = 'ADMIN MANTENIMIENTO';
  }else if(status === '4'){
    st = 'PERSONAL CSG';
  }else if(status === '5'){
    st = 'SERVICIO SOCIAL';
  }else if(status === '6'){
    st = 'ADMIN SEGURIDAD';
  }
  $("#modalPersonal").empty();
  $("#modalPersonal").append(`<div id="modalConsultarUsuarioActual" class="modal fade" role="dialog">
          <div class="modal-dialog">
              <div class="modal-content">
              <div class="modal-header" style="background-color: #e65100;">
                  <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body" style="background-color: #cfd8dc;">
                  <div class="register-box">
                      <div class="register-logo">
                          <b>Admin</b>CUCEI-SRG
                      </div>
                  <div class="register-box-body" style="background-color: #eceff1;">
                      <div class="login-logo">
                          Mis Datos Personales
                      </div>
                      <hr style="background-color: gray">
                          <div class="form-group">
                              <div class="row">
                                  <div class="col-sm-12">
                                      <label for="txtRol" style="color: blue;">Privilegios</label><br/>
                                      <b id="txtRol" style="background-color: purple; color: white;">${st}</b>
                                  </div>
                                  <div class="col-sm-12">
                                      <label for="txtCorreoAdmin" style="color: blue;">Correo Electrónico</label><br/>
                                      <b id="txtCorreoAdmin">`+email+`</b>
                                  </div>
                                  <div class="col-sm-12">
                                      <label for="txtNombreCompleto" style="color: blue;">Nombre</label><br/>
                                      <b id="txtNombreAdmin">`+nombreCompleto+`</b>
                                  </div>
                                  <div class="col-sm-12">
                                      <label for="txtCelular" style="color: blue;">Número Celular</label><br/>
                                      <b id="txtCelular">`+telefono+`</b>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-sm-12">
                                  <button type="button" class="btn btn-primary btn-block btn-flat" onclick="cambiarContraseña();" style="background-color: #ff6f00; color: black;">Cambiar Contraseña</button>
                                  <button type="button" class="btn btn-primary btn-block btn-flat" onclick="cambiarCelular();" style="background-color: #00b248; color: black;">Cambiar/Agregar Celular</button>
                              </div>
                          </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>`);
}
let cambiarContraseña = () => {
  swal("Escribe tu nueva Contraseña [6 CARACTERES MINIMO]:", {
    content: "input",
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
        let user = firebase.auth().currentUser;
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            user.updatePassword(passwordNuevo).then(function() {
              swal("ADMIN CUCEI-SRG","Se ha Cambiado la contraseña correctamente.", "success");
              }).catch(function(error) {
              swal("ADMIN CUCEI-SRG",`Ha ocurrido un error: ${error.code}`, "error");
            });
          } else {
          }
        });
      break;
      case "no":
        swal("ADMIN CUCEI-SRG","No se realizó ningun cambio", "info");
      break;
    }
  });
});
}
let asignarRolPersonal = () => {
  let correoPersonal = document.getElementById('txtCorreoPersonal').value;
  let option = document.querySelector('input[name="rol"]:checked').value;
  let token = localStorage.getItem("token");
  let idUsuario = localStorage.getItem("idUsuario");
  let datos = {
    "correo" : correoPersonal,
    "rol" : option,
    "token" : token,
    "idUsuario" : idUsuario
  }
  $.ajax({
    type: 'POST',
    url: `${URI}/personal/asignarrol`,
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (data) {
      swal("ADMIN CUCEI-SRG", data.mensaje, "success");
    },
    error: function (data) {
      swal("ADMIN CUCEI-SRG", "Ha ocurrido un error: " + data.responseJSON.mensaje, "error");
    }
  });
}
let cambiarCelular = () => {
  var tel;
  var telefono;
  var codNacional = "+52";
  swal("Escribe tu número celular a 10 dígitos:", {
    content: "input",
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
          console.log(JSON.stringify(datos));
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
}
$(function(){
  let status = localStorage.getItem("status");
  if(status === '4' || status === '5'){
    $("#divAltaPersonal").hide();
    $("#divBajaPersonal").hide();
    $("#divHabilitarPersonal").hide();
    $("#divAsignarRol").hide();
  }
})