import {baseURL} from './baseURL.js';
const URI = baseURL();

let btn = document.getElementById("btnVerPerfil");
btn.onclick = function() {
    miPerfil();
  }

let miPerfil = () =>{
    window.location.replace(`${URI}/mi-perfil.php`); 
}

/*
* Funcion obtener el nombre completo del usuario logeado
* @return promise
*/

let setNameNavBar = () => {
    return new Promise(() => {
      setTimeout(() => {
      $('#correoNavbar').append('<span>'+localStorage.getItem("email")+'</span>');
      $('#nombrePersonal').append('<span>'+localStorage.getItem("nombreCompleto")+'</span>');
    }, 1000);
    });
}

  /*
  * Funcion asincrona llamando a otra funcion
  */
 
  async function inicio(){
    await setNameNavBar();
}
inicio();
