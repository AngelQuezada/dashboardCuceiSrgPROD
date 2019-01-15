const config = {
  apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
  authDomain: "cucei-srg.firebaseapp.com",
  databaseURL: "https://cucei-srg.firebaseio.com",
  projectId: "cucei-srg",
  storageBucket: "cucei-srg.appspot.com",
  messagingSenderId: "56958534713"
};
firebase.initializeApp(config);
let registrar = () => {
  let correo = document.getElementById('txtCorreo').value;
  let password = document.getElementById('txtPassword').value;
  firebase.auth().createUserWithEmailAndPassword(correo,password).then(function(){
    verificar();
  }).catch(function(error){
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
let verificar = () => {
  let user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function(){
    swal("¡Registro Completado!", "Revisa tu bandeja de correo electrónico para verificar tu cuenta", "info");
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
  }).catch(function(error){
    let errorCode = error.code;
    alert("Ha ocurrido un error al intentar registrarse. error code: "+errorCode);
    $('#email').val('');
    $('#password').val('');
  });
}
let resetPassword = () => {
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
    let errorCode = error.code;
    swal("¡Oops!", "Verifica tu correo electrónico e inténtalo nuevamente. error code: "+errorCode, "error");
    $('#email').val('');
  });
}
let login = () => {
  let correo = document.getElementById('txtCorreo').value;
  let password = document.getElementById('txtPassword').value;
  firebase.auth().signInWithEmailAndPassword(correo, password).then(function(){
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
  }).catch(function(error) {
    let errorCode = error.code;
    swal("¡Oops!", "Verifica tu correo/contraseña e inténtalo nuevamente. error code: "+errorCode, "error");
  });
}
let resetPwPage = () => {
    window.location.replace("http://localhost/DashboardCuceiSrg/reset-password.php");
}
let regresar = () => {
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
    //window.history.go(-1);
}
let finalizarRegistro = () => {
  let correo = localStorage.getItem("email");
  let nombre = document.getElementById('txtNombre').value;
  let aPaterno = document.getElementById('txtApaterno').value;
  let aMaterno = document.getElementById('txtAmaterno').value;
  let datos = {
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