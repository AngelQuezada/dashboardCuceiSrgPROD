const index = function(){
	let correo = localStorage.getItem("email");
	if (correo == null) {
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
	}
	console.log(correo);
}
window.onload = function(){
	index();
}