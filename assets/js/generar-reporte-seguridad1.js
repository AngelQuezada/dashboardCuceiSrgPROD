$(document).ajaxStart(function () {
    Pace.restart();
})
var URI = localStorage.getItem('uri');
$(document).ready(function () {
    $('.datepicker').datepicker();
});

let nuevoReporteSeg = () => {
 let token = localStorage.getItem("token");
 let idUsuario = localStorage.getItem("idUsuario");
 let correo = document.getElementById('txtCorreo').value;
 let tipoServicio = document.getElementById('txtTipoServicio').value;
 let edad = document.getElementById('txtEdad').value;
 let carrera = document.getElementById('txtCarrera').value;
 let codigo = document.getElementById('txtCodigo').value;
 let telefono = document.getElementById('txtTelefono').value;
 let fecha = document.getElementById('txtFecha').value;
 let hora = document.getElementById('txtHora').value;
 let lugar = document.getElementById('txtLugar').value;
 let hechos = $("textarea#txtHechos").val();
 let modelo = document.getElementById('txtModelo').value;
 let marca = document.getElementById('txtMarca').value;
 let tipo = document.getElementById('txtTipo').value;
 let año = document.getElementById('dtAño').value;
 let color = document.getElementById('txtColor').value;
 let rodado = document.getElementById('txtRodado').value;

 let datos = {
     "token" : token,
     "idUsuario" : idUsuario,
     "correo" : correo,
     "tipoServicio" : tipoServicio,
     "edad" : edad,
     "carrera" : carrera,
     "codigo" : codigo,
     "telefono" : telefono,
     "fecha" : fecha,
     "hora" : hora,
     "lugar" : lugar,
     "hechos": hechos,
     "modelo" : modelo,
     "marca" : marca,
     "tipo" : tipo,
     "año" : año,
     "color" : color,
     "rodado" : rodado
 }
 console.log(JSON.stringify(datos));
 $.ajax({
     type: 'POST',
     url: `${URI}/sreporte/nuevors1`,
     data: JSON.stringify(datos),
     contentType: 'application/json; charset=utf-8',
     dataType: 'json',
     success: function (data) {
         swal("Reporte de Seguridad", "Se ha registrado correctamente con el folio: " + data.folio, "success");
         cleanReport();
     },
     error: function (data) {
         swal("Reporte de Seguridad", "Ha ocurrido un error al hacer el registro: " + data.responseJSON.mensaje, "error");
     }
 });
}
let cleanReport = () => {
    $("#txtTipoServicio").val('');
    $("#txtCorreo").val('');
    $("#txtEdad").val('');
    $("#txtCarrera").val('');
    $("#txtCodigo").val('');
    $("#txtTelefono").val('');
    document.getElementById("txtFecha").valueAsDate = null;
    $("#txtHora").val('');
    $("#txtLugar").val('');
    $('textarea#txtHechos').val('');
    $("#txtModelo").val('');
    $("#txtMarca").val('');
    $("#txtTipo").val('');
    document.getElementById("dtAño").valueAsDate = null;
    $("#txtColor").val('');
    $("#txtRodado").val('');
}