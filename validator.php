<link rel="stylesheet" type="text/css" href="assets/css/index.css">
<body style="background: linear-gradient(to right, #2B32B2, #1488CC);">
<div style="text-align: center">
  <img src="assets/img/logo.png" style="width: 20%">
</div>
</body>
<?php
  include('footer.php');
?>

<script type="module">
$(document).ajaxStart(function () {
  Pace.restart();
})
import {baseURI,baseURL} from './assets/js/baseURL.js';
var _URI_ = baseURI();
var _URL_ = baseURL();
var URI = localStorage.getItem("uri");
var URL = localStorage.getItem("url");
if (URI === null && URL === null) {
  localStorage.setItem("uri", _URI_);
  localStorage.setItem("url", _URL_);
}
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
/*
* Reenviar correo de confirmacion al usuario actualmente logeado
*/
let reenviar = () => {
  let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function(){
      swal("Correo de verificacion enviado, revisa tu correo para confirmarlo, en caso de no llegar da click sobre el boton reenviar", {
        icon: 'success',
        title: 'ADMIN CUCEI-SRG',
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: {
      catch: {
        text: "OK",
        value: "OK",
        },
        Cerrar_Sesion: true,
        reenviar: true,
      },
    }).then((value) => {
    switch (value) {
      case "OK":
      redirect();
      break;
      case "Cerrar_Sesion":
      cerrarSesion();
      break;
      case "reenviar":
      reenviar();
      break;
    }
   });
    }).catch(function(){
  });
}
/*
* Cerrar sesion del usuario actualmente logeado
* @return promise
*/
let cerrarSesion = () => {
  firebase.auth().signOut().then(function() {
    redirect();
    }).catch(function() {
  });
}
/*
* Redirecciona al index
*/
let redirect = () => {
  window.location.replace(`${_URL_}/validator.php`);
}
/*
* Se activa esta funcion si el correo del usuario no esta validado
*/
let validatedEmail = () => {
  swal("Necesitamos que verifiques tu cuenta primero, comprueba tu correo electronico, da click sobre el boton Verificar para intentarlo nuevamente, si no recibiste el correo de verificacion da click sobre el boton reenviar", {
    icon: 'info',
    title: 'ADMIN CUCEI-SRG',
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
    catch: {
      text: "Verificar",
      value: "verify",
      },
      Salir: true,
      reenviar: true,
    },
  }).then((value) => {
    switch (value) {
      case "verify":
        redirect();
      break;
      case "Salir":
        cerrarSesion();
      break;
      case "reenviar":
        reenviar();
      break;
    }
  });
}
/*
* Funcion base donde se realizan las validaciones pertinentes del usuario logeado
*/
let userLogIn = () => {
  // let existToken = localStorage.getItem("token");
  // let status = localStorage.getItem("status");
  // if(existToken !== null && status === '3') {
  //   window.location.replace(`${_URL_}/dashboard-mantenimiento.php`);
  // }else if(existToken !== null && status === '6'){
  //   window.location.replace(`${_URL_}/dashboard-seguridad.php`);
  // }
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      let email = user.email;
      localStorage.setItem("email", user.email);
      let emailVerificado = user.emailVerified;
      if (emailVerificado === false) {
        validatedEmail(emailVerificado);
      } else {
          //let email = user.email;
          $.ajax({
            type: "GET",
            url: `${_URI_}/personal/empleado/`+email,
            dataType: "json",
            async: false,
            success: function(data){
              let idUsuario = data.id;
              let nombre = data.nombre;
              let aPaterno = data.a_paterno;
              let aMaterno = data.a_materno;
              let status = data.status;
              let telefono = data.telefono;
              let nombreCompleto = nombre+' '+aPaterno+' '+aMaterno;
              localStorage.setItem("nombreCompleto", nombreCompleto);
              localStorage.setItem("idUsuario", idUsuario);
              localStorage.setItem("status", status);
              localStorage.setItem("telefono", telefono);
              //localStorage.setItem("email", user.email);
            },
            error: function(data) {
              swal(data.mensaje, {
                closeOnClickOutside: false,
                closeOnEsc: false,
                buttons: {
                catch: {
                  text: "Verificar",
                  value: "verify",
                  }
                },
              }).then((value) => {
                switch (value) {
                  case "verify":
                    cerrarSesion();
                  break;
                }
              });
            }
          });
          let datos = {
            "correo": user.email
          }
          $.ajax({
          type: 'POST',
          url: `${_URI_}/personal/login`,
          data: JSON.stringify(datos),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          async: false,
          success: function(data){
            $.each(data,function(key, registro) {
              let codigo = data.code;
              if (codigo == 1) {
                window.location.replace(`${_URL_}/registro-datos.php`);
              }else{
                let token = data.token;
                localStorage.setItem("token",token);
                let status = localStorage.getItem("status");
                // TODO Usuario Inactivo
                // if(status === '1'){
                //   swal("Usuario Inactivo.El Administrador del Sistema le debe Asignar un Rol en el Sistema. SU CORREO ES: " +localStorage.getItem("email")+" Cuando haya sido asignado de click sobre el boton Reintentar", {
                //     closeOnClickOutside: false,
                //     closeOnEsc: false,
                //     buttons: {
                //     catch: {
                //       text: "Reintentar",
                //       value: "Reintentar",
                //     },
                //     Cerrar_Sesion: true,
                //    },
                //   }).then((value) => {
                //     switch (value) {
                //       case "Reintentar":
                //       redirect();
                //       break;
                //       case "Cerrar_Sesion":
                //       cerrarSesion();
                //       break;
                //     }
                //   });
                // }
                if(status === '3' || status === '4' || status === '5'){
                window.location.replace(`${_URL_}/dashboard-mantenimiento.php`);
                }else if(status === '6'){
                  window.location.replace(`${_URL_}/dashboard-seguridad.php`);
                }else if (status === '1'){
                  window.location.replace(`${_URL_}/administrar-personal.php`);
                }
              }
            });
          },
          error: function(data) {
            swal(data.responseJSON.mensaje, {
              closeOnClickOutside: false,
              closeOnEsc: false,
                buttons: {
                catch: {
                  text: "Regresar",
                  value: "salir",
                  }
                },
              }).then((value) => {
                switch (value) {
                  case "salir":
                    cerrarSesion();
                  break;
                }
              });
          }
        });
      }
  } else {
      window.location.replace(`${_URL_}/login.php`);
    }
  });
}
/*
* Funcion que se ejecuta al cargar esta pagina
*/
window.onload = () =>{
  userLogIn();
}
</script>
