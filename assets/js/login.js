var URL = localStorage.getItem('url');
$(document).ajaxStart(function () {
  Pace.restart();
})
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
* Inicia Sesión con el Correo/Contraseña de Firebase
* @return Promise
*/
let login = () => {
  let correo = document.getElementById('txtCorreoLogin').value;
  let password = document.getElementById('txtPassword').value;
  firebase.auth().signInWithEmailAndPassword(correo, password).then(function(){
    window.location.replace(`${URL}/index.php`);
  }).catch(function(error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    if (errorCode == 'auth/network-request-failed' && errorMessage == 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.') {
      swal("¡Oops!", "Compruebe su Conexión a Internet.", "error");
      return;
    }
    if (errorCode == 'auth/wrong-password' && errorMessage == 'The password is invalid or the user does not have a password.') {
      swal("¡Oops!", "El Correo Electrónico o Contraseña es Inválido.", "error");
      return;
    }
    if (errorCode == 'auth/user-not-found' && errorMessage == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
      swal("¡Oops!", "La Cuenta No Existe.", "error");
      return;
    }
    if (errorCode == 'auth/invalid-email' && errorMessage == 'The email address is badly formatted.') {
      swal("¡Oops!", "El Correo Electrónico es Inválido.", "error");
      return;
    }
  });
}
/*
* Funcion rdireccionar index si el usuario esta logeado
*/
let userLogIn = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         window.location.replace(`${URL}/index.php`);
      }
  });
}
/*
* Se llama la funcion cuando la pagina carga
*/
$(function() {
  userLogIn();
    $('#txtPassword').keypress(function(e) {
        if(e.which == 13) {
          login();
        }
    });
    $('#txtCorreoLogin').keypress(function(e) {
        if(e.which == 13) {
          login();
      }
  });
  grecaptcha.ready(function() {
    grecaptcha.execute('6LdAtqIUAAAAALECNDrG_W6bcYamuQGArbqqmYxN', {action: 'homepage'}).then(function(token) {
      
    });
});
});
/*
* Redirige a la pagina a restablecer contraseña
*/
let resetPwPage = () => {
    window.location.replace(`${URL}/reset-password.php`);
}
