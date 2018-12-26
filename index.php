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

const userLogIn = function(){
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    localStorage.setItem("email", user.email);
    var datos = {
      "correo": user.email
    }
    $.ajax({
    type: 'POST',
    url: 'http://localhost/API-CUCEI-SRG/index.php/personal/login',
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      $.each(data,function(key, registro) {
        let codigo = data.code;
        console.log(codigo);
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