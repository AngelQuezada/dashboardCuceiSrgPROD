document.getElementById('btnRegresar').addEventListener('click', function () {
    regresar();
});
let regresar = () => {
  window.history.back();
}
$(document).ajaxStart(function () {
    Pace.restart();
})