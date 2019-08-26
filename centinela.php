<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.10.1/firebase-auth.js"></script>
<script type="text/javascript">
/*
 * Variables de configuracion de Firebase
 */
const config3 = {
    apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
    authDomain: "cucei-srg.firebaseapp.com",
    databaseURL: "https://cucei-srg.firebaseio.com",
    projectId: "cucei-srg",
    storageBucket: "cucei-srg.appspot.com",
    messagingSenderId: "56958534713"
};
firebase.initializeApp(config3);
firebase.auth().onAuthStateChanged(function(user) {
	if(user) {
		console.log("Estas logeado");
	}else {
		console.log("No estas logeado");
		if(alert("Ha caducado su sesión."));
		window.location.replace('validator.php');
		return;
	}
});
/*
* Funcion donde se valida si existe el localStorage en el navegador
* Esta cabecera se utiliza en todas las paginas dentro del sistema ADMIN CUCEI-SRG
*/
let centinela = () => {
	let email = localStorage.getItem("email");
	let nombreCompleto = localStorage.getItem("nombreCompleto");
	let token = localStorage.getItem("token");
	let idUsuario = localStorage.getItem("idUsuario");
	let uri = localStorage.getItem("uri");
	let url = localStorage.getItem("url");
	if (email === null || nombreCompleto === null || token === null || uri === null || url === null ) {
		window.location.replace(`${url}/validator.php`);
		return;
	}
	$.ajax({
    type: "GET",
    url: `${uri}/personal/islogged/`+idUsuario+'/'+token+'/'+email,
    dataType: "json",
    success: function(data){
		return;
    },
    error: function(data) {
		if(alert(data.responseJSON.mensaje));
		window.location.replace(`${url}/index.html`);
		return;
    }
  });
	return;
}
/*
* Funcion que se ejecuta al cargar esta pagina
*/
window.onload = function(){
	centinela();
}
</script>
