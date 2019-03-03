var URL = localStorage.getItem('url');
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
    swal("¡Oops!", "Verifica tu correo/contraseña e inténtalo nuevamente. error code: "+errorCode, "error");
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
window.onload = () => {
  userLogIn();
}
$(function() {
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
});
/*
* Redirige a la pagina a restablecer contraseña
*/
let resetPwPage = () => {
    window.location.replace(`${URL}/reset-password.php`);
}
