import {baseURL} from './baseURL.js';
var _URL_ = baseURL();
document.getElementById('btnRegresar').addEventListener('click', function () {
    regresar();
});
let regresar = () => {
  window.location.replace(`${_URL_}/index.php`);
}
$(document).ajaxStart(function () {
    Pace.restart();
})