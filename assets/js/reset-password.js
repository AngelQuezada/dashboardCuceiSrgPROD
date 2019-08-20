const URL = localStorage.getItem('url');
/*
 * Redirige hacia la pagina index
 */
let regresar = () => {
    window.location.replace(`${URL}/login.php`);
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
    swal("¿Estás Seguro de Restablecer su Contraseña?", {
        icon: 'info',
        title: 'ADMIN CUCEI-SRG',
        closeOnClickOutside: false,
        closeOnEsc: false,
        buttons: {
            cancel: "Cancelar",
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
                    let errorMessage = error.message;
                    if (errorCode == 'auth/user-not-found' && errorMessage == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                        swal("¡Oops!", "La Cuenta No Existe.", "error");
                        return;
                    }
                    if (errorCode == 'auth/network-request-failed' && errorMessage == 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.') {
                        swal("¡Oops!", "Compruebe su Conexión a Internet.", "error");
                        return;
                    }
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
