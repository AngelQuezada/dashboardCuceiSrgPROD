const index = function(){
	let email = localStorage.getItem("email");
  if (email === null) {
    window.location.replace("http://localhost/DashboardCuceiSrg/index.php");
    return;
  }
	obtainName(email);
	let d = new Date();
	$('#fechaActual').append('Hoy es: '+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear());
}
const obtainName = function(email){
	$.ajax({
    type: "GET",
    url: 'http://localhost/API-CUCEI-SRG/index.php/personal/empleado/'+email,
    dataType: "json",
    success: function(data){
      	let nombre = data.nombre;
      	let aPaterno = data.a_paterno;
      	let aMaterno = data.a_materno;
      	let nombreCompleto = nombre+' '+aPaterno+' '+aMaterno;
        console.log(nombreCompleto);
    	localStorage.setItem("nombreCompleto", nombreCompleto);
      return;
    },
    error: function(data) {
      return;
    }
  });
}
  window.onload = function(){
    index();
  }