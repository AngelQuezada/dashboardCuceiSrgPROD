<script type="text/javascript">
const centinela = function(){
	let email = localStorage.getItem("email");
	let nombreCompleto = localStorage.getItem("nombreCompleto");
	let token = localStorage.getItem("token");
	let idUsuario = localStorage.getItem("idUsuario");
	console.log(email);
	console.log(nombreCompleto);
	console.log(token);
	console.log(idUsuario);
	if (email === null || nombreCompleto === null || token === null ) {
        //window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
        return;
	}
	return;
}
window.onload = function(){
	centinela();
}
</script>
