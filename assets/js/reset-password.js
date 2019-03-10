const URL = localStorage.getItem('url');
/*
 * Redirige hacia la pagina index
 */
let regresar = () => {
    window.location.replace(`${URL}/index.php`);
}
/*
 * Variables de configuracion de Firebase
 */
const config = {
    apiKey: "AIzaSyA0DEHXIXxm83tCuyo1ywqWYQxDHC-GAzI",
    authDomain: "cucei-srg.firebaseapp.com",
    databaseURL: "https://cucei-srg.firebaseio.com",
    projectId: "cucei-srg",
    storageBucket: "cucei-srg.appspot.com",
    messagingSenderId: "56958534713"
};
firebase.initializeApp(config);
/*
 * Manda correo electronico para restablecer contraseña a la cuenta actual
 * @return Promise
 */
let resetPassword = () => {
    let auth = firebase.auth();
    let email = document.getElementById("txtCorreoReset").value;
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
        swal("Reporte de Mantenimiento", "Correo electrónico no valido", "error");
        return;
    }
    if (email.replace(/\s/g, "") == "") {
        swal("ADMIN CUCEI-SRG", "Ingrese su Correo Electrónico Primero", "info");
        return;
    }
    swal("¿Estás Seguro de Restablecer su Contraseña?", {
        icon: 'info',
        title: 'ADMIN CUCEI-SRG',
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: {
            catch: {
                text: "Restablecer",
                value: "restablecer",
            }
        },
    }).then((value) => {
        switch (value) {
            case "restablecer":
                auth.sendPasswordResetEmail(email).then(function () {
                    swal("ADMIN CUCEI-SRG", "¡Correo Enviado!, Verifica tu correo electrónico.", "success");
                    $('#txtCorreoReset').val('');
                }).catch(function (error) {
                    let errorCode = error.code;
                    swal("¡Oops!", "Verifica tu correo electrónico e inténtalo nuevamente. error code: " + errorCode, "error");
                });
                break;
        }
    });
}



$(function () {
    $('#txtCorreoReset').keypress(function (e) {
        if (e.which == 13) {
            resetPassword();
        }
    });
});
