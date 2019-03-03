<?php
  include('footer.php');
?>
<script type="module">
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
  window.location.replace(`${_URL_}/index.php`);
}
/*
* Se activa esta funcion si el correo del usuario no esta validado
*/
let validatedEmail = () => {
  swal("Necesitamos que verifiques tu cuenta primero, comprueba tu correo electronico, da click sobre el boton Verificar para intentarlo nuevamente, si no recibiste el correo de verificacion da click sobre el boton reenviar", {
    closeOnClickOutside: false,
    closeOnEsc: false,
    buttons: {
    catch: {
      text: "Verificar",
      value: "verify",
      },
      Cerrar_Sesion: true,
      reenviar: true,
    },
  }).then((value) => {
    switch (value) {
      case "verify":
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
}
/*
* Funcion base donde se realizan las validaciones pertinentes del usuario logeado
*/
let userLogIn = () => {
  let existToken = localStorage.getItem("token");
  if (existToken !== null) {
    window.location.replace(`${_URI_}/dashboard-mantenimiento.php`);
  }
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
              let nombreCompleto = nombre+' '+aPaterno+' '+aMaterno;
              localStorage.setItem("nombreCompleto", nombreCompleto);
              localStorage.setItem("idUsuario", idUsuario);
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
                window.location.replace(`${_URL_}/dashboard-mantenimiento.php`);
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
