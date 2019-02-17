<script type="text/javascript">
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
		window.location.replace(`${URL}/index.php`);
		return;
	}
	return;
}
/*
* Funcion que se ejecuta al cargar esta pagina
*/
window.onload = function(){
	centinela();
}
</script>
