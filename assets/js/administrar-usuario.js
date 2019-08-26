var URI = localStorage.getItem('uri');
var URI = localStorage.getItem('uri');

let bajaUsuario = () => {
    let correo = document.getElementById('txtCorreoBaja').value;
    let motivo = document.getElementById('txtMotivoBaja').value;
    let token = localStorage.getItem("token");
    let idUsuario = localStorage.getItem("idUsuario");
    if (correo.replace(/\s/g, "") == "") {
        swal("ADMIN CUCEI-SRG", "Escribe un correo electrónico primero.", "info");
        return;
    }
    let datos = {
        "correo": correo,
        "motivo": motivo,
        "token": token,
        "idUsuario": idUsuario
    };
    swal(`¿Está seguro de dar de baja el correo: ${correo}?`, {
        icon: 'info',
        title: 'ADMIN CUCEI-SRG',
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: {
            catch: {
                text: "DAR DE BAJA",
                value: "baja"
            },
            cancelar: true,
        },
    }).then((value) => {
        switch (value) {
            case "baja":
                $.ajax({
                    type: 'POST',
                    url: `${URI}/usuario/banearusuario`,
                    data: JSON.stringify(datos),
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (data) {
                        swal("ADMIN CUCEI-SRG", data.mensaje, "info");
                        $("#txtCorreoBaja").val('');
                        $("#txtMotivoBaja").val('');
                    },
                    error: function (data) {
                        swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
                        $("#txtCorreoBaja").val('');
                        $("#txtMotivoBaja").val('');
                        return;
                    }
                });
                break;
            case "cancelar":
                swal("ADMIN CUCEI-SRG", "No se realizó ninguna acción.", "info");
                break;
        }
    });
}
let habilitarUsuario = () => {
    let correo = document.getElementById('txtCorreoHabilitar').value;
    let token = localStorage.getItem("token");
    let idUsuario = localStorage.getItem("idUsuario");
    if (correo.replace(/\s/g, "") == "") {
        swal("ADMIN CUCEI-SRG", "Escribe un correo electrónico primero.", "info");
        return;
    }
    let datos = {
        "correo": correo,
        "token": token,
        "idUsuario": idUsuario
    }
    swal(`¿Está seguro de habilitar el correo: ${correo}?`, {
        icon: 'info',
        title: 'ADMIN CUCEI-SRG',
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: {
            catch: {
                text: "DAR DE ALTA",
                value: "alta"
            },
            cancelar: true,
        },
    }).then((value) => {
        switch (value) {
            case "alta":
                $.ajax({
                    type: 'POST',
                    url: `${URI}/usuario/habilitarusuario`,
                    data: JSON.stringify(datos),
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    success: function (data) {
                        swal("ADMIN CUCEI-SRG", data.mensaje, "info");
                        $("#txtCorreoHabilitar").val('');
                    },
                    error: function (data) {
                        swal("ADMIN CUCEI-SRG", data.responseJSON.mensaje, "error");
                        $("#txtCorreoHabilitar").val('');
                        return;
                    }
                });
                break;
            case "cancelar":
                swal("ADMIN CUCEI-SRG", "No se realizó ninguna acción.", "info");
                break;
        }
    });
}