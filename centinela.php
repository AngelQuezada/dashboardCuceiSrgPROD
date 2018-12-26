<script type="text/javascript">
const centinela = function(){
	let email = localStorage.getItem("email");
	let nombreCompleto = localStorage.getItem("nombreCompleto");
	let token = localStorage.getItem("token");
	console.log(email);
	console.log(nombreCompleto);
	console.log(token);
	if (email === null || nombreCompleto === null || token === null ) {
        window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
        return;
	}
	console.log('estas logeado');
	return;
}
window.onload = function(){
	centinela();
}
</script>
