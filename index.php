<?php
  include('footer.php');
?>
<script type="text/javascript">
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
    authDomain: "cucei-srg.firebaseapp.com",
    databaseURL: "https://cucei-srg.firebaseio.com",
    projectId: "cucei-srg",
    storageBucket: "cucei-srg.appspot.com",
    messagingSenderId: "56958534713"
  };
  firebase.initializeApp(config);
const reenviar = function(){
  var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function(){
      swal("Correo de verificacion enviado, revisa tu correo para confirmarlo, en caso de no llegar da click sobre el boton reenviar", {
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
    }).catch(function(error){
      });
}
const cerrarSesion = function(){
  firebase.auth().signOut().then(function() {
    redirect();
    }).catch(function(error) {
    });
}
const redirect = function(){
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
}
const validatedEmail = function(){
      swal("Necesitamos que verifiques tu cuenta primero, comprueba tu correo electronico, da click sobre el boton Verificar para intentarlo nuevamente, si no recibiste el correo de verificacion da click sobre el boton reenviar", {
        buttons: {
        catch: {
          text: "Verificar",
          value: "verify",
          },
          Cerrar_Sesion: true,
          reenviar: true,
        },
      })
      .then((value) => {
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
const userLogIn = function(){
  let existToken = localStorage.getItem("token");
  if (existToken !== null) {
    window.location.replace("http://localhost/DashboardCuceiSrg/dashboard-mantenimiento.php");
    return;
  }
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      let emailVerificado = user.emailVerified;
      if (emailVerificado === false) {
        validatedEmail(emailVerificado);
        return;
      }
            let email = localStorage.getItem("email");
            $.ajax({
              type: "GET",
              url: 'http://localhost/API-CUCEI-SRG/index.php/personal/empleado/'+email,
              dataType: "json",
              async: true,
              success: function(data){
                  let idUsuario = data.id;
                  let nombre = data.nombre;
                  let aPaterno = data.a_paterno;
                  let aMaterno = data.a_materno;
                  let nombreCompleto = nombre+' '+aPaterno+' '+aMaterno;
                localStorage.setItem("nombreCompleto", nombreCompleto);
                localStorage.setItem("idUsuario", idUsuario);
              },
              error: function(data) {
              }
            });
            localStorage.setItem("email", user.email);
    var datos = {
      "correo": user.email
    }
    $.ajax({
    type: 'POST',
    url: 'http://localhost/API-CUCEI-SRG/index.php/personal/login',
    data: JSON.stringify(datos),
    async: true,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      $.each(data,function(key, registro) {
        let codigo = data.code;
        if (codigo == 1) {
           window.location.replace("http://localhost/DashboardCuceiSrg/registro-datos.php");
        }else{
          let token = data.token;
          localStorage.setItem("token",token);
          window.location.replace("http://localhost/DashboardCuceiSrg/dashboard-mantenimiento.php");
        }
      });
    },
    error: function(data) {
    }
  });
  } else {
    window.location.replace("http://localhost/DashboardCuceiSrg/login.php");
  }
});
}
window.onload = function(){
  userLogIn();
}
</script>