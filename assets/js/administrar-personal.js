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