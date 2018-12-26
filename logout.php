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
	const logout = function(){
		firebase.auth().signOut().then(function() {
    deleteToken();
		swal("Admin CUCEI-SRG", "Has cerrado sesión correctamente", "info");
		}).catch(function(error) {
		swal("Admin CUCEI-SRG", "Has ocurrido un error al intentar cerrar sesión", "error");
		});
	}
  const deleteToken = function(){
    let correo = localStorage.getItem("email");
    let token = localStorage.getItem("token");
    var datos = {
      "correo" : correo,
      "token" : token
    }
    $.ajax({
    type: 'POST',
    url: 'http://localhost/API-CUCEI-SRG/index.php/personal/deletetoken',
    data: JSON.stringify(datos),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data){
      localStorage.clear();
      window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
    },
    error: function(data) {
      alert('Ha ocurrido un error al intentar registrarse: ');
    }
  });
  }
	window.onload = function(){
		logout();
	}
</script>