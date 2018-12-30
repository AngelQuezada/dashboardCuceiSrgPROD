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
const registrar = function(){
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
          verificar();
      }).catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          $('#email').val('');
          $('#password').val('');

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
const verificar = function(){
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function(){
          swal("¡Registro Completado!", "Revisa tu bandeja de correo electrónico para verificar tu cuenta", "info");
          $('#email').val('');
          $('#password').val('');
      }).catch(function(error){
          alert("Ha ocurrido un error al intentar registrarse");
          $('#email').val('');
          $('#password').val('');
      });
}
const resetPassword = function(){
  let auth = firebase.auth();
  let email = document.getElementById('email').value;
  auth.sendPasswordResetEmail(email).then(function(){
  swal({
    title: "Restablecer Contraseña",
    text: "¿Estás Seguro de restablecer tu contraseña?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Revisa tu bandeja de correo electrónico", {
      icon: "success",
    });
    window.location.replace("http://localhost/DashboardCuceiSrg/login.php");
      } else {
        swal("Has cancelado");
      }
  });
  }).catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          swal("¡Oops!", "Verifica tu correo electrónico e inténtalo nuevamente", "error");
          $('#email').val('');
      });
}
const login = function(){
  var email = document.getElementById('correo').value;
  var password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  swal("¡Oops!", "Verifica tu correo/contraseña e inténtalo nuevamente", "error");
});
}
const resetPwPage = function(){
    window.location.replace("http://localhost/DashboardCuceiSrg/reset-password.php");
}
const regresar = function(){
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
    //window.history.go(-1);
}
const finalizarRegistro = function(){
  let correo = localStorage.getItem("email");
  let nombre = document.getElementById('nombre').value;
  let aPaterno = document.getElementById('aPaterno').value;
  let aMaterno = document.getElementById('aMaterno').value;
  var datos = {
    "nombre" : nombre,
    "aPaterno" : aPaterno,
    "aMaterno" : aMaterno,
    "correo" : correo
  }
  $.ajax({
    type: 'POST',
    url: 'http://localhost/API-CUCEI-SRG/index.php/personal/nuevo',
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
    swal("¡Hemos terminado!", "Se ha registrado correctamente tus datos, redirigiendo al Dashboard...", "success");
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
    },
    error: function(data) {
    swal("¡Oops!", "Hemos tenido un error: "+data.mensaje, "error");
    }
  });
}